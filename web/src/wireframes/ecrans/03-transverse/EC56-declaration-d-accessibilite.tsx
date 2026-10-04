// EC56 Déclaration d'accessibilité — lieu (ajouté par l'architecture), obligation RGAA.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, Lien, Pile, Texte } from '../../kit/kit';

export default function EC56(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Accessibilité' }]}>
      <h1>Accessibilité : partiellement conforme</h1>
      <Pile>
        <p>Clarea Assurances s'engage à rendre son site accessible selon le RGAA, niveau AA. Audit du 15 septembre 2026 : 82 % des critères respectés.</p>
        <Bloc titre="Contenus non accessibles">
          <Texte lignes={3} />
        </Bloc>
        <Bloc titre="Signaler un défaut">
          <p>Vous n'arrivez pas à accéder à un contenu ou à un service ? <Lien vers="EC53">Poser une question</Lien> ou <Lien vers="EC51">être rappelé</Lien> : nous vous répondons sous 2 jours ouvrés.</p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
