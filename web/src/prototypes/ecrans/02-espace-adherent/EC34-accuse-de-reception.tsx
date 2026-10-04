// EC34 Accusé de réception — prototype (états pièce, question).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { aujourdhui, devisOrthodontie, question } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

const sansAnnee = (iso: string) => date(iso).replace(/ \d{4}$/, '');

export default function EC34({ etat }: PropsEcran) {
  if (etat === 'piece') {
    return (
      <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: 'Accusé de réception' }]}>
        <h1>Pièce bien reçue</h1>
        <Pile>
          <Alerte type="succes" titre={`Relevé du régime obligatoire reçu le ${date(aujourdhui)}.`}>
            <p>Il sera vérifié sous 2 jours ouvrés. Vous serez prévenue s'il ne convient pas.</p>
          </Alerte>
          <Actions><Bouton variante="principal" vers="EC46">Voir mon dossier d'arrêt</Bouton></Actions>
        </Pile>
      </Gabarit>
    );
  }
  const estQuestion = etat === 'question';
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Accusé de réception' }]}>
      <h1>{estQuestion ? 'Question bien reçue' : 'Devis bien reçu'}</h1>
      <Pile>
        <Alerte
          type="succes"
          titre={estQuestion
            ? `Question envoyée le ${date(question.envoyeeLe)} : réponse sous 2 jours ouvrés, au plus tard le ${sansAnnee(question.reponseAuPlusTard)}.`
            : `Devis d’orthodontie de ${devisOrthodontie.beneficiaire} reçu le ${date(devisOrthodontie.envoyeLe)} (${devisOrthodontie.pages} pages) : réponse au plus tard le ${sansAnnee(devisOrthodontie.reponseAuPlusTard)}.`}
        />
        <Actions><Bouton variante="principal" vers="EC36">Suivre mes demandes</Bouton></Actions>
        <p><Lien vers="EC27">Retour à mon espace</Lien></p>
      </Pile>
    </Gabarit>
  );
}
