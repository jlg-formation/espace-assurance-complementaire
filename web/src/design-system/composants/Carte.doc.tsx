import type { DocComposant } from '../doc';
import { Carte } from './Carte';

export const doc: DocComposant = {
  numero: '07',
  nom: 'Carte',
  role: "Proposer un raccourci vers une démarche fréquente, avec une phrase qui dit ce qu'on y trouve. Toute la carte est cliquable.",
  fiche: 'docs/08-design-system/composants/07-carte.component.md',
  exemples: [
    {
      titre: 'Cliquable (survol, focus, actif : survoler, tabuler, cliquer)',
      rendu: <Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>,
      code: '<Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>',
    },
    {
      titre: 'Statique',
      rendu: <Carte titre="Par téléphone"><span>09 70 00 00 00, du lundi au vendredi de 9 h à 18 h</span></Carte>,
      code: '<Carte titre="Par téléphone"><span>09 70 00 00 00, du lundi au vendredi de 9 h à 18 h</span></Carte>',
    },
  ],
};
