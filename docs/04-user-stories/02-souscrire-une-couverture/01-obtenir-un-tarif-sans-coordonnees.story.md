⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.01 — Obtenir un tarif sans laisser mes coordonnées

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** connaître le prix mensuel d'une formule en donnant seulement les informations nécessaires au calcul **afin de** décider tout de suite sans être démarchée ensuite.

## Origine
- Opportunités : O02 — moment de vérité ; O06 — implication
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Chercher un prix
- Sources : `[SIM-P01][SIM-P05][SIM-P06][SIM-A01][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T4, T5, T7.

```gherkin
# language: fr
Scénario: Tarif obtenu sans coordonnées
  Étant donné que Manon a 30 ans et habite dans le 31
  Quand elle demande un tarif pour elle et son enfant de 4 ans
  Alors elle connaît le prix mensuel de chaque formule
  Et aucune adresse e-mail ni aucun numéro de téléphone ne lui a été demandé

Scénario: Terme inconnu dans les informations demandées
  Étant donné que Manon ne sait pas quel est son régime obligatoire
  Quand cette information lui est demandée
  Alors une explication en langage courant l'aide à répondre
  Et elle peut obtenir un tarif même si elle n'est pas sûre de sa réponse

Scénario: Enregistrer son devis sans être rappelée
  Étant donné que Manon veut retrouver son devis plus tard
  Quand elle choisit de le recevoir par e-mail
  Alors elle reçoit le devis
  Et ses coordonnées ne sont pas utilisées pour la recontacter sans son accord explicite
```

## Notes
- **Contraintes** : T5, le consentement au recontact est distinct de l'envoi du devis.
- **Hors périmètre** : demande de rappel par un conseiller (voir US-08.01).
- **Hypothèses** : aucune.

## User flows
- [UF-02.01 Obtenir un tarif et une formule adaptée sans laisser ses coordonnées](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md)
