// EC16 Tarif mis à jour — prototype (V2).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { prospect, souscriptionPrevoyance } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

export default function EC16(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Tarif mis à jour' }]}>
      <h1>Votre tarif a changé</h1>
      <Pile>
        <p>Votre devis du {date(prospect.devisLe)} n'est plus valable : les tarifs ont été mis à jour le {date(souscriptionPrevoyance.tarifsMisAJourLe)}.</p>
        <Liste>
          <LigneValeur libelle="Prévoyance Confort, tarif du devis">{euros(souscriptionPrevoyance.tarifDevis)} par mois</LigneValeur>
          <LigneValeur libelle="Prévoyance Confort, nouveau tarif" total>{euros(souscriptionPrevoyance.tarifMisAJour)} par mois</LigneValeur>
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC14" etat="reprise">Continuer le questionnaire</Bouton>
          <Bouton vers="EC03">Comparer à nouveau</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
