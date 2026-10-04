// Calcule les contrastes WCAG des paires de contrastes.json. Copie conforme de l'asset du skill ux-07.
// bun run contrastes : affiche le tableau à reporter dans docs/08-design-system/02-identite.md, échoue si une paire est sous son seuil.
import { readFileSync } from 'node:fs';
import { resoudre } from '../src/design-system/tokens/dtcg';
import { lireTokens } from './tokens';

interface Paire {
  premierPlan: string;
  arrierePlan: string;
  usage: string;
  seuil: number;
}

export interface Resultat extends Paire {
  couleurs: [string, string];
  rapport: number;
  conforme: boolean;
}

const PAIRES = new URL('../src/design-system/tokens/contrastes.json', import.meta.url);

function canaux(hex: string): number[] {
  const h = hex.replace('#', '');
  const plein = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  if (!/^[0-9a-f]{6}$/i.test(plein)) throw new Error(`Couleur non prise en charge (hexadécimal opaque attendu) : ${hex}`);
  return [0, 2, 4].map((i) => parseInt(plein.slice(i, i + 2), 16) / 255);
}

function luminance(hex: string): number {
  const [r, g, b] = canaux(hex).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function rapportContraste(a: string, b: string): number {
  const [clair, fonce] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (clair + 0.05) / (fonce + 0.05);
}

export function evaluerContrastes(): Resultat[] {
  const tokens = lireTokens();
  const paires: Paire[] = JSON.parse(readFileSync(PAIRES, 'utf8'));
  return paires.map((p) => {
    const couleurs: [string, string] = [String(resoudre(tokens, p.premierPlan)), String(resoudre(tokens, p.arrierePlan))];
    const rapport = Math.round(rapportContraste(...couleurs) * 100) / 100;
    return { ...p, couleurs, rapport, conforme: rapport >= p.seuil };
  });
}

if (import.meta.main) {
  const resultats = evaluerContrastes();
  const virgule = (n: number) => n.toFixed(2).replace('.', ',');
  console.log('| Premier plan | Arrière-plan | Usage | Rapport | Seuil | Verdict |');
  console.log('|---|---|---|---|---|---|');
  for (const r of resultats) {
    console.log(
      `| \`${r.premierPlan}\` ${r.couleurs[0]} | \`${r.arrierePlan}\` ${r.couleurs[1]} | ${r.usage} | ${virgule(r.rapport)}:1 | ${String(r.seuil).replace('.', ',')}:1 | ${r.conforme ? '✅' : '❌'} |`,
    );
  }
  if (resultats.some((r) => !r.conforme)) process.exit(1);
}
