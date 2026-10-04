// EC57 Mentions légales et données personnelles — lieu (ajouté par l'architecture), obligations RGPD.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, Lien, Pile, Texte } from '../../kit/kit';

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
          <Texte lignes={3} />
        </Bloc>
        <Bloc titre="Vos droits">
          <p>Accès, rectification, effacement, opposition : <Lien vers="EC53">exercer mes droits</Lien>.</p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
