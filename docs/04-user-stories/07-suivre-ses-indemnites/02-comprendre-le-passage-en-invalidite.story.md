⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-07.02 — Comprendre un passage vers l'invalidité ou une expertise

> Épopée : [07 Suivre ses indemnités](./00-suivre-ses-indemnites.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Should · Version : V2 · Confiance : 🟡 partiel

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** comprendre ce qu'est l'expertise médicale demandée pour mon conjoint et ce qu'un passage en invalidité changerait pour nos revenus **afin de** l'aborder sans panique et de préparer la suite.

## Origine
- Opportunité : O17 — moment de vérité
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Après plusieurs mois
- Sources : `[SIM-P07][SIM-A03]`

## Critères d'acceptation
Exigences transverses : T1, T2, T3, T4, T7.

```gherkin
# language: fr
Scénario: Convocation à une expertise
  Étant donné que le conjoint de Sylvie est convoqué à une expertise médicale
  Quand Sylvie cherche à comprendre cette convocation
  Alors elle sait pourquoi l'expertise est demandée, comment elle se déroule et ce qui peut en résulter
  Et elle sait que les indemnités continuent pendant ce temps, ou pourquoi elles s'arrêteraient

Scénario: Passage en invalidité
  Étant donné que l'expertise conclut à un taux d'invalidité de 40 %
  Quand la décision est communiquée
  Alors Sylvie connaît le montant mensuel de la rente en euros et sa date de début
  Et elle sait comment contester la décision et dans quel délai

Scénario: Besoin d'en parler
  Étant donné que Sylvie reste inquiète après ces explications
  Quand elle demande à être rappelée
  Alors un gestionnaire qui connaît le dossier la rappelle
```

## Notes
- **Contraintes** : T2, les conclusions médicales détaillées restent réservées à l'assuré et au service médical.
- **Arbitrage** : Should en V2, car la situation est moins fréquente que l'arrêt simple ; un contournement existe au MVP (rappel par un conseiller, US-08.01).
- **Hypothèses** : thème porté par 1 entretien et des avis 🟡.

## User flows
- [UF-07.02 Comprendre une expertise ou un passage en invalidité](../../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md)
