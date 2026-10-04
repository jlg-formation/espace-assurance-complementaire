import type { DocComposant } from '../doc';
import { Gabarit } from './Gabarit';

// Le transform crée un bloc conteneur : la barre d'onglets, en position fixe, reste dans le cadre de l'exemple.
const cadre = { position: 'relative', transform: 'translateZ(0)', paddingBottom: '4.5rem' } as const;

export const doc: DocComposant = {
  numero: '18',
  nom: 'Gabarit',
  role: "Structure de page d'une zone : en-tête et liens utilitaires, navigation principale (onglets en bas sur mobile dans l'espace adhérent), fil d'Ariane, contenu, pied de page.",
  fiche: 'docs/08-design-system/composants/18-gabarit.component.md',
  exemples: [
    {
      titre: 'Site public',
      rendu: (
        <Gabarit zone="site-public" rubrique="prevoyance" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Prévoyance' }]}>
          <h1>Prévoyance</h1>
        </Gabarit>
      ),
      code: '<Gabarit zone="site-public" rubrique="prevoyance" ariane={[{ libelle: \'Accueil\', vers: \'EC01\' }, { libelle: \'Prévoyance\' }]}>\n  <h1>Prévoyance</h1>\n</Gabarit>',
    },
    {
      titre: "Espace adhérent (sous 768 px, la barre d'onglets se fixe en bas de la fenêtre)",
      rendu: (
        <div style={cadre}>
          <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Déclarer un arrêt' }]}>
            <h1>Déclarer un arrêt de travail</h1>
          </Gabarit>
        </div>
      ),
      code: '<Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: \'Mon espace\', vers: \'EC27\' }, { libelle: \'Mon arrêt de travail\', vers: \'EC46\' }, { libelle: \'Déclarer un arrêt\' }]}>\n  <h1>Déclarer un arrêt de travail</h1>\n</Gabarit>',
    },
    {
      titre: 'Transverse, sans fil d\'Ariane',
      rendu: <Gabarit zone="transverse"><h1>Se connecter à mon espace</h1></Gabarit>,
      code: '<Gabarit zone="transverse"><h1>Se connecter à mon espace</h1></Gabarit>',
    },
  ],
};
