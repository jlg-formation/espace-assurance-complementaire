⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Épopée 05 — Suivre ses remboursements et ses documents

> Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)
> Parcours : aucune journey map dédiée (décision de validation : stories issues de la vision et de la [synthèse](../../research/synthese.md), hypothèses H5 et H6) · [Déclarer un arrêt et suivre les indemnités](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étape Découvrir la franchise

## Objectif
Retrouver sans effort ce qui a été remboursé et pour qui, présenter sa carte à jour, obtenir ses attestations et se souvenir des paramètres clés de son contrat.

## Ce qui se passe aujourd'hui
- Les remboursements se vérifient sur le relevé bancaire ou une fois par mois sur ordinateur, en les rapprochant des factures `[SIM-P03][SIM-P04][SIM-S01]`
- Remboursements classés par date de traitement, impossibles à relier à un soin quand on a plusieurs enfants `[SIM-A02]`
- La carte est rarement demandée, sauf au renouvellement de janvier ou chez un nouveau praticien `[SIM-P03][SIM-P04][SIM-A02][SIM-S01]`
- Franchise et paramètres du contrat oubliés jusqu'au sinistre `[SIM-P08][SIM-A03][SIM-S02]`

## Stories

| ID | Story | Persona | MoSCoW | Version | Confiance |
|---|---|---|---|---|---|
| [US-05.01](./01-relier-remboursements-et-soins.story.md) | Relier chaque remboursement à un soin et à un membre du foyer | Sylvie | Should | MVP | 🟡 |
| [US-05.02](./02-presenter-sa-carte-de-tiers-payant.story.md) | Présenter ma carte de tiers payant à jour | Manon | Should | MVP | 🟡 |
| [US-05.03](./03-obtenir-une-attestation.story.md) | Obtenir une attestation | Sylvie | Should | MVP | ⚪ |
| [US-05.04](./04-recevoir-le-rappel-annuel-du-contrat.story.md) | Être rappelée chaque année des paramètres clés de mon contrat | Hélène | Should | V2 | 🟢 |

## Indicateurs de réussite
- Part des appels « où en est mon remboursement ? » dans le total des contacts (indicateur de la vision)
- Nombre de demandes de carte ou d'attestation par téléphone en janvier

## Questions ouvertes
- Faut-il cartographier ce parcours (journey map dédiée) lors d'une prochaine recherche ? Aucun participant n'en a fait un récit complet.
