// EC56 Déclaration d'accessibilité — prototype : le Texte de remplacement devient la liste des contenus non accessibles.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Gabarit, Lien, Ligne, Liste, Pile } from '../../../design-system/composants';
import { clarea } from '../../donnees/donnees';
import { date, pourcentage } from '../../donnees/formats';

export default function EC56(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Accessibilité' }]}>
      <h1>Accessibilité : partiellement conforme</h1>
      <Pile>
        <p>
          Clarea Assurances s'engage à rendre son site accessible selon le RGAA, niveau AA.
          Audit du {date(clarea.auditAccessibilite.le)} : {pourcentage(clarea.auditAccessibilite.taux)} des critères respectés.
        </p>
        <Bloc titre="Contenus non accessibles">
          <Liste>
            <Ligne>Les conditions générales en PDF ne sont pas encore balisées pour les lecteurs d'écran ; une version HTML est en préparation.</Ligne>
            <Ligne>Le code à scanner de la carte de mutuelle n'a pas d'équivalent textuel : le numéro d'adhérent est affiché à côté.</Ligne>
            <Ligne>Le tableau détaillé des garanties ne se lit pas encore correctement à 400 % de zoom.</Ligne>
          </Liste>
        </Bloc>
        <Bloc titre="Signaler un défaut">
          <p>Vous n'arrivez pas à accéder à un contenu ou à un service ? <Lien vers="EC53">Poser une question</Lien> ou <Lien vers="EC51">être rappelé</Lien> : nous vous répondons sous 2 jours ouvrés.</p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
