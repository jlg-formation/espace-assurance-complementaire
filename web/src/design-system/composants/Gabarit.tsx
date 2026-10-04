import { Link } from 'react-router';
import { useChemin } from '../../projet/navigation';
import { zones } from '../../projet/zones';
import type { PropsGabarit } from '../../projet/ui';
import './Gabarit.css';

export function Gabarit({ zone, rubrique, ariane, children }: PropsGabarit) {
  const z = zones[zone];
  const chemin = useChemin();
  return (
    <>
      <header className="ds-entete">
        <Link className="ds-logo" to={chemin(z.accueil)}>Clarea</Link>
        {z.utilitaire.length > 0 && (
          <nav aria-label="Liens utilitaires">
            <ul className="ds-utilitaire">
              {z.utilitaire.map((e) => (
                <li key={e.libelle}><Link className="ds-lien" to={chemin(e.vers)}>{e.libelle}</Link></li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <nav
        className={`ds-nav-globale${z.navigationMobile === 'onglets' ? ' ds-nav-globale--onglets' : ''}`}
        aria-label="Navigation principale"
      >
        <ul>
          {z.navigationGlobale.map((e) => (
            <li key={e.libelle}>
              <Link to={chemin(e.vers)} aria-current={e.rubrique && e.rubrique === rubrique ? 'page' : undefined}>
                {e.libelle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {ariane && ariane.length > 0 && (
        <nav className="ds-ariane" aria-label="Fil d'Ariane">
          <ol>
            {ariane.map((a, i) => (
              <li key={a.libelle}>
                {i === ariane.length - 1
                  ? <span aria-current="page">{a.libelle}</span>
                  : a.vers ? <Link to={chemin(a.vers)}>{a.libelle}</Link> : <span>{a.libelle}</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <main>{children}</main>
      {z.pied.length > 0 && (
        <footer className="ds-pied">
          <ul>
            {z.pied.map((e) => (
              <li key={e.libelle}><Link to={chemin(e.vers)}>{e.libelle}</Link></li>
            ))}
          </ul>
        </footer>
      )}
    </>
  );
}
