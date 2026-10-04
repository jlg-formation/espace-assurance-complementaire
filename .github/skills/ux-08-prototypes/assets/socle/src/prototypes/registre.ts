// Un écran prototypé = une entrée. Ses états couvrent au moins ceux de son wireframe.
import type { ComponentType } from 'react';
import type { EcranId } from '../projet/ecrans';
import type { PropsEcran } from '../projet/ui';

export interface Prototype {
  composant: ComponentType<PropsEcran>;
  etats: readonly string[];
}

export const prototypes: Partial<Record<EcranId, Prototype>> = {};
