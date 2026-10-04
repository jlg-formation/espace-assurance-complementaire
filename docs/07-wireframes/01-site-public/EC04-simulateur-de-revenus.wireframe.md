⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC04 — Simulateur de revenus en cas d'arrêt ou d'invalidité (wireframe)

> Type : lieu · Parent : — · Zone : Site public · Version : MVP · Appareil principal : ordinateur (version mobile lisible)
> Wireframe : [EC04-simulateur-de-revenus.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC04-simulateur-de-revenus.tsx) · `bun run dev` puis `/#/wireframes/EC04` · Inventaire : [EC04](../../06-architecture-information/01-contenus.inventory.md#ec04) · Libellé : « Simuler une perte de revenus »
> Flows : [UF-01.02](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) (étape 3), [UF-05.04](../../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) `A1` · Personas : [Hélène](../../02-persona/03-helene.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Savoir combien on toucherait, du régime obligatoire et de Clarea, et ce qui manquerait.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Paramètres : revenu, revenu garanti, statut, franchise, situation | Simulation | Données d'entrée connues d'Hélène | US-01.03 |
| 2 | Résultat : régime obligatoire, Clarea, ce qui manque, en euros | Simulation | Le chiffre que personne n'a | US-01.03, `[SIM-P06][SIM-S02]` |
| 3 | Alerte si revenu garanti sous-évalué | Simulation | Erreur fréquente (sous-déclaration) | US-01.03 `A3`, `[SIM-P05]` |
| 4 | Bouton principal « Obtenir un tarif » | — | Suite du flow | UF-01.02 `HP` |

**Replié, renvoyé ou supprimé** : détail du calcul du régime obligatoire → non affiché (approximation par statut).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Simuler | bouton (agit) | même écran | UF-01.02 `HP`, `A3`, `A4` |
| Obtenir un tarif | bouton principal | `vers="EC06"` [fiche](./EC06-demande-de-tarif.wireframe.md) | UF-01.02 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Arrêt de 90 jours | UF-01.02 `HP` ; US-01.03 « Simulation d'un arrêt de travail » |
| Revenu sous-évalué | `sous-evalue` | Revenu garanti 30 000 €, alerte et effet sur la cotisation | UF-01.02 `A3`, UF-05.04 `A1` ; US-01.03 « Effet d'un revenu garanti sous-évalué » |
| Invalidité | `invalidite` | Rente mensuelle selon le barème | UF-01.02 `A4` ; US-01.03 « Simulation d'une invalidité » |
| Lien d'un courtier | `courtier` | Options préchoisies annoncées | UF-01.02 `V1` ; US-01.03 « Arrivée par le lien d'un intermédiaire » |

## Annotations

1. Pendant la franchise, aucune indemnité de Clarea : le résultat le rappelle en clair.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Simulation : régime obligatoire, assureur, part non couverte | ✅ | bloc résultat |
| Simuler | ✅ | bouton |
| Ajuster le revenu garanti | ✅ | champ « Revenu garanti », état `sous-evalue` |

## Retours

Aucun.
