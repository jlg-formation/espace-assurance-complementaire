⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 06 Liste et Ligne

> Niveau : élément · Version : MVP · Composants : `Liste`, `Ligne` · Classes : `ds-liste`, `ds-ligne` · Statut : terminé
> Code : [Liste.tsx](../../../web/src/design-system/composants/Liste.tsx) · [Liste.css](../../../web/src/design-system/composants/Liste.css) · [Liste.doc.tsx](../../../web/src/design-system/composants/Liste.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Liste` et `Ligne` sur 23 écrans, dont [EC18](../../07-wireframes/01-site-public/EC18-recapitulatif-avant-signature.wireframe.md), [EC44](../../07-wireframes/02-espace-adherent/EC44-pieces-a-fournir.wireframe.md), [EC55](../../07-wireframes/03-transverse/EC55-plan-du-site.wireframe.md)

## Rôle
Énumérer des éléments de même nature, séparés par un filet. Pour un libellé et sa valeur, utiliser `LigneValeur` ; pour une démarche et son statut, `LigneSuivi` : tous deux se placent dans une `Liste`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| children (`Liste`) | `ReactNode` | — | Des `Ligne`, `LigneValeur` ou `LigneSuivi` |
| children (`Ligne`) | `ReactNode` | — | Contenu ; deux enfants se répartissent à gauche et à droite |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Liste | `ul` | `ds-liste` | oui |
| Ligne | `li` | `ds-ligne` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Ligne simple | un enfant | — | exclusions, pièces à fournir |
| Ligne à deux parties | deux enfants | — | élément et précision ; passe sur deux lignes si la place manque |

## États
Aucun : élément non interactif.

## Tokens employés
`color.border.default`, `space.1`, `space.3`, `space.4`

## Accessibilité
- **HTML** : `ul` / `li`
- **Clavier** : non concerné
- **ARIA** : aucun (le style `list-style: none` peut retirer la sémantique de liste dans Safari : à vérifier aux prototypes, ajouter `role="list"` si besoin)
- **Lecteur d'écran** : « liste, 5 éléments »
- **Autres** : pas de puce décorative ; le filet sépare

## Rédaction
Éléments parallèles (tous des noms ou tous des phrases), sans ponctuation finale.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| `LigneValeur` pour un montant | `<Ligne><span>…</span><strong>…</strong></Ligne>` refait à la main |
| Une liste par sujet | Mélanger pièces et montants |

## Code

```tsx
<Liste>
  <Ligne>Implants dentaires</Ligne>
  <Ligne>Chirurgie réfractive des yeux (laser)</Ligne>
</Liste>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Liste` (`wf-liste`), `Ligne` | `Liste` (`ds-liste`), `Ligne` (`ds-ligne`) |
