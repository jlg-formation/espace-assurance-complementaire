// Documentation vivante : copie conforme de l'asset du skill ux-07. Tokens lus dans tokens.json, composants dans *.doc.tsx.
import { Link } from 'react-router';
import { projet } from '../projet/projet';
import type { DocComposant } from './doc';
import { aplatir, nomCss, valeurCss } from './tokens/dtcg';
import tokensJson from './tokens/tokens.json';
import './composants';
import './documentation.css';

const tokens = aplatir(tokensJson);
const modules = import.meta.glob<{ doc: DocComposant }>('./composants/*.doc.tsx', { eager: true });
const docs = Object.values(modules).map((m) => m.doc).sort((a, b) => a.numero.localeCompare(b.numero));
const ancre = (doc: DocComposant) => `composant-${doc.numero}`;

export function Documentation() {
  const couleurs = tokens.filter((t) => t.type === 'color');
  const tailles = tokens.filter((t) => t.chemin.startsWith('font.size.'));
  const espaces = tokens.filter((t) => t.chemin.startsWith('space.'));

  return (
    <div className="ds-racine doc">
      <header className="doc-entete">
        <p className="doc-titre-site">{projet.nom} — design system</p>
        <nav aria-label="Sommaire">
          <ul>
            <li><a href="#tokens">Tokens</a></li>
            {docs.map((d) => <li key={d.numero}><a href={`#${ancre(d)}`}>{d.nom}</a></li>)}
            <li><Link to="/design-system/pistes">Pistes d'identité</Link></li>
          </ul>
        </nav>
      </header>
      <main className="doc-contenu">
        <h1>Design system</h1>
        {projet.donneesSimulees && <p>⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.</p>}
        <p>Marque fictive. Décisions : <code>docs/08-design-system/</code>.</p>

        <section id="tokens" aria-labelledby="titre-tokens">
          <h2 id="titre-tokens">Tokens</h2>
          <h3>Couleurs</h3>
          <ul className="doc-nuancier">
            {couleurs.map((t) => (
              <li key={t.chemin}>
                <span className="doc-pastille" style={{ background: `var(${nomCss(t.chemin)})` }} />
                <code>{t.chemin}</code>
                <span className="doc-valeur">{valeurCss(t)}{t.description && ` — ${t.description}`}</span>
              </li>
            ))}
          </ul>
          <h3>Tailles de texte</h3>
          {tailles.map((t) => (
            <p key={t.chemin} style={{ fontSize: `var(${nomCss(t.chemin)})` }}>
              <code>{t.chemin}</code> {valeurCss(t)} — Consultation généraliste, 18,55 € remboursés
            </p>
          ))}
          <h3>Espacements</h3>
          <ul className="doc-espacements">
            {espaces.map((t) => (
              <li key={t.chemin}>
                <span className="doc-barre" style={{ width: `var(${nomCss(t.chemin)})` }} />
                <code>{t.chemin}</code> {valeurCss(t)}
              </li>
            ))}
          </ul>
        </section>

        {docs.map((d) => (
          <section key={d.numero} id={ancre(d)} aria-labelledby={`titre-${ancre(d)}`}>
            <h2 id={`titre-${ancre(d)}`}>{d.numero} {d.nom}</h2>
            <p>{d.role} Fiche : <code>{d.fiche}</code></p>
            {d.exemples.map((e) => (
              <figure key={e.titre} className="doc-exemple">
                <figcaption>{e.titre}</figcaption>
                <div className="doc-rendu">{e.rendu}</div>
                <pre><code>{e.code}</code></pre>
              </figure>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
