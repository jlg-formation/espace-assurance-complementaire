// Composants du design system : mêmes noms et mêmes props que le kit de wireframes (src/projet/ui.ts).
import type { Kit } from '../../projet/ui';
import '../tokens/tokens.css';
import '../base.css';
import { Bouton } from './Bouton';

export { Bouton };

// Partial pendant la production ; le test « correspondance avec le kit » exige toutes les entrées.
export const ds: Partial<Kit> = { Bouton };
