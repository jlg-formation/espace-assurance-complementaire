import type { RouteObject } from 'react-router';
import { Galerie } from './Galerie';
import { PageGabarit, PageWireframe } from './PageWireframe';

export const routesWireframes: RouteObject[] = [
  { path: '/wireframes', element: <Galerie /> },
  { path: '/wireframes/gabarit/:zone', element: <PageGabarit /> },
  { path: '/wireframes/:id', element: <PageWireframe /> },
];
