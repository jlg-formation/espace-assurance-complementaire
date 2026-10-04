import type { DocComposant } from '../doc';
import { Note } from './Note';

export const doc: DocComposant = {
  numero: '13',
  nom: 'Note',
  role: "Annotation de wireframe, décrite dans la fiche de l'écran. Ne rend rien : un écran passé au design system garde ses Note sans effet visible.",
  fiche: 'docs/08-design-system/composants/13-note.component.md',
  exemples: [
    {
      titre: 'Aucun rendu',
      rendu: <p>Montant indicatif. <Note n={1} />(la note ne s'affiche pas)</p>,
      code: '<p>Montant indicatif. <Note n={1} /></p>',
    },
  ],
};
