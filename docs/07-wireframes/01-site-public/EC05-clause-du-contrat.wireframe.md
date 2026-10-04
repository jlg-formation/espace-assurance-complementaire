⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC05 — Clause du contrat (wireframe)

> Type : contextuel · Parent : [EC03](./EC03-formules-prevoyance-comparees.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC05-clause-du-contrat.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC05-clause-du-contrat.tsx) · `bun run dev` puis `/#/wireframes/EC05` · Inventaire : [EC05](../../06-architecture-information/01-contenus.inventory.md#ec05) · Libellé : « Clause du contrat »
> Flows : [UF-01.02](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) `A2` · Personas : [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Lire la clause exacte sans parcourir 40 pages.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Titre et numéro de l'article | Contrat | Repère précis | US-01.02 « Document de référence » |
| 2 | Texte de la clause | Contrat | Vérification | `[SIM-P06]` |
| 3 | Lien de retour à la comparaison | — | Revenir au choix | UF-01.02 `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Revenir à la comparaison | lien | `vers="EC03"` | UF-01.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-01.02 `A2` ; US-01.02 « Document de référence » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Extrait des conditions générales | ✅ | texte |
| Revenir à la comparaison | ✅ | lien |

## Retours

Aucun.
