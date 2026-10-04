// Génère tokens.css depuis tokens.json. Copie conforme de l'asset du skill ux-07.
// bun run tokens            écrit tokens.css
// bun run tokens --verifier échoue si tokens.css n'est pas à jour
import { readFileSync, writeFileSync } from 'node:fs';
import { aplatir, genererCss, verifierAlias, type Token } from '../src/design-system/tokens/dtcg';

export const SOURCE = new URL('../src/design-system/tokens/tokens.json', import.meta.url);
export const CIBLE = new URL('../src/design-system/tokens/tokens.css', import.meta.url);

export function lireTokens(): Token[] {
  return aplatir(JSON.parse(readFileSync(SOURCE, 'utf8')));
}

if (import.meta.main) {
  const tokens = lireTokens();
  const erreurs = verifierAlias(tokens);
  if (erreurs.length > 0) {
    console.error(`Alias introuvables :\n${erreurs.join('\n')}`);
    process.exit(1);
  }
  const css = genererCss(tokens);
  if (process.argv.includes('--verifier')) {
    if (readFileSync(CIBLE, 'utf8') !== css) {
      console.error('tokens.css n\'est pas à jour : lancer `bun run tokens`.');
      process.exit(1);
    }
    console.log(`tokens.css à jour (${tokens.length} tokens).`);
  } else {
    writeFileSync(CIBLE, css);
    console.log(`${tokens.length} tokens écrits dans tokens.css.`);
  }
}
