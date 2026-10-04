// EC13 Prévoyance impossible sans consentement — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Lien, Pile, RecoursHumain } from '../../../design-system/composants';

export default function EC13(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Prévoyance impossible sans consentement' }]}>
      <h1>Sans votre accord, nous ne pouvons pas étudier votre prévoyance</h1>
      <Pile>
        <Alerte type="information" titre="Aucune donnée de santé n'a été enregistrée." />
        <p>La prévoyance dépend de votre état de santé : sans questionnaire, nous ne pouvons pas vous proposer de contrat. Vous pouvez revenir quand vous le souhaitez.</p>
        <Actions>
          <Bouton variante="principal" vers="EC12">Revenir à ma décision</Bouton>
        </Actions>
        <RecoursHumain question="Une question avant de décider ?" />
        <p><Lien vers="EC01">Retour à l'accueil</Lien></p>
      </Pile>
    </Gabarit>
  );
}
