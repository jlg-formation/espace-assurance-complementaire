import type { DocComposant } from '../doc';
import { RecoursHumain } from './RecoursHumain';

export const doc: DocComposant = {
  numero: '17',
  nom: 'RecoursHumain',
  role: "Laisser une issue humaine sur chaque écran de blocage ou de décision difficile. Le lien dit toujours « Être rappelé » ; seule la question s'adapte à l'écran.",
  fiche: 'docs/08-design-system/composants/17-recours-humain.component.md',
  exemples: [
    { titre: 'Question par défaut', rendu: <RecoursHumain />, code: '<RecoursHumain />' },
    {
      titre: "Question propre à l'écran",
      rendu: <RecoursHumain question="Vous n'y arrivez pas ?" />,
      code: '<RecoursHumain question="Vous n\'y arrivez pas ?" />',
    },
  ],
};
