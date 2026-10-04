# Méthode du design system

## 1. Niveaux (d'après l'*atomic design* de Brad Frost)
| Niveau | Définition | Exemples | Origine |
|---|---|---|---|
| Tokens | Décisions de base, sans forme | `color.action.primary`, `space.4` | Identité, principes |
| **Élément** | Plus petite pièce d'interface utile | Bouton, Champ, Lien, Etiquette, Alerte | Composants du kit de wireframes |
| **Composant** | Assemblage d'éléments avec un rôle | Ligne de demande, carte de contrat, dépôt de justificatif | Motifs récurrents des wireframes |
| **Modèle** | Structure d'une page | Gabarit de zone : en-tête, navigation, pied | `Gabarit` du kit |
| Page | Modèle rempli de contenus réels | Prototype d'un écran | `ux-08` |

Un composant entre dans le système s'il apparaît sur **au moins deux écrans**, ou s'il est un élément de base. Un motif unique reste dans son écran.

## 2. Tokens

### Deux niveaux
| Niveau | Rôle | Exemple | Qui l'emploie |
|---|---|---|---|
| **Primitif** | Une valeur brute, nommée par ce qu'elle est | `color.blue.700` = `#1d4f91` | Les tokens sémantiques uniquement |
| **Sémantique** | Un rôle, nommé par ce qu'il fait | `color.action.primary` = `{color.blue.700}` | Les composants |

Changer de marque = changer les primitifs et les alias ; les composants ne bougent pas. Un composant n'emploie jamais un primitif.

### Format W3C Design Tokens (DTCG)
```json
{
  "color": {
    "blue": {
      "$type": "color",
      "700": { "$value": "#1d4f91" }
    },
    "action": {
      "$type": "color",
      "primary": { "$value": "{color.blue.700}", "$description": "Fond du bouton principal" }
    }
  },
  "space": {
    "$type": "dimension",
    "4": { "$value": "1rem" }
  }
}
```
- `$type` sur le groupe (hérité) ou sur le token ; `$value` ; `$description` pour tout token sémantique.
- Alias : `"{chemin.du.token}"`, qui doit exister.
- Valeurs écrites en chaîne (`"#1d4f91"`, `"1rem"`, `"200ms"`), forme acceptée par la plupart des outils (Style Dictionary, Tokens Studio). La version stable du format préfère des objets (`{ "colorSpace": "srgb", ... }`, `{ "value": 1, "unit": "rem" }`) : convertir si un outil l'exige.
- Chemins en anglais (convention des outils), en minuscules, segments séparés par des points.

### Génération du CSS
`bun run tokens` génère `tokens.css` : un token = une variable, chemin joint par des tirets, préfixe `--ds-` ; un alias devient un `var()` :

| JSON | CSS |
|---|---|
| `color.blue.700` = `#1d4f91` | `--ds-color-blue-700: #1d4f91;` |
| `color.action.primary` = `{color.blue.700}` | `--ds-color-action-primary: var(--ds-color-blue-700);` |

`tokens.json` est la seule source ; `tokens.css` ne se modifie jamais à la main. Le script échoue sur un alias introuvable ; `bun run tokens --verifier` et `bun test` échouent si `tokens.css` n'est pas à jour.

### Tokens sémantiques minimaux
| Groupe | Tokens |
|---|---|
| `color.text` | `default`, `muted`, `inverse`, `link`, `error`, `success` |
| `color.background` | `default`, `subtle`, `inverse` |
| `color.border` | `default`, `strong`, `focus` |
| `color.action` | `primary`, `primary-hover`, `primary-text`, `secondary-text`, `secondary-border`, `disabled`, `disabled-text` |
| `color.feedback.{error,success,warning,info}` | `text`, `background`, `border` |
| `font` | `family.base`, `family.heading`, `size.{s,m,l,xl,xxl}`, `weight.{regular,bold}`, `line-height.{tight,base}` |
| `space` | échelle `1` à `8` sur une base de 4 px (`space.4` = 1 rem) |
| `radius` | `s`, `m`, `full` |
| `size` | `target` (44 px), `focus-ring` |
| `duration` | `fast`, `base` |
| `breakpoint` | `tablet` (768 px), `desktop` (1024 px) |

Les variables CSS ne fonctionnent pas dans les requêtes média : les CSS des composants y écrivent la valeur de `breakpoint.*` en dur, avec un commentaire qui nomme le token.

**Mobile d'abord** : les styles de base d'un composant valent pour le mobile ; les requêtes média n'utilisent que `min-width` (`breakpoint.tablet`, `breakpoint.desktop`) pour enrichir la mise en page sur des écrans plus larges. Le `Gabarit` reproduit le comportement mobile du kit (barre d'onglets fixée en bas quand la zone le prévoit). `bun test` refuse toute requête `max-width`. Autres valeurs tolérées : `0`, `1px` et `2px` pour les filets, les unités de mise en page (`%`, `vh`, `fr`). Le test « aucune valeur en dur » refuse le reste (couleurs, `rem`, `em`, pixels au-delà de 2).

## 3. Contrastes (WCAG 2.2, niveau AA)
| Paire | Seuil |
|---|---|
| Texte normal / fond | 4,5:1 |
| Grand texte (24 px, ou 18,66 px en gras) / fond | 3:1 |
| Élément d'interface (bordure de champ, icône utile) et indicateur de focus / fond adjacent | 3:1 |

Calcul, pour chaque couleur en sRGB :
- chaque canal `c = valeur / 255`, puis `c ≤ 0,04045 ? c / 12,92 : ((c + 0,055) / 1,055) ^ 2,4` ;
- luminance `L = 0,2126 R + 0,7152 G + 0,0722 B` ;
- rapport `(L_claire + 0,05) / (L_foncée + 0,05)`.

