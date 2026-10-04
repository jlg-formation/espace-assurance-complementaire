import type { DocComposant } from '../doc';
import { Image, Texte } from './Remplacement';

export const doc: DocComposant = {
  numero: '12',
  nom: 'Image et Texte',
  role: "Réserver la place d'une image ou d'un texte encore inconnus. Rendu de remplacement : à remplacer par de vrais contenus dans les prototypes.",
  fiche: 'docs/08-design-system/composants/12-image-et-texte.component.md',
  exemples: [
    {
      titre: 'Image (décrite)',
      rendu: <Image alt="Carte de mutuelle 2026 de Sylvie, avec le code à scanner" />,
      code: '<Image alt="Carte de mutuelle 2026 de Sylvie, avec le code à scanner" />',
    },
    {
      titre: 'Texte de 3 lignes',
      rendu: <Texte lignes={3} />,
      code: '<Texte lignes={3} />',
    },
  ],
};
