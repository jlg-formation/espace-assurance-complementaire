⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC39 — Détail d'un soin (wireframe)

> Type : contextuel · Parent : [EC38](./EC38-remboursements-du-foyer.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC39-detail-d-un-soin.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC39-detail-d-un-soin.tsx) · `bun run dev` puis `/#/wireframes/EC39` · Inventaire : [EC39](../../06-architecture-information/01-contenus.inventory.md#ec39) · Libellé : « Détail d'un soin »
> Flows : [UF-05.01](../../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) (étape 2) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Voir les parts remboursées et le reste à charge d'un soin, pour le rapprocher de la facture.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Soin, bénéficiaire, date (titre) | Soin | Repère | US-05.01 |
| 2 | Payé, Assurance Maladie, mutuelle, reste, virement | Soin et remboursement | Rapprochement | US-05.01 « Remboursements retrouvés par soin » |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Retour à mes remboursements | lien | `vers="EC38"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-05.01 `HP`, `A1` ; US-05.01 « Remboursements retrouvés par soin » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Soin : parts, reste à charge, virement | ✅ | liste |
| Revenir à la liste | ✅ | lien |

## Retours

Aucun.
