// Vérifications bloquantes de ux-06 : copie conforme de l'asset du skill. Lancer : bun test
import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { idsEcrans, type EcranId } from '../src/projet/ecrans';
import { BaseEcrans } from '../src/projet/navigation';
import { decomposer, parcours } from '../src/projet/parcours';
import { wireframes } from '../src/wireframes/registre';

function rendu(id: EcranId, etat = 'nominal') {
  const Composant = wireframes[id]!.composant;
  return renderToStaticMarkup(
    <MemoryRouter>
      <BaseEcrans.Provider value="/wireframes">
        <Composant etat={etat} />
      </BaseEcrans.Provider>
    </MemoryRouter>,
  );
}

describe('inventaire', () => {
  for (const id of idsEcrans) {
    test(`${id} a un wireframe`, () => {
      expect(wireframes[id]).toBeDefined();
    });
  }
});

describe('états', () => {
  for (const id of idsEcrans) {
    for (const etat of wireframes[id]?.etats ?? []) {
      test(`${id} ${etat} : un seul h1`, () => {
        expect(rendu(id, etat).match(/<h1[\s>]/g)?.length ?? 0).toBe(1);
      });
    }
  }
});

describe('parcours cliquables', () => {
  for (const p of parcours) {
    test(`${p.flow} depuis « ${p.entree} »`, () => {
      for (let i = 0; i < p.happyPath.length; i++) {
        const { ecran, etat } = decomposer(p.happyPath[i]);
        expect(wireframes[ecran], `${ecran} non maquetté`).toBeDefined();
        if (i === p.happyPath.length - 1) continue;
        const suivant = decomposer(p.happyPath[i + 1]);
        const cible = `href="/wireframes/${suivant.ecran}${suivant.etat ? `?etat=${encodeURIComponent(suivant.etat)}` : ''}"`;
        expect(rendu(ecran, etat), `aucun lien de ${p.happyPath[i]} vers ${p.happyPath[i + 1]}`).toContain(cible);
      }
    });
  }
});
