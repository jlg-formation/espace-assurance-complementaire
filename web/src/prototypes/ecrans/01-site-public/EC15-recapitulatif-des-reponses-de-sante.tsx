// EC15 Récapitulatif des réponses de santé — prototype (états exclusion, étude médicale).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Lien, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { reponsesSante, souscriptionPrevoyance } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

export default function EC15({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Accueil', vers: 'EC01' as const }, { libelle: 'Obtenir un tarif', vers: 'EC06' as const }, { libelle: 'Vérifier mes réponses' }];
  if (etat === 'etude') {
    return (
      <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
        <h1>Votre dossier est étudié par notre médecin-conseil</h1>
        <Pile>
          <Alerte type="information" titre={`Réponse sous 10 jours ouvrés, au plus tard le ${date(souscriptionPrevoyance.etudeMedicaleAuPlusTard)}.`}>
            <p>Nous vous préviendrons par e-mail dès que notre proposition sera prête. Vous ne payez rien d'ici là.</p>
          </Alerte>
          <p><Lien vers="EC17">Voir la proposition (lien reçu par e-mail)</Lien></p>
          <p><Lien vers="EC01">Retour à l'accueil</Lien></p>
        </Pile>
      </Gabarit>
    );
  }
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
      <h1>Vérifier mes réponses</h1>
      <Pile>
        <p>Étape 3 sur 3</p>
        <Liste>
          {reponsesSante.map((r) => <LigneValeur key={r.question} libelle={r.question}>{r.reponse}</LigneValeur>)}
        </Liste>
        <p><Lien vers="EC14">Corriger une réponse</Lien></p>
        <Alerte type="avertissement" titre="Une déclaration inexacte peut entraîner un refus d'indemnisation, voire l'annulation du contrat.">
          <p>En confirmant, vous attestez que vos réponses sont exactes.</p>
        </Alerte>
        <Actions>
          <Bouton variante="principal" vers={etat === 'exclusion' ? 'EC17' : 'EC18'}>Confirmer et envoyer au médecin-conseil</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
