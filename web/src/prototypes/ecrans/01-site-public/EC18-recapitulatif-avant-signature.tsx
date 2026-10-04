// EC18 Récapitulatif avant signature — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Gabarit, Ligne, Liste, Pile } from '../../../design-system/composants';
import { formulesSante, prospect, souscriptionSante } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const formule = formulesSante.find((f) => f.id === souscriptionSante.formule)!;

export default function EC18(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Avant de signer' }]}>
      <h1>Avant de signer : ce que votre formule ne couvre pas</h1>
      <Pile>
        <p>Mutuelle santé {formule.nom} · {euros(formule.cotisation2Personnes)} par mois · vous et {prospect.enfant.prenom} ({prospect.enfant.age} ans)</p>
        <Bloc titre="Non couvert">
          <Liste>
            <Ligne>Implants dentaires</Ligne>
            <Ligne>Chirurgie réfractive des yeux (laser)</Ligne>
            <Ligne>Médecines douces au-delà de 3 séances par an</Ligne>
          </Liste>
        </Bloc>
        <Bloc titre="Délais de carence">
          <p>
            Prothèses dentaires et orthodontie : remboursées à partir du {date(souscriptionSante.finCarenceDentaire)} (3 mois après la souscription).
            Tout le reste : dès le {date(souscriptionSante.debutCouverture)}.
          </p>
        </Bloc>
        <Bloc titre="Résilier plus tard">
          <p>À tout moment après un an. Avant un an, si vous êtes embauchée avec une mutuelle d'entreprise : sur simple justificatif de votre employeur.</p>
        </Bloc>
        <p>Document d'information normalisé (IPID), 2 pages, joint à votre contrat et téléchargeable ici.</p>
        <Actions>
          <Bouton variante="principal" vers="EC19">Signer mon contrat</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
