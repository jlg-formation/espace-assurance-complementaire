# {NN} {Composant}

> Niveau : {élément / composant / modèle} · Version : {MVP} · Composant : `{Composant}` · Classe : `ds-{composant}` · Statut : {terminé / incomplet : raison}
> Code : [{Composant}.tsx](../../../web/src/design-system/composants/{Composant}.tsx) · [{Composant}.css](../../../web/src/design-system/composants/{Composant}.css) · [{Composant}.doc.tsx](../../../web/src/design-system/composants/{Composant}.doc.tsx) · Documentation : `/#/design-system`
> Origine : `{Composant du kit}` sur [EC{NN}](../../07-wireframes/{NN}-{zone}/EC{NN}-{ecran}.wireframe.md), [EC{NN}](../../07-wireframes/{NN}-{zone}/EC{NN}-{ecran}.wireframe.md)

## Rôle
{À quoi il sert pour le persona, en une phrase. Quand l'utiliser, quand utiliser autre chose.}

## Props

<!-- Composant du kit : props du contrat src/projet/ui.ts, inchangées. Composant nouveau : props déclarées dans son fichier. -->

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| {variante} | {`'principal' \| 'secondaire'`} | {`'secondaire'`} | {...} |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| {Libellé} | {`span`} | `ds-{composant}__{partie}` | {oui} |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| {Principal} | {`variante="principal"`} | `ds-{composant}--{variante}` | {une seule par écran : l'action principale} |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Repos | — | {...} | `color.action.primary` |
| Survol | `:hover` | {...} | `color.action.primary-hover` |
| Focus | `:focus-visible` | {contour de 3 px} | `color.border.focus`, `size.focus-ring` |
| Actif | `:active` | {...} | {...} |
| Désactivé | `desactive` → `:disabled` | {...} | `color.action.disabled`, `color.action.disabled-text` |
| {Erreur / chargement / sélectionné} | {...} | {...} | {...} |

## Tokens employés
{Liste des tokens sémantiques. Aucun primitif.}

## Accessibilité
- **HTML** : {élément natif à utiliser : `button` pour agir, `a` pour naviguer}
- **Clavier** : {Tab, Entrée, Espace, Échap...}
- **ARIA** : {rôles et attributs, ou « aucun : élément natif »}
- **Lecteur d'écran** : {ce qui est annoncé}
- **Autres** : {cible de 44 px, information doublée par un texte, `prefers-reduced-motion`}

## Rédaction
{Règles de libellé : verbe à l'infinitif, mots du glossaire, longueur maximale, exemples.}

## À faire / à éviter

| À faire | À éviter |
|---|---|
| {...} | {...} |

## Code

```tsx
{exemple minimal, identique au code de l'exemple dans {Composant}.doc.tsx}
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `{Composant du kit}` (`wf-{...}`) | `{Composant}` (`ds-{...}`) |
