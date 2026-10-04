import type { DocComposant } from '../doc';
import { Bloc } from './Bloc';
import { Bouton } from './Bouton';
import { Carte } from './Carte';
import { Actions, Colonnes, Grille, Pile } from './MiseEnPage';

export const doc: DocComposant = {
  numero: '10',
  nom: 'Mise en page',
  role: "Disposer les contenus : Pile empile, Grille aligne des cartes, Colonnes passe à deux colonnes (2/3, 1/3) à partir de 1024 px, Actions regroupe les boutons.",
  fiche: 'docs/08-design-system/composants/10-mise-en-page.component.md',
  exemples: [
    {
      titre: 'Pile et Actions',
      rendu: (
        <Pile>
          <p>Il reste 6 questions de santé.</p>
          <Actions><Bouton variante="principal">Continuer</Bouton><Bouton>Enregistrer et reprendre plus tard</Bouton></Actions>
        </Pile>
      ),
      code: '<Pile>\n  <p>Il reste 6 questions de santé.</p>\n  <Actions><Bouton variante="principal">Continuer</Bouton><Bouton>Enregistrer et reprendre plus tard</Bouton></Actions>\n</Pile>',
    },
    {
      titre: 'Grille (élargir la fenêtre pour voir les colonnes se former)',
      rendu: (
        <Grille>
          <Carte titre="Ma carte de mutuelle" vers="EC40"><span>À présenter au comptoir</span></Carte>
          <Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>
          <Carte titre="Envoyer un document" vers="EC33"><span>Devis ou pièce, en photo</span></Carte>
        </Grille>
      ),
      code: '<Grille>\n  <Carte titre="Ma carte de mutuelle" vers="EC40"><span>À présenter au comptoir</span></Carte>\n  <Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>\n  <Carte titre="Envoyer un document" vers="EC33"><span>Devis ou pièce, en photo</span></Carte>\n</Grille>',
    },
    {
      titre: 'Colonnes (une colonne sous 1024 px)',
      rendu: (
        <Colonnes>
          <Bloc titre="Pièces du dossier"><p>5 pièces, 1 à fournir.</p></Bloc>
          <Bloc titre="Prochain versement"><p><strong>10 juillet 2026 — 1 840 €</strong></p></Bloc>
        </Colonnes>
      ),
      code: '<Colonnes>\n  <Bloc titre="Pièces du dossier"><p>5 pièces, 1 à fournir.</p></Bloc>\n  <Bloc titre="Prochain versement"><p><strong>10 juillet 2026 — 1 840 €</strong></p></Bloc>\n</Colonnes>',
    },
  ],
};
