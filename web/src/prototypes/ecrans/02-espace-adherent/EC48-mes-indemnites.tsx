// EC48 Mes indemnités — prototype (états retard, franchise en cours, versement effectué, reprise).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Gabarit, Lien, LigneValeur, Liste, Pile, Repli } from '../../../design-system/composants';
import { arret, contrats } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const sansAnnee = (iso: string) => date(iso).replace(/ \d{4}$/, '');
const { prevoyance } = contrats;
const dernier = arret.versements[arret.versements.length - 1];
const premier = arret.versements[0];
const prochain = arret.prochainVersement;

export default function EC48({ etat }: PropsEcran) {
  const franchise = etat === 'franchise';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Mes indemnités' }]}>
      <h1>Mes indemnités</h1>
      <p><Lien vers="EC43">Déclarer un arrêt</Lien> · <Lien vers="EC46">Mon dossier d'arrêt</Lien></p>
      <Pile>
        {etat === 'reprise' && (
          <Alerte type="succes" titre={`Reprise à mi-temps thérapeutique prise en compte au ${sansAnnee(arret.reprise.le)}.`}>
            <p>Vos versements continuent : environ {euros(arret.montantMensuel / 2)} par mois à partir du {sansAnnee(arret.reprise.le)}, premier versement réduit le {date(arret.reprise.versementSuivant)}.</p>
          </Alerte>
        )}
        {etat === 'verse' && (
          <Alerte type="succes" titre={`Versement de ${euros(arret.montantMensuel)} effectué le ${sansAnnee(dernier.le)}, pour la période du ${sansAnnee(dernier.du)} au ${sansAnnee(dernier.au)}.`} />
        )}
        {etat === 'retard' && (
          <Alerte type="avertissement" titre={`Le versement prévu le ${sansAnnee(prochain.le)} est retardé : le relevé du régime obligatoire manque.`}>
            <p>Nouvelle date dès réception de la pièce. <Lien vers="EC46">Voir ce qui manque au dossier</Lien></p>
          </Alerte>
        )}
        <Bloc titre="Prochain versement">
          {franchise ? (
            <p>
              Aucun versement avant la fin de votre franchise le {sansAnnee(arret.finFranchise)}.{' '}
              <strong>Premier versement prévu le {date(premier.le)}</strong>, pour la période du {sansAnnee(premier.du)} au {sansAnnee(premier.au)}.
            </p>
          ) : (
            <p><strong>{date(prochain.le)} — {euros(arret.montantMensuel)}</strong>, pour la période du {sansAnnee(prochain.du)} au {sansAnnee(prochain.au)}.</p>
          )}
          <p>Date de traitement réelle : si elle change, vous êtes prévenue.</p>
        </Bloc>
        {!franchise && (
          <Bloc titre="Versements passés">
            <Liste>
              {[...arret.versements].reverse().map((v) => (
                <LigneValeur key={v.le} libelle={`${date(v.le)} — du ${sansAnnee(v.du)} au ${sansAnnee(v.au)}`}>{euros(arret.montantMensuel)}</LigneValeur>
              ))}
            </Liste>
          </Bloc>
        )}
        <Repli titre="Comment ce montant est calculé">
          <p>
            Revenu garanti de {euros(prevoyance.revenuGaranti)} par an, moins les indemnités du régime obligatoire : {euros(prevoyance.indemniteJour)} par jour,
            soit {euros(arret.montantMensuel)} pour 30 jours, après {prevoyance.franchiseJours} jours de franchise.
          </p>
        </Repli>
      </Pile>
    </Gabarit>
  );
}
