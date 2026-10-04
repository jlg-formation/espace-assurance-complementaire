import type { DocComposant } from '../doc';
import { LigneValeur } from './LigneValeur';
import { Liste } from './Liste';

export const doc: DocComposant = {
  numero: '15',
  nom: 'LigneValeur',
  role: "Lire une valeur à côté de son libellé : montant, date, durée, taux. La variante total met en avant le chiffre qui répond à la question de l'écran.",
  fiche: 'docs/08-design-system/composants/15-ligne-valeur.component.md',
  exemples: [
    {
      titre: 'Répartition avec total',
      rendu: (
        <Liste>
          <LigneValeur libelle="Assurance Maladie">75,25 €</LigneValeur>
          <LigneValeur libelle="Votre mutuelle (Confort)">193,50 €</LigneValeur>
          <LigneValeur libelle="Reste à votre charge" total>381,25 €</LigneValeur>
        </Liste>
      ),
      code: '<Liste>\n  <LigneValeur libelle="Assurance Maladie">75,25 €</LigneValeur>\n  <LigneValeur libelle="Votre mutuelle (Confort)">193,50 €</LigneValeur>\n  <LigneValeur libelle="Reste à votre charge" total>381,25 €</LigneValeur>\n</Liste>',
    },
    {
      titre: 'Valeurs non monétaires',
      rendu: (
        <Liste>
          <LigneValeur libelle="Franchise">30 jours (du 12 mai au 10 juin)</LigneValeur>
          <LigneValeur libelle="Début de l'indemnisation">11 juin 2026</LigneValeur>
          <LigneValeur libelle="Taux d'invalidité (barème professionnel)">40 %</LigneValeur>
        </Liste>
      ),
      code: '<Liste>\n  <LigneValeur libelle="Franchise">30 jours (du 12 mai au 10 juin)</LigneValeur>\n  <LigneValeur libelle="Début de l\'indemnisation">11 juin 2026</LigneValeur>\n  <LigneValeur libelle="Taux d\'invalidité (barème professionnel)">40 %</LigneValeur>\n</Liste>',
    },
  ],
};
