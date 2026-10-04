⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 05 Alerte

> Niveau : élément · Version : MVP · Composant : `Alerte` · Classe : `ds-alerte` · Statut : terminé
> Code : [Alerte.tsx](../../../web/src/design-system/composants/Alerte.tsx) · [Alerte.css](../../../web/src/design-system/composants/Alerte.css) · [Alerte.doc.tsx](../../../web/src/design-system/composants/Alerte.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Alerte` sur 34 écrans, dont [EC43](../../07-wireframes/02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md), [EC36](../../07-wireframes/02-espace-adherent/EC36-suivi-de-mes-demandes.wireframe.md)

## Rôle
Dire ce qui change pour l'adhérent (refus, retard, confirmation) et ce qu'il doit faire ensuite (principe 3). Pour un statut court dans une liste, utiliser `Etiquette`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| type | `'erreur' \| 'succes' \| 'avertissement' \| 'information'` | — (obligatoire) | Nature du message |
| titre | `string` | — | Phrase principale, après le préfixe |
| children | `ReactNode` | — | Explication, action suivante |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `div` | `ds-alerte ds-alerte--{type}` | oui |
| Préfixe | `strong` (« Erreur : », « Succès : », « Attention : », « Information : ») | — | oui |
| Titre | texte du premier `p` | — | oui |
| Contenu | `p`, `Lien`, `Bouton` | — | non (obligatoire pour erreur et avertissement) |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Erreur | `type="erreur"` | `ds-alerte--erreur` | pièce refusée, échec de paiement, identifiants incorrects |
| Avertissement | `type="avertissement"` | `ds-alerte--avertissement` | pièce à fournir, déclaration hors délai |
| Succès | `type="succes"` | `ds-alerte--succes` | envoi reçu, rappel confirmé |
| Information | `type="information"` | `ds-alerte--information` | règle à connaître (délai de 30 jours) |

## États
Aucun : élément non interactif ; ses liens et boutons gardent leurs états.

## Tokens employés
`color.feedback.{error,success,warning,info}.{text,background,border}`, `color.text.default`, `size.accent-bar`, `radius.s`, `space.3`, `space.4`, `font.weight.bold`

## Accessibilité
- **HTML** : `div` ; le préfixe en `strong`
- **Clavier** : non concerné ; ses liens sont atteints au Tab
- **ARIA** : `role="alert"` pour une erreur (annoncée tout de suite), `role="status"` pour les autres (annoncée sans interrompre)
- **Lecteur d'écran** : « Erreur : Relevé du régime obligatoire refusé… »
- **Autres** : le préfixe textuel porte le sens, la couleur et le filet de 6 px le doublent ; texte courant en `color.text.default` (contraste supérieur à 14:1)

## Rédaction
Titre : le fait, avec les dates et montants (« Relevé refusé : il ne couvre que le mois de mai. »). Contenu : l'action suivante (« Envoyez un relevé du 12 mai au 30 juin. »). Ton calme, sans excuse vague.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Une alerte d'erreur avec la correction attendue | « Une erreur est survenue. » |
| Une seule alerte par sujet, en haut du contenu | Empiler trois alertes |

## Code

```tsx
<Alerte type="erreur" titre="Relevé du régime obligatoire refusé : il ne couvre que le mois de mai.">
  <p>Envoyez un relevé couvrant la période du 12 mai au 30 juin.</p>
</Alerte>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Alerte` (`wf-alerte`) | `Alerte` (`ds-alerte--{type}`) |
