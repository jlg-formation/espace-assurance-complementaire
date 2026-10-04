import type { DocComposant } from '../doc';
import { Lien } from './Lien';
import { Ligne, Liste } from './Liste';

export const doc: DocComposant = {
  numero: '06',
  nom: 'Liste et Ligne',
  role: "Énumérer des éléments de même nature. Pour un libellé et sa valeur, utiliser LigneValeur ; pour une démarche et son statut, LigneSuivi.",
  fiche: 'docs/08-design-system/composants/06-liste-et-ligne.component.md',
  exemples: [
    {
      titre: 'Ligne simple',
      rendu: (
        <Liste>
          <Ligne>Implants dentaires</Ligne>
          <Ligne>Chirurgie réfractive des yeux (laser)</Ligne>
        </Liste>
      ),
      code: '<Liste>\n  <Ligne>Implants dentaires</Ligne>\n  <Ligne>Chirurgie réfractive des yeux (laser)</Ligne>\n</Liste>',
    },
    {
      titre: 'Ligne à deux parties',
      rendu: (
        <Liste>
          <Ligne><span>Relevé des indemnités du régime obligatoire</span><span>à demander à votre caisse : 2 à 3 semaines</span></Ligne>
          <Ligne><Lien vers="EC41">Mes attestations</Lien><span>cotisations, droits</span></Ligne>
        </Liste>
      ),
      code: '<Liste>\n  <Ligne><span>Relevé des indemnités du régime obligatoire</span><span>à demander à votre caisse : 2 à 3 semaines</span></Ligne>\n  <Ligne><Lien vers="EC41">Mes attestations</Lien><span>cotisations, droits</span></Ligne>\n</Liste>',
    },
  ],
};
