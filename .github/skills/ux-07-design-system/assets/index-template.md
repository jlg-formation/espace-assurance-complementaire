# Design system — {marque fictive}

<!-- Index de la phase : statut, inventaire des composants, correspondance avec le kit, retours. Code : web/src/design-system/ -->

Ouvrir la documentation : `cd web; bun run dev`, puis `/#/design-system`. Vérifier : `bun run verifier`.

## Livrables

| Livrable | Contenu | Statut |
|---|---|---|
| [Principes](./01-principes.md) | Principes de design, voix et ton, formats | {prévu / validé} |
| [Identité](./02-identite.md) · `/#/design-system/pistes` | Pistes, piste retenue, contrastes | {...} |
| [tokens.json](../../web/src/design-system/tokens/tokens.json) → `tokens.css` (généré) | Tokens primitifs et sémantiques | {...} |
| [composants/](../../web/src/design-system/composants/) | Base et composants React | {...} |
| [Écran témoin](../../web/src/design-system/exemples/EC{NN}-{ecran}.tsx) · `/#/design-system/exemples/EC{NN}` | {EC{NN} {nom}} passé du wireframe au design system | {...} |

## Inventaire des composants

<!-- Ordre de production : éléments, composants, modèles ; MVP d'abord. Tous les composants du kit, plus les motifs présents sur au moins deux écrans. -->

| # | Composant | Niveau | Origine dans le kit | Écrans | Variantes | États | Version | Fiche | Statut |
|---|---|---|---|---|---|---|---|---|---|
| 01 | {Bouton} | {élément / composant / modèle} | `Bouton` | {EC04, EC05, ...} | {principal, secondaire} | {repos, survol, focus, actif, désactivé, chargement} | {MVP} | [fiche](./composants/01-{composant}.component.md) | {prévu / terminé / incomplet : raison} |

### Incohérences relevées dans les wireframes

| Motif | Écrans | Proposition | Décision |
|---|---|---|---|
| {Deux présentations d'un montant remboursé} | {EC04, EC07} | {fusionner en `LigneMontant`} | {validée / refusée} |

## Correspondance avec le kit

<!-- Bloquant (vérifié par bun test) : chaque composant du kit existe dans le design system, mêmes props. -->

| Kit | Design system | Classes | Remarque |
|---|---|---|---|
| `Bouton` | `Bouton` | `wf-btn` → `ds-btn` | — |
| `Note` | `Note` | — | Ne rend rien : annotation de wireframe |
| `Ligne` + `Lien` + `Etiquette` | `LigneMontant` | `ds-ligne-montant` | {Fusion validée} |

## Bilan

| Tokens primitifs | Tokens sémantiques | Éléments | Composants | Modèles | Terminés | Incomplets |
|---|---|---|---|---|---|---|
| {n} | {n} | {n} | {n} | {n} | {n} | {n} |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| {wireframes / kit / architecture / backlog} | {motif à harmoniser / prop manquante / libellé trop long / story manquante...} | {EC{NN} / US-NN.SS / nouvelle} | {...} | {proposé / accepté / refusé} |

## Questions ouvertes
- {...}
