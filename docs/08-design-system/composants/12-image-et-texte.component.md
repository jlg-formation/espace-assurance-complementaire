⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 12 Image et Texte

> Niveau : élément · Version : MVP · Composants : `Image`, `Texte` · Classes : `ds-image`, `ds-texte` · Statut : terminé
> Code : [Remplacement.tsx](../../../web/src/design-system/composants/Remplacement.tsx) · [Remplacement.css](../../../web/src/design-system/composants/Remplacement.css) · [Remplacement.doc.tsx](../../../web/src/design-system/composants/Remplacement.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Image` sur [EC40](../../07-wireframes/02-espace-adherent/EC40-carte-de-tiers-payant.wireframe.md) ; `Texte` sur [EC05](../../07-wireframes/01-site-public/EC05-clause-du-contrat.wireframe.md), [EC56](../../07-wireframes/03-transverse/EC56-declaration-d-accessibilite.wireframe.md), [EC57](../../07-wireframes/03-transverse/EC57-mentions-legales-et-donnees-personnelles.wireframe.md)

## Rôle
Réserver la place d'une image ou d'un texte encore inconnus. **Rendu de remplacement** : à remplacer par de vrais contenus dans les prototypes (ux-08).

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| alt (`Image`) | `string` | — (obligatoire) | Description ; vide = image décorative |
| lignes (`Texte`) | `number` | `3` | Nombre de lignes simulées |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Image | `div role="img"` | `ds-image` | — |
| Texte | `div aria-hidden="true"` | `ds-texte` | — |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Image décrite | `alt` non vide | — | carte de mutuelle à présenter |
| Image décorative | `alt=""` | — | illustration |
| Texte | `lignes` | — | texte juridique non rédigé |

## États
Aucun : éléments non interactifs.

## Tokens employés
`color.background.accent`, `color.border.strong`, `color.border.default`, `size.placeholder`, `radius.s`, `font.line-height.base`, `font.size.m`

## Accessibilité
- **HTML** : `div` de remplacement ; aux prototypes, `img` avec `alt`
- **Clavier** : non concerné
- **ARIA** : `role="img"` et `aria-label` pour une image décrite ; `aria-hidden` sinon et pour le texte simulé
- **Lecteur d'écran** : lit la description de l'image ; ignore le texte simulé
- **Autres** : bordure en tirets : le remplacement se voit

## Rédaction
`alt` : ce que montre l'image et pourquoi elle compte (« Carte de mutuelle 2026 de Sylvie, avec le code à scanner »).

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Remplacer par le vrai contenu dans le prototype | Laisser un `Texte` dans un prototype testé |
| `alt` descriptif | `alt="image"` |

## Code

```tsx
<Image alt="Carte de mutuelle 2026 de Sylvie, avec le code à scanner" />
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Image` (`wf-image`), `Texte` (`wf-texte`) | `Image` (`ds-image`), `Texte` (`ds-texte`) |
