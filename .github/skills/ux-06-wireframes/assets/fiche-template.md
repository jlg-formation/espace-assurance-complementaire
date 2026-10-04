# EC{NN} — {nom de l'inventaire} (wireframe)

> Type : {lieu / contextuel} · Parent : {— / [EC{NN}](./EC{NN}-{parent}.wireframe.md)} · Zone : {zone} · Version : {MVP} · Appareil principal : {mobile}
> Wireframe : [ECNN-{ecran}.tsx](../../../web/src/wireframes/ecrans/{NN}-{zone}/EC{NN}-{ecran}.tsx) · `bun run dev` puis `/#/wireframes/EC{NN}` · Inventaire : [EC{NN}](../../06-architecture-information/01-contenus.inventory.md#ec{nn}) · Libellé : « {libellé du glossaire} »
> Flows : [UF-{NN}.{FF}](../../05-user-flows/{NN}-{epopee}/{FF}-{tache}.flow.md) (étape {n} du happy path) · Personas : [{Prénom}](../../02-persona/{NN}-{prenom}.persona.md)

## Objectif
{Ce que le persona vient faire ici, en une phrase.}

## Hiérarchie du contenu

<!-- Ordre sur mobile, du plus important au moins important. Une seule action principale. -->

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | {Action principale : Envoyer une facture} | — | {tâche la plus fréquente de {Prénom}} | UF-{NN}.{FF} |
| 2 | {Liste des remboursements récents} | Remboursement : date, acte, montant, statut | {...} | {inventaire, « Ce qui le bloque »} |

**Replié, renvoyé ou supprimé** : {élément — décision et raison}

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| {Envoyer une facture} | {bouton principal / lien / navigation} | `vers="EC{NN}"` [fiche](./EC{NN}-{ecran}.wireframe.md) | UF-{NN}.{FF} `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-{NN}.{FF} `HP` |
| {Vide} | `vide` | {...} | {US-NN.SS « scénario »} |
| {Erreur} | `erreur` | {...} | UF-{NN}.{FF} `E1` |

## Annotations

<!-- Chaque <Note n={...} /> de l'écran a sa description ici, et inversement. -->

1. {Comportement, règle de gestion, origine des données, accessibilité ou écart volontaire.}

## Couverture

<!-- Bloquant : chaque contenu et chaque action de l'inventaire pour cet écran. -->

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| {Remboursement : statut} | ✅ | {état nominal, liste} |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| {architecture / flows / backlog} | {...} | {...} | {...} | {proposé / accepté / refusé} |

## Questions ouvertes
- {...}
