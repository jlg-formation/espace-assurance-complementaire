# ux-08-prototypes — Manuel rapide

Transforme chaque wireframe en prototype haute fidélité : le design system appliqué, de vrais contenus tirés d'un jeu de données fictif, des parcours testables par de vrais utilisateurs. Dans l'application `web/` (Bun + Vite + TypeScript + React).

## Prérequis
Avoir terminé `/ux-07-design-system` : `bun run verifier` passe, chaque composant du kit a son équivalent dans le design system.

## Lancer
```
/ux-08-prototypes                     tous les écrans
/ux-08-prototypes espace client       une zone
/ux-08-prototypes EC04                un écran
```

## Déroulé
1. **Préparation** : section prototypes ajoutée à l'application, index.
2. **Jeu de données fictif** : un utilisateur et son historique, cohérents sur tous les écrans.
3. **Validation** : jeu de données, ordre, parcours à tester.
4. **Prototypage**, un écran à la fois : copie du wireframe, import passé au design system, vrais contenus.
5. **Accessibilité** : clavier seul, zoom 200 %, mobile, audit automatique si disponible.
6. **Protocole** de test d'utilisabilité.
7. **Retours** vers le design system, les wireframes, l'architecture et le backlog, appliqués seulement avec votre accord.
8. **Relecture** : `bun run verifier`, `bun run build`.
9. **Clôture** : bilan, partage, test à mener.

## Livrables
```
docs/09-prototypes/
├── 00-index.md                        jeu de données, écrans, parcours, accessibilité, retours
└── 01-test-utilisabilite.md           protocole (résultats à remplir après le test)

web/
├── src/prototypes/donnees/            donnees.ts (jeu fictif), formats.ts (montants, dates)
├── src/prototypes/ecrans/02-espace-client/EC04-suivi-des-demandes.tsx
├── src/prototypes/registre.ts
└── tests/prototypes.test.tsx
```

## Voir les prototypes
```
cd web
bun run dev          /#/prototypes (revue)   /#/test/EC04 (mode test, sans barre de revue)
bun run verifier     types + tests
bun run build        version statique dans web/dist/
```

## Passer d'un wireframe au prototype
```tsx
import { Bouton, Gabarit } from '../../kit/kit';                       // wireframe
import { Bouton, Gabarit } from '../../../design-system/composants';   // prototype
```
Puis vrais contenus depuis `donnees.ts`, formatés par `formats.ts`.

## Points bloquants
- `bun run verifier` passe : chaque écran maquetté est prototypé avec ses états, contenus réels, aucune trace du kit, parcours cliquables.
- Chaque parcours `Must` du MVP se fait au clavier seul.

## Et ensuite ?
Mener le test d'utilisabilité avec de vrais participants, puis itérer en reprenant le skill concerné (flows, wireframes, design system ou prototypes).
