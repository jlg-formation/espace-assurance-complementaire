⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-05.01 — Relier chaque remboursement à un soin et à un membre du foyer

> Épopée : [05 Suivre ses remboursements et ses documents](./00-suivre-ses-remboursements.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Should · Version : MVP · Confiance : 🟡 partiel

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** savoir pour chaque soin du foyer s'il a été remboursé, combien et à qui **afin de** rapprocher les remboursements de mes factures sans tout recompter.

## Origine
- Opportunité : O33 — vision
- Parcours : aucune journey map (décision de validation) ; constats de la [synthèse](../../research/synthese.md) (H5)
- Sources : `vision` ; `[SIM-P03][SIM-P04][SIM-A02][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T2, T3, T4, T7.

```gherkin
# language: fr
Scénario: Remboursements retrouvés par soin
  Étant donné que la fille de Sylvie a consulté un dentiste le 3 septembre pour 70 €
  Quand Sylvie cherche ce soin
  Alors elle connaît la part de l'Assurance Maladie, la part de la mutuelle, le reste à charge et la date du virement
  Et le bénéficiaire du soin est indiqué

Scénario: Soin pas encore remboursé
  Étant donné qu'un soin du 20 septembre n'a pas encore été traité
  Quand Sylvie cherche ce soin
  Alors elle sait qu'il est en attente et à quelle date le remboursement est prévu

Scénario: Virement reçu sur le compte bancaire
  Étant donné que Sylvie voit sur son relevé bancaire un virement de la mutuelle de 112,40 €
  Quand elle cherche ce montant
  Alors elle retrouve les soins que ce virement rembourse
```

## Notes
- **Contraintes** : T2, les soins d'un bénéficiaire majeur ne sont pas visibles des autres membres sans son accord.
- **Hors périmètre** : contestation d'un remboursement.
- **Hypothèses** : Sylvie consulte ses remboursements via le compte du titulaire au MVP ; accès propre en V2 (US-03.02).

## User flows
- [UF-05.01 Retrouver à quel soin correspond un remboursement](../../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md)
