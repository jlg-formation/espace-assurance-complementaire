// EC26 Réinitialisation du mot de passe — contextuel de EC23 (états lien envoyé, échec).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile } from '../../kit/kit';

export default function EC26({ etat }: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Se connecter', vers: 'EC23' }, { libelle: 'Mot de passe oublié' }]}>
      <h1>Mot de passe oublié</h1>
      <Pile>
        {etat === 'envoye' ? (
          <>
            <Alerte type="succes" titre="Lien envoyé à votre adresse e-mail. Il est valable 1 heure." />
            <p><Lien vers="EC24">Ouvrir le lien reçu (créer un nouveau mot de passe)</Lien></p>
          </>
        ) : etat === 'echec' ? (
          <>
            <Alerte type="erreur" titre="Nous n'avons pas pu réinitialiser votre mot de passe.">
              <p>Un conseiller peut rétablir votre accès : il vous rappelle sous 1 jour ouvré.</p>
            </Alerte>
            <Actions><Bouton variante="principal" vers="EC51">Être rappelé</Bouton></Actions>
          </>
        ) : (
          <>
            <Champ id="email" libelle="Votre adresse e-mail" type="email" obligatoire />
            <Actions><Bouton variante="principal" vers="EC26" etat="envoye">Recevoir un lien</Bouton></Actions>
          </>
        )}
      </Pile>
    </Gabarit>
  );
}
