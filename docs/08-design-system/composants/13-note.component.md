⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 13 Note

> Niveau : élément · Version : MVP · Composant : `Note` · Classe : — · Statut : terminé
> Code : [Note.tsx](../../../web/src/design-system/composants/Note.tsx) · [Note.doc.tsx](../../../web/src/design-system/composants/Note.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Note` sur 33 écrans annotés, dont [EC43](../../07-wireframes/02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md)

## Rôle
Annotation de wireframe, décrite dans la fiche de l'écran. **Ne rend rien** dans le design system : un écran passé du kit au design system garde ses `Note` sans effet visible, et les prototypes peuvent les retirer.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| n | `number` | — (obligatoire) | Numéro de l'annotation dans la fiche de l'écran |

## Anatomie
Aucune : le composant renvoie `null`.

## Variantes
Aucune.

## États
Aucun.

## Tokens employés
Aucun.

## Accessibilité
- **HTML** : aucun rendu
- **Clavier** : non concerné
- **ARIA** : aucun
- **Lecteur d'écran** : rien n'est annoncé
- **Autres** : —

## Rédaction
Non concerné : le texte de l'annotation est dans la fiche de l'écran (`docs/07-wireframes/`).

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Reporter dans le prototype ce que l'annotation décrit (règle, contenu) | Supprimer la Note sans avoir traité son annotation |

## Code

```tsx
<p>Montant indicatif. <Note n={1} /></p>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Note` (`wf-note`, pastille numérotée) | `Note` (ne rend rien) |
