// EC44 Pièces à fournir — contextuel de EC43, liste complète dès la déclaration.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC44(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Déclarer un arrêt', vers: 'EC43' }, { libelle: 'Pièces à fournir' }]}>
      <h1>Les 5 pièces à fournir</h1>
      <Pile>
        <p>Date limite d'envoi : 11 juin 2026. Envoyez celles que vous avez ; les autres pourront être ajoutées plus tard. <Note n={1} /></p>
        <Liste>
          <Ligne><span>Avis d'arrêt de travail</span><span>remis par le médecin</span></Ligne>
          <Ligne><span>Compte rendu opératoire</span><span>pièce médicale, lue uniquement par le médecin-conseil</span></Ligne>
          <Ligne><span>Relevé des indemnités du régime obligatoire</span><span>à demander à votre caisse : 2 à 3 semaines</span></Ligne>
          <Ligne><span>Déclaration de revenus 2025</span><span>pour calculer le montant</span></Ligne>
          <Ligne><span>RIB</span><span>pour les versements</span></Ligne>
        </Liste>
        <Actions><Bouton variante="principal" vers="EC33" etat="arret">Joindre les pièces</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
