// Happy path de chaque flow (docs/05-user-flows/), un parcours par point d'entrée si leurs premiers écrans diffèrent.
// Étape : 'EC05', ou 'EC05:erreur' si le happy path passe par un état précis. Valeurs d'exemple.
import type { EcranId } from './ecrans';

export type Etape = EcranId | `${EcranId}:${string}`;

export interface Parcours {
  flow: string;
  tache: string;
  entree: string;
  happyPath: Etape[];
}

export const parcours: Parcours[] = [
  {
    flow: 'UF-01.01',
    tache: 'Envoyer une demande et savoir quand elle sera traitée',
    entree: 'Courrier demandant un justificatif',
    happyPath: ['EC04', 'EC05'],
  },
];

export function decomposer(etape: Etape): { ecran: EcranId; etat?: string } {
  const [ecran, etat] = etape.split(':') as [EcranId, string | undefined];
  return { ecran, etat };
}
