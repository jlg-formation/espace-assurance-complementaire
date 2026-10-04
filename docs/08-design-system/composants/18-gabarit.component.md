⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 18 Gabarit

> Niveau : modèle · Version : MVP · Composant : `Gabarit` · Classes : `ds-entete`, `ds-nav-globale`, `ds-ariane`, `ds-pied` · Statut : terminé
> Code : [Gabarit.tsx](../../../web/src/design-system/composants/Gabarit.tsx) · [Gabarit.css](../../../web/src/design-system/composants/Gabarit.css) · [Gabarit.doc.tsx](../../../web/src/design-system/composants/Gabarit.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Gabarit` sur les 57 écrans ; zones de [03-navigation.nav.md](../../06-architecture-information/03-navigation.nav.md), via `src/projet/zones.ts`

## Rôle
Structure de page d'une zone : en-tête avec logo et liens utilitaires, navigation principale, fil d'Ariane, contenu, pied de page. Dans l'espace adhérent, la navigation devient une barre de 5 onglets fixée en bas sur mobile.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| zone | `'site-public' \| 'espace-adherent' \| 'transverse'` | — (obligatoire) | Navigation, utilitaires et pied de la zone |
| rubrique | `string` | — | Rubrique courante (`aria-current`) |
| ariane | `{ libelle: string; vers?: EcranId }[]` | — | Fil d'Ariane ; le dernier élément est la page courante |
| children | `ReactNode` | — | Contenu de `main` |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Lien d'évitement | `a` « Aller au contenu », masqué hors focus | `ds-evitement` | oui |
| En-tête | `header` | `ds-entete` | oui |
| Logo | `a` « Clarea » | `ds-logo` | oui |
| Liens utilitaires | `nav` + `ul` | `ds-utilitaire` | selon la zone |
| Navigation principale | `nav` + `ul` | `ds-nav-globale`, `ds-nav-globale--onglets` | oui |
| Fil d'Ariane | `nav` + `ol` | `ds-ariane` | non |
| Contenu | `main`, 72 rem au plus, `id` unique et `tabIndex={-1}` | — | oui |
| Pied de page | `footer` + `ul` | `ds-pied` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Site public, transverse | `zone` | `ds-nav-globale` | navigation en liste qui passe à la ligne |
| Espace adhérent | `zone="espace-adherent"` | `ds-nav-globale--onglets` | sous 768 px : 5 onglets fixés en bas ; à partir de 768 px : barre sous l'en-tête |
| Avec fil d'Ariane | `ariane` | `ds-ariane` | écrans sous une rubrique |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Rubrique courante | `rubrique` → `aria-current="page"` | fond pétrole clair, gras, filet de 3 px (bas sur ordinateur, haut sur les onglets) | `color.background.accent`, `color.border.accent`, `size.focus-ring` |
| Survol d'une rubrique | `:hover` | fond gris clair, souligné | `color.background.subtle` |
| Focus | `:focus-visible` | contour de 3 px | `color.border.focus`, `size.focus-ring` |
| Page courante du fil | dernier élément | texte gras, non cliquable | `font.weight.bold` |

## Tokens employés
`color.action.primary`, `color.text.default`, `color.text.link`, `color.text.muted`, `color.background.default`, `color.background.subtle`, `color.background.accent`, `color.border.default`, `color.border.strong`, `color.border.accent`, `font.family.heading`, `font.size.{s,m,xl}`, `font.weight.bold`, `font.line-height.tight`, `size.target`, `size.focus-ring`, `size.tab-bar`, `size.content`, `space.1` à `space.7` ; requête média `min-width: 768px` (`breakpoint.tablet`)

## Accessibilité
- **HTML** : `header`, `nav` (×3, nommées), `main`, `footer` ; fil d'Ariane en `ol`
- **Clavier** : ordre logo → utilitaires → navigation → fil d'Ariane → contenu → pied ; sur mobile, la barre d'onglets, fixée en bas, reste avant le contenu dans l'ordre de tabulation
- **ARIA** : `aria-label` « Liens utilitaires », « Navigation principale », « Fil d'Ariane » ; `aria-current="page"` sur la rubrique et sur le dernier élément du fil seulement
- **Lecteur d'écran** : « navigation Navigation principale, lien Mon arrêt de travail, page actuelle »
- **Autres** : cibles de 44 px partout (onglets, fil d'Ariane, utilitaires, pied) ; espace réservé sous le contenu pour la barre d'onglets ; lien d'évitement « Aller au contenu » au premier Tab : il déplace le focus sur `main` sans changer de route (HashRouter), ajouté après le contrôle clavier des prototypes

## Rédaction
Libellés de [03-navigation.nav.md](../../06-architecture-information/03-navigation.nav.md) et du glossaire, sans modification. Le logo est le nom de la marque.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Une rubrique courante par page | Marquer à la fois la rubrique et un utilitaire |
| Un `vers` sur chaque élément intermédiaire du fil | Un élément intermédiaire non cliquable |

## Code

```tsx
<Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Déclarer un arrêt' }]}>
  <h1>Déclarer un arrêt de travail</h1>
</Gabarit>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Gabarit` (`wf-entete`, `wf-nav-globale--onglets`, `wf-ariane`, `wf-pied`, logo « LOGO ») | `Gabarit` (`ds-entete`, `ds-nav-globale--onglets`, `ds-ariane`, `ds-pied`, logo « Clarea ») |
