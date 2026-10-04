import type { DocComposant } from '../doc';
import { Mobile, Ordinateur } from './Appareil';

export const doc: DocComposant = {
  numero: '14',
  nom: 'Mobile et Ordinateur',
  role: "Montrer un contenu seulement sous 768 px (Mobile) ou seulement à partir de 768 px (Ordinateur). À réserver aux cas où le contenu diffère vraiment : la mise en page s'adapte déjà seule.",
  fiche: 'docs/08-design-system/composants/14-mobile-et-ordinateur.component.md',
  exemples: [
    {
      titre: 'Redimensionner la fenêtre : une seule phrase est visible',
      rendu: (
        <>
          <Mobile><p>Présentez cet écran au comptoir.</p></Mobile>
          <Ordinateur><p>Ouvrez cette page sur votre téléphone pour la présenter au comptoir.</p></Ordinateur>
        </>
      ),
      code: '<Mobile><p>Présentez cet écran au comptoir.</p></Mobile>\n<Ordinateur><p>Ouvrez cette page sur votre téléphone pour la présenter au comptoir.</p></Ordinateur>',
    },
  ],
};
