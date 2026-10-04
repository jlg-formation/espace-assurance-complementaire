⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.04 — Interrompre et reprendre le questionnaire de santé

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Should · Version : V2 · Confiance : 🟡 partiel

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** pouvoir m'arrêter au milieu du questionnaire de santé et le reprendre plus tard là où j'en étais **afin de** prendre le temps de répondre sans tout recommencer.

## Origine
- Opportunité : O22 — moment de vérité
- Parcours : [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étape Remplir le questionnaire de santé
- Sources : `[SIM-P06][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Reprise après une interruption
  Étant donné qu'Hélène a répondu à 6 questions sur 12
  Quand elle revient 10 jours plus tard
  Alors elle reprend à la 7e question
  Et ses 6 premières réponses sont conservées

Scénario: Tarif expiré pendant l'interruption
  Étant donné qu'Hélène a interrompu son questionnaire depuis plus longtemps que la durée de validité de son tarif
  Quand elle revient
  Alors elle est informée que le tarif a pu changer
  Et elle connaît le nouveau tarif avant de continuer

Scénario: Réponses conservées de façon confidentielle
  Étant donné qu'Hélène interrompt son questionnaire
  Quand ses réponses sont conservées
  Alors elles ne sont accessibles qu'à elle-même et au service médical
  Et elles sont supprimées si elle ne reprend pas le questionnaire dans le délai annoncé
```

## Notes
- **Contraintes** : T2 ; durée de conservation des réponses partielles à fixer (RGPD, minimisation).
- **Hors périmètre** : aucun.
- **Hypothèses** : V2, parce que le MVP suppose un questionnaire court ; à revoir si le taux d'interruption est élevé.

## User flows
- [UF-02.02 Répondre au questionnaire de santé de la prévoyance](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md)