`bun run contrastes` applique ce calcul à chaque paire de `src/design-system/tokens/contrastes.json`, en résolvant les alias, et affiche le tableau à reporter dans `02-identite.md`. Déclarer toutes les paires réellement employées : texte sur fond, texte de bouton sur bouton (repos et survol), texte de retour sur fond de retour, lien sur fond, bordure de champ sur fond, focus sur fond. Couleurs en hexadécimal opaque uniquement.

## 4. Pistes d'identité
Une piste est une hypothèse d'identité au service des principes, pas un goût :

| Levier | Variations possibles |
|---|---|
| Palette primaire | Teinte (bleu de confiance, vert apaisant, violet, terracotta...) ; une gamme de 50 à 900 |
| Neutres | Gris froids ou chauds |
| Typographie | Piles système : sans empattement humaniste (`"Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif`), à empattement pour les titres (`Georgia, "Times New Roman", serif`), arrondie (`ui-rounded, "SF Pro Rounded", system-ui, sans-serif`) |
| Échelle typographique | Rapport 1,2 (sobre) ou 1,25 (affirmé) |
| Rayon | 0 (institutionnel), 4 px (neutre), 12 px (chaleureux) |
| Densité | Espacements serrés (beaucoup d'informations) ou aérés (rassurant) |

Les couleurs de retour (erreur, succès, avertissement, information) sont distinctes de la primaire et toujours doublées d'un texte ou d'une icône. Le nom de la marque est inventé ; vérifier qu'il n'évoque aucune marque existante, en particulier dans le secteur du projet. Le logo est typographique : nom de la marque, police et couleur des tokens.

## 5. Principes de design
Un bon principe :
- part d'un constat sourcé (« Les personas ne savent pas où en est leur demande et appellent pour le savoir » `[P02]` `[P05]`) ;
- tranche entre deux options raisonnables (« Clair avant d'être complet » écarte « tout montrer sur un écran ») ;
- se traduit en décisions vérifiables dans les composants (« Le statut et le délai sont en premier ; l'historique détaillé est replié »).

3 à 5 principes, pas plus : au-delà, aucun n'arbitre.

## 6. Rédaction
- **Voix** : constante (qui parle : un interlocuteur clair et bienveillant, par exemple). **Ton** : s'adapte au moment (un refus n'est pas une demande acceptée).
- Vocabulaire : celui du glossaire, à la lettre.
- Formats français, avec espaces insécables :

| Donnée | Format | Exemple |
|---|---|---|
| Montant | virgule décimale, espace insécable avant € | `18,55 €`, `1 250,00 €` |
| Date dans un texte | jour mois année | `12 septembre 2026` |
| Date dans un tableau | abrégée | `12 sept. 2026` |
| Pourcentage | espace insécable avant % | `100 %` |
| Téléphone | par paires | `01 23 45 67 89` |
| Heure | `h` | `14 h 30` |

## 7. États et accessibilité des composants
États à documenter pour tout élément interactif : repos, survol, focus (`:focus-visible`), actif, désactivé ; selon le cas : erreur, chargement, sélectionné, ouvert.

- Focus : contour d'au moins 2 px, contraste 3:1, jamais supprimé.
- Cibles tactiles : `size.target` (44 px) au moins.
- Animations : durées en tokens, annulées sous `@media (prefers-reduced-motion: reduce)`.
- Un état n'est jamais porté par la seule couleur : texte, icône ou forme en plus.
- Pour les composants à motif d'interaction (onglets, accordéon, fenêtre modale), suivre les motifs du WAI-ARIA Authoring Practices Guide et noter rôles, attributs et clavier dans la fiche. Préférer les éléments natifs (`button`, `details`/`summary`, `dialog`) ; un comportement React (gestion du focus d'une modale, touche Échap) est décrit dans la fiche et démontré dans la documentation.

## 8. Correspondance avec le kit de wireframes
Le contrat `web/src/projet/ui.ts` définit les composants du kit et leurs props. Le design system les implémente tous :

| Règle | Exemple |
|---|---|
| Équivalent direct : même nom, mêmes props, même structure HTML, classes `ds-*` | `Bouton` du kit (`wf-btn`) → `Bouton` du design system (`ds-btn`) |
| Outil de wireframe | `Note` ne rend rien ; `Image` et `Texte` gardent un rendu de remplacement, à remplacer par de vrais contenus dans les prototypes |
| Motif récurrent devenu composant | `Ligne` + `Lien` + `Etiquette` → `LigneDemande` : composant nouveau, ses props dans son fichier, la fusion notée dans l'index |

Le test « correspondance avec le kit » vérifie que chaque composant du kit existe dans l'objet `ds`. Un écran passe du wireframe au prototype en changeant son import ; seules les fusions validées modifient sa structure.

Noms de composants et de classes en français, comme le kit ; tokens en anglais. Si un composant a besoin d'une prop absente du contrat, c'est un retour « vers le kit » : le contrat change dans les assets de `ux-06`, le kit et le design system suivent.

## 9. Documentation
`/#/design-system` (`Documentation.tsx`, copie conforme) est la référence vivante :
1. Tokens, lus dans `tokens.json` : nuancier avec nom, valeur et description, tailles de texte, espacements.
2. Un chapitre par fichier `*.doc.tsx`, dans l'ordre des numéros : rôle, chemin de la fiche, puis chaque exemple (rendu réel + code à copier).

Les états portés par une prop (désactivé, erreur, chargement, sélectionné) ont chacun leur exemple. Les états d'interaction (survol, focus, actif) se démontrent en direct : survoler, tabuler. La mise en page de la documentation vit dans `documentation.css`, jamais chargé par les prototypes.
