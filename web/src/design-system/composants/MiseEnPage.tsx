import type { AvecEnfants } from '../../projet/ui';
import './MiseEnPage.css';

export function Pile({ children }: AvecEnfants) {
  return <div className="ds-pile">{children}</div>;
}

export function Grille({ children }: AvecEnfants) {
  return <div className="ds-grille">{children}</div>;
}

export function Colonnes({ children }: AvecEnfants) {
  return <div className="ds-colonnes">{children}</div>;
}

export function Actions({ children }: AvecEnfants) {
  return <div className="ds-actions">{children}</div>;
}
