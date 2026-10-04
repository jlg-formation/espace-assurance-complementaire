// Composants du design system : mêmes noms et mêmes props que le kit de wireframes (src/projet/ui.ts).
import type { Kit } from '../../projet/ui';
import '../tokens/tokens.css';
import '../base.css';
import { Bouton } from './Bouton';
import { Alerte } from './Alerte';
import { Mobile, Ordinateur } from './Appareil';
import { Bloc } from './Bloc';
import { Carte } from './Carte';
import { Champ } from './Champ';
import { Etiquette } from './Etiquette';
import { Gabarit } from './Gabarit';
import { Lien } from './Lien';
import { LigneSuivi } from './LigneSuivi';
import { LigneValeur } from './LigneValeur';
import { Ligne, Liste } from './Liste';
import { Actions, Colonnes, Grille, Pile } from './MiseEnPage';
import { Modale } from './Modale';
import { Note } from './Note';
import { RecoursHumain } from './RecoursHumain';
import { Image, Texte } from './Remplacement';
import { Repli } from './Repli';

export {
  Actions, Alerte, Bloc, Bouton, Carte, Champ, Colonnes, Etiquette, Gabarit, Grille, Image, Lien, Ligne, Liste, Mobile,
  Modale, Note, Ordinateur, Pile, Texte,
};

// Composants nouveaux, issus des motifs récurrents des wireframes (hors contrat du kit).
export { LigneSuivi, LigneValeur, RecoursHumain, Repli };

export const ds = {
  Gabarit, Bouton, Lien, Champ, Liste, Ligne, Carte, Bloc, Alerte, Etiquette, Image, Texte, Modale,
  Pile, Grille, Colonnes, Actions, Note, Mobile, Ordinateur,
} satisfies Kit;
