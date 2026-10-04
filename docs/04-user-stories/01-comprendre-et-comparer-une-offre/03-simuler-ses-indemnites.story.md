⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-01.03 — Simuler ce que je toucherais en cas d'arrêt ou d'invalidité

> Épopée : [01 Comprendre et comparer une offre](./00-comprendre-et-comparer-une-offre.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** savoir combien je toucherais chaque mois, du régime obligatoire et de l'assureur, si j'étais arrêtée ou invalide **afin de** choisir un niveau de garantie qui couvre réellement mes charges.

## Origine
- Opportunité : O21 — moment de vérité
- Parcours : [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étape Simuler sa couverture
- Sources : `[SIM-P04][SIM-P05][SIM-P06][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Simulation d'un arrêt de travail
  Étant donné qu'Hélène indique un revenu annuel de 42 000 €, son statut de profession libérale et une franchise de 30 jours
  Quand elle simule un arrêt de 90 jours
  Alors elle connaît le montant versé par le régime obligatoire, le montant versé par l'assureur et ce qui reste non couvert, en euros
  Et elle sait qu'aucune indemnité de l'assureur n'est versée pendant les 30 premiers jours

Scénario: Effet d'un revenu garanti sous-évalué
  Étant donné qu'Hélène indique un revenu garanti inférieur à son revenu réel
  Quand elle simule un arrêt
  Alors elle voit l'écart entre ce qu'elle toucherait et son revenu réel
  Et elle peut ajuster le revenu garanti pour voir l'effet sur la cotisation

Scénario: Simulation d'une invalidité
  Étant donné qu'Hélène simule une invalidité à 66 %
  Quand elle consulte le résultat
  Alors elle connaît le montant mensuel de la rente selon le barème de la formule

Scénario: Arrivée par le lien d'un intermédiaire
  Étant donné que Manon reçoit de son courtier un lien avec une formule et une franchise déjà choisies
  Quand elle ouvre la simulation
  Alors elle connaît ce qu'elle toucherait avec ces options, en euros
  Et elle peut modifier les options pour comparer
```

## Notes
- **Contraintes** : résultat indicatif ; les plafonds du régime obligatoire sont mis à jour chaque année.
- **Hors périmètre** : calcul exact du régime obligatoire de chaque caisse (approximation par statut).
- **Hypothèses** : la même simulation sert à Manon et Sylvie lorsqu'elles sont indépendantes ou conjointes d'indépendant `[SIM-P04][SIM-P05]`.

## User flows
- [UF-01.02 Choisir une prévoyance en connaissant le montant net](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md)
