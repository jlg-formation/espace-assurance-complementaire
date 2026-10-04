// EC29 Activation de l'accès délégué — prototype (V2).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Ligne, Liste, Pile } from '../../../design-system/composants';
import { foyer } from '../../donnees/donnees';

export default function EC29(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Se connecter', vers: 'EC23' }, { libelle: 'Activer mon accès' }]}>
      <h1>{foyer.titulaire.prenom} vous donne accès à son contrat</h1>
      <Pile>
        <p>Vous pourrez agir en votre nom, avec vos propres identifiants :</p>
        <Liste>
          <Ligne>Suivre les remboursements et envoyer des devis</Ligne>
          <Ligne>Déclarer et suivre ses arrêts de travail</Ligne>
        </Liste>
        <p>Vous ne verrez pas le contenu de ses pièces médicales, sauf s'il l'autorise. Vous pourrez en envoyer pour lui : elles partent directement au médecin-conseil.</p>
        <Actions><Bouton variante="principal" vers="EC27">Accepter et créer mon accès</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
