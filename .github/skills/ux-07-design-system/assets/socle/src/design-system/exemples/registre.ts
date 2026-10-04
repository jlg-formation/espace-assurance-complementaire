// Écrans témoins : un écran wireframe copié, imports du kit remplacés par ../composants.
import type { ComponentType } from 'react';
import type { EcranId } from '../../projet/ecrans';
import type { PropsEcran } from '../../projet/ui';

export const exemples: Partial<Record<EcranId, ComponentType<PropsEcran>>> = {};
