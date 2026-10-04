import type { DocComposant } from '../doc';
import { Bloc } from './Bloc';

export const doc: DocComposant = {
  numero: '08',
  nom: 'Bloc',
  role: "Regrouper sous un titre les contenus d'un même sujet. Le titre devient le nom de la région pour les lecteurs d'écran.",
  fiche: 'docs/08-design-system/composants/08-bloc.component.md',
  exemples: [
    {
      titre: 'Titre de niveau 2',
      rendu: <Bloc titre="Prochain versement"><p><strong>10 juillet 2026 — 1 840 €</strong></p></Bloc>,
      code: '<Bloc titre="Prochain versement"><p><strong>10 juillet 2026 — 1 840 €</strong></p></Bloc>',
    },
    {
      titre: 'Titre de niveau 3',
      rendu: <Bloc titre="Pour une photo lisible" niveau={3}><p>Posez le devis à plat, en pleine lumière.</p></Bloc>,
      code: '<Bloc titre="Pour une photo lisible" niveau={3}><p>Posez le devis à plat, en pleine lumière.</p></Bloc>',
    },
    {
      titre: 'Sans titre',
      rendu: <Bloc><p>Aucun arrêt de travail en cours.</p></Bloc>,
      code: '<Bloc><p>Aucun arrêt de travail en cours.</p></Bloc>',
    },
  ],
};
