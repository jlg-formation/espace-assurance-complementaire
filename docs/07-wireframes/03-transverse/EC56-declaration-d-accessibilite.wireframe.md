⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC56 — Déclaration d'accessibilité (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC56-declaration-d-accessibilite.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC56-declaration-d-accessibilite.tsx) · `bun run dev` puis `/#/wireframes/EC56` · Inventaire : [EC56](../../06-architecture-information/01-contenus.inventory.md#ec56) · Libellé : « Accessibilité »
> Flows : aucun (ajouté par l'architecture, obligation RGAA) · Personas : toutes

## Objectif
Connaître le niveau de conformité et pouvoir signaler un défaut.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | État de conformité (titre) et audit | — | Mention obligatoire | RGAA |
| 2 | Contenus non accessibles | — | Mention obligatoire | RGAA |
| 3 | Signaler un défaut | — | Voie de recours | RGAA |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Poser une question | lien | `vers="EC53"` | — |
| Être rappelé | lien | `vers="EC51"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | — |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Conformité, contenus non accessibles, contact | ✅ | titre, blocs |

## Retours

Aucun.
