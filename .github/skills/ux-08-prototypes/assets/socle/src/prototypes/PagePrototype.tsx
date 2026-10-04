// Affichage d'un prototype : copie conforme de l'asset du skill ux-08.
import { Fragment, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import '../design-system/composants';
import { ecrans, type EcranId } from '../projet/ecrans';
import { BaseEcrans } from '../projet/navigation';
import { projet } from '../projet/projet';
import { prototypes } from './registre';
import './prototypes.css';

// revue : barre de revue visible et liens en /prototypes ; sinon mode test, sans barre, liens en /test.
function Ecran({ base, revue }: { base: string; revue: boolean }) {
  const { id = '' } = useParams();
  const [params] = useSearchParams();
  const fiche = id in ecrans ? ecrans[id as EcranId] : undefined;
  const proto = prototypes[id as EcranId];
  const etat = params.get('etat') ?? 'nominal';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${fiche?.libelle ?? id} — ${projet.nom}`;
  }, [id, etat, fiche]);

  if (!fiche || !proto) {
    return (
      <div className="ds-racine">
        <main className="proto-contenu">
          <h1>Écran {id} non prototypé</h1>
          {revue && <p><Link to="/prototypes">Retour à l'index des prototypes</Link></p>}
        </main>
      </div>
    );
  }

  const Composant = proto.composant;
  return (
    <div className="ds-racine">
      {revue && (
        <div className="proto-revue">
          <strong>{id} {fiche.nom}</strong>
          <Link to="/prototypes">Index</Link>
          <Link to={`/wireframes/${id}`}>Wireframe</Link>
          <Link to={`/test/${id}${etat === 'nominal' ? '' : `?etat=${etat}`}`}>Mode test</Link>
          {proto.etats.length > 1 && (
            <span>
              États :{' '}
              {proto.etats.map((e, i) => (
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
      <BaseEcrans.Provider value={base}>
        <Composant etat={etat} />
      </BaseEcrans.Provider>
    </div>
  );
}

export function PagePrototype() {
  return <Ecran base="/prototypes" revue />;
}

export function PageTest() {
  return <Ecran base="/test" revue={false} />;
}
