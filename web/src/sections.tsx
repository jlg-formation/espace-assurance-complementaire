// Sections de l'application. Chaque skill ajoute la sienne : wireframes (ux-06), design system (ux-07), prototypes (ux-08).
import type { RouteObject } from 'react-router';
import { routesDesignSystem } from './design-system/routes';
import { routesPrototypes } from './prototypes/routes';
import { routesWireframes } from './wireframes/routes';

export interface Section {
  chemin: string;
  titre: string;
  description: string;
  routes: RouteObject[];
}

export const sections: Section[] = [
  {
    chemin: '/wireframes',
    titre: 'Wireframes',
    description: 'Basse fidélité, niveaux de gris, cliquables selon les user flows.',
    routes: routesWireframes,
  },
  { chemin: '/design-system', titre: 'Design system', description: 'Tokens, composants et documentation.', routes: routesDesignSystem },
  { chemin: '/prototypes', titre: 'Prototypes', description: 'Haute fidélité, parcours testables.', routes: routesPrototypes },
];
