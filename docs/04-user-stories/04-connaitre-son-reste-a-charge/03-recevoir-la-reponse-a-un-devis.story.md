⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-04.03 — Recevoir la réponse à un devis en euros, dans un délai annoncé

> Épopée : [04 Connaître son reste à charge avant un soin](./00-connaitre-son-reste-a-charge.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** recevoir, dans le délai annoncé, la prise en charge d'un devis en euros, période par période **afin de** donner une réponse au praticien et prévoir le budget du traitement.

## Origine
- Opportunités : O10 — moment de vérité ; O12 — friction
- Parcours : [Faire estimer un devis coûteux](../../03-customer-journey-map/02-sylvie.cjm.md#faire-estimer-un-devis-coûteux) — étape Attendre la réponse
- Sources : `[SIM-P04][SIM-A02][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Réponse à un devis d'orthodontie
  Étant donné que Sylvie a transmis un devis d'orthodontie de 2 400 € sur 3 semestres
  Quand la réponse est disponible
  Alors elle est prévenue
  Et elle connaît, pour chaque semestre, la part remboursée et le reste à charge en euros

Scénario: Délai dépassé
  Étant donné que le délai de réponse annoncé à Sylvie est dépassé
  Quand elle consulte l'état de son devis
  Alors elle connaît la raison du retard et la nouvelle date prévue
  Et elle n'a pas besoin d'appeler pour l'apprendre

Scénario: Devis incomplet
  Étant donné qu'il manque le code des actes sur le devis transmis
  Quand le devis est examiné
  Alors Sylvie sait précisément ce qui manque
  Et elle peut le compléter sans renvoyer tout le devis

# Origine WF (wireframes, EC37) — confiance ⚪
Scénario: Réponse transmise au praticien
  Étant donné que la réponse au devis d'orthodontie est disponible
  Quand Sylvie la télécharge
  Alors elle obtient un document à remettre à l'orthodontiste
  Et ce document indique la durée de validité de la réponse
```

## Notes
- **Contraintes** : la réponse indique sa durée de validité.
- **Hors périmètre** : accord de tiers payant directement avec le praticien.
- **Hypothèses** : le délai cible est à fixer par le métier (12 jours en moyenne aujourd'hui d'après `[SIM-S01]`).

## User flows
- [UF-04.02 Envoyer un devis et obtenir sa prise en charge en euros](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md)
