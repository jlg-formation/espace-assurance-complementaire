import { Link, useParams, useSearchParams, type RouteObject } from 'react-router';
import type { EcranId } from '../projet/ecrans';
import { BaseEcrans } from '../projet/navigation';
import { Documentation } from './Documentation';
import { exemples } from './exemples/registre';
import { Pistes } from './Pistes';
import './composants';

function PageExemple() {
  const { id = '' } = useParams();
  const [params] = useSearchParams();
  const Composant = exemples[id as EcranId];
  if (!Composant) {
    return <div className="ds-racine"><main><h1>Aucun écran témoin {id}</h1><p><Link to="/design-system">Documentation</Link></p></main></div>;
  }
  return (
    <div className="ds-racine">
      {/* Les liens de l'écran témoin mènent aux wireframes. */}
      <BaseEcrans.Provider value="/wireframes">
        <Composant etat={params.get('etat') ?? 'nominal'} />
      </BaseEcrans.Provider>
    </div>
  );
}

export const routesDesignSystem: RouteObject[] = [
  { path: '/design-system', element: <Documentation /> },
  { path: '/design-system/pistes', element: <Pistes /> },
  { path: '/design-system/exemples/:id', element: <PageExemple /> },
];
