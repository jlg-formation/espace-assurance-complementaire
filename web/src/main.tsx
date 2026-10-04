import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import { Accueil } from './Accueil';
import { sections } from './sections';

// Routeur à base de # : le build fonctionne sur tout hébergement statique, sans réécriture d'URL.
const router = createHashRouter([
  { path: '/', element: <Accueil /> },
  ...sections.flatMap((s) => s.routes),
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
