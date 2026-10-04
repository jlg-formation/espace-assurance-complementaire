⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC55 — Plan du site (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC55-plan-du-site.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC55-plan-du-site.tsx) · `bun run dev` puis `/#/wireframes/EC55` · Inventaire : [EC55](../../06-architecture-information/01-contenus.inventory.md#ec55) · Libellé : « Plan du site »
> Flows : aucun (ajouté par l'architecture, second système de navigation RGAA) · Personas : toutes

## Objectif
Atteindre n'importe quel lieu du site sans passer par la navigation principale.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Site public | — | Ordre des zones | [arborescence](../../06-architecture-information/02-arborescence.sitemap.md) |
| 2 | Mon espace, par rubrique | — | Ordre des zones | arborescence |
| 3 | Aide et informations | — | Ordre des zones | arborescence |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Liens vers chaque lieu | liens | tous les lieux MVP | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | — |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Liste des lieux par zone | ✅ | trois colonnes |

## Retours

Aucun.
