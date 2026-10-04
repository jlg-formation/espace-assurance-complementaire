// Index des prototypes : copie conforme de l'asset du skill ux-08.
import { Fragment } from 'react';
import { Link } from 'react-router';
import '../design-system/composants';
import { ecrans, idsEcrans } from '../projet/ecrans';
import { decomposer, parcours } from '../projet/parcours';
import { projet } from '../projet/projet';
import { idsZones, zones } from '../projet/zones';
import { prototypes } from './registre';
import './prototypes.css';

const versions = ['MVP', 'V2', 'Plus tard'] as const;

export function IndexPrototypes() {
  const faits = idsEcrans.filter((id) => prototypes[id]).length;
  return (
    <div className="ds-racine">
      <main className="proto-contenu">
        <h1>Prototypes — {projet.nom}</h1>
        {projet.donneesSimulees && <p>⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.</p>}
        <p>
          {faits} écran(s) prototypé(s) sur {idsEcrans.length}. Le <strong>mode test</strong> masque la barre de revue :
          c'est l'adresse à donner aux participants d'un test d'utilisabilité.
        </p>

        <h2>Parcours</h2>
        <ul className="proto-liste">
          {parcours.map((p) => {
            const { ecran, etat } = decomposer(p.happyPath[0]);
            const suffixe = `${ecran}${etat ? `?etat=${etat}` : ''}`;
            return (
              <li key={`${p.flow}-${p.entree}`}>
                <span>{p.flow} {p.tache} — depuis « {p.entree} »</span>
                <span>
                  <Link to={`/prototypes/${suffixe}`}>Revue</Link> · <Link to={`/test/${suffixe}`}>Mode test</Link>
                </span>
              </li>
            );
          })}
        </ul>

        {idsZones.map((zone) => (
          <section key={zone} aria-labelledby={`zone-${zone}`}>
            <h2 id={`zone-${zone}`}>{zones[zone].nom}</h2>
            {versions.map((version) => {
              const liste = idsEcrans.filter((id) => ecrans[id].zone === zone && ecrans[id].version === version);
              if (liste.length === 0) return null;
              return (
                <Fragment key={version}>
                  <h3>{version}</h3>
                  <ul className="proto-liste">
                    {liste.map((id) => (
                      <li key={id}>
                        {prototypes[id]
                          ? <Link to={`/prototypes/${id}`}>{id} {ecrans[id].libelle}</Link>
                          : <span>{id} {ecrans[id].libelle}</span>}
                        <span>{ecrans[id].type} · {prototypes[id] ? 'prototypé' : 'à prototyper'}</span>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              );
            })}
          </section>
        ))}
      </main>
    </div>
  );
}
