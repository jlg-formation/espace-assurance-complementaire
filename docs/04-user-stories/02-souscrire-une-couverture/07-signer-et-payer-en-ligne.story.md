⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.07 — Signer et payer depuis mon téléphone

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟡 partiel

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** signer mon contrat et donner mes coordonnées de paiement d'une traite, depuis mon téléphone **afin d'**être couverte le soir même, sans me déplacer.

## Origine
- Opportunités : O06 — implication ; O31 — vision
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Souscrire
- Sources : `[SIM-P01][SIM-P02][SIM-A01]` ; `vision` (souscription en ligne)

## Critères d'acceptation
Exigences transverses : T1, T4, T6, T7.

```gherkin
# language: fr
Scénario: Souscription terminée
  Étant donné que Manon a choisi sa formule et reçu les documents précontractuels
  Quand elle signe et autorise le prélèvement
  Alors elle connaît la date de début de sa couverture
  Et elle reçoit son contrat et sa carte de tiers payant

Scénario: Code de signature non reçu ou expiré
  Étant donné que le code de signature n'arrive pas, ou arrive expiré
  Quand Manon demande un nouveau code
  Alors elle peut signer avec un autre moyen de réception
  Et les informations déjà saisies sont conservées

Scénario: Échec du paiement
  Étant donné que l'autorisation de prélèvement échoue
  Quand Manon est informée de l'échec
  Alors elle sait pourquoi et peut corriger ses coordonnées bancaires sans recommencer la souscription
  Et elle peut demander à être rappelée si elle préfère finir avec un conseiller
```

## Notes
- **Contraintes** : signature électronique à valeur probante ; T6.
- **Hors périmètre** : souscription en agence.
- **Hypothèses** : le moyen de réception alternatif (e-mail, appel vocal) reste à choisir.

## User flows
- [UF-02.03 Vérifier ce qui n'est pas couvert, signer et payer](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md)
