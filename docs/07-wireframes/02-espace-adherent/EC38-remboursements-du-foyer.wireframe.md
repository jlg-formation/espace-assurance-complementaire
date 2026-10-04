⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC38 — Remboursements du foyer (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : ordinateur (version mobile lisible)
> Wireframe : [EC38-remboursements-du-foyer.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC38-remboursements-du-foyer.tsx) · `bun run dev` puis `/#/wireframes/EC38` · Inventaire : [EC38](../../06-architecture-information/01-contenus.inventory.md#ec38) · Libellé : « Mes remboursements »
> Flows : [UF-05.01](../../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Retrouver à quel soin correspond un virement, ou si un soin a été remboursé.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Recherche par montant de virement, date ou membre du foyer | Soin et remboursement | Sylvie part de son relevé bancaire | US-05.01, `[SIM-P03][SIM-S01]` |
| 2 | Liste par soin : date, bénéficiaire, payé, remboursé, reste à charge, date du virement | Soin et remboursement | Classement par date de soin, pas de traitement | `[SIM-A02]` |
| 3 | Soins en attente avec date prévue | Soin | État souvent oublié | US-05.01 `A2` |
| 4 | Sous-navigation de Ma santé : Estimer un soin, Ma carte de mutuelle | — | Navigation locale | navigation |

**Replié, renvoyé ou supprimé** : décomptes PDF → lien par virement.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Rechercher | bouton | `vers="EC38" etat="recherche"` | UF-05.01 `HP` |
| Ouvrir un soin | lien | `vers="EC39"` [fiche](./EC39-detail-d-un-soin.wireframe.md) | UF-05.01 `HP`, `A1` |
| Estimer un soin, Ma carte de mutuelle | navigation locale | EC31, EC40 | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Soins remboursés et en attente | UF-05.01 `A1`, `A2` ; US-05.01 « Remboursements retrouvés par soin », « Soin pas encore remboursé » |
| Recherche | `recherche` | Virement de 112,40 € décomposé en 2 soins | UF-05.01 `HP` ; US-05.01 « Virement reçu sur le compte bancaire » |
| Vide | `vide` | Aucun remboursement | premier usage |

## Annotations

1. Liste classée par date de soin, et non de traitement (`[SIM-A02]`).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Soin : liste par soin, bénéficiaire, virement | ✅ | liste |
| Rechercher par montant, date, bénéficiaire | ✅ | champs et bouton |

## Retours

Aucun.
