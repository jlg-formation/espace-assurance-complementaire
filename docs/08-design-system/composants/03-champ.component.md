⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 03 Champ

> Niveau : élément · Version : MVP · Composant : `Champ` · Classe : `ds-champ` · Statut : terminé
> Code : [Champ.tsx](../../../web/src/design-system/composants/Champ.tsx) · [Champ.css](../../../web/src/design-system/composants/Champ.css) · [Champ.doc.tsx](../../../web/src/design-system/composants/Champ.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Champ` sur 24 écrans, dont [EC43](../../07-wireframes/02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md), [EC23](../../07-wireframes/03-transverse/EC23-connexion.wireframe.md), [EC33](../../07-wireframes/02-espace-adherent/EC33-envoi-d-un-document.wireframe.md)

## Rôle
Recueillir une information de l'adhérent, avec un libellé toujours visible, l'aide avant la saisie et l'erreur juste sous le champ.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| id | `string` | — (obligatoire) | Identifiant, relie libellé, aide et erreur |
| libelle | `string` | — (obligatoire) | Libellé visible |
| type | `'text' \| 'email' \| 'tel' \| 'date' \| 'number' \| 'password' \| 'file' \| 'textarea'` | `'text'` | Type de saisie |
| options | `string[]` | — | Rend une liste d'options (`select`) |
| aide | `string` | — | Consigne affichée avant le champ |
| erreur | `string` | — | Message d'erreur : active l'état erreur |
| valeur | `string` | — | Valeur initiale (ignorée pour `file`) |
| obligatoire | `boolean` | `false` | Ajoute « (obligatoire) » et `required` |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `div` | `ds-champ`, `ds-champ--erreur` | oui |
| Libellé | `label` | — | oui |
| Aide | `span` | `ds-champ__aide` | non |
| Saisie | `input`, `select` ou `textarea` | — | oui |
| Erreur | `span` avec « Erreur : » en gras | `ds-champ__erreur` | non |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Texte, e-mail, téléphone, nombre, mot de passe | `type` | — | saisie courte |
| Date | `type="date"` | — | dates d'arrêt, de soin |
| Fichier | `type="file"` | — | photo d'un devis, d'une pièce (fond de bloc) |
| Zone de texte | `type="textarea"` | — | question écrite, situation non prévue |
| Liste d'options | `options` | — | choix fermé |

## États

| État | Déclencheur | Rendu | Tokens |
|---|---|---|---|
| Repos | — | bordure grise de 1 px, 44 px de haut | `color.border.strong` |
| Survol | `:hover` | bordure foncée | `color.text.default` |
| Focus | `:focus-visible` | contour de 3 px | `color.border.focus`, `size.focus-ring` |
| Aide | `aide` | texte secondaire avant le champ | `color.text.muted`, `font.size.s` |
| Erreur | `erreur` | bordure rouge de 2 px, message sous le champ précédé de « Erreur : » | `color.text.error` |
| Obligatoire | `obligatoire` | « (obligatoire) » dans le libellé | — |
| Désactivé | `:disabled` (hors contrat, non utilisé) | fond gris | `color.action.disabled`, `color.action.disabled-text` |

## Tokens employés
`color.border.strong`, `color.text.default`, `color.text.muted`, `color.text.error`, `color.background.default`, `color.background.subtle`, `color.action.disabled`, `color.action.disabled-text`, `size.target`, `space.1`, `space.2`, `space.3`, `space.8`, `radius.s`, `font.size.s`, `font.weight.bold`

## Accessibilité
- **HTML** : `label for` relié au champ ; `select` natif pour les options
- **Clavier** : Tab ; flèches dans une liste d'options ; Espace ou Entrée ouvre le sélecteur de fichier
- **ARIA** : `aria-describedby` vers l'aide et l'erreur ; `aria-invalid="true"` en erreur ; `required`
- **Lecteur d'écran** : libellé, « obligatoire », aide, puis « non valide » et le message d'erreur
- **Autres** : l'erreur est signalée par le texte « Erreur : » et l'épaisseur de bordure, pas seulement par le rouge

## Rédaction
Libellé : nom de l'information, mots du glossaire (« Date de début de l'arrêt »). Aide : format ou origine (« Celle de l'avis d'arrêt »). Erreur : ce qui ne va pas et comment corriger (« Mot de passe incorrect. Il vous reste 4 essais. »).

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Libellé visible au-dessus du champ | Texte indicatif (`placeholder`) en guise de libellé |
| « Erreur : la date de fin est antérieure à la date de début » | « Champ invalide » |

## Code

```tsx
<Champ id="identifiant" libelle="Identifiant" aide="Votre adresse e-mail ou votre numéro d'adhérent" obligatoire />
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Champ` (`wf-champ`, `wf-champ--erreur`, `wf-aide`) | `Champ` (`ds-champ`, `ds-champ--erreur`, `ds-champ__aide`, `ds-champ__erreur`) |
