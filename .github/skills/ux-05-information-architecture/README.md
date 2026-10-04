# ux-05-information-architecture — Manuel rapide

Organise et nomme les écrans des user flows : où ils se trouvent, comment on y arrive, comment ils s'appellent.

## Prérequis
Avoir lancé `/ux-04-user-flows` : flows et inventaire des écrans dans `docs/05-user-flows/`.

## Lancer
```
/ux-05-information-architecture                    toutes les zones
/ux-05-information-architecture espace adhérent    une seule zone
```

## Déroulé
1. **Inventaire** : objets métier (contrat, remboursement...) et écrans, classés *lieu* ou *contextuel*.
2. **Vocabulaire** : les mots des personas, tirés de la recherche.
3. **Esquisse** : zones, schéma d'organisation, rubriques, écrans de navigation manquants.
4. **Validation** : il vous présente l'organisation et les arbitrages de libellés.
5. **Rédaction** : arborescence, navigation, glossaire, protocole de test d'arborescence.
6. **Retours** vers les flows et le backlog, appliqués seulement avec votre accord.
7. **Clôture** : bilan et passage aux wireframes.

## Livrables
```
docs/06-architecture-information/
├── 00-index.md                          décisions, statut, écrans ajoutés, retours
├── 01-contenus.inventory.md             objets métier, écrans lieux / contextuels
├── 02-arborescence.sitemap.md           un diagramme Mermaid par zone
├── 03-navigation.nav.md                 systèmes de navigation, liens profonds, vérification par flow
├── 04-libelles.glossary.md              libellés, termes à éviter, définitions
└── 05-test-arborescence.treetest.md     protocole de test (à mener avec de vrais utilisateurs)
```

## Lire l'arborescence
| Forme | Signification |
|---|---|
| Rectangle `EC04 · Libellé` | Écran *lieu*, avec son libellé de navigation |
| Rectangle gras | Rubrique de menu sans écran propre |
| Pointillé gris | Écran hors MVP |
| Fond jaune | Écran ajouté par l'architecture, absent des flows |
| Cadre | Zone (site public, espace adhérent...) |

Les écrans *contextuels* (étapes, confirmations, erreurs) ne sont pas dans l'arbre : ils sont rattachés à leur écran parent dans l'inventaire.

## Points bloquants
- Chaque écran des flows est classé et conserve son identifiant.
- Chaque flow est atteignable depuis chacun de ses points d'entrée.

## Et ensuite ?
Mener le test d'arborescence avec de vrais utilisateurs → `/ux-06-wireframes` → design system → prototypes.
