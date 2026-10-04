// Comparaison des pistes d'identité sur le même extrait d'écran clé (EC46 Dossier d'arrêt). Contrastes AA vérifiés.
import type { CSSProperties } from 'react';
import { Link } from 'react-router';
import { projet } from '../projet/projet';
import './pistes.css';

interface Piste {
  id: string;
  marque: string;
  intention: string;
  variables: Record<string, string>;
}

const humaniste = '"Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif';
const erreur = { '--erreur': '#b3261e', '--erreur-fond': '#fdeeee' };

const pistes: Piste[] = [
  {
    id: 'a',
    marque: 'Clarea',
    intention: 'Posée et claire',
    variables: {
      '--primaire': '#0b5f66', '--sur-primaire': '#ffffff', '--fond': '#ffffff', '--texte': '#1b2328',
      '--bordure': '#7a8691', ...erreur,
      '--police': humaniste, '--police-titre': humaniste,
      '--rayon': '4px', '--densite': '1.25rem',
    },
  },
  {
    id: 'b',
    marque: 'clarea',
    intention: 'Chaleureuse et rassurante',
    variables: {
      '--primaire': '#6b3f8f', '--sur-primaire': '#ffffff', '--fond': '#ffffff', '--texte': '#2a2420',
      '--bordure': '#8c8178', ...erreur,
      '--police': humaniste, '--police-titre': `ui-rounded, "SF Pro Rounded", ${humaniste}`,
      '--rayon': '12px', '--densite': '1.5rem',
    },
  },
  {
    id: 'c',
    marque: 'CLAREA',
    intention: 'Précise et dense',
    variables: {
      '--primaire': '#1f4466', '--sur-primaire': '#ffffff', '--fond': '#ffffff', '--texte': '#161b22',
      '--bordure': '#7b8491', ...erreur,
      '--police': humaniste, '--police-titre': 'Georgia, "Times New Roman", serif',
      '--rayon': '0', '--densite': '0.75rem',
    },
  },
];

export function Pistes() {
  return (
    <div className="pistes-page">
      <main>
        <h1>Pistes d'identité — {projet.nom}</h1>
        {projet.donneesSimulees && <p>⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.</p>}
        <p>Même extrait d'écran, une colonne par piste. Marques fictives. <Link to="/design-system">Documentation</Link></p>
        <div className="pistes">
          {pistes.map((p) => (
            <section key={p.id} className="piste" style={p.variables as CSSProperties} aria-labelledby={`piste-${p.id}`}>
              <p className="piste-logo">{p.marque}</p>
              <h2 id={`piste-${p.id}`}>Piste {p.id.toUpperCase()} — {p.intention}</h2>
              <div className="piste-carte">
                <p>Arrêt de Jean-Marc — prochain versement le 10 juillet 2026</p>
                <p className="piste-montant">1 840 €</p>
                <p>Relevé du régime obligatoire : à fournir</p>
              </div>
              <p>
                <a className="piste-btn piste-btn--principal" href="#">Ajouter une pièce</a>{' '}
                <a className="piste-btn" href="#">Être rappelé</a>
              </p>
              <p className="piste-alerte"><strong>Erreur :</strong> Relevé refusé : il ne couvre que le mois de mai. Envoyez un relevé du 12 mai au 30 juin.</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
