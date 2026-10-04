⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-03.02 — Agir pour le foyer avec mon propre accès

> Épopée : [03 Accéder à son espace](./00-acceder-a-son-espace.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : V2 · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** disposer de mon propre accès, avec les droits que le titulaire m'a confiés **afin de** faire les démarches de santé et d'arrêt à sa place, sans utiliser ses identifiants.

## Origine
- Opportunités : O11 — friction ; O14 — friction (déclarer pour un proche)
- Parcours : [Faire estimer un devis coûteux](../../03-customer-journey-map/02-sylvie.cjm.md#faire-estimer-un-devis-coûteux) — étape Envoyer le devis ; [Déclarer l'arrêt de son conjoint](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Déclarer
- Sources : `[SIM-P02][SIM-P03][SIM-P04][SIM-P05][SIM-P07][SIM-P08][SIM-S01][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Délégation accordée par le titulaire
  Étant donné que le titulaire du contrat désigne Sylvie pour gérer les remboursements et les arrêts de travail
  Quand Sylvie active son accès
  Alors elle peut agir sur ces démarches avec ses propres identifiants
  Et chaque action qu'elle fait est enregistrée à son nom

Scénario: Pièces médicales du titulaire
  Étant donné que Sylvie a un accès délégué
  Quand elle transmet une pièce médicale pour l'arrêt du titulaire
  Alors la pièce est transmise au service médical
  Mais Sylvie ne peut consulter les données médicales du titulaire que si celui-ci l'a autorisé explicitement

Scénario: Titulaire dans l'incapacité d'agir
  Étant donné que le titulaire n'est pas en état de désigner un proche
  Quand Sylvie demande à agir pour lui
  Alors elle sait quelles pièces fournir pour être reconnue comme mandataire et dans quel délai sa demande sera traitée

Scénario: Retrait de la délégation
  Étant donné que le titulaire retire la délégation de Sylvie
  Quand Sylvie tente d'agir
  Alors elle n'a plus accès aux démarches du titulaire
```

## Notes
- **Contraintes** : T2 ; consentement du titulaire pour l'accès aux données de santé ; droits séparables (santé, prévoyance).
- **Arbitrage** : Must hors MVP, car hors périmètre initial de la vision et dépendant d'un cadre juridique de délégation à définir. Contournement au MVP : rappel par un conseiller (US-08.01).
- **Hypothèses** : le comportement du proche gestionnaire n'est observé directement que dans 2 entretiens `[SIM-P03][SIM-P07]`.

## User flows
- [UF-03.02 Obtenir et utiliser un accès délégué pour le foyer](../../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md)
