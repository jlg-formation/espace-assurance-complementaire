// Écrans témoins : un écran wireframe copié, imports du kit remplacés par ../composants.
import type { ComponentType } from 'react';
import type { EcranId } from '../../projet/ecrans';
import type { PropsEcran } from '../../projet/ui';
import EC43 from './EC43-declaration-d-un-arret';

export const exemples: Partial<Record<EcranId, ComponentType<PropsEcran>>> = { EC43 };
