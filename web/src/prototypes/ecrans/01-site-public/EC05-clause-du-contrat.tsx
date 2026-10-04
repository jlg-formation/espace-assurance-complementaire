// EC05 Clause du contrat — prototype : le Texte de remplacement devient le texte de la clause.
import type { PropsEcran } from '../../../projet/ui';
import { Gabarit, Lien, Pile } from '../../../design-system/composants';

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
        <p><strong>12.2</strong> Avec le barème professionnel, le taux tient compte de votre capacité à exercer le métier déclaré à la souscription. Avec le barème fonctionnel, il ne tient compte que de l'atteinte physique ou mentale, quel que soit votre métier.</p>
        <p><strong>12.3</strong> Une rente est versée à partir d'un taux de 33 %. Entre 33 % et 66 %, son montant est proportionnel au taux ; à partir de 66 %, la rente est versée en totalité.</p>
        <p><strong>12.4</strong> Vous pouvez contester le taux dans les 2 mois qui suivent la décision, en demandant une contre-expertise.</p>
        <p><Lien vers="EC03">Revenir à la comparaison</Lien></p>
      </Pile>
    </Gabarit>
  );
}
