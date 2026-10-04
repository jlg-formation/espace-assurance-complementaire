⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Épopée 01 — Comprendre et comparer une offre

> Personas : [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)
> Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Comprendre et choisir · [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étapes Comparer, Simuler sa couverture

## Objectif
Savoir, avant de s'engager, ce qu'une formule santé rembourse vraiment et ce qu'une prévoyance verserait, en euros, sans lire de conditions générales.

## Ce qui se passe aujourd'hui
- Les tableaux en pourcentages sont mal compris (« 100 % » lu comme « tout remboursé ») ; le choix se fait sur le prix `[SIM-P01][SIM-A01][SIM-S01]`
- Seuls les exemples de remboursement en euros servent à décider `[SIM-P02][SIM-A01]`
- Personne ne connaît le montant net qu'il toucherait en cas d'arrêt, même les plus informés `[SIM-P05][SIM-P06][SIM-S02]`

## Stories

| ID | Story | Persona | MoSCoW | Version | Confiance |
|---|---|---|---|---|---|
| [US-01.01](./01-savoir-ce-que-rembourse-chaque-formule.story.md) | Savoir ce que rembourse chaque formule, en euros | Manon | Must | MVP | 🟢 |
| [US-01.02](./02-comparer-les-garanties-prevoyance.story.md) | Comparer les garanties de prévoyance sans lire les conditions générales | Hélène | Should | MVP | 🟡 |
| [US-01.03](./03-simuler-ses-indemnites.story.md) | Simuler ce que je toucherais en cas d'arrêt ou d'invalidité | Hélène | Must | MVP | 🟢 |

## Indicateurs de réussite
- Moins de résiliations dans la première année pour couverture mal comprise (indicateur « couverture mal comprise » de la vision)
- Part des devis de prévoyance où une simulation du montant net a été faite avant la souscription

## Questions ouvertes
- Quels soins de référence retenir pour les exemples en euros (consultation, lunettes, couronne, hospitalisation) ?
- La simulation de prévoyance doit-elle intégrer le régime obligatoire de chaque statut d'indépendant (artisan, commerçant, profession libérale) ?
