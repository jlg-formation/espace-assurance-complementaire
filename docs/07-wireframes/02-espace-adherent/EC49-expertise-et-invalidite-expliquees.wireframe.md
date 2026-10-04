⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC49 — Expertise et invalidité expliquées (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : V2 · Appareil principal : tablette
> Wireframe : [EC49-expertise-et-invalidite-expliquees.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC49-expertise-et-invalidite-expliquees.tsx) · `bun run dev` puis `/#/wireframes/EC49` · Inventaire : [EC49](../../06-architecture-information/01-contenus.inventory.md#ec49) · Libellé : « Expertise et invalidité »
> Flows : [UF-07.02](../../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) (étape 2) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Comprendre l'expertise sans panique : pourquoi, comment, ce qui peut en résulter, et le sort des indemnités.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Date de l'expertise (titre) | expertise | Repère | US-07.02 |
| 2 | Pourquoi, comment, ce qui peut en résulter | expertise | « Plus d'argent ou moins ? » | US-07.02 « Convocation à une expertise », `[SIM-P07]` |
| 3 | Indemnités pendant l'examen | Indemnité | Le stress porte sur l'argent | US-07.02 |
| 4 | Bouton principal « Être rappelé par un gestionnaire » | — | Besoin d'en parler | UF-07.02 `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Être rappelé par un gestionnaire | bouton principal | `vers="EC51"` | UF-07.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-07.02 `HP`, `A2` ; US-07.02 « Convocation à une expertise », « Besoin d'en parler » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Expertise : motif, déroulement, suites, indemnités | ✅ | quatre blocs |
| Demander un rappel | ✅ | bouton principal |

## Retours

Aucun.
