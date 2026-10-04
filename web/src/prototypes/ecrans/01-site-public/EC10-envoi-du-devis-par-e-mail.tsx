// EC10 Envoi du devis par e-mail — prototype (état envoyé).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile } from '../../../design-system/composants';

export default function EC10({ etat }: PropsEcran) {
  const envoye = etat === 'envoye';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Recevoir mon devis' }]}>
      <h1>Recevoir mon devis par e-mail</h1>
      <Pile>
        {envoye ? (
          <>
            <Alerte type="succes" titre="Devis envoyé à votre adresse e-mail.">
              <p>Nous ne vous appellerons pas. Le lien du devis vous ramène à vos tarifs pendant 30 jours.</p>
            </Alerte>
            <p><Lien vers="EC07">Revenir à mes tarifs</Lien></p>
          </>
        ) : (
          <>
            <Champ id="email" libelle="Votre adresse e-mail" type="email" obligatoire />
            <Champ id="recontact" libelle="Souhaitez-vous être recontacté par un conseiller ?" options={['Non, merci', 'Oui, par téléphone']} valeur="Non, merci" />
            <p>Sans votre accord, votre adresse ne sert qu'à vous envoyer ce devis.</p>
            <Actions>
              <Bouton variante="principal" vers="EC10" etat="envoye">Recevoir mon devis</Bouton>
              <Bouton vers="EC07">Annuler</Bouton>
            </Actions>
          </>
        )}
      </Pile>
    </Gabarit>
  );
}
