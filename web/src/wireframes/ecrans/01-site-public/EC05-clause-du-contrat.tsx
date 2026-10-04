// EC05 Clause du contrat — contextuel de EC03, extrait des conditions générales.
import type { PropsEcran } from '../../../projet/ui';
import { Gabarit, Lien, Pile, Texte } from '../../kit/kit';

export default function EC05(_props: PropsEcran) {
  return (
    <Gabarit
      zone="site-public"
      rubrique="prevoyance"
      ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Prévoyance', vers: 'EC03' }, { libelle: 'Clause du contrat' }]}
    >
      <h1>Article 12 — Barème d'invalidité</h1>
      <Pile>
        <p>Extrait des conditions générales de la Prévoyance Clarea, version de janvier 2026.</p>
        <p><strong>12.1</strong> Le taux d'invalidité est fixé par le médecin-conseil, selon le barème prévu aux conditions particulières : professionnel (votre métier) ou fonctionnel (votre état de santé en général).</p>
        <Texte lignes={5} />
        <p><Lien vers="EC03">Revenir à la comparaison</Lien></p>
      </Pile>
    </Gabarit>
  );
}
