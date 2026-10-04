// Comparaison des pistes d'identité sur le même extrait d'écran clé. Valeurs d'exemple, à remplacer.
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

const pistes: Piste[] = [
  {
    id: 'a',
    marque: '{Nom de marque A}',
    intention: '{Sobre et rassurante}',
    variables: {
      '--primaire': '#1d4f91', '--sur-primaire': '#ffffff', '--fond': '#ffffff', '--texte': '#1c2129',
      '--bordure': '#c4c9d0', '--erreur': '#b3261e', '--erreur-fond': '#fdeeee',
      '--police': '"Segoe UI", system-ui, sans-serif', '--police-titre': '"Segoe UI", system-ui, sans-serif',
      '--rayon': '4px', '--densite': '1rem',
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
                <p>Consultation généraliste — 12 sept. 2026</p>
                <p className="piste-montant">18,55 € remboursés</p>
                <p>Reste à payer : 7,95 €</p>
              </div>
              <p>
                <a className="piste-btn piste-btn--principal" href="#">Envoyer une facture</a>{' '}
                <a className="piste-btn" href="#">Voir mes garanties</a>
              </p>
              <p className="piste-alerte"><strong>Erreur :</strong> Nous n'arrivons pas à lire cette facture.</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
