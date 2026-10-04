⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 08 Bloc

> Niveau : élément · Version : MVP · Composant : `Bloc` · Classe : `ds-bloc` · Statut : terminé
> Code : [Bloc.tsx](../../../web/src/design-system/composants/Bloc.tsx) · [Bloc.css](../../../web/src/design-system/composants/Bloc.css) · [Bloc.doc.tsx](../../../web/src/design-system/composants/Bloc.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Bloc` sur 24 écrans, dont [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md), [EC32](../../07-wireframes/02-espace-adherent/EC32-resultat-de-l-estimation.wireframe.md), [EC57](../../07-wireframes/03-transverse/EC57-mentions-legales-et-donnees-personnelles.wireframe.md)

## Rôle
Regrouper sous un titre les contenus d'un même sujet (« Pièces du dossier », « Prochain versement »). Le titre nomme la région pour les lecteurs d'écran.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| titre | `string` | — | Titre du bloc |
| niveau | `2 \| 3` | `2` | Niveau du titre |
| children | `ReactNode` | — | Contenu |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `section` | `ds-bloc` | oui |
| Titre | `h2` ou `h3` | — | non |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Titre de niveau 2 | défaut | — | sections d'un écran |
| Titre de niveau 3 | `niveau={3}` | — | bloc dans une section |
| Sans titre | sans `titre` | — | encadré simple (état vide) |

## États
Aucun : élément non interactif.

## Tokens employés
`color.background.subtle`, `color.border.default`, `radius.s`, `space.4`, `space.5`

## Accessibilité
- **HTML** : `section` ; `aria-labelledby` vers le titre (région nommée)
- **Clavier** : non concerné
- **ARIA** : `aria-labelledby` seulement s'il y a un titre
- **Lecteur d'écran** : « région Pièces du dossier »
- **Autres** : respecter la hiérarchie des titres (un `h3` sous un `h2`)

## Rédaction
Titre court, nom du sujet (« Prochain versement ») ; pas de verbe.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Un bloc par sujet | Un bloc dans un bloc dans un bloc |
| Titre de niveau 3 dans une section titrée | Sauter du `h1` au `h3` |

## Code

```tsx
<Bloc titre="Prochain versement"><p><strong>10 juillet 2026 — 1 840 €</strong></p></Bloc>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Bloc` (`wf-bloc`) | `Bloc` (`ds-bloc`) |
