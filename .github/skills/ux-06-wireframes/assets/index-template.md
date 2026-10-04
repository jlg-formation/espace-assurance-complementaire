# Wireframes — {nom du projet}

<!-- Index de la phase : gabarits, écrans dans l'ordre de production, parcours cliquables, retours. Code : web/src/wireframes/ -->

Ouvrir la galerie : `cd web; bun run dev`, puis `/#/wireframes`. Vérifier : `bun run verifier`. Code des écrans : [`web/src/wireframes/ecrans/`](../../web/src/wireframes/ecrans/).

## Gabarits

| Zone | Adresse | Navigation mobile | Statut |
|---|---|---|---|
| {Espace client} | `/#/wireframes/gabarit/{zone}` | {onglets / liste} | {prévu / validé} |

## Écrans

<!-- Ordre de production : MVP, puis V2, puis Plus tard ; lieux avant contextuels. -->

| ID | Écran | Type | Zone | Version | Fiche | Wireframe | États | Statut |
|---|---|---|---|---|---|---|---|---|
| EC{NN} | {nom de l'inventaire} | {lieu / contextuel} | {zone} | {MVP} | [fiche](./{NN}-{zone}/EC{NN}-{ecran}.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/{NN}-{zone}/EC{NN}-{ecran}.tsx) | {nominal, vide, erreur} | {prévu / terminé / incomplet : raison} |

## Parcours cliquables

<!-- Bloquant : vérifié par bun test d'après web/src/projet/parcours.ts. -->

| Flow | Happy path (écrans) | Chemins A / E / V représentés | Verdict |
|---|---|---|---|
| [UF-{NN}.{FF}](../05-user-flows/{NN}-{epopee}/{FF}-{tache}.flow.md) | EC{NN} → EC{NN} → EC{NN} | {A1 : EC05 ; E1 : EC09 #erreur} | {✅ cliquable / ❌ rupture entre EC.. et EC..} |

## Bilan

| Zone | MVP | V2 | Plus tard | Terminés | Incomplets |
|---|---|---|---|---|---|
| {zone} | {n} | {n} | {n} | {n} | {n} |

**Composants récurrents** (entrée du design system) : {liste de demandes, carte de contrat, champ de dépôt de fichier, alerte d'erreur...}

## Retours

| Écran | Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|---|
| EC{NN} | {architecture / flows / backlog} | {libellé trop long / écran à scinder / scénario manquant / story manquante...} | {...} | {...} | {proposé / accepté / refusé} |

## Questions ouvertes
- {...}
