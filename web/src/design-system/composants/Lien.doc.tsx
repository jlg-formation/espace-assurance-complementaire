import type { DocComposant } from '../doc';
import { Lien } from './Lien';

export const doc: DocComposant = {
  numero: '02',
  nom: 'Lien',
  role: "Mener à un autre écran depuis un texte. Pour l'action principale d'un écran, utiliser Bouton.",
  fiche: 'docs/08-design-system/composants/02-lien.component.md',
  exemples: [
    {
      titre: 'Dans un texte (survol, focus, actif : survoler, tabuler, cliquer)',
      rendu: <p>Le détail du calcul est dans <Lien vers="EC48">Mes indemnités</Lien>.</p>,
      code: '<p>Le détail du calcul est dans <Lien vers="EC48">Mes indemnités</Lien>.</p>',
    },
    {
      titre: 'Vers un état précis',
      rendu: <Lien vers="EC25" etat="renvoye">Je n'ai pas reçu le code</Lien>,
      code: '<Lien vers="EC25" etat="renvoye">Je n\'ai pas reçu le code</Lien>',
    },
  ],
};
