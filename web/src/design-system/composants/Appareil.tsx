import type { AvecEnfants } from '../../projet/ui';
import './Appareil.css';

export function Mobile({ children }: AvecEnfants) {
  return <div className="ds-mobile">{children}</div>;
}

export function Ordinateur({ children }: AvecEnfants) {
  return <div className="ds-ordinateur">{children}</div>;
}
