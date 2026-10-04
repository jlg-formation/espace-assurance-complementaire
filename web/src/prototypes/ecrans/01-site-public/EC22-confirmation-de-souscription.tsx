// EC22 Confirmation de souscription — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { formulesSante, souscriptionSante } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const formule = formulesSante.find((f) => f.id === souscriptionSante.formule)!;

export default function EC22(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Vous êtes couvert' }]}>
      <h1>Vous êtes couverte à partir du {date(souscriptionSante.debutCouverture)}</h1>
      <Pile>
        <Alerte type="succes" titre={`Contrat Mutuelle santé ${formule.nom} signé.`} />
        <Liste>
          <LigneValeur libelle="Votre contrat">envoyé par e-mail</LigneValeur>
          <LigneValeur libelle="Votre carte de mutuelle">disponible dès maintenant dans votre espace</LigneValeur>
          <LigneValeur libelle="Première cotisation">{euros(formule.cotisation2Personnes)} le {date(souscriptionSante.premierPrelevement)}</LigneValeur>
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC23">Accéder à mon espace</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
