⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.03 — Répondre au questionnaire de santé sans rien oublier

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟡 partiel

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** comprendre précisément ce que chaque question de santé vise, y compris les problèmes anciens et guéris **afin de** ne pas faire de fausse déclaration qui me priverait d'indemnisation le jour où j'en aurai besoin.

## Origine
- Opportunités : O04 — friction ; O22 — moment de vérité
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Souscrire
- Sources : `[SIM-P05][SIM-P06][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Question illustrée par des exemples
  Étant donné que Manon répond à la question sur les arrêts de travail de plus de 30 jours
  Quand elle lit la question
  Alors des exemples lui précisent ce qui est concerné, même ancien ou guéri, comme une entorse avec un arrêt d'un mois et demi
  Et la période couverte par la question est indiquée en années

Scénario: Récapitulatif avant validation
  Étant donné que Manon a répondu « non » à toutes les questions
  Quand elle s'apprête à valider
  Alors ses réponses lui sont récapitulées
  Et elle est informée des conséquences d'une déclaration inexacte avant de confirmer

Scénario: Qui lit les réponses
  Étant donné que Manon hésite à répondre
  Quand elle se demande qui aura accès à ses réponses
  Alors elle sait que seul le service médical de l'assureur les lit

Scénario: Réponses nécessitant une étude médicale
  Étant donné que les réponses de Manon nécessitent une étude par le service médical
  Quand elle valide le questionnaire
  Alors elle connaît le délai de décision
  Et elle est prévenue dès que la proposition est prête
```

## Notes
- **Contraintes** : T2, secret médical ; réponses chiffrées et accessibles au seul service médical.
- **Hors périmètre** : questionnaire complémentaire détaillé par pathologie (traitement par le service médical).
- **Hypothèses** : l'omission involontaire n'est observée que chez un participant `[SIM-P05]` 🟡.

## User flows
- [UF-02.02 Répondre au questionnaire de santé de la prévoyance](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md)
