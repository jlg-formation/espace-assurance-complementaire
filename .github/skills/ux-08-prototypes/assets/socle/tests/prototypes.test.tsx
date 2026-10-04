// Vérifications bloquantes de ux-08 : copie conforme de l'asset du skill. Lancer : bun test
import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { idsEcrans, type EcranId } from '../src/projet/ecrans';
import { BaseEcrans } from '../src/projet/navigation';
import { decomposer, parcours } from '../src/projet/parcours';
import { prototypes } from '../src/prototypes/registre';
import { wireframes } from '../src/wireframes/registre';

const racine = new URL('../', import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, '$1');
const sources = [...new Bun.Glob('src/prototypes/ecrans/**/*.tsx').scanSync({ cwd: racine })];

function rendu(id: EcranId, etat = 'nominal') {
  const Composant = prototypes[id]!.composant;
  return renderToStaticMarkup(
    <MemoryRouter>
      <BaseEcrans.Provider value="/prototypes">
        <Composant etat={etat} />
      </BaseEcrans.Provider>
    </MemoryRouter>,
  );
}

describe('inventaire', () => {
  for (const id of idsEcrans.filter((i) => wireframes[i])) {
    test(`${id} a un prototype couvrant les états de son wireframe`, () => {
      expect(prototypes[id], `${id} non prototypé`).toBeDefined();
      const manquants = wireframes[id]!.etats.filter((e) => !prototypes[id]!.etats.includes(e));
      expect(manquants, `états du wireframe absents`).toEqual([]);
    });
  }
});

describe('contenus', () => {
  for (const id of idsEcrans.filter((i) => prototypes[i])) {
    for (const etat of prototypes[id]!.etats) {
      test(`${id} ${etat}`, () => {
        const html = rendu(id, etat);
        expect(html.match(/<h1[\s>]/g)?.length ?? 0, 'un seul h1').toBe(1);
        expect(html, 'classe du kit de wireframes').not.toMatch(/class="[^"]*\bwf-/);
        expect(html, 'faux texte').not.toMatch(/lorem|ipsum/i);
        expect(html, 'champ de modèle non rempli').not.toMatch(/\{[^}<>]{1,40}\}/);
      });
    }
  }
});

describe('sources', () => {
  for (const f of sources) {
    test(f, () => {
      const code = readFileSync(`${racine}/${f}`, 'utf8');
      expect(code, 'import du kit de wireframes').not.toMatch(/wireframes\/kit/);
      expect(code, 'Texte ou Note : outils de wireframe').not.toMatch(/import\s*\{[^}]*\b(?:Texte|Note)\b[^}]*\}\s*from/);
      expect(code, 'className ou style dans un écran').not.toMatch(/\b(?:className|style)=/);
    });
  }
});

describe('parcours cliquables', () => {
  for (const p of parcours) {
    test(`${p.flow} depuis « ${p.entree} »`, () => {
      for (let i = 0; i < p.happyPath.length; i++) {
        const { ecran, etat } = decomposer(p.happyPath[i]);
        expect(prototypes[ecran], `${ecran} non prototypé`).toBeDefined();
        if (i === p.happyPath.length - 1) continue;
        const suivant = decomposer(p.happyPath[i + 1]);
        const cible = `href="/prototypes/${suivant.ecran}${suivant.etat ? `?etat=${encodeURIComponent(suivant.etat)}` : ''}"`;
        expect(rendu(ecran, etat), `aucun lien de ${p.happyPath[i]} vers ${p.happyPath[i + 1]}`).toContain(cible);
      }
    });
  }
});
