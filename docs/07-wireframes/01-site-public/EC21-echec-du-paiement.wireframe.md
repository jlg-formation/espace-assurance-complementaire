⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC21 — Échec du paiement (wireframe)

> Type : contextuel · Parent : [EC20](./EC20-paiement.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC21-echec-du-paiement.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC21-echec-du-paiement.tsx) · `bun run dev` puis `/#/wireframes/EC21` · Inventaire : [EC21](../../06-architecture-information/01-contenus.inventory.md#ec21) · Libellé : « Échec du paiement »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) `E2`, `E3` · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Comprendre pourquoi le prélèvement a échoué et corriger, ou finir avec un conseiller.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Raison de l'échec, en clair, et ce qui est conservé | — | Ne pas tout recommencer | US-02.07 « Échec du paiement » |
| 2 | Bouton principal « Corriger mes coordonnées bancaires » | — | Issue `E2` | UF-02.03 `E2` |
| 3 | « Être rappelé » | — | Issue `E3` | UF-02.03 `E3` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Corriger mes coordonnées bancaires | bouton principal | `vers="EC20"` | UF-02.03 `E2` |
| Être rappelé | lien | `vers="EC51"` | UF-02.03 `E3` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.03 `E2`, `E3` ; US-02.07 « Échec du paiement » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Raison de l'échec | ✅ | alerte |
| Corriger | ✅ | bouton principal |
| Demander un rappel | ✅ | lien |

## Retours

Aucun.
