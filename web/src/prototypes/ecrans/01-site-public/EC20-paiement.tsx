// EC20 Paiement — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Champ, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { formulesSante, souscriptionSante } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const formule = formulesSante.find((f) => f.id === souscriptionSante.formule)!;

export default function EC20(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Paiement' }]}>
      <h1>Paiement de votre cotisation</h1>
      <Pile>
        <p>{euros(formule.cotisation2Personnes)} par mois, prélevés à partir du {date(souscriptionSante.premierPrelevement)}.</p>
        <Champ id="titulaire" libelle="Titulaire du compte" obligatoire />
        <Champ id="iban" libelle="IBAN" aide="27 caractères, commence par FR" obligatoire />
        <Champ id="jour" libelle="Jour de prélèvement" options={['5 du mois', '10 du mois', '15 du mois']} />
        <Actions>
          <Bouton variante="principal" vers="EC22">Autoriser le prélèvement</Bouton>
        </Actions>
        <p>Vous pourrez changer de compte ou de jour de prélèvement depuis votre espace.</p>
        <p><Lien vers="EC21">Exemple : prélèvement refusé</Lien></p>
      </Pile>
    </Gabarit>
  );
}
