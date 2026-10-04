import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import type { PropsCarte } from '../../projet/ui';
import './Carte.css';

export function Carte({ vers, etat, titre, children }: PropsCarte) {
  const chemin = useChemin();
  const contenu = <>{titre && <strong className="ds-carte__titre">{titre}</strong>}{children}</>;
  if (vers) return <Link className="ds-carte ds-carte--lien" to={chemin(vers, etat)}>{contenu}</Link>;
  return <div className="ds-carte">{contenu}</div>;
}
