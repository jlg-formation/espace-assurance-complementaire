⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 07 Carte

> Niveau : élément · Version : MVP · Composant : `Carte` · Classe : `ds-carte` · Statut : terminé
> Code : [Carte.tsx](../../../web/src/design-system/composants/Carte.tsx) · [Carte.css](../../../web/src/design-system/composants/Carte.css) · [Carte.doc.tsx](../../../web/src/design-system/composants/Carte.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Carte` sur [EC01](../../07-wireframes/01-site-public/EC01-accueil-clarea.wireframe.md), [EC27](../../07-wireframes/02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md), [EC54](../../07-wireframes/03-transverse/EC54-aide-et-contact.wireframe.md)

## Rôle
Proposer un raccourci vers une démarche fréquente (Ma carte de mutuelle, Estimer un soin, Être rappelé), avec une phrase qui dit ce qu'on y trouve. Se range dans une `Grille`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| titre | `string` | — | Nom de la destination |
| vers | `EcranId` | — | Rend toute la carte cliquable |
| etat | `string` | — | État de l'écran cible |
| children | `ReactNode` | — | Phrase de description |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `a` (avec `vers`) ou `div` | `ds-carte`, `ds-carte--lien` | oui |
| Titre | `strong` | `ds-carte__titre` | non (oui si cliquable) |
| Description | `span` | — | non |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Cliquable | `vers` | `ds-carte--lien` | raccourcis |
| Statique | sans `vers` | `ds-carte` | information groupée (horaires) |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Repos | — | bordure grise, titre pétrole souligné | `color.border.strong`, `color.text.link` |
| Survol | `:hover` | fond pétrole clair, bordure pétrole | `color.background.accent`, `color.border.accent` |
| Focus | `:focus-visible` | contour de 3 px autour de la carte | `color.border.focus`, `size.focus-ring` |
| Actif | `:active` | descend de 1 px | — |

## Tokens employés
`color.background.default`, `color.background.accent`, `color.border.strong`, `color.border.accent`, `color.text.default`, `color.text.link`, `size.target`, `space.1`, `space.4`, `radius.s`, `font.size.l`, `duration.fast`

## Accessibilité
- **HTML** : `a` qui englobe titre et description
- **Clavier** : Tab, Entrée
- **ARIA** : aucun : élément natif
- **Lecteur d'écran** : annonce « lien » puis titre et description ; garder la description courte
- **Autres** : le titre reste souligné : la carte se reconnaît comme lien sans la couleur

## Rédaction
Titre : libellé du glossaire (« Estimer un soin »). Description : le bénéfice, en une ligne (« Ce qui restera à payer, en euros »).

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Trois ou quatre cartes au plus par groupe | Une grille de dix raccourcis |
| Toute la carte cliquable | Un bouton dans une carte déjà cliquable |

## Code

```tsx
<Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Carte` (`wf-carte`) | `Carte` (`ds-carte`, `ds-carte--lien`) |
