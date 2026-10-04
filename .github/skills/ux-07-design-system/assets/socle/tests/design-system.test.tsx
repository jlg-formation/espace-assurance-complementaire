// Vérifications bloquantes de ux-07 : copie conforme de l'asset du skill. Lancer : bun test
import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { evaluerContrastes } from '../scripts/contrastes';
import { CIBLE, lireTokens } from '../scripts/tokens';
import { ds } from '../src/design-system/composants';
import type { DocComposant } from '../src/design-system/doc';
import { genererCss, verifierAlias } from '../src/design-system/tokens/dtcg';
import { kit } from '../src/wireframes/kit/kit';

const racine = new URL('../', import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, '$1');
const fichiersDoc = [...new Bun.Glob('src/design-system/composants/*.doc.tsx').scanSync({ cwd: racine })];
const docs: DocComposant[] = await Promise.all(
  fichiersDoc.map(async (f) => (await import(`${racine}/${f}`)).doc as DocComposant),
);
const feuilles = [
  'src/design-system/base.css',
  ...new Bun.Glob('src/design-system/composants/*.css').scanSync({ cwd: racine }),
];

describe('tokens', () => {
  test('alias résolus', () => {
    expect(verifierAlias(lireTokens())).toEqual([]);
  });
  test('tokens.css généré depuis tokens.json', () => {
    expect(readFileSync(CIBLE, 'utf8')).toBe(genererCss(lireTokens()));
  });
  test('contrastes WCAG AA', () => {
    const echecs = evaluerContrastes().filter((r) => !r.conforme);
    expect(echecs.map((r) => `${r.usage} : ${r.rapport}:1 < ${r.seuil}:1`)).toEqual([]);
  });
});

describe('aucune valeur en dur', () => {
  // Autorisés : 0, 1px, 2px (filets), %, vh, fr, et les valeurs des requêtes média.
  const interdit = /#[0-9a-f]{3,8}\b|rgba?\(|hsla?\(|\d(?:rem|em)\b|\b(?:[3-9]|\d{2,})px\b/i;
  for (const f of feuilles) {
    test(f, () => {
      const lignes = readFileSync(`${racine}/${f}`, 'utf8').split('\n');
      const fautives = lignes.filter((l) => !l.includes('@media') && !l.trim().startsWith('/*') && interdit.test(l));
      expect(fautives).toEqual([]);
    });
  }
});

describe('correspondance avec le kit de wireframes', () => {
  for (const nom of Object.keys(kit) as (keyof typeof kit)[]) {
    test(nom, () => {
      expect(ds[nom], `${nom} manque dans le design system`).toBeDefined();
    });
  }
});

describe('documentation', () => {
  for (const d of docs) {
    for (const e of d.exemples) {
      test(`${d.numero} ${d.nom} — ${e.titre}`, () => {
        expect(renderToStaticMarkup(<MemoryRouter>{e.rendu}</MemoryRouter>).length).toBeGreaterThan(0);
      });
    }
  }
});
