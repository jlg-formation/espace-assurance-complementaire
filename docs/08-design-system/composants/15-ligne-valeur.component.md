⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 15 LigneValeur

> Niveau : composant (nouveau) · Version : MVP · Composant : `LigneValeur` · Classe : `ds-ligne-valeur` · Statut : terminé
> Code : [LigneValeur.tsx](../../../web/src/design-system/composants/LigneValeur.tsx) · [LigneValeur.css](../../../web/src/design-system/composants/LigneValeur.css) · [LigneValeur.doc.tsx](../../../web/src/design-system/composants/LigneValeur.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Ligne` + `span` + `strong` sur 14 écrans, dont [EC32](../../07-wireframes/02-espace-adherent/EC32-resultat-de-l-estimation.wireframe.md), [EC04](../../07-wireframes/01-site-public/EC04-simulateur-de-revenus.wireframe.md), [EC45](../../07-wireframes/02-espace-adherent/EC45-confirmation-de-declaration.wireframe.md), [EC39](../../07-wireframes/02-espace-adherent/EC39-detail-d-un-soin.wireframe.md), [EC11](../../07-wireframes/02-espace-adherent/EC11-mon-contrat-et-mes-documents.wireframe.md)

## Rôle
Lire une valeur à côté de son libellé : montant, date, durée, taux. La variante `total` met en avant le chiffre qui répond à la question de l'écran (reste à charge, ce qui manque) — principe 1. Se place dans une `Liste`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| libelle | `ReactNode` | — (obligatoire) | Ce que mesure la valeur |
| total | `boolean` | `false` | Met la ligne en avant |
| children | `ReactNode` | — (obligatoire) | Valeur formatée (`381,25 €`, `11 juin 2026`) |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Ligne | `li` | `ds-ligne-valeur`, `ds-ligne-valeur--total` | oui |
| Libellé | `span` | `ds-ligne-valeur__libelle` | oui |
| Valeur | `strong`, chiffres à chasse fixe, alignée à droite | `ds-ligne-valeur__valeur` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Simple | défaut | — | chaque part d'une répartition, chaque paramètre |
| Total | `total` | `ds-ligne-valeur--total` | une seule par liste : le chiffre décisif, en dernier |

## États
Aucun : élément non interactif.

## Tokens employés
`color.background.accent`, `color.border.accent`, `size.accent-bar`, `space.2`, `space.3`, `font.weight.bold`, `font.size.l`

## Accessibilité
- **HTML** : `li` dans `ul` ; valeur en `strong`
- **Clavier** : non concerné
- **ARIA** : aucun
- **Lecteur d'écran** : lit « Reste à votre charge 381,25 € » dans l'ordre du code
- **Autres** : la ligne total se distingue par le gras, la taille et le filet, pas seulement par le fond ; à 375 px, la valeur passe sous le libellé si la place manque

## Rédaction
Libellé : nom du poste, du point de vue de l'adhérent (« Reste à votre charge », « Votre mutuelle »). Valeur : formats de [01-principes](../01-principes.md#formats) ; un pourcentage toujours accompagné de son montant ailleurs dans la liste.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Le total en dernier, après les parts | Deux lignes total dans la même liste |
| `1 840 € par mois` | `1840€/m` |

## Code

```tsx
<Liste>
  <LigneValeur libelle="Assurance Maladie">75,25 €</LigneValeur>
  <LigneValeur libelle="Votre mutuelle (Confort)">193,50 €</LigneValeur>
  <LigneValeur libelle="Reste à votre charge" total>381,25 €</LigneValeur>
</Liste>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `<Ligne><span>libellé</span><strong>valeur</strong></Ligne>` (ou `span` pour la valeur sur EC11, EC22) | `LigneValeur` (`ds-ligne-valeur`) — fusion validée |
