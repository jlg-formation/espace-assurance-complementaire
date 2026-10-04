// EC16 Tarif mis à jour — contextuel de EC14 (V2), reprise après interruption.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC16(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Tarif mis à jour' }]}>
      <h1>Votre tarif a changé</h1>
      <Pile>
        <p>Votre devis du 3 octobre 2026 n'est plus valable : les tarifs ont été mis à jour le 1er novembre.</p>
        <Liste>
          <Ligne><span>Prévoyance Confort, tarif du devis</span><strong>61 € par mois</strong></Ligne>
          <Ligne><span>Prévoyance Confort, nouveau tarif</span><strong>64 € par mois</strong></Ligne>
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC14" etat="reprise">Continuer le questionnaire</Bouton>
          <Bouton vers="EC03">Comparer à nouveau</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
