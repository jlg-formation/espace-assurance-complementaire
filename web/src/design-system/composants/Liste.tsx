import type { AvecEnfants } from '../../projet/ui';
import './Liste.css';

export function Liste({ children }: AvecEnfants) {
  return <ul className="ds-liste">{children}</ul>;
}

export function Ligne({ children }: AvecEnfants) {
  return <li className="ds-ligne">{children}</li>;
}
