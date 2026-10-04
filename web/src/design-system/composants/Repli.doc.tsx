import type { DocComposant } from '../doc';
import { Repli } from './Repli';

export const doc: DocComposant = {
  numero: '09',
  nom: 'Repli',
  role: "Garder à portée un détail utile mais secondaire (calcul d'un montant, consignes) sans l'imposer à la première lecture.",
  fiche: 'docs/08-design-system/composants/09-repli.component.md',
  exemples: [
    {
      titre: 'Fermé (ouvrir : cliquer, ou Tab puis Entrée)',
      rendu: (
        <Repli titre="Comment ce montant est calculé">
          <p>Votre revenu garanti (36 000 € par an), moins ce que verse le régime obligatoire, à partir du 31e jour d'arrêt.</p>
        </Repli>
      ),
      code: '<Repli titre="Comment ce montant est calculé">\n  <p>Votre revenu garanti (36 000 € par an), moins ce que verse le régime obligatoire, à partir du 31e jour d\'arrêt.</p>\n</Repli>',
    },
    {
      titre: 'Ouvert',
      rendu: (
        <Repli titre="Conseils pour une photo lisible" ouvert>
          <p>Posez le document à plat, en pleine lumière, et cadrez toute la page.</p>
        </Repli>
      ),
      code: '<Repli titre="Conseils pour une photo lisible" ouvert>\n  <p>Posez le document à plat, en pleine lumière, et cadrez toute la page.</p>\n</Repli>',
    },
  ],
};
