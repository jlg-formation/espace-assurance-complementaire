⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-06.04 — Déclarer une reprise à temps partiel sans interrompre mes versements

> Épopée : [06 Déclarer un arrêt de travail](./00-declarer-un-arret-de-travail.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** déclarer un changement de situation, comme une reprise à temps partiel thérapeutique ou une prolongation, en le décrivant tel qu'il est **afin de** continuer à percevoir les indemnités auxquelles j'ai droit sans appels ni courriers.

## Origine
- Opportunité : O27 — moment de vérité
- Parcours : [Déclarer un arrêt et suivre les indemnités jusqu'à la reprise](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étape Déclarer la reprise partielle
- Sources : `[SIM-P08][SIM-A03]`

## Critères d'acceptation
Exigences transverses : T1, T2, T3, T4, T7.

```gherkin
# language: fr
Scénario: Reprise à temps partiel thérapeutique
  Étant donné qu'Hélène est indemnisée pour un arrêt complet depuis le 6 avril
  Quand elle déclare une reprise à mi-temps thérapeutique à partir du 1er août
  Alors ses versements continuent sans interruption
  Et elle connaît le nouveau montant mensuel estimé et les pièces attendues pour cette reprise

Scénario: Prolongation d'arrêt
  Étant donné qu'Hélène reçoit une prolongation de son arrêt
  Quand elle la déclare avec le nouvel avis d'arrêt
  Alors la prolongation est prise en compte
  Et le calendrier de ses versements est mis à jour

Scénario: Situation non prévue
  Étant donné que la situation d'Hélène ne correspond à aucun cas connu
  Quand elle la décrit
  Alors sa déclaration est enregistrée et transmise à un gestionnaire
  Et ses versements ne sont pas suspendus pendant l'examen, sauf décision motivée qui lui est communiquée
```

## Notes
- **Contraintes** : T2 pour le certificat médical de reprise.
- **Hors périmètre** : passage en invalidité (voir US-07.02).
- **Hypothèses** : le maintien des versements pendant l'examen est une décision métier à confirmer ⚪.

## User flows
- [UF-06.03 Déclarer une reprise à temps partiel ou une prolongation](../../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md)
