// EC46 Dossier d'arrêt — prototype (états pièce refusée, expertise, vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Colonnes, Gabarit, Lien, LigneSuivi, Liste, Pile, RecoursHumain } from '../../../design-system/composants';
import { arret, pieceRefusee, pieces } from '../../donnees/donnees';
import { date, dateCourte, euros } from '../../donnees/formats';

const sansAnnee = (iso: string) => dateCourte(iso).replace(/ \d{4}$/, '');
const parUrgence = [...pieces].sort((a, b) => Number(b.statut === 'À fournir') - Number(a.statut === 'À fournir'));

export default function EC46({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Mon espace', vers: 'EC27' as const }, { libelle: 'Mon arrêt de travail', vers: 'EC46' as const }, { libelle: "Mon dossier d'arrêt" }];
  const sousNav = <p><Lien vers="EC43">Déclarer un arrêt</Lien> · <Lien vers="EC48">Mes indemnités</Lien></p>;
  if (etat === 'vide') {
    return (
      <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={ariane}>
        <h1>Mon dossier d'arrêt</h1>
        {sousNav}
        <p>Aucun arrêt de travail en cours.</p>
        <Actions><Bouton variante="principal" vers="EC43">Déclarer un arrêt</Bouton></Actions>
      </Gabarit>
    );
  }
  const refusee = etat === 'refusee';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={ariane}>
      <h1>Arrêt de {arret.personne} depuis le {date(arret.debut)}</h1>
      {sousNav}
      <Colonnes>
        <Pile>
          {refusee ? (
            <Alerte type="erreur" titre={`Relevé du régime obligatoire refusé : ${pieceRefusee.motif}.`}>
              <p>Envoyez un relevé couvrant la période {pieceRefusee.periodeAttendue}.</p>
            </Alerte>
          ) : (
            <Alerte type="avertissement" titre="1 pièce attendue : relevé des indemnités du régime obligatoire." />
          )}
          <Actions><Bouton variante="principal" vers="EC33" etat="piece">Ajouter une pièce</Bouton></Actions>
          <Bloc titre="Pièces du dossier">
            <Liste>
              {parUrgence.map((p) => p.statut === 'À fournir' ? (
                <LigneSuivi
                  key={p.libelle}
                  statut={refusee ? 'Refusée' : 'À fournir'}
                  detail={refusee ? `reçu le ${sansAnnee(pieceRefusee.recueLe)} : ${pieceRefusee.motif}` : p.ouLObtenir}
                >
                  {p.libelle}
                </LigneSuivi>
              ) : (
                <LigneSuivi key={p.libelle} statut={p.statut} detail={`reçue le ${sansAnnee(p.recueLe!)}`}>{p.libelle}</LigneSuivi>
              ))}
            </Liste>
            <p>Le contenu des pièces médicales n'est visible que par notre médecin-conseil ; seul leur état s'affiche ici.</p>
          </Bloc>
          <p><Bouton vers="EC47">Déclarer un changement</Bouton></p>
        </Pile>
        <Pile>
          <Bloc titre="Prochain versement">
            <p><strong>{date(arret.prochainVersement.le)} — {euros(arret.montantMensuel)}</strong></p>
            <p><Lien vers="EC48">Voir mes indemnités</Lien></p>
          </Bloc>
          {etat === 'expertise' && (
            <Bloc titre="Étape à venir : expertise médicale">
              <p>{arret.personne} est convoqué le {date(arret.expertiseLe)}. Ses indemnités continuent pendant l'examen.</p>
              <p><Lien vers="EC49">Comprendre l'expertise</Lien></p>
            </Bloc>
          )}
          <RecoursHumain question="Une question sur le dossier ?" />
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
