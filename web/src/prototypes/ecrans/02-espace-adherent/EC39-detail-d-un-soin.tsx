// EC39 Détail d'un soin — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Gabarit, Lien, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { resteSoin, soins, virement } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const soin = soins.find((s) => s.id === 'S1')!;
const v = virement(soin.virementLe!);

export default function EC39(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes remboursements', vers: 'EC38' }, { libelle: "Détail d'un soin" }]}>
      <h1>{soin.praticien} — {soin.beneficiaire} — {date(soin.le)}</h1>
      <Pile>
        <Liste>
          <LigneValeur libelle="Vous avez payé">{euros(soin.paye)}</LigneValeur>
          <LigneValeur libelle="Assurance Maladie">{euros(soin.assuranceMaladie)}</LigneValeur>
          <LigneValeur libelle="Votre mutuelle">{euros(soin.mutuelle)}</LigneValeur>
          <LigneValeur libelle="Reste à votre charge" total>{euros(resteSoin(soin))}</LigneValeur>
          <LigneValeur libelle="Virement de la mutuelle">{date(v.le)} ({euros(v.montant)} avec {v.soins.length - 1} autre soin)</LigneValeur>
        </Liste>
        <p><Lien vers="EC38">Retour à mes remboursements</Lien></p>
      </Pile>
    </Gabarit>
  );
}
