import { Link } from 'react-router';
import { projet } from './projet/projet';
import { sections } from './sections';
import './wireframes/kit/wireframe.css';

export function Accueil() {
  return (
    <div className="wf-racine">
      <main>
        <h1>{projet.nom}</h1>
        {projet.donneesSimulees && <p>⚠️ Livrables fondés sur des données simulées, sans valeur de recherche.</p>}
        <ul className="wf-liste">
          {sections.map((s) => (
            <li key={s.chemin}>
              <Link className="wf-lien" to={s.chemin}>{s.titre}</Link>
              <span>{s.description}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
