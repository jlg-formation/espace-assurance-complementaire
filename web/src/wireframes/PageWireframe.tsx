import { Fragment } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { ecrans, type EcranId } from '../projet/ecrans';
import { BaseEcrans } from '../projet/navigation';
import { projet } from '../projet/projet';
import { zones, type ZoneId } from '../projet/zones';
import { Gabarit } from './kit/kit';
import { wireframes } from './registre';

export function PageWireframe() {
  const { id = '' } = useParams();
  const [params] = useSearchParams();
  const fiche = id in ecrans ? ecrans[id as EcranId] : undefined;
  const wf = wireframes[id as EcranId];
  const etat = params.get('etat') ?? 'nominal';
  const apercu = params.has('apercu');

  if (!fiche || !wf) {
    return (
      <div className="wf-racine">
        <main>
          <h1>Écran {id} non maquetté</h1>
          <p><Link className="wf-lien" to="/wireframes">Retour à la galerie</Link></p>
        </main>
      </div>
    );
  }

  const Composant = wf.composant;
  return (
    <div className="wf-racine">
      {!apercu && (
        <div className="wf-outil">
          <strong>{id} {fiche.nom}</strong>
          <Link to="/wireframes">Galerie</Link>
          <span>Fiche : <code>{wf.fiche}</code></span>
          {wf.etats.length > 1 && (
            <span>
              États :{' '}
              {wf.etats.map((e, i) => (
                <Fragment key={e}>
                  {i > 0 && ' · '}
                  <Link to={`?etat=${e}`} aria-current={e === etat ? 'true' : undefined}>{e}</Link>
                </Fragment>
              ))}
            </span>
          )}
          {projet.donneesSimulees && <span>⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.</span>}
        </div>
      )}
      <BaseEcrans.Provider value="/wireframes">
        <Composant etat={etat} />
      </BaseEcrans.Provider>
    </div>
  );
}

export function PageGabarit() {
  const { zone = '' } = useParams();
  if (!(zone in zones)) return <div className="wf-racine"><main><h1>Zone {zone} inconnue</h1></main></div>;
  return (
    <div className="wf-racine">
      <div className="wf-outil"><strong>Gabarit — {zones[zone as ZoneId].nom}</strong><Link to="/wireframes">Galerie</Link></div>
      <BaseEcrans.Provider value="/wireframes">
        <Gabarit zone={zone as ZoneId} ariane={[{ libelle: 'Accueil', vers: zones[zone as ZoneId].accueil }, { libelle: 'Écran courant' }]}>
          <h1>Contenu de l'écran</h1>
        </Gabarit>
      </BaseEcrans.Provider>
    </div>
  );
}
