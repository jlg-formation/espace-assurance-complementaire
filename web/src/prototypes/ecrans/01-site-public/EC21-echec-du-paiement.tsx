// EC21 Échec du paiement — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Pile, RecoursHumain } from '../../../design-system/composants';

export default function EC21(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Échec du paiement' }]}>
      <h1>Le prélèvement n'a pas pu être autorisé</h1>
      <Pile>
        <Alerte type="erreur" titre="L'IBAN saisi ne correspond à aucun compte.">
          <p>Vérifiez les 27 caractères. Votre contrat signé et vos réponses sont conservés.</p>
        </Alerte>
        <Actions>
          <Bouton variante="principal" vers="EC20">Corriger mes coordonnées bancaires</Bouton>
        </Actions>
        <RecoursHumain question="Vous préférez finir avec un conseiller ?" />
      </Pile>
    </Gabarit>
  );
}
