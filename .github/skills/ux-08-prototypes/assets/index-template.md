# Prototypes — {nom du projet}

<!-- Index de la phase : écrans, parcours, accessibilité, retours. Code : web/src/prototypes/ -->

Ouvrir : `cd web; bun run dev`, puis `/#/prototypes` (revue) ou `/#/test/EC{NN}` (mode test). Vérifier : `bun run verifier`. Jeu de données : [donnees.ts](../../web/src/prototypes/donnees/donnees.ts).

## Jeu de données fictif

- **Adhérent** : {prénom, nom fictif, situation reprise du persona [{Prénom}](../02-persona/{NN}-{prenom}.persona.md)}
- **Foyer et contrats** : {...}
- **Historique** : {remboursements, documents... et les états qu'ils permettent de montrer}

## Écrans

<!-- Ordre de l'index des wireframes : MVP, puis V2, puis Plus tard. -->

| ID | Écran | Zone | Version | Prototype | États | Écarts au wireframe | Statut |
|---|---|---|---|---|---|---|---|
| EC{NN} | {nom de l'inventaire} | {zone} | {MVP} | [tsx](../../web/src/prototypes/ecrans/{NN}-{zone}/EC{NN}-{ecran}.tsx) | {nominal, vide} | {— / fusion `LigneMontant` / ...} | {prévu / terminé / incomplet : raison} |

## Parcours

<!-- Bloquant : vérifié par bun test d'après web/src/projet/parcours.ts, puis au clavier pour les parcours Must du MVP. -->

| Flow | Départ en mode test | Cliquable | Clavier seul | Testé en utilisabilité |
|---|---|---|---|---|
| [UF-{NN}.{FF}](../05-user-flows/{NN}-{epopee}/{FF}-{tache}.flow.md) | `/#/test/EC{NN}` | {✅ / ❌} | {✅ / ❌ : constat} | {non / {date}} |

## Accessibilité

| Écran | Contrôle | Constat | Gravité | Suite |
|---|---|---|---|---|
| EC{NN} | {clavier / zoom 200 % / 375 px / lecteur d'écran / audit automatique} | {...} | {bloquant / majeur / mineur} | {corrigé / retour DS-{n}} |

## Bilan

| Zone | MVP | V2 | Plus tard | Terminés | Incomplets |
|---|---|---|---|---|---|
| {zone} | {n} | {n} | {n} | {n} | {n} |

## Retours

| Écran | Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|---|
| EC{NN} | {design system / wireframes / architecture / backlog} | {composant manquant / structure / libellé / scénario manquant / story manquante...} | {...} | {...} | {proposé / accepté / refusé} |

## Questions ouvertes
- {...}
