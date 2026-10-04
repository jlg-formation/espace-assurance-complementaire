⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-04.02 — Envoyer un devis en photo et savoir qu'il est bien reçu

> Épopée : [04 Connaître son reste à charge avant un soin](./00-connaitre-son-reste-a-charge.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** transmettre le devis de mon praticien en le photographiant, et avoir la preuve qu'il est bien arrivé **afin de** ne pas le laisser traîner faute de savoir comment l'envoyer.

## Origine
- Opportunités : O08 — moment de vérité ; O12 — friction ; O13 — opportunité
- Parcours : [Savoir ce qui restera à payer avant un soin](../../03-customer-journey-map/01-manon.cjm.md#savoir-ce-qui-restera-à-payer-avant-un-soin) — étape Envoyer le devis
- Sources : `[SIM-P03][SIM-P04][SIM-A02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Devis transmis
  Étant donné que l'orthodontiste a remis à Manon un devis papier pour son fils
  Quand elle transmet une photo du devis en précisant le bénéficiaire
  Alors elle reçoit un accusé de réception
  Et elle connaît le délai de réponse prévu

Scénario: Photo illisible
  Étant donné que la photo transmise par Manon est floue
  Quand le devis est vérifié
  Alors elle est informée que le devis n'est pas lisible
  Et elle peut en transmettre une nouvelle photo sans ressaisir sa demande

Scénario: Devis de plusieurs pages
  Étant donné que le devis comporte trois pages
  Quand Manon les transmet
  Alors les trois pages sont rattachées au même devis

Scénario: Échecs répétés de photo
  Étant donné que Manon n'arrive pas à transmettre une photo lisible après deux essais
  Quand le devis est de nouveau refusé
  Alors elle peut l'envoyer par courrier ou demander à être rappelée

Scénario: Devis envoyé par courrier
  Étant donné que Sylvie envoie le devis par courrier
  Quand il est reçu
  Alors elle reçoit un accusé de réception avec le délai de réponse
```

## Notes
- **Contraintes** : T2, un devis peut contenir des informations de santé ; formats d'image courants acceptés.
- **Hors périmètre** : transmission directe par le praticien.
- **Hypothèses** : aucune.

## User flows
- [UF-04.02 Envoyer un devis et obtenir sa prise en charge en euros](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md)
