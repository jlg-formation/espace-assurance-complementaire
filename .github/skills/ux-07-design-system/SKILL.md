---
name: ux-07-design-system
description: "Phase 7 de la démarche UX : construit le design system à partir des composants récurrents des wireframes, dans l'application Bun + Vite + TypeScript + React (web/). Pose les principes de design et de rédaction tirés des personas, propose des pistes d'identité pour une marque fictive, puis produit les design tokens (JSON W3C/DTCG, CSS généré), les composants React qui reprennent le contrat du kit de wireframes, une fiche Markdown par composant et une documentation vivante. Tests automatiques : tokens, contrastes WCAG AA, aucune valeur en dur, correspondance avec le kit. À lancer après ux-06-wireframes."
argument-hint: "Optionnel : composant à traiter (ex : Bouton)"
disable-model-invocation: true
---

# UX 07 — Design system : des wireframes aux composants

## Principe

Le design system habille les structures validées en wireframe ; il n'en invente pas. Chaque composant naît d'un motif qui revient dans les wireframes, chaque décision visuelle sert un principe tiré des personas, et chaque couleur passe les contrastes WCAG AA.

Trois couches : les **tokens** (les décisions : couleurs, typographie, espacements), les **composants** (bouton, champ, ligne de remboursement), la **documentation** (quand et comment les utiliser). Chaque composant du kit de wireframes a son équivalent, **même nom, mêmes props** (contrat `web/src/projet/ui.ts`) : un écran passe du wireframe au prototype en changeant son import.

Méthodes : [méthode du design system](./references/methode-design-system.md) · [socle web](../ux-06-wireframes/references/socle-web.md).

## Prérequis
- Livrables de `ux-06-wireframes` : `docs/07-wireframes/00-index.md` (composants récurrents, écrans terminés) et l'application `web/` avec ses wireframes.
- `docs/02-persona/*.persona.md`, `docs/01-vision.md` pour les principes et l'identité ; `docs/06-architecture-information/04-libelles.glossary.md` pour la rédaction.
- S'ils manquent, s'arrêter et proposer de lancer `/ux-06-wireframes` d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de chaque fiche `.md` et de l'index : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.` Dans l'application, le bandeau dépend de `donneesSimulees` dans `src/projet/projet.ts`.

## Procédure

### 0. Vérifier l'existant
Si `docs/08-design-system/` ou `web/src/design-system/` contiennent déjà des livrables, demander s'il faut les compléter (nouveaux composants, nouveaux écrans maquettés depuis) ou les remplacer. Un remplacement des tokens touche tous les composants : le signaler. En mode compléter, un composant de l'inventaire sans statut *terminé* reste à traiter. Si un composant est passé en argument, ne traiter que lui.

