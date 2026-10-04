⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Design system — Clarea Assurances

<!-- Index de la phase : statut, inventaire des composants, correspondance avec le kit, retours. Code : web/src/design-system/ -->

Ouvrir la documentation : `cd web; bun run dev`, puis `/#/design-system`. Vérifier : `bun run verifier`.

## Livrables

| Livrable | Contenu | Statut |
|---|---|---|
| [Principes](./01-principes.md) | Principes de design, voix et ton, formats | validé |
| [Identité](./02-identite.md) · `/#/design-system/pistes` | Pistes, piste retenue, contrastes | validé (piste A) |
| [tokens.json](../../web/src/design-system/tokens/tokens.json) → `tokens.css` (généré) | Tokens primitifs et sémantiques | terminé |
| [composants/](../../web/src/design-system/composants/) | Base et composants React | terminé |
| [Écran témoin](../../web/src/design-system/exemples/EC43-declaration-d-un-arret.tsx) · `/#/design-system/exemples/EC43` | EC43 Déclaration d'un arrêt, premier écran de UF-06.01 (Must), passé du wireframe au design system en changeant l'import ; seule fusion appliquée : `RecoursHumain` | terminé |

## Inventaire des composants

<!-- Ordre de production : éléments, composants, modèles ; MVP d'abord. Tous les composants du kit, plus les motifs présents sur au moins deux écrans. -->

| # | Composant | Niveau | Origine dans le kit | Écrans | Variantes | États | Version | Fiche | Statut |
|---|---|---|---|---|---|---|---|---|---|
| 01 | Bouton | élément | `Bouton` | 47 écrans (tous sauf EC05, EC11, EC39, EC48, EC50, EC52, EC54-EC57) | principal, secondaire ; bouton ou lien (`vers`) | repos, survol, focus, actif, désactivé | MVP | [fiche](./composants/01-bouton.component.md) | prévu |
| 02 | Lien | élément | `Lien` | 41 écrans | — | repos, survol, focus, visité non distingué | MVP | [fiche](./composants/02-lien.component.md) | prévu |
| 03 | Champ | élément | `Champ` | EC02, EC04, EC06, EC08, EC10, EC14, EC19, EC20, EC23-EC26, EC28, EC30, EC31, EC33, EC38, EC41-EC43, EC47, EC51, EC53 | texte, e-mail, téléphone, date, nombre, mot de passe, fichier, zone de texte, liste d'options | repos, focus, aide, erreur, obligatoire, désactivé | MVP | [fiche](./composants/03-champ.component.md) | prévu |
| 04 | Etiquette | élément | `Etiquette` | EC02, EC27, EC36, EC38, EC46 | neutre, succès, avertissement, erreur, information | — | MVP | [fiche](./composants/04-etiquette.component.md) | prévu |
| 05 | Alerte | élément | `Alerte` | 34 écrans (EC04 … EC53) | erreur, succès, avertissement, information ; avec ou sans contenu | — | MVP | [fiche](./composants/05-alerte.component.md) | prévu |
| 06 | Liste et Ligne | élément | `Liste`, `Ligne` | EC04, EC07, EC09, EC11, EC15, EC16, EC18, EC22, EC27-EC30, EC32, EC36, EC38, EC39, EC42, EC44-EC46, EC48, EC50, EC55 | ligne simple, ligne à deux parties | — | MVP | [fiche](./composants/06-liste-et-ligne.component.md) | prévu |
| 07 | Carte | élément | `Carte` | EC01, EC27, EC54 | cliquable (`vers`), statique | repos, survol, focus | MVP | [fiche](./composants/07-carte.component.md) | prévu |
| 08 | Bloc | élément | `Bloc` | 24 écrans (EC02 … EC57) | titre de niveau 2 ou 3, sans titre | — | MVP | [fiche](./composants/08-bloc.component.md) | prévu |
| 09 | Repli | élément *(nouveau)* | `details` / `summary` HTML | EC02, EC32, EC33, EC48 | — | fermé, ouvert, focus | MVP | [fiche](./composants/09-repli.component.md) | prévu |
| 10 | Mise en page | élément | `Pile`, `Grille`, `Colonnes`, `Actions` | Pile : 54 écrans ; Grille : EC01, EC27, EC54 ; Colonnes : EC02-EC04, EC11, EC27, EC38, EC46, EC55 ; Actions : 46 écrans | — | mobile, tablette, ordinateur | MVP | [fiche](./composants/10-mise-en-page.component.md) | prévu |
| 11 | Modale | élément | `Modale` | aucun écran (requis par le contrat) | avec ou sans « Fermer » | ouverte | MVP | [fiche](./composants/11-modale.component.md) | prévu |
| 12 | Image et Texte | élément | `Image`, `Texte` | Image : EC40 ; Texte : EC05, EC56, EC57 | remplacement | — | MVP | [fiche](./composants/12-image-et-texte.component.md) | prévu |
| 13 | Note | élément | `Note` | 33 écrans annotés | — | ne rend rien | MVP | [fiche](./composants/13-note.component.md) | prévu |
| 14 | Mobile et Ordinateur | élément | `Mobile`, `Ordinateur` | aucun écran (requis par le contrat) | — | mobile, à partir de 768 px | MVP | [fiche](./composants/14-mobile-et-ordinateur.component.md) | prévu |
| 15 | LigneValeur | composant *(nouveau)* | `Ligne` + `span` + `strong` | EC04, EC07, EC09, EC11, EC15, EC16, EC22, EC27, EC32, EC39, EC42, EC45, EC48, EC50 | simple, total (reste à charge, ce qui manque) | — | MVP | [fiche](./composants/15-ligne-valeur.component.md) | prévu |
| 16 | LigneSuivi | composant *(nouveau)* | `Ligne` + `Lien` ou `span` + `Etiquette` | EC27, EC36, EC38, EC46 | avec lien, sans lien ; avec détail (délai, raison) | statuts : En cours, À fournir, Réponse disponible, Retardée, Acceptée, Refusée, Terminée | MVP | [fiche](./composants/16-ligne-suivi.component.md) | prévu |
| 17 | RecoursHumain | composant *(nouveau)* | `p` + question + `Lien vers="EC51"` | EC01, EC02, EC07, EC13, EC17, EC19, EC21, EC23, EC33, EC35, EC43, EC46, EC50 | question par défaut ou propre à l'écran | — | MVP | [fiche](./composants/17-recours-humain.component.md) | prévu |
| 18 | Gabarit | modèle | `Gabarit` | 57 écrans | site public, espace adhérent (onglets en bas sur mobile), transverse ; avec ou sans fil d'Ariane | rubrique courante | MVP | [fiche](./composants/18-gabarit.component.md) | prévu |

