// Un écran maquetté = une entrée. Valeurs d'exemple, à remplacer.
import type { ComponentType } from 'react';
import type { EcranId } from '../projet/ecrans';
import type { PropsEcran } from '../projet/ui';
import EC04 from './ecrans/02-espace-client/EC04-suivi-des-demandes';
import EC05 from './ecrans/02-espace-client/EC05-envoi-d-une-demande';

export interface Wireframe {
  composant: ComponentType<PropsEcran>;
  etats: readonly string[];
  fiche: string;
}

export const wireframes: Partial<Record<EcranId, Wireframe>> = {
  EC04: {
    composant: EC04,
    etats: ['nominal', 'vide'],
    fiche: 'docs/07-wireframes/02-espace-client/EC04-suivi-des-demandes.wireframe.md',
  },
  EC05: {
    composant: EC05,
    etats: ['nominal', 'erreur'],
    fiche: 'docs/07-wireframes/02-espace-client/EC05-envoi-d-une-demande.wireframe.md',
  },
};
