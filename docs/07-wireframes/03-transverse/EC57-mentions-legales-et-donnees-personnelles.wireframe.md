⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC57 — Mentions légales et données personnelles (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC57-mentions-legales-et-donnees-personnelles.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC57-mentions-legales-et-donnees-personnelles.tsx) · `bun run dev` puis `/#/wireframes/EC57` · Inventaire : [EC57](../../06-architecture-information/01-contenus.inventory.md#ec57) · Libellé : « Mentions légales et données personnelles »
> Flows : aucun (ajouté par l'architecture, obligations légales et RGPD) · Personas : toutes

## Objectif
Savoir qui édite le site, comment sont protégées les données de santé et comment exercer ses droits.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Éditeur du site | — | Mention obligatoire | LCEN |
| 2 | Données de santé : hébergement, accès | — | Confiance | T2, RGPD |
| 3 | Vos droits, avec lien pour les exercer | — | Droit de l'assuré | RGPD |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Exercer mes droits | lien | `vers="EC53"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | — |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Éditeur, données de santé, droits | ✅ | trois blocs |

## Retours

Aucun.
