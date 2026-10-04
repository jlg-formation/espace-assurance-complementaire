import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import type { PropsLien } from '../../projet/ui';
import './Lien.css';

export function Lien({ vers, etat, children }: PropsLien) {
  const chemin = useChemin();
  return <Link className="ds-lien" to={chemin(vers, etat)}>{children}</Link>;
}
