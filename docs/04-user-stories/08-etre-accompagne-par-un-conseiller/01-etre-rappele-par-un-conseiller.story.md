⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-08.01 — Être rappelée par un conseiller qui connaît mon dossier

> Épopée : [08 Être accompagné par un conseiller](./00-etre-accompagne-par-un-conseiller.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟡 partiel

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** demander à être rappelée au moment qui me convient par un conseiller qui a déjà mon dossier sous les yeux **afin de** régler ma question sans attendre au téléphone ni tout réexpliquer.

## Origine
- Opportunités : O17 — moment de vérité (rappel par un gestionnaire) ; O18 — implication
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Attendre et relancer
- Sources : `[SIM-P02][SIM-P04][SIM-P07][SIM-A01][SIM-A03]` ; `vision` (contact minimal : demande de rappel)

## Critères d'acceptation
Exigences transverses : T1, T4, T5, T7.

```gherkin
# language: fr
Scénario: Rappel demandé sur un dossier
  Étant donné que Sylvie a une question sur le dossier d'arrêt de son conjoint
  Quand elle demande à être rappelée mardi entre 14 h et 16 h en précisant l'objet
  Alors elle reçoit la confirmation du créneau
  Et le conseiller qui la rappelle connaît l'objet de la demande et l'état du dossier

Scénario: Aucun créneau disponible
  Étant donné qu'aucun créneau n'est disponible dans les 2 jours ouvrés
  Quand Sylvie demande un rappel
  Alors elle connaît le premier créneau disponible
  Et elle peut choisir de poser sa question par écrit à la place

Scénario: Rappel manqué
  Étant donné que Sylvie n'a pas pu répondre au rappel
  Quand le conseiller n'a pas pu la joindre
  Alors elle est prévenue
  Et elle peut choisir un nouveau créneau sans refaire sa demande

Scénario: Demande de rappel avant souscription
  Étant donné que Manon hésite entre deux formules
  Quand elle demande à être rappelée
  Alors elle est rappelée uniquement sur le créneau choisi
  Et ses coordonnées ne servent à aucune autre sollicitation commerciale
```

## Notes
- **Contraintes** : T5, le rappel ne vaut pas consentement au démarchage.
- **Hors périmètre** : prise de rendez-vous, chat, messagerie sécurisée (exclus de la vision).
- **Hypothèses** : le contact humain n'est indispensable que pour le profil de Sylvie 🟡.

## User flows
- [UF-08.01 Être rappelé par un conseiller qui connaît le dossier](../../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md)
