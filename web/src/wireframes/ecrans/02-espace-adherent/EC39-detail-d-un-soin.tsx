// EC39 Détail d'un soin — contextuel de EC38.
import type { PropsEcran } from '../../../projet/ui';
import { Gabarit, Lien, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC39(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes remboursements', vers: 'EC38' }, { libelle: "Détail d'un soin" }]}>
      <h1>Dentiste — Chloé — 3 septembre 2026</h1>
      <Pile>
        <Liste>
          <Ligne><span>Vous avez payé</span><strong>70 €</strong></Ligne>
          <Ligne><span>Assurance Maladie</span><strong>21 €</strong></Ligne>
          <Ligne><span>Votre mutuelle</span><strong>49 €</strong></Ligne>
          <Ligne><span>Reste à votre charge</span><strong>0 €</strong></Ligne>
          <Ligne><span>Virement de la mutuelle</span><strong>9 septembre 2026 (112,40 € avec un autre soin)</strong></Ligne>
        </Liste>
        <p><Lien vers="EC38">Retour à mes remboursements</Lien></p>
      </Pile>
    </Gabarit>
  );
}
