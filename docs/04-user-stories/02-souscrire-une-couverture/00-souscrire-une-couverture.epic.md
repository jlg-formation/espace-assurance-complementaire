⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Épopée 02 — Souscrire une couverture

> Personas : [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)
> Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étapes Chercher un prix, Souscrire · [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étapes Remplir le questionnaire de santé, Accepter les conditions

## Objectif
Obtenir un tarif, répondre aux questions nécessaires et signer en une fois, sur mobile si on le souhaite, en sachant ce qui est couvert et ce qui ne l'est pas, sans être démarché.

## Ce qui se passe aujourd'hui
- Coordonnées exigées avant le prix, puis démarchage : les profils autonomes partent `[SIM-P01][SIM-P06][SIM-A01]`
- Le questionnaire de santé provoque une pause de plusieurs jours ou une omission involontaire `[SIM-P05][SIM-P06][SIM-S02]`
- Les exclusions ne sont connues qu'après le questionnaire ; la signature par SMS peut échouer `[SIM-P06][SIM-A01][SIM-P02]`

## Stories

| ID | Story | Persona | MoSCoW | Version | Confiance |
|---|---|---|---|---|---|
| [US-02.01](./01-obtenir-un-tarif-sans-coordonnees.story.md) | Obtenir un tarif sans laisser mes coordonnées | Manon | Must | MVP | 🟢 |
| [US-02.02](./02-exprimer-ses-besoins.story.md) | Exprimer mes besoins pour recevoir une formule adaptée | Manon | Must | MVP | ⚪ |
| [US-02.03](./03-repondre-au-questionnaire-de-sante.story.md) | Répondre au questionnaire de santé sans rien oublier | Manon | Must | MVP | 🟡 |
| [US-02.04](./04-reprendre-le-questionnaire-de-sante.story.md) | Interrompre et reprendre le questionnaire de santé | Hélène | Should | V2 | 🟡 |
| [US-02.05](./05-connaitre-les-exclusions-avant-de-signer.story.md) | Savoir ce qui n'est pas couvert avant de signer | Manon | Must | MVP | 🟡 |
| [US-02.06](./06-consentir-aux-donnees-de-sante.story.md) | Consentir au traitement de mes données de santé | Hélène | Must | MVP | ⚪ |
| [US-02.07](./07-signer-et-payer-en-ligne.story.md) | Signer et payer depuis mon téléphone | Manon | Must | MVP | 🟡 |

## Indicateurs de réussite
- Taux de devis menés jusqu'au tarif, puis jusqu'à la souscription (indicateur de la vision)
- Part des souscriptions réalisées entièrement en ligne, dont sur mobile
- Part des questionnaires de santé interrompus puis repris

## Questions ouvertes
- Quelles réponses au questionnaire de santé déclenchent une étude médicale qui empêche la souscription immédiate ?
- Le devoir de conseil (US-02.02) peut-il être rempli en ligne de façon assez légère pour ne pas faire fuir Manon ?
