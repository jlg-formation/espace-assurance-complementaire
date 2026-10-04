# ux-06-wireframes — Manuel rapide

Transforme chaque écran de l'inventaire en wireframe basse fidélité : un écran React en niveaux de gris dans l'application `web/` (Bun + Vite + TypeScript + React), cliquable selon les user flows, et une fiche d'annotations Markdown.

## Prérequis
- Avoir lancé `/ux-05-information-architecture` : inventaire des contenus, arborescence, navigation et glossaire dans `docs/06-architecture-information/`.
- [Bun](https://bun.sh) installé.

## Lancer
```
/ux-06-wireframes                     tous les écrans
/ux-06-wireframes espace client       une zone
/ux-06-wireframes EC04                un écran
```

## Déroulé
1. **Socle** : création de `web/` si besoin, puis inventaire, zones et parcours recopiés depuis l'architecture et les flows.
2. **Gabarits** : en-tête, navigation et pied de page de chaque zone, mobile et ordinateur.
3. **Hiérarchie** du contenu des écrans clés.
4. **Validation** : il vous présente les gabarits et les hiérarchies.
5. **Maquettage**, un écran à la fois : fiche, composant React, liens vers les écrans suivants, états.
6. **Retours** vers l'architecture, les flows, le backlog et le kit, appliqués seulement avec votre accord.
7. **Relecture** : `bun run verifier` (types et tests).
8. **Clôture** : bilan, parcours cliquables, passage au design system.

## Livrables
```
docs/07-wireframes/
├── 00-index.md                                gabarits, écrans, parcours cliquables, retours
└── 02-espace-client/
    └── EC04-suivi-des-demandes.wireframe.md        fiche : hiérarchie, actions, états, annotations

web/
├── src/projet/                                ecrans.ts, zones.ts, parcours.ts : miroirs de l'architecture et des flows
├── src/wireframes/kit/                        kit de wireframes (copie conforme du skill)
├── src/wireframes/ecrans/02-espace-client/EC04-suivi-des-demandes.tsx
├── src/wireframes/registre.ts                 écrans maquettés et leurs états
└── tests/wireframes.test.tsx                  inventaire, états, parcours cliquables
```

## Voir les wireframes
```
cd web
bun run dev          puis ouvrir /#/wireframes
bun run verifier     types + tests
```
- La **barre hachurée** en haut n'appartient pas à l'interface : elle mène à la galerie, à la fiche et aux **états** de l'écran (vide, erreur...).
- Les **cercles numérotés en pointillé** renvoient aux annotations de la fiche.
- Un **cadre barré** est un emplacement d'image ; des **lignes grises**, un long texte.
- Réduire la fenêtre à 375 px pour voir la version mobile.

## Points bloquants
- `bun run verifier` passe : chaque écran est maquetté, un seul titre par état, chaque happy path se parcourt en cliquant.
- Chaque écran a sa fiche ; chaque contenu et chaque action de l'inventaire est sur l'écran.

## Et ensuite ?
Tester les parcours cliquables avec quelques vrais utilisateurs → `/ux-07-design-system` (mêmes composants, habillés) → prototypes.
