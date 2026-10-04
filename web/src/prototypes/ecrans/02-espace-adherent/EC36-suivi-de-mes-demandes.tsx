// EC36 Suivi de mes demandes — prototype (états vide, retard, élément manquant).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Lien, LigneSuivi, Liste, Pile } from '../../../design-system/composants';
import { devisLunettesChloe, devisOrthodontie, question } from '../../donnees/donnees';
import { date, dateCourte } from '../../donnees/formats';

const sansAnnee = (iso: string) => dateCourte(iso).replace(/ \d{4}$/, '');

export default function EC36({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  const devis = `Devis d'orthodontie de ${devisOrthodontie.beneficiaire} — envoyé le ${dateCourte(devisOrthodontie.envoyeLe)}`;
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes' }]}>
      <h1>Mes demandes</h1>
      <Pile>
        <Actions>
          <Bouton variante="principal" vers="EC33">Envoyer un document</Bouton>
        </Actions>
        {etat === 'manquant' && (
          <Alerte type="avertissement" titre={`Devis d'orthodontie de ${devisOrthodontie.beneficiaire} : il manque le code des actes sur la page 1.`}>
            <p><Lien vers="EC33">Compléter le devis</Lien> (seule la page 1 est à renvoyer).</p>
          </Alerte>
        )}
        {vide ? (
          <p>Vous n'avez encore envoyé aucun devis ni aucune question. Ils s'afficheront ici avec leur délai de réponse.</p>
        ) : (
          <Liste>
            {etat === 'retard' ? (
              <LigneSuivi statut="Retardée" detail={`réponse au ${sansAnnee(devisOrthodontie.retardeAu)} : avis de notre dentiste-conseil en cours`}>{devis}</LigneSuivi>
            ) : etat === 'manquant' ? (
              <LigneSuivi statut="À fournir" vers="EC33" detail="code des actes manquant sur la page 1">{devis}</LigneSuivi>
            ) : (
              <LigneSuivi statut="Réponse disponible" vers="EC37">{devis}</LigneSuivi>
            )}
            <LigneSuivi statut="En cours" detail={`envoyée le ${sansAnnee(question.envoyeeLe)}, réponse au plus tard le ${date(question.reponseAuPlusTard).replace(/ \d{4}$/, '')}`}>
              Question : {question.sujet.toLowerCase()}
            </LigneSuivi>
            <LigneSuivi statut="Terminée">Devis de lunettes de Chloé — {dateCourte(devisLunettesChloe.le)}</LigneSuivi>
          </Liste>
        )}
        <p><Lien vers="EC53">Poser une question</Lien></p>
      </Pile>
    </Gabarit>
  );
}
