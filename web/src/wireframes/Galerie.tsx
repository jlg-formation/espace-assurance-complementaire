import { Fragment } from 'react';
import { Link } from 'react-router';
import { ecrans, idsEcrans } from '../projet/ecrans';
import { decomposer, parcours } from '../projet/parcours';
import { projet } from '../projet/projet';
import { idsZones, zones } from '../projet/zones';
import { wireframes } from './registre';
import './kit/wireframe.css';

const versions = ['MVP', 'V2', 'Plus tard'] as const;

export function Galerie() {
  const maquettes = idsEcrans.filter((id) => wireframes[id]).length;
  return (
    <div className="wf-racine">
      <main>
        <h1>Wireframes — {projet.nom}</h1>
        {projet.donneesSimulees && <p>⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.</p>}
        <p>
          Basse fidélité, niveaux de gris. {maquettes} écran(s) maquetté(s) sur {idsEcrans.length}. Réduire la fenêtre à 375 px pour la version mobile.
        </p>

        <h2>Parcours</h2>
        <ul className="wf-liste">
          {parcours.map((p) => {
            const { ecran, etat } = decomposer(p.happyPath[0]);
            return (
              <li key={`${p.flow}-${p.entree}`}>
                <span>{p.flow} {p.tache} — depuis « {p.entree} »</span>
                <Link className="wf-lien" to={`/wireframes/${ecran}${etat ? `?etat=${etat}` : ''}`}>Commencer</Link>
              </li>
            );
          })}
        </ul>

        {idsZones.map((zone) => (
          <section key={zone} aria-labelledby={`zone-${zone}`}>
            <h2 id={`zone-${zone}`}>{zones[zone].nom}</h2>
            <p><Link className="wf-lien" to={`/wireframes/gabarit/${zone}`}>Gabarit de la zone</Link></p>
            {versions.map((version) => {
              const liste = idsEcrans.filter((id) => ecrans[id].zone === zone && ecrans[id].version === version);
              if (liste.length === 0) return null;
              return (
                <Fragment key={version}>
                  <h3>{version}</h3>
                  <div className="wf-apercus">
                    {liste.map((id) => (
                      <figure className="wf-apercu" key={id}>
                        {wireframes[id] ? (
                          <div className="wf-cadre">
                            <iframe src={`#/wireframes/${id}?apercu`} title={`Aperçu mobile de ${id} ${ecrans[id].libelle}`} loading="lazy" tabIndex={-1} />
                          </div>
                        ) : (
                          <div className="wf-cadre wf-cadre--vide">À maquetter</div>
                        )}
                        <figcaption>
                          {wireframes[id]
                            ? <Link to={`/wireframes/${id}`}>{id} {ecrans[id].libelle}</Link>
                            : <>{id} {ecrans[id].libelle}</>}
                          {' · '}{ecrans[id].type}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </Fragment>
              );
            })}
          </section>
        ))}
      </main>
    </div>
  );
}
