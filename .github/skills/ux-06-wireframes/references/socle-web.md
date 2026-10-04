# Socle web : Bun + Vite + TypeScript + React

Les livrables web de la démarche (wireframes `ux-06`, design system `ux-07`, prototypes `ux-08`) vivent dans **une seule application**, `web/` à la racine du workspace. Les livrables de décision (fiches, index, principes) restent en Markdown dans `docs/`.

## Pourquoi ce socle
- **Un gabarit, une navigation** : l'en-tête et les menus sont un composant alimenté par `src/projet/zones.ts`, identiques sur tous les écrans sans copier-coller.
- **Liens typés** : un lien vise un identifiant d'écran (`vers="EC07"`) ; une faute de frappe ne compile pas.
- **Vérifications automatiques** : `bun test` contrôle l'inventaire, les états et les parcours cliquables, puis les tokens, les contrastes et la correspondance avec le design system.
- **Du wireframe au prototype par les imports** : le kit de wireframes et le design system partagent le même contrat (`src/projet/ui.ts`) ; un écran passe de l'un à l'autre en changeant son import.

## Prérequis
- **Bun** : `bun --version`. S'il manque, s'arrêter et demander à l'utilisateur de l'installer (https://bun.sh) ; ne pas l'installer sans son accord.
- Dépendances autorisées : `react`, `react-dom`, `react-router`, et l'outillage du modèle Vite (`vite`, `@vitejs/plugin-react`, `typescript`, types, linter), plus `@types/bun`. **Aucune bibliothèque d'interface** (MUI, Tailwind, shadcn...) : le design system est la seule source de style. Toute autre dépendance demande l'accord de l'utilisateur.
- Aucune ressource externe à l'exécution : ni CDN, ni police distante, ni image distante.

## Créer le socle (une seule fois, par le premier skill qui en a besoin)
Depuis la racine du workspace :
```
bun create vite web --template react-ts --no-interactive
cd web
bun install
bun add react-router
bun add -d @types/bun
```
Puis :
1. Supprimer `src/App.tsx`, `src/App.css`, `src/index.css`, `src/assets/` et `public/` (fichiers de démonstration du modèle).
2. Copier le contenu de [`assets/socle/`](../assets/socle/) de `ux-06-wireframes` dans `web/` en écrasant `index.html` et `vite.config.ts`.
3. Ajouter à `package.json` les scripts :
   ```json
   "test": "bun test",
   "verifier": "tsc -b && bun test"
   ```
4. Remplacer `{Nom du projet}` dans `index.html` et `src/projet/projet.ts`, et régler `donneesSimulees`.
5. `bun run verifier` doit passer avec les données d'exemple, puis les données d'exemple sont remplacées par celles du projet.

## Arborescence
```
web/
├── index.html, vite.config.ts, package.json, tsconfig*.json
├── scripts/                     tokens.ts, contrastes.ts (ux-07)
├── tests/                       wireframes.test.tsx (ux-06), design-system.test.tsx (ux-07)
└── src/
    ├── main.tsx                 routeur (HashRouter : fonctionne sur tout hébergement statique)
    ├── sections.tsx             une entrée par section : wireframes, design system, prototypes
    ├── Accueil.tsx
    ├── projet/                  données partagées par toutes les sections
    │   ├── projet.ts            nom, données simulées
    │   ├── ecrans.ts            miroir de l'inventaire des contenus (ux-05)
    │   ├── zones.ts             miroir de la navigation (ux-05)
    │   ├── parcours.ts          happy paths des flows (ux-04)
    │   ├── navigation.ts        chemins des écrans
    │   └── ui.ts                contrat commun kit / design system
    ├── wireframes/              ux-06
    │   ├── kit/                 kit.tsx, wireframe.css
    │   ├── ecrans/NN-<zone>/ECNN-<ecran>.tsx
    │   ├── registre.ts, routes.tsx, Galerie.tsx, PageWireframe.tsx
    ├── design-system/           ux-07
    └── prototypes/              ux-08
```

## Fichiers : copie conforme ou projet
| Fichier | Statut |
|---|---|
| `src/main.tsx`, `src/Accueil.tsx`, `src/projet/navigation.ts`, `src/projet/ui.ts`, `src/wireframes/kit/*`, `src/wireframes/Galerie.tsx`, `src/wireframes/PageWireframe.tsx`, `src/wireframes/routes.tsx`, `tests/wireframes.test.tsx` | **Copie conforme** de l'asset : ne pas modifier dans `web/`. Un besoin nouveau se traite dans le skill, puis la copie est refaite. |
| `src/projet/projet.ts`, `ecrans.ts`, `zones.ts`, `parcours.ts`, `src/wireframes/registre.ts`, `src/wireframes/ecrans/**`, `src/sections.tsx` | **Projet** : le modèle fournit des valeurs d'exemple, à remplacer. |

## Commandes
| Commande | Effet |
|---|---|
| `bun run dev` | Serveur de développement : http://localhost:5173 |
| `bun run verifier` | Types (`tsc -b`) puis tests : à lancer avant de déclarer un livrable terminé |
| `bun test --test-name-pattern EC04` | Tests d'un seul écran pendant la production |
| `bun run build` puis `bun run preview` | Version statique dans `web/dist/` |

## Règles de code
- Un écran importe uniquement depuis son kit (`../../kit/kit` pour un wireframe, `../../../design-system/composants` pour un prototype) et des éléments HTML sémantiques (`h1`, `h2`, `p`, `strong`, `ul`...). Ni `className`, ni `style` dans un écran : la présentation appartient au kit.
- Aucun `dangerouslySetInnerHTML`, aucun appel réseau : les données sont écrites dans l'écran.
- Les chaînes visibles sont en français, avec les libellés du glossaire.
