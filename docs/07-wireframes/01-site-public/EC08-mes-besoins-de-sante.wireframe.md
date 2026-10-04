⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC08 — Mes besoins de santé (wireframe)

> Type : contextuel · Parent : [EC07](./EC07-tarifs-des-formules.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC08-mes-besoins-de-sante.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC08-mes-besoins-de-sante.tsx) · `bun run dev` puis `/#/wireframes/EC08` · Inventaire : [EC08](../../06-architecture-information/01-contenus.inventory.md#ec08) · Libellé : « Mes besoins de santé »
> Flows : [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) (étape 3) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Indiquer en quelques réponses les soins qui comptent pour le foyer.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Quatre questions sur les soins prévus | besoins du foyer | Devoir de conseil, court pour ne pas faire fuir Manon | US-02.02 |
| 2 | Bouton principal « Voir la formule conseillée » | — | Suite du flow | UF-02.01 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Voir la formule conseillée | bouton principal | `vers="EC09"` [fiche](./EC09-formule-recommandee.wireframe.md) | UF-02.01 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.01 `HP` ; US-02.02 « Recommandation à partir des besoins » |

## Annotations

1. Quatre questions au plus (hypothèse de US-02.02 : risque d'abandon à tester). Le kit n'ayant pas de case à cocher, chaque soin est une liste de choix (retour vers le kit).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Besoins du foyer | ✅ | quatre champs |
| Indiquer ses soins prioritaires | ✅ | champs |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| kit | composant manquant | case à cocher | Ajouter `Choix` (cases à cocher ou boutons radio dans un `fieldset` avec légende) | voir index |
