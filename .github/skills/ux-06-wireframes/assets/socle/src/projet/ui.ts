// Contrat d'interface commun au kit de wireframes et au design system : mêmes noms, mêmes props.
import type { ComponentType, ReactNode } from 'react';
import type { EcranId } from './ecrans';
import type { ZoneId } from './zones';

export interface PropsEcran {
  etat: string;
}

interface AvecEnfants {
  children?: ReactNode;
}

interface Destination {
  vers: EcranId;
  etat?: string;
}

export interface PropsGabarit extends AvecEnfants {
  zone: ZoneId;
  rubrique?: string;
  ariane?: { libelle: string; vers?: EcranId }[];
}

export interface PropsBouton extends AvecEnfants, Partial<Destination> {
  variante?: 'principal' | 'secondaire';
  desactive?: boolean;
  type?: 'button' | 'submit';
}

export interface PropsLien extends AvecEnfants, Destination {}

export interface PropsChamp {
  id: string;
  libelle: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'password' | 'file' | 'textarea';
  options?: string[];
  aide?: string;
  erreur?: string;
  valeur?: string;
  obligatoire?: boolean;
}

export interface PropsCarte extends AvecEnfants, Partial<Destination> {
  titre?: string;
}

export interface PropsBloc extends AvecEnfants {
  titre?: string;
  niveau?: 2 | 3;
}

export interface PropsAlerte extends AvecEnfants {
  type: 'erreur' | 'succes' | 'avertissement' | 'information';
  titre?: string;
}

export interface PropsEtiquette extends AvecEnfants {
  ton?: 'neutre' | 'succes' | 'avertissement' | 'erreur' | 'information';
}

export interface PropsImage {
  alt: string;
}

export interface PropsTexte {
  lignes?: number;
}

export interface PropsModale extends AvecEnfants {
  titre: string;
  fermerVers?: EcranId;
}

export interface PropsNote {
  n: number;
}

export interface Kit {
  Gabarit: ComponentType<PropsGabarit>;
  Bouton: ComponentType<PropsBouton>;
  Lien: ComponentType<PropsLien>;
  Champ: ComponentType<PropsChamp>;
  Liste: ComponentType<AvecEnfants>;
  Ligne: ComponentType<AvecEnfants>;
  Carte: ComponentType<PropsCarte>;
  Bloc: ComponentType<PropsBloc>;
  Alerte: ComponentType<PropsAlerte>;
  Etiquette: ComponentType<PropsEtiquette>;
  Image: ComponentType<PropsImage>;
  Texte: ComponentType<PropsTexte>;
  Modale: ComponentType<PropsModale>;
  Pile: ComponentType<AvecEnfants>;
  Grille: ComponentType<AvecEnfants>;
  Colonnes: ComponentType<AvecEnfants>;
  Actions: ComponentType<AvecEnfants>;
  Note: ComponentType<PropsNote>;
  Mobile: ComponentType<AvecEnfants>;
  Ordinateur: ComponentType<AvecEnfants>;
}

export type { AvecEnfants };
