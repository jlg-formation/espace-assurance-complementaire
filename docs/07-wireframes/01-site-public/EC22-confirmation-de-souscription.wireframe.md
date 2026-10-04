⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC22 — Confirmation de souscription (wireframe)

> Type : contextuel · Parent : [EC20](./EC20-paiement.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC22-confirmation-de-souscription.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC22-confirmation-de-souscription.tsx) · `bun run dev` puis `/#/wireframes/EC22` · Inventaire : [EC22](../../06-architecture-information/01-contenus.inventory.md#ec22) · Libellé : « Vous êtes couvert »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) (étape 4) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Savoir à partir de quand on est couvert et où trouver contrat et carte.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Date de début de couverture (titre) | Contrat : date d'effet | Information attendue | US-02.07 « Souscription terminée » |
| 2 | Contrat, carte, première cotisation | Contrat ; carte | Suite pratique | US-02.07 |
| 3 | Bouton principal « Accéder à mon espace » | — | Suite | UF-03.01 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Accéder à mon espace | bouton principal | `vers="EC23"` | fin de UF-02.03 → UF-03.01 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.03 `HP` ; US-02.07 « Souscription terminée » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Contrat : date d'effet | ✅ | titre |
| Carte | ✅ | liste |
| Accéder à son espace | ✅ | bouton principal |

## Retours

Aucun.
