⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC16 — Tarif mis à jour (wireframe)

> Type : contextuel · Parent : [EC14](./EC14-questionnaire-de-sante.wireframe.md) · Zone : Site public · Version : V2 · Appareil principal : ordinateur
> Wireframe : [EC16-tarif-mis-a-jour.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC16-tarif-mis-a-jour.tsx) · `bun run dev` puis `/#/wireframes/EC16` · Inventaire : [EC16](../../06-architecture-information/01-contenus.inventory.md#ec16) · Libellé : « Tarif mis à jour »
> Flows : [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) `A3` · Personas : [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Connaître le nouveau tarif avant de reprendre le questionnaire.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Ancien et nouveau tarif | Tarif | Décider en connaissance de cause | US-02.04 « Tarif expiré pendant l'interruption » |
| 2 | Bouton principal « Continuer le questionnaire » ; « Comparer à nouveau » | — | Issues | UF-02.02 `A3` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Continuer le questionnaire | bouton principal | `vers="EC14" etat="reprise"` | UF-02.02 `A3` |
| Comparer à nouveau | bouton | `vers="EC03"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.02 `A3` ; US-02.04 « Tarif expiré pendant l'interruption » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Tarif : nouveau prix | ✅ | liste |
| Continuer | ✅ | bouton principal |

## Retours

Aucun.
