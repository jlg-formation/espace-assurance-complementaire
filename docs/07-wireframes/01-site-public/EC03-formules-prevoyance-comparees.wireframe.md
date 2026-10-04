⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC03 — Formules prévoyance comparées (wireframe)

> Type : lieu · Parent : — · Zone : Site public · Version : MVP · Appareil principal : ordinateur (version mobile lisible)
> Wireframe : [EC03-formules-prevoyance-comparees.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC03-formules-prevoyance-comparees.tsx) · `bun run dev` puis `/#/wireframes/EC03` · Inventaire : [EC03](../../06-architecture-information/01-contenus.inventory.md#ec03) · Libellé : « Prévoyance »
> Flows : [UF-01.02](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) (étape 2) · Personas : [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Comparer les formules de prévoyance sur ce qui compte vraiment, sans lire les conditions générales.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Comparaison : franchise, indemnités journalières, rente d'invalidité, barème, exclusions fréquentes | Formule | Information enfouie aujourd'hui | US-01.02, `[SIM-P06]` |
| 2 | Lien « Simuler une perte de revenus » | Simulation | Le chiffre que personne n'a | US-01.03 |
| 3 | Bouton principal « Obtenir un tarif pour cette formule » | Tarif | Suite du flow | UF-01.02 `HP` |
| 4 | Exemple chiffré du barème professionnel ou fonctionnel | — | Barème incompris | US-01.02 `A1` |
| 5 | Lien vers la clause précise | Contrat | Vérifier un point | US-01.02 `A2` |

**Replié, renvoyé ou supprimé** : conditions générales complètes → lien vers le PDF en bas d'écran.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Simuler une perte de revenus | lien | `vers="EC04"` [fiche](./EC04-simulateur-de-revenus.wireframe.md) | UF-01.02 `HP` |
| Lire la clause | lien | `vers="EC05"` [fiche](./EC05-clause-du-contrat.wireframe.md) | UF-01.02 `A2` |
| Obtenir un tarif pour cette formule | bouton principal | `vers="EC06"` | UF-01.02 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-01.02 `HP`, `A1` ; US-01.02 « Paramètres clés de chaque formule », « Barème expliqué par un exemple » |

## Annotations

1. Tableau HTML non mis en forme : le kit n'a pas de composant tableau (retour vers le kit). Sur mobile, la première colonne reste visible.
2. Les conditions générales complètes restent téléchargeables, sans être la source principale d'information.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Franchise, indemnités, rente, barème, exclusions types | ✅ | tableau |
| Comparer | ✅ | tableau |
| Lire une clause | ✅ | lien EC05 |
| Simuler | ✅ | lien EC04 |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| kit | composant manquant | tableau | Ajouter un composant `Tableau` (légende, en-têtes, lecture sur mobile) | voir index |
