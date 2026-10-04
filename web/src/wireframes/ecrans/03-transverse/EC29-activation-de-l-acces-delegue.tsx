// EC29 Activation de l'accès délégué — contextuel de EC23 (V2), arrivée par l'invitation.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC29(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Se connecter', vers: 'EC23' }, { libelle: 'Activer mon accès' }]}>
      <h1>Jean-Marc vous donne accès à son contrat</h1>
      <Pile>
        <p>Vous pourrez agir en votre nom, avec vos propres identifiants :</p>
        <Liste>
          <Ligne>Suivre les remboursements et envoyer des devis</Ligne>
          <Ligne>Déclarer et suivre ses arrêts de travail</Ligne>
        </Liste>
        <p>Vous ne verrez pas le contenu de ses pièces médicales, sauf s'il l'autorise. <Note n={1} /></p>
        <Actions><Bouton variante="principal" vers="EC27">Accepter et créer mon accès</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
