// EC54 Aide et contact — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Carte, Gabarit, Grille, Pile } from '../../../design-system/composants';
import { clarea } from '../../donnees/donnees';

export default function EC54(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Aide et contact' }]}>
      <h1>Aide et contact</h1>
      <Pile>
        <Grille>
          <Carte titre="Être rappelé" vers="EC51"><span>Un conseiller vous appelle sur le créneau choisi, en général sous 2 jours ouvrés.</span></Carte>
          <Carte titre="Poser une question" vers="EC53"><span>Réponse écrite sous 2 jours ouvrés, conservée dans votre espace.</span></Carte>
          <Carte titre="Agir pour un proche" vers="EC30"><span>Votre proche ne peut pas faire ses démarches lui-même.</span></Carte>
        </Grille>
        <Bloc titre="Par téléphone">
          <p>{clarea.telephone}, appel non surtaxé, {clarea.horaires}.</p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
