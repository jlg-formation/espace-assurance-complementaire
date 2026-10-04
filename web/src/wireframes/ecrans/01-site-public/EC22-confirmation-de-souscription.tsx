// EC22 Confirmation de souscription — contextuel de EC20.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC22(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Vous êtes couvert' }]}>
      <h1>Vous êtes couverte à partir du 5 octobre 2026</h1>
      <Pile>
        <Alerte type="succes" titre="Contrat Mutuelle santé Confort signé." />
        <Liste>
          <Ligne><span>Votre contrat</span><strong>envoyé par e-mail</strong></Ligne>
          <Ligne><span>Votre carte de mutuelle</span><strong>disponible dès maintenant dans votre espace</strong></Ligne>
          <Ligne><span>Première cotisation</span><strong>38,90 € le 5 novembre 2026</strong></Ligne>
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC23">Accéder à mon espace</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
