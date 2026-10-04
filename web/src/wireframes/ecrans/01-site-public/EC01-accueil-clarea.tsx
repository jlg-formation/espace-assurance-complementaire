// EC01 Accueil Clarea — lieu, entrée du site public.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Carte, Gabarit, Grille, Lien, Note, Pile } from '../../kit/kit';

export default function EC01(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public">
      <h1>Votre mutuelle et votre prévoyance, expliquées en euros</h1>
      <Pile>
        <Grille>
          <Carte titre="Mutuelle santé" vers="EC02">
            <p>Une couronne à 650 € ? Voyez ce qui vous resterait à payer avec chaque formule, avant de choisir.</p>
          </Carte>
          <Carte titre="Prévoyance" vers="EC03">
            <p>Arrêt de travail, invalidité : sachez combien vous toucheriez chaque mois si vous ne pouviez plus travailler.</p>
          </Carte>
        </Grille>
        <Actions>
          <Bouton variante="principal" vers="EC06">Obtenir un tarif</Bouton>
        </Actions>
        <p>Votre prix s'affiche sans laisser votre e-mail ni votre téléphone. <Note n={1} /></p>
        <p>Vous préférez en parler ? <Lien vers="EC51">Être rappelé</Lien></p>
      </Pile>
    </Gabarit>
  );
}
