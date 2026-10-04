⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Identité visuelle — Clarea Assurances

> Marque **fictive**, créée pour illustrer la démarche. Le nom « Clarea » a été fixé pendant l'exploration ; il n'imite aucune marque existante du secteur (ni Swiss Life, Allianz, April, AXA). Les palettes évitent le bleu roi, le rouge et le vert vif associés aux grands assureurs. Polices système uniquement.

Comparer les pistes : `cd web; bun run dev`, puis `/#/design-system/pistes` ([Pistes.tsx](../../web/src/design-system/Pistes.tsx)). Extrait commun : EC46 Dossier d'arrêt (montant, statut d'une pièce, bouton principal, recours, erreur).

## Pistes proposées

### Piste A — Clarea : posée et claire
- **Principes servis** : 1, 2, 3
- **Pourquoi** : un bleu-vert pétrole, calme sans être froid, pour des moments anxieux (arrêt, invalidité) ; une police humaniste très lisible sur tablette pour Sylvie ; des chiffres nets pour Manon et Hélène.
- **Palette** : primaire pétrole (700 = #0b5f66, 900 = #073f44, 50 = #e8f4f5), neutres froids (texte #1b2328, secondaire #4a5560, bordure de champ #7a8691), retours erreur #b3261e, succès #1e6b3a, avertissement #8a4b00, information #0b4f80 (bleu distinct de la primaire)
- **Typographie** : `"Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif` pour tout ; échelle 1,25
- **Rayon** : 4 px · **Densité** : aérée
- **Logo** : « Clarea » en graisse 700, couleur `color.action.primary`

### Piste B — clarea : chaleureuse et rassurante
- **Principes servis** : 3
- **Pourquoi** : une prune douce et des angles arrondis pour désamorcer l'inquiétude (questionnaire de santé, expertise) ; titres arrondis, espacements généreux.
- **Palette** : primaire prune (700 = #6b3f8f, 900 = #4a2a63, 50 = #f4eef8), neutres chauds (texte #2a2420, secondaire #5c5249, bordure #8c8178), retours identiques, information #1d4f91
- **Typographie** : titres `ui-rounded, "SF Pro Rounded"`, puis pile humaniste (sous Windows, les titres retombent sur Segoe UI) ; échelle 1,2
- **Rayon** : 12 px · **Densité** : très aérée
- **Logo** : « clarea » en minuscules, police des titres, graisse 700, couleur `color.action.primary`

### Piste C — CLAREA : précise et dense
- **Principes servis** : 1, 4
- **Pourquoi** : une ardoise sobre et des titres à empattement évoquent le document de référence qu'Hélène va comparer ; densité serrée pour afficher plus de chiffres par écran.
- **Palette** : primaire ardoise (700 = #1f4466, 900 = #12293f, 50 = #edf2f7), neutres froids (texte #161b22, secondaire #48525e, bordure #7b8491), retours identiques, information #0e5a66
- **Typographie** : titres `Georgia, "Times New Roman", serif`, texte pile humaniste ; échelle 1,25
- **Rayon** : 0 · **Densité** : serrée
- **Logo** : « CLAREA » en capitales, Georgia, graisse 700, couleur `color.action.primary`

**Recommandation** : piste A. Elle sert trois principes sur quatre ; la densité serrée de C pénalise Sylvie (principe 3), et B, très arrondie, dit moins bien la précision des montants (principe 1).

## Piste retenue
**Piste A — Clarea, posée et claire**, 4 octobre 2026 — validée telle que recommandée : elle sert les principes 1, 2 et 3, et sa densité aérée convient à Sylvie sur tablette. Ajustements à la production des tokens : fond `color.background.accent` (pétrole 50) pour le chiffre décisif et l'élément courant, information en bleu #0b4f80 pour rester distincte de la primaire.

## Contrastes

Tableau définitif, produit par `bun run contrastes` sur les tokens de la piste A : toutes les paires employées passent l'AA.

| Premier plan | Arrière-plan | Usage | Rapport | Seuil | Verdict |
|---|---|---|---|---|---|
| `color.text.default` #1b2328 | `color.background.default` #ffffff | Texte courant | 15,94:1 | 4,5:1 | ✅ |
| `color.text.muted` #4a5560 | `color.background.default` #ffffff | Texte secondaire | 7,61:1 | 4,5:1 | ✅ |
| `color.text.default` #1b2328 | `color.background.subtle` #f4f7f8 | Texte sur fond de bloc | 14,80:1 | 4,5:1 | ✅ |
| `color.text.link` #0b5f66 | `color.background.default` #ffffff | Lien | 7,39:1 | 4,5:1 | ✅ |
| `color.text.inverse` #ffffff | `color.background.inverse` #1b2328 | Texte sur fond foncé | 15,94:1 | 4,5:1 | ✅ |
| `color.action.primary-text` #ffffff | `color.action.primary` #0b5f66 | Texte du bouton principal | 7,39:1 | 4,5:1 | ✅ |
| `color.action.primary-text` #ffffff | `color.action.primary-hover` #073f44 | Texte du bouton principal au survol | 11,64:1 | 4,5:1 | ✅ |
| `color.action.secondary-text` #0b5f66 | `color.background.default` #ffffff | Texte du bouton secondaire | 7,39:1 | 4,5:1 | ✅ |
| `color.border.strong` #7a8691 | `color.background.default` #ffffff | Bordure de champ | 3,72:1 | 3:1 | ✅ |
| `color.border.focus` #0b5f66 | `color.background.default` #ffffff | Indicateur de focus | 7,39:1 | 3:1 | ✅ |
| `color.feedback.error.text` #b3261e | `color.feedback.error.background` #fdeeee | Message d'erreur | 5,80:1 | 4,5:1 | ✅ |
| `color.feedback.success.text` #1e6b3a | `color.feedback.success.background` #ebf7ef | Message de succès | 5,93:1 | 4,5:1 | ✅ |
| `color.feedback.warning.text` #8a4b00 | `color.feedback.warning.background` #fff4e5 | Avertissement | 6,26:1 | 4,5:1 | ✅ |
| `color.feedback.info.text` #0b4f80 | `color.feedback.info.background` #eaf3fa | Information | 7,65:1 | 4,5:1 | ✅ |
| `color.text.error` #b3261e | `color.background.default` #ffffff | Erreur de champ | 6,54:1 | 4,5:1 | ✅ |
| `color.text.muted` #4a5560 | `color.background.subtle` #f4f7f8 | Texte secondaire sur fond de bloc | 7,07:1 | 4,5:1 | ✅ |
| `color.text.link` #0b5f66 | `color.background.subtle` #f4f7f8 | Lien du pied de page | 6,86:1 | 4,5:1 | ✅ |
| `color.text.default` #1b2328 | `color.background.accent` #e8f4f5 | Ligne total, carte survolée, onglet courant | 14,18:1 | 4,5:1 | ✅ |
| `color.text.link` #0b5f66 | `color.background.accent` #e8f4f5 | Titre de carte survolée | 6,57:1 | 4,5:1 | ✅ |
| `color.action.secondary-text` #0b5f66 | `color.action.secondary-hover` #e8f4f5 | Bouton secondaire au survol | 6,57:1 | 4,5:1 | ✅ |
| `color.action.disabled-text` #4a5560 | `color.action.disabled` #e6eaed | Bouton désactivé | 6,29:1 | 4,5:1 | ✅ |
| `color.border.accent` #0b5f66 | `color.background.default` #ffffff | Filet de la rubrique courante | 7,39:1 | 3:1 | ✅ |
| `color.border.focus` #0b5f66 | `color.background.subtle` #f4f7f8 | Focus sur fond de bloc | 6,86:1 | 3:1 | ✅ |
| `color.text.default` #1b2328 | `color.feedback.error.background` #fdeeee | Texte d'une alerte d'erreur | 14,15:1 | 4,5:1 | ✅ |
| `color.text.default` #1b2328 | `color.feedback.success.background` #ebf7ef | Texte d'une alerte de succès | 14,48:1 | 4,5:1 | ✅ |
| `color.text.default` #1b2328 | `color.feedback.warning.background` #fff4e5 | Texte d'un avertissement | 14,67:1 | 4,5:1 | ✅ |
| `color.text.default` #1b2328 | `color.feedback.info.background` #eaf3fa | Texte d'une information | 14,19:1 | 4,5:1 | ✅ |
| `color.text.link` #0b5f66 | `color.feedback.warning.background` #fff4e5 | Lien dans un avertissement | 6,80:1 | 4,5:1 | ✅ |
| `color.text.link` #0b5f66 | `color.feedback.error.background` #fdeeee | Lien dans une alerte d'erreur | 6,56:1 | 4,5:1 | ✅ |

### Contrôle préalable des trois pistes

| Paire | Seuil | A | B | C |
|---|---|---|---|---|
| Texte / fond blanc | 4,5:1 | 15,94 | 15,31 | 17,30 |
| Texte secondaire / fond blanc | 4,5:1 | 7,61 | 7,61 | 7,94 |
| Texte secondaire / fond de bloc | 4,5:1 | 7,07 | 7,13 | 7,40 |
| Blanc / bouton principal | 4,5:1 | 7,39 | 7,68 | 10,11 |
| Blanc / bouton principal au survol | 4,5:1 | 11,64 | 11,65 | 14,84 |
| Primaire / teinte 50 | 4,5:1 | 6,57 | 6,74 | 8,98 |
| Bordure de champ / fond blanc | 3:1 | 3,72 | 3,80 | 3,78 |
| Information / fond information | 4,5:1 | 7,65 | 7,35 | 6,92 |
| Erreur / fond erreur | 4,5:1 | 5,80 | 5,80 | 5,80 |
| Succès / fond succès | 4,5:1 | 5,93 | 5,93 | 5,93 |
| Avertissement / fond avertissement | 4,5:1 | 6,26 | 6,26 | 6,26 |
