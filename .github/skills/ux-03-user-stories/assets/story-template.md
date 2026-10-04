# US-{NN}.{SS} — {titre court}

> Épopée : [{NN} {Épopée}](./00-{epopee}.epic.md) · Persona : [{Prénom}](../../02-persona/{NN}-{prenom}.persona.md)
> MoSCoW : {Must / Should / Could} · Version : {MVP / V2 / Plus tard} · Confiance : {🟢 fondé / 🟡 partiel / ⚪ hypothèse}

**En tant que** {Prénom}, {rôle}, **je veux** {action ou information, sans solution d'interface} **afin de** {bénéfice}.

## Origine
- Opportunité : {O03} — {friction / opportunité / moment de vérité / implication}
- Parcours : [{parcours}](../../03-customer-journey-map/{NN}-{prenom}.cjm.md#{ancre}) — étape {...}
- Sources : `[P02][P05]` *(ou `vision` / `contrainte` pour une exigence hors recherche)*

## Critères d'acceptation

```gherkin
# language: fr
Scénario: {chemin nominal}
  Étant donné que {contexte}
  Quand {action du persona}
  Alors {résultat attendu}

Scénario: {cas d'erreur ou alternatif}
  Étant donné que {contexte}
  Quand {événement}
  Alors {comportement attendu}
```

## Notes
- **Contraintes** : {accessibilité, données de santé, consentement...}
- **Hors périmètre** : {...}
- **Hypothèses** : {...}

## User flows
<!-- Rempli par ux-04-user-flows. -->
