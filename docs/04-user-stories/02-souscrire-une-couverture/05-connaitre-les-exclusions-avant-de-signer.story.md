⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.05 — Savoir ce qui n'est pas couvert avant de signer

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟡 partiel

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** connaître, juste avant de signer, les exclusions, les délais de carence et les conditions de résiliation de ma formule **afin de** m'engager sans découvrir plus tard ce que je n'avais pas vu.

## Origine
- Opportunités : O05 — opportunité ; O23 — friction
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Souscrire
- Sources : `[SIM-P01][SIM-P06][SIM-A01]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T6, T7.

```gherkin
# language: fr
Scénario: Récapitulatif avant signature
  Étant donné que Manon a choisi la formule Essentielle
  Quand elle s'apprête à signer
  Alors elle connaît les principaux soins non couverts, les délais de carence et la date à partir de laquelle elle pourra résilier
  Et le document d'information normalisé lui a été remis

Scénario: Exclusion ou surprime après le questionnaire de santé
  Étant donné que les réponses de Manon au questionnaire de santé de sa prévoyance entraînent une exclusion des troubles du dos
  Quand la proposition lui est faite
  Alors elle connaît l'exclusion et sa portée avant de signer
  Et elle peut refuser la proposition sans frais

Scénario: Inquiétude sur la résiliation
  Étant donné que Manon se demande si elle pourra résilier en cas d'embauche avec une mutuelle d'entreprise
  Quand elle consulte les conditions de résiliation
  Alors elle sait qu'elle peut résilier dans ce cas et comment
```

## Notes
- **Contraintes** : T6, IPID et conditions de résiliation remis avant signature.
- **Hors périmètre** : parcours de résiliation (exclu de la vision).
- **Hypothèses** : le scénario de résiliation repose sur un seul entretien `[SIM-P01]`.

## User flows
- [UF-02.03 Vérifier ce qui n'est pas couvert, signer et payer](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md)
