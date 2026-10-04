⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Épopée 06 — Déclarer un arrêt de travail

> Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Hélène](../../02-persona/03-helene.persona.md)
> Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étapes Déclarer, Envoyer les pièces · [Déclarer un arrêt et suivre les indemnités jusqu'à la reprise](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étapes Déclarer en ligne, Découvrir la franchise, Déclarer la reprise partielle

## Objectif
Déclarer un arrêt dans les délais, fournir d'emblée un dossier complet, savoir tout de suite à partir de quand et combien on sera indemnisé, et déclarer les changements de situation sans interruption des versements.

## Ce qui se passe aujourd'hui
- Délai de déclaration inconnu ; pièces réclamées une à une par courrier `[SIM-P07][SIM-A03][SIM-S02]`
- Franchise découverte dans l'accusé de réception : des mois sans revenus `[SIM-P08][SIM-A03][SIM-S02]`
- La reprise à temps partiel thérapeutique n'est pas prévue : paiements interrompus `[SIM-P08][SIM-A03]`

## Stories

| ID | Story | Persona | MoSCoW | Version | Confiance |
|---|---|---|---|---|---|
| [US-06.01](./01-declarer-un-arret.story.md) | Déclarer un arrêt en connaissant le délai et toutes les pièces à fournir | Sylvie | Must | MVP | 🟢 |
| [US-06.02](./02-connaitre-le-debut-de-l-indemnisation.story.md) | Savoir dès la déclaration à partir de quand et combien je serai indemnisée | Hélène | Must | MVP | 🟢 |
| [US-06.03](./03-suivre-les-pieces-du-dossier.story.md) | Savoir où en est chaque pièce du dossier | Sylvie | Must | MVP | 🟢 |
| [US-06.04](./04-declarer-une-reprise-a-temps-partiel.story.md) | Déclarer une reprise à temps partiel sans interrompre mes versements | Hélène | Must | MVP | 🟢 |

## Indicateurs de réussite
- Part des déclarations d'arrêt complètes dès le premier envoi (indicateur de la vision)
- Délai entre la déclaration et le premier versement (indicateur de la vision)

## Questions ouvertes
- Liste des pièces par situation (arrêt simple, prolongation, accident, temps partiel thérapeutique) à établir avec la gestion.
- Peut-on récupérer automatiquement les indemnités du régime obligatoire, pour éviter à l'assuré de les demander ?
