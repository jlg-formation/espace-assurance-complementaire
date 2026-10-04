⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC18 — Récapitulatif avant signature (wireframe)

> Type : contextuel · Parent : [EC09](./EC09-formule-recommandee.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC18-recapitulatif-avant-signature.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC18-recapitulatif-avant-signature.tsx) · `bun run dev` puis `/#/wireframes/EC18` · Inventaire : [EC18](../../06-architecture-information/01-contenus.inventory.md#ec18) · Libellé : « Avant de signer »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) (étape 1) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
S'engager en sachant ce qui n'est pas couvert, les délais de carence et comment résilier.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Ce qui n'est pas couvert | Contrat | Éviter la mauvaise surprise au premier soin | US-02.05, `[SIM-P01][SIM-A01]` |
| 2 | Délais de carence, en dates | Contrat | Savoir quand on est couvert | US-02.05, T3 |
| 3 | Résilier plus tard, dont le cas d'une embauche | Contrat | Inquiétude de Manon | US-02.05 « Inquiétude sur la résiliation » |
| 4 | IPID remis | Contrat | Obligation | T6 |
| 5 | Bouton principal « Signer mon contrat » | — | Suite du flow | UF-02.03 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Signer mon contrat | bouton principal | `vers="EC19"` [fiche](./EC19-signature-electronique.wireframe.md) | UF-02.03 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.03 `HP`, `A3` ; US-02.05 « Récapitulatif avant signature », « Inquiétude sur la résiliation » |

## Annotations

1. L'IPID et les conditions de résiliation sont remis avant la signature (T6) ; ils sont aussi joints au contrat.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Contrat : non couvert, carences, résiliation | ✅ | trois blocs |
| IPID | ✅ | mention et annotation |
| Signer | ✅ | bouton principal |

## Retours

Aucun.
