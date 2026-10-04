// EC01 Accueil Clarea — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Carte, Gabarit, Grille, Pile, RecoursHumain } from '../../../design-system/composants';
import { soinsDeReference } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

const couronne = soinsDeReference.find((s) => s.id === 'couronne')!;

export default function EC01(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public">
      <h1>Votre mutuelle et votre prévoyance, expliquées en euros</h1>
      <Pile>
        <Grille>
          <Carte titre="Mutuelle santé" vers="EC02">
            <p>Une couronne à {euros(couronne.prix)} ? Voyez ce qui vous resterait à payer avec chaque formule, avant de choisir.</p>
          </Carte>
          <Carte titre="Prévoyance" vers="EC03">
            <p>Arrêt de travail, invalidité : sachez combien vous toucheriez chaque mois si vous ne pouviez plus travailler.</p>
          </Carte>
        </Grille>
        <Actions>
          <Bouton variante="principal" vers="EC06">Obtenir un tarif</Bouton>
        </Actions>
        <p>Votre prix s'affiche sans laisser votre e-mail ni votre téléphone.</p>
        <RecoursHumain question="Vous préférez en parler ?" />
      </Pile>
    </Gabarit>
  );
}
