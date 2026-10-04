// EC45 Confirmation de déclaration — prototype (états arrêt court, revenus inconnus).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { arret, contrats } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const sansAnnee = (iso: string) => date(iso).replace(/ \d{4}$/, '');
const franchise = contrats.prevoyance.franchiseJours;

export default function EC45({ etat }: PropsEcran) {
  const court = etat === 'court';
  const sansRevenus = etat === 'sans-revenus';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Déclarer un arrêt', vers: 'EC43' }, { libelle: 'Arrêt déclaré' }]}>
      <h1>{court ? 'Arrêt déclaré : pas d\'indemnité pour cet arrêt' : `Arrêt déclaré : indemnisation à partir du ${date(arret.debutIndemnisation)}`}</h1>
      <Pile>
        {court ? (
          <Alerte type="information" titre={`Votre arrêt de ${arret.arretCourtJours} jours est plus court que votre franchise de ${franchise} jours.`}>
            <p>Clarea ne versera rien pour cet arrêt. Il reste enregistré : en cas de rechute, il sera pris en compte.</p>
          </Alerte>
        ) : (
          <Bloc titre="Ce que vous toucherez">
            <Liste>
              <LigneValeur libelle="Franchise">{franchise} jours (du {sansAnnee(arret.debut)} au {sansAnnee(arret.finFranchise)})</LigneValeur>
              <LigneValeur libelle="Début de l'indemnisation">{date(arret.debutIndemnisation)}</LigneValeur>
              <LigneValeur libelle="Montant estimé" total>
                {sansRevenus ? 'calculé dès réception de la déclaration de revenus 2025' : `environ ${euros(arret.montantMensuel)} par mois`}
              </LigneValeur>
            </Liste>
            <p>Montant indicatif tant que le dossier n'est pas complet : il est recalculé dès réception des pièces.</p>
          </Bloc>
        )}
        <Alerte type="avertissement" titre="1 pièce encore attendue : relevé des indemnités du régime obligatoire." />
        <Actions><Bouton variante="principal" vers="EC46">Voir mon dossier d'arrêt</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
