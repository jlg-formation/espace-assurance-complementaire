// Exemple de composant : même nom et mêmes props que Bouton dans le kit de wireframes.
import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import type { PropsBouton } from '../../projet/ui';
import './Bouton.css';

export function Bouton({ variante = 'secondaire', vers, etat, desactive, type = 'button', children }: PropsBouton) {
  const chemin = useChemin();
  const classe = `ds-btn ds-btn--${variante}`;
  if (vers && !desactive) return <Link className={classe} to={chemin(vers, etat)}>{children}</Link>;
  return <button className={classe} type={type} disabled={desactive}>{children}</button>;
}
