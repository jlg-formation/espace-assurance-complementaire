⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 09 Repli

> Niveau : élément (nouveau) · Version : MVP · Composant : `Repli` · Classe : `ds-repli` · Statut : terminé
> Code : [Repli.tsx](../../../web/src/design-system/composants/Repli.tsx) · [Repli.css](../../../web/src/design-system/composants/Repli.css) · [Repli.doc.tsx](../../../web/src/design-system/composants/Repli.doc.tsx) · Documentation : `/#/design-system`
> Origine : `details` / `summary` HTML sur [EC02](../../07-wireframes/01-site-public/EC02-formules-sante-en-euros.wireframe.md), [EC32](../../07-wireframes/02-espace-adherent/EC32-resultat-de-l-estimation.wireframe.md), [EC33](../../07-wireframes/02-espace-adherent/EC33-envoi-d-un-document.wireframe.md), [EC48](../../07-wireframes/02-espace-adherent/EC48-mes-indemnites.wireframe.md)

## Rôle
Garder à portée un détail secondaire (calcul d'un montant, consignes de prise de vue, tableau complet des garanties) sans l'imposer à la première lecture (principe 4). Pour une information indispensable, ne pas replier.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| titre | `string` | — (obligatoire) | Texte du déclencheur |
| ouvert | `boolean` | `false` | Ouvert au chargement |
| children | `ReactNode` | — | Contenu replié |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `details` | `ds-repli` | oui |
| Déclencheur | `summary`, précédé de « + » ou « − » | — | oui |
| Contenu | `div` | `ds-repli__contenu` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Fermé | défaut | — | cas général |
| Ouvert | `ouvert` | `[open]` | quand le contexte rend le détail utile (2e échec de photo) |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Fermé | — | « + » et titre en pétrole gras | `color.text.link` |
| Ouvert | clic, Entrée, Espace | « − », contenu en retrait | — |
| Survol | `:hover` | titre souligné | — |
| Focus | `:focus-visible` | contour de 3 px | `color.border.focus`, `size.focus-ring` |

## Tokens employés
`color.text.link`, `color.border.default`, `size.target`, `space.1`, `space.2`, `space.3`, `space.4`, `space.6`, `font.weight.bold`

## Accessibilité
- **HTML** : `details` / `summary` natifs
- **Clavier** : Tab atteint le titre ; Entrée ou Espace ouvre et ferme
- **ARIA** : aucun : l'état ouvert ou fermé est annoncé nativement
- **Lecteur d'écran** : « Comment ce montant est calculé, réduit, résumé »
- **Autres** : déclencheur de 44 px ; le signe + / − double l'état ; aucune animation

## Rédaction
Le titre dit ce qu'on trouve : « Comment ce montant est calculé », « Conseils pour une photo lisible ». Pas de « En savoir plus ».

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Replier le calcul, laisser le montant visible | Replier le montant lui-même |
| Un repli par sujet | Un accordéon de dix replis |

## Code

```tsx
<Repli titre="Comment ce montant est calculé">
  <p>Votre revenu garanti (36 000 € par an), moins ce que verse le régime obligatoire, à partir du 31e jour d'arrêt.</p>
</Repli>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `details` / `summary` HTML (pas de composant) | `Repli` (`ds-repli`) — fusion validée |
