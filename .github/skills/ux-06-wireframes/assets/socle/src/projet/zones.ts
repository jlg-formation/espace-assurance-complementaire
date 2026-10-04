// Miroir de docs/06-architecture-information/03-navigation.nav.md. Libellés du glossaire.
// Valeurs d'exemple, à remplacer par la navigation du projet.
import type { EcranId } from './ecrans';

// Liste déclarée à part pour éviter une référence circulaire de types avec ecrans.ts.
export const idsZones = ['espace-adherent'] as const;
export type ZoneId = (typeof idsZones)[number];

export interface EntreeNav {
  libelle: string;
  vers: EcranId;
  rubrique?: string;
}

export interface Zone {
  nom: string;
  accueil: EcranId;
  navigationGlobale: EntreeNav[];
  navigationMobile: 'onglets' | 'liste';
  utilitaire: EntreeNav[];
  pied: EntreeNav[];
}

export const zones: Record<ZoneId, Zone> = {
  'espace-adherent': {
    nom: 'Espace adhérent',
    accueil: 'EC04',
    navigationGlobale: [{ libelle: 'Mes remboursements', vers: 'EC04', rubrique: 'mes-soins' }],
    navigationMobile: 'onglets',
    utilitaire: [],
    pied: [],
  },
};
