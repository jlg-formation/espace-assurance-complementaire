⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-05.04 — Être rappelée chaque année des paramètres clés de mon contrat

> Épopée : [05 Suivre ses remboursements et ses documents](./00-suivre-ses-remboursements.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Should · Version : V2 · Confiance : 🟢 fondé

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** qu'on me rappelle une fois par an ma franchise, mon revenu garanti et le montant que je toucherais en cas d'arrêt **afin de** les ajuster à ma situation avant d'en avoir besoin.

## Origine
- Opportunité : O25 — opportunité
- Parcours : [Déclarer un arrêt et suivre les indemnités](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étape Découvrir la franchise
- Sources : `[SIM-P05][SIM-P08][SIM-A03][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T5, T7.

```gherkin
# language: fr
Scénario: Rappel annuel
  Étant donné qu'Hélène a une franchise de 90 jours et un revenu garanti de 30 000 €
  Quand arrive la date anniversaire de son contrat
  Alors elle reçoit un rappel de sa franchise, de son revenu garanti et du montant mensuel qu'elle toucherait en cas d'arrêt
  Et elle sait comment modifier ces paramètres

Scénario: Revenu garanti en décalage avec le revenu déclaré
  Étant donné qu'Hélène a déclaré un revenu de 42 000 € alors que son revenu garanti est de 30 000 €
  Quand elle reçoit le rappel
  Alors l'écart lui est signalé avec son effet en euros sur ses indemnités

Scénario: Hausse de garantie soumise à un questionnaire de santé
  Étant donné qu'Hélène veut augmenter son revenu garanti
  Quand cette hausse nécessite un questionnaire de santé
  Alors elle le sait avant de valider
  Et la nouvelle cotisation ne s'applique qu'après acceptation
```

## Notes
- **Contraintes** : rappel d'information contractuelle, pas un démarchage (T5) ; Hélène peut choisir le canal.
- **Arbitrage** : Should en V2, car elle dépend d'un dispositif de rappel périodique.
- **Hypothèses** : la modification d'un paramètre peut nécessiter un nouveau questionnaire de santé.

## User flows
- [UF-05.04 Ajuster ses garanties après le rappel annuel](../../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md)
