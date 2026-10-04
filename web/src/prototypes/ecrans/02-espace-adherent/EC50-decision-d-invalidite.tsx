// EC50 Décision d'invalidité — prototype (V2).
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, LigneValeur, Liste, Pile, RecoursHumain } from '../../../design-system/composants';
import { invalidite } from '../../donnees/donnees';
import { date, euros, pourcentage } from '../../donnees/formats';

export default function EC50(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: "Décision d'invalidité" }]}>
      <h1>Décision : invalidité à {pourcentage(invalidite.taux)}, rente de {euros(invalidite.rente)} par mois</h1>
      <Pile>
        <Liste>
          <LigneValeur libelle="Taux d'invalidité (barème professionnel)">{pourcentage(invalidite.taux)}</LigneValeur>
          <LigneValeur libelle="Rente mensuelle" total>{euros(invalidite.rente)}</LigneValeur>
          <LigneValeur libelle="Premier versement">{date(invalidite.premierVersement)}, pour {invalidite.periodePremierVersement}</LigneValeur>
        </Liste>
        <Bloc titre="Vous n'êtes pas d'accord ?">
          <p>Vous pouvez contester dans les 2 mois, jusqu'au {date(invalidite.contestationJusquAu)}, en demandant une contre-expertise.</p>
        </Bloc>
        <RecoursHumain question="Besoin d'en parler ?" />
      </Pile>
    </Gabarit>
  );
}
