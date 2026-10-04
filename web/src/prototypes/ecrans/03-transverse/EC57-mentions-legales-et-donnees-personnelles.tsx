// EC57 Mentions légales et données personnelles — prototype : le Texte de remplacement devient le texte réel.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, Lien, Pile } from '../../../design-system/composants';

export default function EC57(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Mentions légales et données personnelles' }]}>
      <h1>Mentions légales et données personnelles</h1>
      <Pile>
        <Bloc titre="Éditeur du site">
          <p>Clarea Assurances, société d'assurance fictive créée pour ce projet pédagogique.</p>
        </Bloc>
        <Bloc titre="Vos données de santé">
          <p>Hébergées chez un hébergeur certifié pour les données de santé (HDS), lues uniquement par notre médecin-conseil.</p>
          <p>Elles servent seulement à étudier votre adhésion à la prévoyance et vos arrêts de travail. Nous les gardons pendant la durée du contrat, puis 5 ans ; si vous ne souscrivez pas, elles sont effacées après 30 jours.</p>
          <p>Elles ne sont jamais utilisées pour vous proposer d'autres produits ni transmises à des partenaires commerciaux.</p>
        </Bloc>
        <Bloc titre="Vos droits">
          <p>Accès, rectification, effacement, opposition : <Lien vers="EC53">exercer mes droits</Lien>.</p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
