import { useId } from 'react';
import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import type { PropsModale } from '../../projet/ui';
import './Modale.css';

export function Modale({ titre, fermerVers, children }: PropsModale) {
  const id = useId();
  const chemin = useChemin();
  return (
    <div className="ds-modale">
      <div role="dialog" aria-modal="true" aria-labelledby={id}>
        <h2 id={id}>{titre}</h2>
        {children}
        {fermerVers && <p><Link className="ds-lien" to={chemin(fermerVers)}>Fermer</Link></p>}
      </div>
    </div>
  );
}
