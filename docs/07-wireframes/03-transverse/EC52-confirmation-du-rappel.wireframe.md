⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC52 — Confirmation du rappel (wireframe)

> Type : contextuel · Parent : [EC51](./EC51-demande-de-rappel.wireframe.md) · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC52-confirmation-du-rappel.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC52-confirmation-du-rappel.tsx) · `bun run dev` puis `/#/wireframes/EC52` · Inventaire : [EC52](../../06-architecture-information/01-contenus.inventory.md#ec52) · Libellé : « Rappel confirmé »
> Flows : [UF-08.01](../../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) (étape 2) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Savoir quand et à quel numéro on sera rappelée, sans avoir à tout réexpliquer.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Créneau confirmé (titre) | Rappel | L'information attendue | US-08.01 |
| 2 | Numéro et dossier connu du conseiller | Rappel | Ne pas tout réexpliquer | US-08.01 « Rappel demandé sur un dossier », `[SIM-P07]` |
| 3 | « Changer de créneau » | — | Imprévu | US-08.01 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Changer de créneau | lien | `vers="EC51"` | — |
| Retour à mon espace | lien | `vers="EC27"` | fin de UF-08.01 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-08.01 `HP`, `A1`, `V1` ; US-08.01 « Rappel demandé sur un dossier » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Rappel : créneau, numéro | ✅ | titre, alerte |
| Modifier | ✅ | lien |

## Retours

Aucun.
