⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Épopée 03 — Accéder à son espace

> Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)
> Parcours : [Faire estimer un devis coûteux](../../03-customer-journey-map/02-sylvie.cjm.md#faire-estimer-un-devis-coûteux) — étape Envoyer le devis · [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étapes Déclarer, Attendre et relancer

## Objectif
Entrer dans son espace sans rester bloqué, et permettre à la personne qui gère réellement les démarches du foyer d'agir avec son propre accès.

## Ce qui se passe aujourd'hui
- Au premier blocage (code SMS, changement de mot de passe), l'espace est abandonné au profit du téléphone `[SIM-P02][SIM-P07][SIM-A01]`
- La personne qui gère n'est pas le titulaire : elle n'a pas d'accès, ou utilise les codes de son conjoint `[SIM-P03][SIM-P04][SIM-P08][SIM-S01]`

## Stories

| ID | Story | Persona | MoSCoW | Version | Confiance |
|---|---|---|---|---|---|
| [US-03.01](./01-acceder-a-son-espace-sans-blocage.story.md) | Accéder à mon espace sans rester bloquée | Sylvie | Must | MVP | 🟢 |
| [US-03.02](./02-agir-pour-le-foyer-avec-son-acces.story.md) | Agir pour le foyer avec mon propre accès | Sylvie | Must | V2 | 🟢 |

## Indicateurs de réussite
- Part des tentatives de connexion qui aboutissent, et part des connexions abandonnées
- Part des contrats famille ou prévoyance avec au moins un accès délégué actif (V2)

## Questions ouvertes
- Quel cadre juridique pour la délégation : mandat simple, bénéficiaire majeur, aidant ? Quels droits sur les données de santé du titulaire ?
