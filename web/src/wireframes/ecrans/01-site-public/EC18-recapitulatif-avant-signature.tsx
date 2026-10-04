// EC18 Récapitulatif avant signature — contextuel de EC09, ce qui n'est pas couvert, carences, résiliation.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC18(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Avant de signer' }]}>
      <h1>Avant de signer : ce que votre formule ne couvre pas</h1>
      <Pile>
        <p>Mutuelle santé Confort · 38,90 € par mois · vous et Léo (4 ans)</p>
        <Bloc titre="Non couvert">
          <Liste>
            <Ligne>Implants dentaires</Ligne>
            <Ligne>Chirurgie réfractive des yeux (laser)</Ligne>
            <Ligne>Médecines douces au-delà de 3 séances par an</Ligne>
          </Liste>
        </Bloc>
        <Bloc titre="Délais de carence">
          <p>Prothèses dentaires et orthodontie : remboursées à partir du 5 janvier 2027 (3 mois après la souscription). Tout le reste : dès le 5 octobre 2026.</p>
        </Bloc>
        <Bloc titre="Résilier plus tard">
          <p>À tout moment après un an. Avant un an, si vous êtes embauché avec une mutuelle d'entreprise : sur simple justificatif de votre employeur.</p>
        </Bloc>
        <p>Document d'information normalisé (IPID), 2 pages, joint à votre contrat. <Note n={1} /></p>
        <Actions>
          <Bouton variante="principal" vers="EC19">Signer mon contrat</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
