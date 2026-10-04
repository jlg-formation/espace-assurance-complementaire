import type { DocComposant } from '../doc';
import { Bouton } from './Bouton';

export const doc: DocComposant = {
  numero: '01',
  nom: 'Bouton',
  role: "Déclencher une action ou passer à l'étape suivante. Un seul bouton principal par écran.",
  fiche: 'docs/08-design-system/composants/01-bouton.component.md',
  exemples: [
    {
      titre: 'Principal',
      rendu: <Bouton variante="principal">Envoyer une facture</Bouton>,
      code: '<Bouton variante="principal" vers="EC05">Envoyer une facture</Bouton>',
    },
    {
      titre: 'Secondaire',
      rendu: <Bouton>Voir mes garanties</Bouton>,
      code: '<Bouton vers="EC12">Voir mes garanties</Bouton>',
    },
    {
      titre: 'Désactivé',
      rendu: <Bouton variante="principal" desactive>Envoyer</Bouton>,
      code: '<Bouton variante="principal" desactive>Envoyer</Bouton>',
    },
  ],
};