### 1. Inventorier les composants
Créer `docs/08-design-system/00-index.md` selon [le modèle d'index](./assets/index-template.md).
- Partir des composants du kit (`web/src/projet/ui.ts`) : chacun aura son équivalent.
- Partir de la liste « Composants récurrents » de `07-wireframes/00-index.md`, puis parcourir les écrans de `web/src/wireframes/ecrans/`, **une zone à la fois**, et relever : les assemblages de composants du kit qui se répètent (ligne de remboursement, carte de contrat, dépôt de fichier...), leurs variantes et leurs états, les écrans où ils apparaissent.
- Classer chaque entrée par niveau : **élément** (Bouton, Champ, Etiquette), **composant** (assemblage : ligne de remboursement), **modèle** (Gabarit).
- Noter les **incohérences** : deux motifs proches qui devraient n'en faire qu'un, un même motif traité différemment selon l'écran.

Consigner chaque zone dans la section « Inventaire des composants » aussitôt parcourue. En cas d'interruption, reprendre aux zones absentes.

### 2. Poser les principes et la rédaction
Rédiger `docs/08-design-system/01-principes.md` selon [le modèle de principes](./assets/principes-template.md) :
- 3 à 5 **principes de design**, chacun tiré d'un constat des personas (« Ce qui le bloque », « Aisance ») avec sa source, et traduit en décisions concrètes (« Le montant remboursé est toujours plus visible que le montant payé »).
- **Voix et ton**, à partir du glossaire et du vocabulaire des personas.
- **Formats** : montants, dates, numéros, pourcentages, en français.

### 3. Proposer des pistes d'identité
La marque est **fictive**. Copier dans `web/` le contenu de [`assets/socle/`](./assets/socle/) (sans écraser un fichier déjà présent si l'on complète) et ajouter à `src/sections.tsx` l'entrée `{ chemin: '/design-system', titre: 'Design system', description: 'Tokens, composants et documentation.', routes: routesDesignSystem }`. Ajouter à `package.json` les scripts `"tokens": "bun scripts/tokens.ts"` et `"contrastes": "bun scripts/contrastes.ts"`.

Proposer 2 ou 3 pistes dans `docs/08-design-system/02-identite.md` selon [le modèle d'identité](./assets/identite-template.md), et les montrer côte à côte dans `web/src/design-system/Pistes.tsx` (`/#/design-system/pistes`), sur le même extrait d'un écran clé. Chaque piste :
- a un nom de marque fictif qui n'imite aucune marque du secteur, et un logo purement typographique ;
- sert un ou plusieurs principes ;
- définit une palette (primaire, neutres, retours : succès, erreur, avertissement, information), une pile de polices **système** (aucune police externe), un rayon d'angle, une densité ;
- a ses contrastes vérifiés (calcul de la méthode, ou `bun run contrastes` sur un `tokens.json` provisoire) : une piste qui échoue en AA est corrigée avant d'être présentée.

### 4. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- Les principes de design et la voix
- Les pistes d'identité (`cd web; bun run dev`, puis `/#/design-system/pistes`) et la piste recommandée
- L'inventaire des composants, les fusions proposées pour les incohérences, l'ordre de production

Demander une validation explicite avant de produire les tokens.

### 5. Produire les tokens (après validation uniquement)
Dans `web/src/design-system/tokens/` :
- `tokens.json` : format W3C Design Tokens (DTCG), deux niveaux — **primitifs** (palette, tailles) et **sémantiques** (rôles : `color.text.default`, `color.action.primary`) qui ne font que référencer des primitifs (`"{color.blue.700}"`). Partir du modèle du socle et remplacer ses valeurs d'exemple par la piste retenue.
- `tokens.css` : **généré** par `bun run tokens`, jamais modifié à la main.
- `contrastes.json` : toutes les paires réellement employées (texte/fond, élément d'interface/fond, focus/fond). `bun run contrastes` affiche le tableau à reporter dans la section « Contrastes » de `02-identite.md` et échoue si une paire est sous son seuil.

### 6. Produire les composants
Dans l'ordre validé (éléments, puis composants, puis modèles ; ceux du MVP d'abord), **un composant à la fois**, dans `web/src/design-system/composants/` sur le modèle de `Bouton` :
1. `Nom.tsx` : pour un composant du kit, **mêmes props** (types de `src/projet/ui.ts`) et même structure HTML que le kit, classes `ds-*` ; pour un composant nouveau, ses props sont déclarées dans le fichier.
2. `Nom.css` : **uniquement des tokens sémantiques** — aucune couleur, taille de police ni espacement en dur — et **mobile d'abord** : styles de base pour le mobile, requêtes média en `min-width` uniquement (vérifié par `bun test`). Le `Gabarit` reproduit le comportement mobile du kit (barre d'onglets).
3. `Nom.doc.tsx` : l'objet `doc` (numéro, rôle, fiche, exemples avec rendu et code) pour chaque variante et chaque état porté par une prop ; les états d'interaction (survol, focus, actif) se démontrent en direct dans la documentation.
4. L'exporter dans `composants/index.ts` et l'ajouter à l'objet `ds`.
5. Rédiger `docs/08-design-system/composants/NN-<composant>.component.md` selon [le modèle de fiche](./assets/composant-template.md).
6. Lancer `bun test --test-name-pattern "<Nom>"`, passer son statut à *terminé* dans l'index et remplir sa ligne dans « Correspondance avec le kit ».

Pour `Note` (annotations de wireframe), l'équivalent ne rend rien : le documenter comme tel. `Image` et `Texte` gardent un rendu de remplacement, à remplacer par de vrais contenus dans les prototypes.

### 7. Valider sur un écran témoin
Reprendre le premier écran du flow `Must` principal : le copier dans `web/src/design-system/exemples/ECNN-<ecran>.tsx`, remplacer l'import du kit par `../composants` **sans toucher au reste**, et l'inscrire dans `exemples/registre.ts`. Il s'affiche à `/#/design-system/exemples/ECNN`. Seul un groupe de composants du kit fusionné en composant nouveau (table « Incohérences ») peut être remplacé par ce composant. Si le rendu exige d'autres modifications, c'est un composant incomplet : le compléter. Signaler l'écran témoin dans l'index.

### 8. Traiter les retours
Rassembler dans la section « Retours » de l'index :
- **vers les wireframes** : motifs à harmoniser après une fusion de composants, structure à corriger ;
- **vers le kit** : prop manquante dans le contrat `ui.ts` (modification des assets de `ux-06`, puis recopie) ;
- **vers l'architecture** : libellé trop long pour un composant ;
- **vers le backlog** : besoin révélé par le système (préférence d'affichage, accessibilité). Avant de proposer une story, vérifier la section « Écartées » du story map.

Les présenter avec l'outil de questions interactif. Après accord uniquement, modifier les livrables concernés en suivant les règles de leur skill (`ux-06`, `ux-05`, `ux-03` : numéro libre, confiance ⚪, origine `DS`). Les retours refusés restent dans l'index, marqués *refusé*.

### 9. Relire
Lancer `cd web; bun run tokens --verifier; bun run verifier` : types et tests doivent passer — alias résolus, `tokens.css` à jour, contrastes AA, aucune valeur en dur, chaque composant du kit présent dans `ds`, chaque exemple documenté rendu (critères bloquants). Puis rouvrir chaque composant (fiche, code, documentation), un à la fois, et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- chaque composant documente tous ses états, et sa fiche ses rôles ARIA et son comportement au clavier ;
- le focus est visible sur chaque élément interactif, les cibles tactiles font 44 px au moins ;
- l'écran témoin s'affiche correctement à 375 px et à 1280 px, sans modification de structure ;
- les fichiers copie conforme du socle sont identiques aux assets du skill.

Corriger ce qui peut l'être. Mettre à jour le statut de chaque composant : *terminé* ou *incomplet : raison*.

### 10. Clôturer
Signaler les composants *incomplets* et les composants du kit sans équivalent.
Résumer les principes, la piste retenue, le nombre de tokens primitifs et sémantiques, les composants par niveau, les retours acceptés et refusés. Indiquer comment ouvrir la documentation (`cd web; bun run dev`, puis `/#/design-system`), puis proposer l'étape suivante : `/ux-08-prototypes`, qui applique le design system aux écrans des wireframes.

## Critères de qualité
- **Bloquant** : `bun run verifier` passe — `tokens.json` valide et alias résolus, `tokens.css` généré et à jour, contrastes WCAG AA (4,5:1 texte, 3:1 grand texte et éléments d'interface), aucune valeur en dur dans les CSS du design system, aucune requête média `max-width`, chaque composant du kit a son équivalent, chaque exemple documenté se rend
- **Bloquant** : chaque composant de l'inventaire a son code, sa fiche et ses exemples documentés, états compris
- Chaque composant vient d'un motif des wireframes, avec ses écrans d'origine ; aucun composant sans usage
- Chaque principe s'appuie sur un constat de persona sourcé et se traduit en décisions vérifiables
- Les composants n'emploient que des tokens sémantiques ; les sémantiques ne font que référencer des primitifs
- Contrat respecté : un composant équivalent à celui du kit a le même nom, les mêmes props et la même structure HTML
- Marque fictive, sans imitation d'une marque existante ; polices système uniquement ; aucune dépendance hors socle, aucune ressource externe
- Chaque composant interactif documente ses états : repos, survol, focus, actif, désactivé, et selon le cas erreur, chargement, sélectionné
- Accessibilité : focus visible, cibles de 44 px, aucune information par la seule couleur, `prefers-reduced-motion` respecté, rôles et attributs ARIA documentés dans la fiche
- L'écran témoin passe du wireframe au design system en changeant son import
- Aucun livrable d'une phase précédente n'est modifié sans accord explicite
- Langue des livrables : celle du brief
