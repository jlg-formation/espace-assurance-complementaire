⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 10 Mise en page

> Niveau : élément · Version : MVP · Composants : `Pile`, `Grille`, `Colonnes`, `Actions` · Classes : `ds-pile`, `ds-grille`, `ds-colonnes`, `ds-actions` · Statut : terminé
> Code : [MiseEnPage.tsx](../../../web/src/design-system/composants/MiseEnPage.tsx) · [MiseEnPage.css](../../../web/src/design-system/composants/MiseEnPage.css) · [MiseEnPage.doc.tsx](../../../web/src/design-system/composants/MiseEnPage.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Pile` (54 écrans), `Actions` (46), `Colonnes` sur [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md), [EC27](../../07-wireframes/02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md)…, `Grille` sur [EC01](../../07-wireframes/01-site-public/EC01-accueil-clarea.wireframe.md), [EC27](../../07-wireframes/02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md), [EC54](../../07-wireframes/03-transverse/EC54-aide-et-contact.wireframe.md)

## Rôle
Disposer les contenus sans style propre : `Pile` empile avec un espacement régulier, `Grille` aligne des cartes, `Colonnes` passe à deux colonnes (2/3, 1/3) à partir de 1024 px, `Actions` regroupe les boutons.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| children | `ReactNode` | — | Contenu disposé |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Pile | `div` (flex en colonne) | `ds-pile` | — |
| Grille | `div` (grille auto-fill, 16 rem min par case) | `ds-grille` | — |
| Colonnes | `div` (grille 2fr 1fr dès 1024 px) | `ds-colonnes` | — |
| Actions | `div` (flex qui passe à la ligne) | `ds-actions` | — |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Mobile | < 768 px | — | une colonne partout ; cartes l'une sous l'autre |
| Tablette | ≥ 768 px | — | la grille forme 2 cartes par ligne |
| Ordinateur | ≥ 1024 px | — | `Colonnes` : contenu principal 2/3, latéral 1/3 |

## États
Aucun : éléments non interactifs.

## Tokens employés
`space.3`, `space.4`, `space.5`, `space.6`, `size.card-min` ; requête média `min-width: 1024px` (`breakpoint.desktop`)

## Accessibilité
- **HTML** : `div` sans sémantique
- **Clavier** : l'ordre de tabulation suit l'ordre du code : la colonne latérale vient après la principale
- **ARIA** : aucun
- **Lecteur d'écran** : transparent
- **Autres** : jamais d'inversion visuelle de l'ordre (`order`, `row-reverse`) ; zoom à 200 % : retour à une colonne ; chaque colonne a `min-width: 0` pour qu'un champ large ne force pas le débordement (retour des prototypes)

## Rédaction
Non concerné.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Le bouton principal en premier dans `Actions` | Placer le bouton principal à droite seulement par habitude |
| Ce qui compte d'abord dans la colonne principale | Mettre l'information clé dans la colonne latérale (sous le reste sur mobile) |

## Code

```tsx
<Pile>
  <p>Il reste 6 questions de santé.</p>
  <Actions><Bouton variante="principal">Continuer</Bouton><Bouton>Enregistrer et reprendre plus tard</Bouton></Actions>
</Pile>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Pile`, `Grille`, `Colonnes`, `Actions` (`wf-pile`, `wf-grille`, `wf-colonnes`, `wf-actions`) | mêmes noms (`ds-pile`, `ds-grille`, `ds-colonnes`, `ds-actions`) |
