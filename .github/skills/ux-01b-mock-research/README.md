# ux-01b-mock-research — Manuel rapide

> ⚠️ **Skill de simulation.** Il fabrique de fausses données de recherche pour aller plus vite. Elles ne décrivent personne de réel et n'ont aucune valeur de preuve.

Remplace la collecte terrain quand on n'a pas le temps de mener de vrais entretiens.

## Prérequis
Avoir lancé `/ux-01-discovery` (vision, proto-personas, plan de recherche et guide d'entretien présents dans `docs/`).

## Lancer
```
/ux-01b-mock-research
```

## Déroulé
1. Le skill lit le plan de recherche et le guide d'entretien.
2. Il vous demande :
   - combien d'entretiens par segment (4 à 6 recommandés) ;
   - quelles sources ajouter (enquête, avis, statistiques).
3. Il crée un panel de participants fictifs, puis génère les données.

## Livrables
```
docs/research/raw/
├── 00-mock-research.md     manifeste : signale à ux-02 que les données sont simulées
├── SIM-P01-<segment>.md    entretiens simulés
├── SIM-Q-<nom>.csv         enquête simulée (optionnel)
├── SIM-A01-<type>.md       avis simulés (optionnel)
└── SIM-S01-<sujet>.md      statistiques fictives (optionnel)
```

## Conseil
Lisez quelques entretiens : comme sur le terrain, ils contiennent des contradictions et des hors-sujets.

## Et ensuite ?
```
/ux-02-research-synthesis
```
