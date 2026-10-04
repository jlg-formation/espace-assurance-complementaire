⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-07.01 — Connaître la date et le montant du prochain versement

> Épopée : [07 Suivre ses indemnités](./00-suivre-ses-indemnites.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** connaître à l'avance la date et le montant du prochain versement d'indemnités, et la raison s'il est retardé **afin de** prévoir les charges de l'entreprise et du foyer sans appeler chaque semaine.

## Origine
- Opportunités : O16 — moment de vérité ; O26 — friction
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Attendre et relancer ; [Déclarer un arrêt et suivre les indemnités](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étape Suivre les versements
- Sources : `[SIM-P07][SIM-P08][SIM-A03][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Prochain versement connu
  Étant donné que le dossier d'arrêt du conjoint de Sylvie est complet
  Quand elle consulte les indemnités
  Alors elle connaît la date prévue du prochain versement, la période qu'il couvre et son montant en euros
  Et elle connaît les versements déjà effectués

Scénario: Versement retardé
  Étant donné que le versement prévu le 10 juillet ne peut pas être fait à cette date
  Quand la date est dépassée ou sur le point de l'être
  Alors Sylvie est prévenue du retard, de sa raison et de la nouvelle date prévue
  Et, s'il manque une pièce, elle sait laquelle

Scénario: Versement effectué
  Étant donné qu'un versement de 1 840 € a été fait
  Quand il est émis
  Alors Sylvie est prévenue
  Et elle peut relier ce montant à la période d'arrêt qu'il couvre

Scénario: Franchise en cours
  Étant donné que la franchise de l'arrêt court encore
  Quand Sylvie consulte les indemnités
  Alors elle sait qu'aucun versement n'est dû avant la fin de la franchise
  Et elle connaît la date prévue du premier versement
```

## Notes
- **Contraintes** : notifications sans contenu médical.
- **Hors périmètre** : attestation de versement pour la déclaration de revenus (voir US-05.03).
- **Hypothèses** : au MVP, Sylvie consulte avec l'accès du titulaire (accès délégué en V2).

## User flows
- [UF-07.01 Savoir quand et combien on sera payé](../../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md)
