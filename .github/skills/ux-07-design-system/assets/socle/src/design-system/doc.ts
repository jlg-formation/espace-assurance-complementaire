import type { ReactNode } from 'react';

export interface DocComposant {
  numero: string;
  nom: string;
  role: string;
  fiche: string;
  exemples: { titre: string; rendu: ReactNode; code: string }[];
}
