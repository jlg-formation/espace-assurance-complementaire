⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 04 Etiquette

> Niveau : élément · Version : MVP · Composant : `Etiquette` · Classe : `ds-etiquette` · Statut : terminé
> Code : [Etiquette.tsx](../../../web/src/design-system/composants/Etiquette.tsx) · [Etiquette.css](../../../web/src/design-system/composants/Etiquette.css) · [Etiquette.doc.tsx](../../../web/src/design-system/composants/Etiquette.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Etiquette` sur [EC02](../../07-wireframes/01-site-public/EC02-formules-sante-en-euros.wireframe.md), [EC27](../../07-wireframes/02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md), [EC36](../../07-wireframes/02-espace-adherent/EC36-suivi-de-mes-demandes.wireframe.md), [EC38](../../07-wireframes/02-espace-adherent/EC38-remboursements-du-foyer.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md)

## Rôle
Afficher un statut court à côté de ce qu'il qualifie. Dans une liste de démarches, passer par `LigneSuivi` qui fixe libellé et ton ; pour un message qui demande une action, utiliser `Alerte`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| ton | `'neutre' \| 'succes' \| 'avertissement' \| 'erreur' \| 'information'` | `'neutre'` | Couleur du statut |
| children | `ReactNode` | — | Libellé du statut |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Étiquette | `span` | `ds-etiquette ds-etiquette--{ton}` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Neutre | défaut | `ds-etiquette--neutre` | Terminée |
| Succès | `ton="succes"` | `ds-etiquette--succes` | Acceptée, Réponse disponible |
| Avertissement | `ton="avertissement"` | `ds-etiquette--avertissement` | À fournir, Retardée |
| Erreur | `ton="erreur"` | `ds-etiquette--erreur` | Refusée, Non couvert |
| Information | `ton="information"` | `ds-etiquette--information` | En cours |

## États
Aucun : élément non interactif.

## Tokens employés
`color.feedback.{success,warning,error,info}.{text,background,border}`, `color.background.subtle`, `color.border.strong`, `color.text.default`, `radius.full`, `space.2`, `font.size.s`, `font.weight.bold`

## Accessibilité
- **HTML** : `span`, texte toujours présent
- **Clavier** : non concerné
- **ARIA** : aucun
- **Lecteur d'écran** : lit le texte du statut dans le fil de la ligne
- **Autres** : la couleur double le texte, ne le remplace jamais ; bordure visible pour les daltoniens et le mode contraste élevé

## Rédaction
1 à 2 mots, au participe ou à l'adjectif, accordés à l'objet (« Acceptée » pour une pièce). Dans le suivi, uniquement les 7 statuts de `LigneSuivi`.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| « À fournir » | « Attendue » ou « Manquante » pour le même cas |
| « Refusée » | « ✖ » seul |

## Code

```tsx
<Etiquette ton="avertissement">À fournir</Etiquette>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Etiquette` (`wf-etiquette`, ton ignoré) | `Etiquette` (`ds-etiquette--{ton}`) |
