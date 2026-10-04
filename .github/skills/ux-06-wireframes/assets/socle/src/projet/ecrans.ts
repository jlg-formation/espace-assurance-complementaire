// Miroir de docs/06-architecture-information/01-contenus.inventory.md : identifiants et noms inchangés.
// Valeurs d'exemple, à remplacer par l'inventaire du projet.
import type { ZoneId } from './zones';

export interface FicheEcran {
  nom: string;
  libelle: string;
  zone: ZoneId;
  type: 'lieu' | 'contextuel';
  parent?: string;
  version: 'MVP' | 'V2' | 'Plus tard';
}

export const ecrans = {
  EC04: { nom: 'Suivi des demandes', libelle: 'Mes demandes', zone: 'espace-client', type: 'lieu', version: 'MVP' },
  EC05: { nom: "Envoi d'une demande", libelle: 'Envoyer une demande', zone: 'espace-client', type: 'contextuel', parent: 'EC04', version: 'MVP' },
} as const satisfies Record<string, FicheEcran>;

export type EcranId = keyof typeof ecrans;

export const idsEcrans = Object.keys(ecrans) as EcranId[];
