// Miroir de docs/06-architecture-information/03-navigation.nav.md. Libellés du glossaire.
import type { EcranId } from './ecrans';

// Liste déclarée à part pour éviter une référence circulaire de types avec ecrans.ts.
export const idsZones = ['site-public', 'espace-adherent', 'transverse'] as const;
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

const navigationPublique: EntreeNav[] = [
  { libelle: 'Mutuelle santé', vers: 'EC02', rubrique: 'mutuelle-sante' },
  { libelle: 'Prévoyance', vers: 'EC03', rubrique: 'prevoyance' },
  { libelle: 'Obtenir un tarif', vers: 'EC06', rubrique: 'tarif' },
];

const utilitairePublic: EntreeNav[] = [
  { libelle: 'Se connecter', vers: 'EC23' },
  { libelle: 'Aide et contact', vers: 'EC54' },
];

const pied: EntreeNav[] = [
  { libelle: 'Plan du site', vers: 'EC55' },
  { libelle: 'Accessibilité', vers: 'EC56' },
  { libelle: 'Mentions légales et données personnelles', vers: 'EC57' },
];

export const zones: Record<ZoneId, Zone> = {
  'site-public': {
    nom: 'Site public',
    accueil: 'EC01',
    navigationGlobale: navigationPublique,
    navigationMobile: 'liste',
    utilitaire: utilitairePublic,
    pied,
  },
  'espace-adherent': {
    nom: 'Espace adhérent',
    accueil: 'EC27',
    navigationGlobale: [
      { libelle: 'Mon espace', vers: 'EC27', rubrique: 'mon-espace' },
      { libelle: 'Ma santé', vers: 'EC38', rubrique: 'ma-sante' },
      { libelle: 'Mes demandes', vers: 'EC36', rubrique: 'mes-demandes' },
      { libelle: 'Mon arrêt de travail', vers: 'EC46', rubrique: 'mon-arret' },
      { libelle: 'Mon contrat', vers: 'EC11', rubrique: 'mon-contrat' },
    ],
    navigationMobile: 'onglets',
    utilitaire: [
      { libelle: 'Aide et contact', vers: 'EC54' },
      { libelle: 'Mon compte', vers: 'EC28' },
      { libelle: 'Se déconnecter', vers: 'EC01' },
    ],
    pied,
  },
  transverse: {
    nom: 'Transverse',
    accueil: 'EC01',
    navigationGlobale: navigationPublique,
    navigationMobile: 'liste',
    utilitaire: utilitairePublic,
    pied,
  },
};
