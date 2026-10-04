⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 01 Bouton

> Niveau : élément · Version : MVP · Composant : `Bouton` · Classe : `ds-btn` · Statut : terminé
> Code : [Bouton.tsx](../../../web/src/design-system/composants/Bouton.tsx) · [Bouton.css](../../../web/src/design-system/composants/Bouton.css) · [Bouton.doc.tsx](../../../web/src/design-system/composants/Bouton.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Bouton` sur 47 écrans, dont [EC43](../../07-wireframes/02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md), [EC06](../../07-wireframes/01-site-public/EC06-demande-de-tarif.wireframe.md)

## Rôle
Faire avancer l'adhérent d'une étape (« Continuer », « Ajouter une pièce ») ou déclencher une action. Un seul bouton principal par écran ; pour aller vers un écran depuis un texte, utiliser Lien.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| variante | `'principal' \| 'secondaire'` | `'secondaire'` | Poids visuel |
| vers | `EcranId` | — | Écran cible : rend un lien `a` |
| etat | `string` | — | État de l'écran cible |
| desactive | `boolean` | `false` | Rend un `button` désactivé, même avec `vers` |
| type | `'button' \| 'submit'` | `'button'` | Type du `button` sans `vers` |
| children | `ReactNode` | — | Libellé |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `a` (avec `vers`) ou `button` | `ds-btn ds-btn--{variante}` | oui |
| Libellé | texte | — | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Principal | `variante="principal"` | `ds-btn--principal` | une seule par écran : l'action qui fait avancer |
| Secondaire | défaut | `ds-btn--secondaire` | actions alternatives (« Annuler », « Déclarer un changement ») |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Repos | — | fond pétrole, texte blanc (principal) ; fond blanc, bordure et texte pétrole (secondaire) | `color.action.primary`, `color.action.primary-text`, `color.action.secondary-text`, `color.action.secondary-border` |
| Survol | `:hover` | fond plus foncé (principal), fond pétrole clair (secondaire) | `color.action.primary-hover`, `color.action.secondary-hover` |
| Focus | `:focus-visible` | contour de 3 px décalé de 3 px | `color.border.focus`, `size.focus-ring` |
| Actif | `:active` | descend de 1 px | — |
| Désactivé | `desactive` → `:disabled` | fond gris, texte gris foncé, curseur interdit | `color.action.disabled`, `color.action.disabled-text` |

## Tokens employés
`color.action.primary`, `color.action.primary-hover`, `color.action.primary-text`, `color.action.secondary-text`, `color.action.secondary-border`, `color.action.secondary-hover`, `color.action.disabled`, `color.action.disabled-text`, `color.background.default`, `color.border.focus`, `size.target`, `size.focus-ring`, `space.2`, `space.5`, `radius.s`, `font.weight.bold`, `duration.fast`

## Accessibilité
- **HTML** : `a` pour aller vers un écran (`vers`), `button` pour agir sur place
- **Clavier** : Tab pour l'atteindre ; Entrée active un lien ; Entrée ou Espace active un bouton
- **ARIA** : aucun : éléments natifs ; `disabled` natif sur le bouton désactivé
- **Lecteur d'écran** : annonce « lien » ou « bouton » et le libellé ; « estompé » ou « indisponible » si désactivé
- **Autres** : hauteur de 44 px au moins ; transitions annulées sous `prefers-reduced-motion` (base) ; un bouton désactivé doit être accompagné d'un texte qui dit pourquoi

## Rédaction
Verbe à l'infinitif, mots du glossaire, 4 mots au plus : « Ajouter une pièce », « Déclarer un arrêt », « Continuer ». Jamais « OK » ni « Valider » seul quand l'action peut être nommée.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Un bouton principal, à la fin du formulaire | Deux boutons principaux côte à côte |
| « Envoyer ma question » | « Soumettre » |
| Désactiver en expliquant ce qui manque | Désactiver sans explication |

## Code

```tsx
<Bouton variante="principal" vers="EC33" etat="piece">Ajouter une pièce</Bouton>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Bouton` (`wf-btn`, `wf-btn--principal`) | `Bouton` (`ds-btn`, `ds-btn--principal`, `ds-btn--secondaire`) |