**Hors composants** : les tableaux HTML (EC03, EC37) reçoivent des styles de base dans `base.css` (retour ux-06 refusé : pas de composant `Tableau`). Les cases à cocher (EC08, EC10), reportées par ux-06, ne sont pas dans le contrat : elles restent des listes d'options, voir « Questions ouvertes ».

### Incohérences relevées dans les wireframes

| Motif | Écrans | Proposition | Décision |
|---|---|---|---|
| Valeur d'une ligne tantôt en gras (`strong`), tantôt en texte courant (`span`) | EC11, EC22 contre EC04, EC32, EC39… | Fusionner en `LigneValeur` : libellé à gauche, valeur en gras à droite ; variante `total` pour le chiffre décisif | validée |
| Statut d'une démarche : même devis « En étude » sur EC27 et « En cours » sur EC36 ; pièce « À fournir » sur EC27 et « Attendue » sur EC46 ; « En attente » sur EC38 | EC27, EC36, EC38, EC46 | Fusionner en `LigneSuivi` et fixer 7 statuts : En cours, À fournir, Réponse disponible, Retardée, Acceptée, Refusée, Terminée | validée |
| Retard de EC36 écrit en gras dans le libellé au lieu d'une étiquette et d'un détail | EC36 | `LigneSuivi` : statut « Retardée » + détail « réponse au 17 oct. : avis de notre dentiste-conseil en cours » | validée |
| Accès au rappel : 6 formulations (« Vous préférez en parler ? », « Besoin d'aide ? », « Être rappelé pour en parler »…) et libellé du lien variable | 13 écrans | Fusionner en `RecoursHumain` : question propre à l'écran, libellé du lien toujours « Être rappelé » (glossaire) | validée |
| Explications repliées en `details` HTML sans composant | EC02, EC32, EC33, EC48 | Nouvel élément `Repli` | validée |

## Correspondance avec le kit

<!-- Bloquant (vérifié par bun test) : chaque composant du kit existe dans le design system, mêmes props. -->

| Kit | Design system | Classes | Remarque |
|---|---|---|---|
| `Gabarit` | `Gabarit` | `wf-entete`, `wf-nav-globale--onglets` → `ds-entete`, `ds-nav-globale--onglets` | Logo « Clarea » au lieu de « LOGO » |
| `Bouton` | `Bouton` | `wf-btn` → `ds-btn` | — |
| `Lien` | `Lien` | `wf-lien` → `ds-lien` | — |
| `Champ` | `Champ` | `wf-champ` → `ds-champ` | Classe ajoutée sur le message d'erreur |
| `Liste`, `Ligne` | `Liste`, `Ligne` | `wf-liste` → `ds-liste`, `ds-ligne` | — |
| `Carte` | `Carte` | `wf-carte` → `ds-carte`, `ds-carte--lien` | — |
| `Bloc` | `Bloc` | `wf-bloc` → `ds-bloc` | — |
| `Alerte` | `Alerte` | `wf-alerte` → `ds-alerte--{type}` | — |
| `Etiquette` | `Etiquette` | `wf-etiquette` → `ds-etiquette--{ton}` | Le ton, ignoré par le kit, devient visible |
| `Image`, `Texte` | `Image`, `Texte` | `wf-image`, `wf-texte` → `ds-image`, `ds-texte` | Rendu de remplacement |
| `Modale` | `Modale` | `wf-modale` → `ds-modale` | Panneau en bas sur mobile ; gestion du focus à ajouter aux prototypes |
| `Pile`, `Grille`, `Colonnes`, `Actions` | mêmes noms | `wf-*` → `ds-*` | — |
| `Note` | `Note` | — | Ne rend rien : annotation de wireframe |
| `Mobile`, `Ordinateur` | mêmes noms | `wf-mobile` → `ds-mobile` | — |
| `details` / `summary` HTML | `Repli` | `ds-repli` | Fusion validée |
| `Ligne` + `span` + `strong` | `LigneValeur` | `ds-ligne-valeur` | Fusion validée |
| `Ligne` + `Lien` + `Etiquette` | `LigneSuivi` | `ds-ligne-suivi` | Fusion validée, 7 statuts |
| `p` + `Lien vers="EC51"` | `RecoursHumain` | `ds-recours` | Fusion validée, appliquée sur l'écran témoin |

## Bilan

| Tokens primitifs | Tokens sémantiques | Éléments | Composants | Modèles | Terminés | Incomplets |
|---|---|---|---|---|---|---|
| 20 (palette) | 69 (35 rôles de couleur + `font.family.heading` en alias ; 33 échelles typo, espaces, rayons, tailles, durées, points de rupture) | 14 (dont Repli, nouveau) | 3 (LigneValeur, LigneSuivi, RecoursHumain) | 1 (Gabarit) | 18 | 0 |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| wireframes | motif à harmoniser | EC27, EC36, EC38, EC46 | Remplacer les statuts hors liste (« En étude », « Attendue », « En attente ») par les 7 statuts de `LigneSuivi` ; sur EC36 état `retard`, statut « Retardée » + raison en détail | accepté (EC27, EC36, EC38, EC46 modifiés) |
| wireframes | motif à harmoniser | EC11, EC22 | Valeurs en `strong` comme les autres lignes libellé / valeur | accepté (EC11, EC22 modifiés) |
| wireframes | donnée incohérente | EC43 état `hors-delai` | Date de fin prévue (12 août 2026) antérieure à la date de début (19 août 2026) : corriger la date de fin (par exemple 30 septembre 2026) | accepté (wireframe et écran témoin : 30 septembre 2026) |
| architecture | libellé trop long | onglet « Mon arrêt de travail » | Sur 3 lignes à 375 px dans la barre d'onglets du design system (texte 14 px) : libellé court « Mon arrêt » pour l'onglet mobile, libellé complet ailleurs | refusé (libellé complet gardé : lisible, onglet plus haut) |
| kit | prop manquante | `Champ` | Type `case` (cases à cocher, choix multiples) pour EC08 « Mes besoins de santé » et EC10, reporté depuis ux-06 : à ajouter au contrat `ui.ts`, au kit puis au design system | refusé (listes d'options gardées) |

## Questions ouvertes
- ~~Cases à cocher : retour vers le kit ?~~ Refusé : listes d'options gardées.
- Modale : la gestion du focus (piégeage, Échap, retour au déclencheur) est à ajouter aux prototypes si un écran l'emploie ; aucun wireframe ne l'utilise aujourd'hui.
- Lien d'évitement « Aller au contenu » absent du contrat `Gabarit` : à traiter aux prototypes (exigence T1).
