// Composant nouveau : libellé et valeur (montant, date, taux). Fusionne Ligne + span + strong des wireframes.
import type { ReactNode } from 'react';
import './LigneValeur.css';

export interface PropsLigneValeur {
  libelle: ReactNode;
  total?: boolean;
  children: ReactNode;
}

export function LigneValeur({ libelle, total, children }: PropsLigneValeur) {
  return (
    <li className={`ds-ligne-valeur${total ? ' ds-ligne-valeur--total' : ''}`}>
      <span className="ds-ligne-valeur__libelle">{libelle}</span>
      <strong className="ds-ligne-valeur__valeur">{children}</strong>
    </li>
  );
}
