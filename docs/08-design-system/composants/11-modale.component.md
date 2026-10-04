⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 11 Modale

> Niveau : élément · Version : MVP · Composant : `Modale` · Classe : `ds-modale` · Statut : terminé
> Code : [Modale.tsx](../../../web/src/design-system/composants/Modale.tsx) · [Modale.css](../../../web/src/design-system/composants/Modale.css) · [Modale.doc.tsx](../../../web/src/design-system/composants/Modale.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Modale` du kit, sans usage dans les wireframes ; requis par le contrat `ui.ts`

## Rôle
Demander une confirmation courte sans quitter l'écran (retirer un accès). À éviter pour un contenu long ou une démarche : préférer un écran ou un `Repli`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| titre | `string` | — (obligatoire) | Titre, nom de la fenêtre |
| fermerVers | `EcranId` | — | Écran ouvert par « Fermer » |
| children | `ReactNode` | — | Contenu et actions |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Voile | `div` | `ds-modale` | oui |
| Fenêtre | `div role="dialog"` | — | oui |
| Titre | `h2` | — | oui |
| Fermer | `a` | `ds-lien` | non |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Mobile | < 768 px | — | panneau en bas de l'écran, à portée du pouce |
| Tablette et plus | ≥ 768 px | — | fenêtre centrée, 32 rem au plus |
| Avec « Fermer » | `fermerVers` | — | toujours, sauf confirmation bloquante |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Ouverte | rendu | voile gris à 70 %, fenêtre blanche | `color.background.overlay`, `color.background.default` |
| Focus | `:focus-visible` sur ses éléments | contour de 3 px | `color.border.focus` |

## Tokens employés
`color.background.overlay`, `color.background.default`, `color.text.default`, `size.dialog`, `space.4`, `space.5`, `radius.m`

## Accessibilité
- **HTML** : `div role="dialog"` (structure du kit) ; aux prototypes, préférer `dialog` natif avec `showModal()` si la structure peut évoluer (retour vers le kit possible)
- **Clavier** : à l'ouverture, focus sur le titre ou le premier élément ; Tab reste dans la fenêtre ; Échap ferme ; à la fermeture, focus rendu au déclencheur — comportement React à ajouter dans les prototypes (motif « Dialog (Modal) » de l'APG WAI-ARIA)
- **ARIA** : `role="dialog"`, `aria-modal="true"`, `aria-labelledby` vers le titre
- **Lecteur d'écran** : « boîte de dialogue, Retirer l'accès de Sylvie ? »
- **Autres** : défilement interne si le contenu dépasse 90 % de la hauteur

## Rédaction
Titre en question fermée (« Retirer l'accès de Sylvie ? ») ; bouton qui répète le verbe (« Retirer l'accès ») ; jamais « Oui / Non ».

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Confirmer une action difficile à annuler | Ouvrir une modale à l'arrivée sur un écran |
| « Retirer l'accès » / « Fermer » | « OK » / « Annuler » |

## Code

```tsx
<Modale titre="Retirer l'accès de Sylvie ?" fermerVers="EC28">
  <p>Elle ne pourra plus agir pour vous. Vous pourrez l'inviter de nouveau.</p>
  <Bouton variante="principal" vers="EC28" etat="retire">Retirer l'accès</Bouton>
</Modale>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Modale` (`wf-modale`) | `Modale` (`ds-modale`) |
