import type { DocComposant } from '../doc';
import { Bouton } from './Bouton';
import { Modale } from './Modale';

// Le transform crée un bloc conteneur : la modale, en position fixe, reste dans le cadre de l'exemple.
const cadre = { position: 'relative', height: '20rem', transform: 'translateZ(0)', overflow: 'hidden' } as const;

export const doc: DocComposant = {
  numero: '11',
  nom: 'Modale',
  role: "Demander une confirmation ou montrer une information courte sans quitter l'écran. Aucun écran des wireframes ne l'emploie : préférer un écran ou un Repli.",
  fiche: 'docs/08-design-system/composants/11-modale.component.md',
  exemples: [
    {
      titre: 'Avec « Fermer » (panneau en bas sur mobile, fenêtre centrée à partir de 768 px)',
      rendu: (
        <div style={cadre}>
          <Modale titre="Retirer l'accès de Sylvie ?" fermerVers="EC28">
            <p>Elle ne pourra plus agir pour vous. Vous pourrez l'inviter de nouveau.</p>
            <Bouton variante="principal" vers="EC28" etat="retire">Retirer l'accès</Bouton>
          </Modale>
        </div>
      ),
      code: '<Modale titre="Retirer l\'accès de Sylvie ?" fermerVers="EC28">\n  <p>Elle ne pourra plus agir pour vous. Vous pourrez l\'inviter de nouveau.</p>\n  <Bouton variante="principal" vers="EC28" etat="retire">Retirer l\'accès</Bouton>\n</Modale>',
    },
  ],
};
