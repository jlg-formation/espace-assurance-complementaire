// EC27 Accueil de l'espace adhérent — prototype (états vide et souscription en cours).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Bouton, Carte, Colonnes, Gabarit, Grille, Lien, LigneSuivi, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { adherent, arret, devisOrthodontie, pieces, rembourse, soins, souscriptionPrevoyance } from '../../donnees/donnees';
import { date, dateCourte, euros } from '../../donnees/formats';

const pieceAFournir = pieces.find((p) => p.statut === 'À fournir')!;
const derniersSoins = soins.filter((s) => s.virementLe).sort((a, b) => b.le.localeCompare(a.le)).slice(0, 2);
const questionsRestantes = souscriptionPrevoyance.questionsTotal - souscriptionPrevoyance.questionReprise + 1;
const sansAnnee = (iso: string) => date(iso).replace(/ \d{4}$/, '');

export default function EC27({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-espace">
      <h1>Bonjour {adherent.prenom}</h1>
      <Colonnes>
        <Pile>
          {etat === 'souscription' && (
            <Alerte type="information" titre="Votre souscription Prévoyance n'est pas terminée.">
              <p>Il reste {questionsRestantes} questions de santé. <Bouton vers="EC14" etat="reprise">Reprendre ma souscription</Bouton></p>
            </Alerte>
          )}
          <Bloc titre="En cours pour le foyer">
            {vide ? (
              <p>Aucune démarche en cours. Vos devis, arrêts et demandes s'afficheront ici.</p>
            ) : (
              <Liste>
                <LigneSuivi statut="À fournir" vers="EC46" detail={`pour l'arrêt de ${arret.personne}`}>
                  1 pièce attendue : {pieceAFournir.libelle.charAt(0).toLowerCase() + pieceAFournir.libelle.slice(1)}
                </LigneSuivi>
                <LigneSuivi statut="En cours" vers="EC48" detail={`prochain versement le ${sansAnnee(arret.prochainVersement.le)}, ${euros(arret.montantMensuel)}`}>
                  Arrêt de travail de {arret.personne}
                </LigneSuivi>
                <LigneSuivi statut="En cours" vers="EC36" detail={`réponse au plus tard le ${sansAnnee(devisOrthodontie.reponseAuPlusTard)}`}>
                  Devis d'orthodontie de {devisOrthodontie.beneficiaire}
                </LigneSuivi>
              </Liste>
            )}
          </Bloc>
          <Grille>
            <Carte titre="Ma carte de mutuelle" vers="EC40"><span>À présenter au comptoir</span></Carte>
            <Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>
            <Carte titre="Envoyer un document" vers="EC33"><span>Devis ou pièce, en photo</span></Carte>
          </Grille>
          <p><Lien vers="EC43">Déclarer un arrêt</Lien></p>
        </Pile>
        <Bloc titre="Derniers remboursements">
          {vide ? (
            <p>Aucun remboursement pour l'instant.</p>
          ) : (
            <Liste>
              {derniersSoins.map((s) => (
                <LigneValeur key={s.id} libelle={`${s.praticien}, ${s.beneficiaire} — ${dateCourte(s.le).replace(/ \d{4}$/, '')}`}>{euros(rembourse(s))}</LigneValeur>
              ))}
            </Liste>
          )}
          <p><Lien vers="EC38">Voir mes remboursements</Lien></p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
