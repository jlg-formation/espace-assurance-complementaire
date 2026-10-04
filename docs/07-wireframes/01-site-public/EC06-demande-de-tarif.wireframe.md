⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC06 — Demande de tarif (wireframe)

> Type : lieu · Parent : — · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC06-demande-de-tarif.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC06-demande-de-tarif.tsx) · `bun run dev` puis `/#/wireframes/EC06` · Inventaire : [EC06](../../06-architecture-information/01-contenus.inventory.md#ec06) · Libellé : « Obtenir un tarif »
> Flows : [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) (étape 1) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Obtenir un prix en donnant seulement ce qui sert au calcul.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Engagement « Aucun e-mail ni téléphone demandé pour voir les prix » | — | Lever la crainte du démarchage avant de remplir | US-02.01, `[SIM-P01]` |
| 2 | Champs : offre, date de naissance, code postal, personnes à couvrir, régime obligatoire (avec aide) | Tarif | Seules informations nécessaires | US-02.01 |
| 3 | Bouton principal « Voir les tarifs » | — | Suite du flow | UF-02.01 `HP` |

**Replié, renvoyé ou supprimé** : situation professionnelle détaillée → supprimée (non nécessaire au tarif santé).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Voir les tarifs | bouton principal | `vers="EC07"` [fiche](./EC07-tarifs-des-formules.wireframe.md) | UF-02.01 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formulaire vide | UF-02.01 `HP`, `A1` ; US-02.01 « Tarif obtenu sans coordonnées », « Terme inconnu dans les informations demandées » |
| Prérempli | `prerempli` | Message et champs repris du devis | Lien profond depuis l'e-mail du devis (navigation) |

## Annotations

1. Aucun champ e-mail ni téléphone sur cet écran (T5).
2. Bouton de soumission dans l'interface réelle : le tarif est calculé puis affiché sur EC07.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Tarif : âge, code postal, bénéficiaires, régime | ✅ | champs |
| Obtenir un tarif | ✅ | bouton principal |

## Retours

Aucun.
