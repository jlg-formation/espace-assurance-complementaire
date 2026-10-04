⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-08.02 — Poser une question écrite et savoir quand j'aurai la réponse

> Épopée : [08 Être accompagné par un conseiller](./00-etre-accompagne-par-un-conseiller.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Should · Version : MVP · Confiance : ⚪ hypothèse

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** envoyer une question écrite et savoir sous quel délai j'aurai la réponse **afin de** garder une trace de mes échanges, comme dans mon classeur, sans devoir appeler.

## Origine
- Opportunité : O35 — vision
- Parcours : aucune étape de journey map (décision de validation : contact minimal de la vision)
- Sources : `vision` (formulaire de contact) ; comportement de classement des courriers `[SIM-P07]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T5, T7.

```gherkin
# language: fr
Scénario: Question envoyée
  Étant donné que Sylvie a une question sur une attestation
  Quand elle envoie sa question en précisant le contrat concerné
  Alors elle reçoit un accusé de réception avec le délai de réponse prévu
  Et elle peut retrouver sa question et la réponse plus tard

Scénario: Question contenant des informations de santé
  Étant donné que Sylvie mentionne une information médicale dans sa question
  Quand elle l'envoie
  Alors elle est informée que les informations médicales doivent être transmises au service médical
  Et elle sait comment le faire

Scénario: Réponse en retard
  Étant donné que le délai de réponse annoncé est dépassé
  Quand Sylvie consulte sa question
  Alors elle connaît la nouvelle date prévue
```

## Notes
- **Contraintes** : T2 ; ce n'est pas une messagerie sécurisée (exclue de la vision), d'où la redirection des informations médicales.
- **Hors périmètre** : chat en direct.
- **Hypothèses** : besoin issu de la vision, aucun récit de participant ⚪.

## User flows
- [UF-08.02 Poser une question écrite et suivre la réponse](../../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md)
