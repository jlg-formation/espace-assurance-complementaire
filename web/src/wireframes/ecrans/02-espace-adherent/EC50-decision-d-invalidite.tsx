// EC50 Décision d'invalidité — lieu (V2), décision après expertise.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, Lien, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC50(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: "Décision d'invalidité" }]}>
      <h1>Décision : invalidité à 40 %, rente de 720 € par mois</h1>
      <Pile>
        <Liste>
          <Ligne><span>Taux d'invalidité (barème professionnel)</span><strong>40 %</strong></Ligne>
          <Ligne><span>Rente mensuelle</span><strong>720 €</strong></Ligne>
          <Ligne><span>Premier versement</span><strong>10 novembre 2026, pour octobre</strong></Ligne>
        </Liste>
        <Bloc titre="Vous n'êtes pas d'accord ?">
          <p>Vous pouvez contester dans les 2 mois, jusqu'au 3 décembre 2026, en demandant une contre-expertise.</p>
        </Bloc>
        <p><Lien vers="EC51">Être rappelé pour en parler</Lien></p>
      </Pile>
    </Gabarit>
  );
}
