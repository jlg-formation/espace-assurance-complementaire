⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC50 — Décision d'invalidité (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : V2 · Appareil principal : tablette
> Wireframe : [EC50-decision-d-invalidite.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC50-decision-d-invalidite.tsx) · `bun run dev` puis `/#/wireframes/EC50` · Inventaire : [EC50](../../06-architecture-information/01-contenus.inventory.md#ec50) · Libellé : « Décision d'invalidité »
> Flows : [UF-07.02](../../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) `A1` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Connaître le taux, la rente en euros, sa date de début, et comment contester.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Taux et rente (titre) | Décision | L'information attendue | US-07.02 « Passage en invalidité » |
| 2 | Taux, rente, premier versement | Décision | Prévoir | US-07.02, T3 |
| 3 | Contester : délai et moyen | Décision | Droit de l'assuré | US-07.02 |
| 4 | « Être rappelé pour en parler » | — | Besoin d'en parler | US-07.02 « Besoin d'en parler » |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Être rappelé pour en parler | lien | `vers="EC51"` | UF-07.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-07.02 `A1` ; US-07.02 « Passage en invalidité » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Décision : taux, rente, date de début, contestation | ✅ | liste, bloc |
| Contester | ✅ | bloc « Vous n'êtes pas d'accord ? » |

## Retours

Aucun.
