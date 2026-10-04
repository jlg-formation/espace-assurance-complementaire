import type { RouteObject } from 'react-router';
import { IndexPrototypes } from './IndexPrototypes';
import { PagePrototype, PageTest } from './PagePrototype';

export const routesPrototypes: RouteObject[] = [
  { path: '/prototypes', element: <IndexPrototypes /> },
  { path: '/prototypes/:id', element: <PagePrototype /> },
  { path: '/test/:id', element: <PageTest /> },
];
