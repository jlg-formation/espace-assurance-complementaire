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
      rendu: <Bouton variante="principal">Ajouter une pièce</Bouton>,
      code: '<Bouton variante="principal" vers="EC33" etat="piece">Ajouter une pièce</Bouton>',
    },
    {
      titre: 'Secondaire',
      rendu: <Bouton>Déclarer un changement</Bouton>,
      code: '<Bouton vers="EC47">Déclarer un changement</Bouton>',
    },
    {
      titre: 'Désactivé',
      rendu: <Bouton variante="principal" desactive>Envoyer</Bouton>,
      code: '<Bouton variante="principal" desactive>Envoyer</Bouton>',
    },
    {
      titre: 'Survol, focus, actif : survoler, tabuler, cliquer',
      rendu: <><Bouton variante="principal">Continuer</Bouton> <Bouton>Annuler</Bouton></>,
      code: '<Bouton variante="principal">Continuer</Bouton> <Bouton>Annuler</Bouton>',
    },
  ],
};
