⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.06 — Consentir au traitement de mes données de santé

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : ⚪ hypothèse

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** savoir à quoi serviront mes données de santé, qui les lira et combien de temps elles seront conservées avant de donner mon accord **afin de** les confier en confiance.

## Origine
- Opportunité : O29 — contrainte
- Parcours : [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étape Remplir le questionnaire de santé
- Sources : `contrainte` (RGPD, données de santé) ; inquiétude observée `[SIM-P06]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Consentement éclairé
  Étant donné qu'Hélène va répondre au questionnaire de santé
  Quand son consentement lui est demandé
  Alors elle sait quelles données sont collectées, dans quel but, qui y a accès et combien de temps elles sont conservées
  Et son consentement est enregistré avec sa date

Scénario: Refus du consentement
  Étant donné qu'Hélène refuse de consentir au traitement de ses données de santé
  Quand elle poursuit
  Alors elle est informée que la souscription d'une prévoyance n'est pas possible sans ces données
  Et aucune donnée de santé n'est enregistrée

Scénario: Retrouver son consentement
  Étant donné qu'Hélène a souscrit
  Quand elle veut savoir à quoi elle a consenti
  Alors elle retrouve son consentement et la façon d'exercer ses droits sur ses données
```

## Notes
- **Contraintes** : T2 ; consentement explicite et distinct des autres consentements.
- **Hors périmètre** : exercice des droits RGPD (demande d'accès, d'effacement), traité par un processus dédié.
- **Hypothèses** : aucune donnée de recherche sur le consentement lui-même.

## User flows
- [UF-02.02 Répondre au questionnaire de santé de la prévoyance](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md)
