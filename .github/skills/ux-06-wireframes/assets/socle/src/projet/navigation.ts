import { createContext, useContext } from 'react';
import type { EcranId } from './ecrans';

// Préfixe des routes d'écrans : /wireframes pour le kit, /prototypes pour le design system.
export const BaseEcrans = createContext('/wireframes');

export function useChemin() {
  const base = useContext(BaseEcrans);
  return (id: EcranId, etat?: string) =>
    `${base}/${id}${etat ? `?etat=${encodeURIComponent(etat)}` : ''}`;
}
