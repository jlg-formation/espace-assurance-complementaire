⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 02 Lien

> Niveau : élément · Version : MVP · Composant : `Lien` · Classe : `ds-lien` · Statut : terminé
> Code : [Lien.tsx](../../../web/src/design-system/composants/Lien.tsx) · [Lien.css](../../../web/src/design-system/composants/Lien.css) · [Lien.doc.tsx](../../../web/src/design-system/composants/Lien.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Lien` sur 41 écrans, dont [EC36](../../07-wireframes/02-espace-adherent/EC36-suivi-de-mes-demandes.wireframe.md), [EC48](../../07-wireframes/02-espace-adherent/EC48-mes-indemnites.wireframe.md), [EC23](../../07-wireframes/03-transverse/EC23-connexion.wireframe.md)

## Rôle
Mener vers un autre écran depuis une phrase ou une liste. Pour l'action qui fait avancer l'écran, utiliser Bouton.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| vers | `EcranId` | — (obligatoire) | Écran cible |
| etat | `string` | — | État de l'écran cible |
| children | `ReactNode` | — | Texte du lien |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Lien | `a` | `ds-lien` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Unique | — | `ds-lien` | partout ; la graisse augmente dans `RecoursHumain` |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Repos | — | pétrole, souligné 1 px | `color.text.link` |
| Survol | `:hover` | soulignement de 2 px | — |
| Focus | `:focus-visible` | contour de 3 px | `color.border.focus`, `size.focus-ring` |
| Actif | `:active` | pétrole foncé | `color.action.primary-hover` |
| Visité | — | non distingué : les liens mènent à des écrans d'application, pas à des documents | — |

## Tokens employés
`color.text.link`, `color.action.primary-hover`, `color.border.focus`, `size.focus-ring`, `space.1`

## Accessibilité
- **HTML** : `a` avec `href`
- **Clavier** : Tab, Entrée
- **ARIA** : aucun : élément natif
- **Lecteur d'écran** : « lien » + texte ; le texte doit avoir un sens hors contexte (liste des liens)
- **Autres** : toujours souligné : la couleur seule ne signale pas le lien ; dans un texte courant, la cible peut faire moins de 44 px (exception « en ligne » de WCAG 2.5.8), sinon `RecoursHumain` et `Gabarit` portent la cible à 44 px

## Rédaction
Le texte du lien nomme la destination ou l'action (« Compléter le devis », « Mes indemnités ») ; jamais « cliquez ici » ni « en savoir plus » seul.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| « <Lien>Voir mes indemnités</Lien> » | « Pour vos indemnités, <Lien>cliquez ici</Lien> » |
| Lien pour naviguer | Lien pour envoyer un formulaire |

## Code

```tsx
<p>Le détail du calcul est dans <Lien vers="EC48">Mes indemnités</Lien>.</p>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Lien` (`wf-lien`) | `Lien` (`ds-lien`) |
