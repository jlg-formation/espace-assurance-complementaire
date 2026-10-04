---
name: ux-06-wireframes
description: "Phase 6 de la démarche UX : produit les wireframes basse fidélité de tous les écrans de l'inventaire dans une application Bun + Vite + TypeScript + React (web/), en niveaux de gris, cliquables selon les user flows (wireflow), avec une fiche d'annotations Markdown par écran. Applique l'arborescence, la navigation et les libellés de l'architecture de l'information. Tests automatiques : inventaire couvert, un titre par état, chaque happy path cliquable. À lancer après ux-05-information-architecture."
argument-hint: "Optionnel : zone ou écran à traiter (ex : espace adhérent, EC04)"
disable-model-invocation: true
---

# UX 06 — Wireframes : des écrans inventoriés aux maquettes cliquables

## Principe

Un wireframe basse fidélité fixe **ce qu'il y a sur l'écran et dans quel ordre**, pas à quoi il ressemble. Il rend visibles la hiérarchie du contenu, les actions, les états et la navigation, avant tout choix graphique : le design system viendra ensuite habiller des structures validées.

Chaque écran de l'inventaire devient un composant React construit avec un **kit de wireframes** en niveaux de gris, avec de vrais contenus et les libellés du glossaire. Les écrans sont reliés selon les flows : on parcourt chaque happy path en cliquant, sur mobile comme sur ordinateur. Le kit partage son contrat avec le futur design system : un écran passera du wireframe au prototype en changeant son import.

Méthodes : [méthode des wireframes](./references/methode-wireframes.md) · [socle web](./references/socle-web.md).

## Prérequis
- Livrables de `ux-05-information-architecture` : `docs/06-architecture-information/` (inventaire des contenus, arborescence, navigation, glossaire).
- Livrables de `ux-04-user-flows` : `docs/05-user-flows/00-index.md` et les `.flow.md`.
- Pour les états et les règles : les `.story.md` de `docs/04-user-stories/` (critères Gherkin) ; pour l'appareil et l'aisance : `docs/02-persona/*.persona.md`.
- Bun installé (`bun --version`). S'il manque, s'arrêter et demander à l'utilisateur de l'installer.
- Si des livrables manquent, s'arrêter et proposer de lancer `/ux-05-information-architecture` d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de chaque fiche `.md` et de l'index : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.` Dans l'application, régler `donneesSimulees: true` dans `src/projet/projet.ts` : le bandeau s'affiche alors sur chaque écran.

## Procédure

### 0. Vérifier l'existant
Si `docs/07-wireframes/` ou `web/src/wireframes/ecrans/` contiennent déjà des livrables, demander s'il faut les compléter (écrans absents) ou les remplacer. En mode compléter, un écran de `src/projet/ecrans.ts` absent de `src/wireframes/registre.ts` reste à traiter. Si une zone ou un écran est passé en argument, ne traiter que lui.

### 1. Préparer le socle
- Si `web/` n'existe pas, le créer en suivant [le socle web](./references/socle-web.md), puis vérifier que `bun run verifier` passe avec les données d'exemple.
- Si `web/` existe, vérifier que les fichiers **copie conforme** sont identiques aux assets du skill ; sinon, les recopier.
- Remplacer les données d'exemple par celles du projet :
  - `src/projet/ecrans.ts` : **tous** les écrans de `01-contenus.inventory.md` (lieux et contextuels, toutes versions), identifiants et noms inchangés, libellé du glossaire ;
  - `src/projet/zones.ts` : zones, navigation globale, navigation mobile, liens utilitaires et pied de page, d'après `03-navigation.nav.md` ;
  - `src/projet/parcours.ts` : le happy path de chaque flow (`docs/05-user-flows/`), un parcours par point d'entrée dont le premier écran diffère ;
  - `src/wireframes/registre.ts` : vide ; supprimer les écrans d'exemple de `src/wireframes/ecrans/`.
- Créer `docs/07-wireframes/00-index.md` selon [le modèle d'index](./assets/index-template.md), section « Écrans » remplie dans l'ordre de production : MVP d'abord, puis V2, puis Plus tard ; dans chaque version, lieux avant contextuels. Statut *prévu*. En cas d'interruption, reprendre aux écrans *prévus*.

### 2. Vérifier les gabarits
Lancer `bun run dev` et ouvrir `/#/wireframes/gabarit/<zone>` pour chaque zone, à 375 px et à 1280 px. Le gabarit vient du kit et de `zones.ts` : corriger `zones.ts` si la navigation ne correspond pas à `03-navigation.nav.md`.

### 3. Hiérarchiser le contenu des écrans clés
Pour les lieux de premier niveau et les premiers écrans des flows `Must` du MVP, rédiger la fiche `docs/07-wireframes/NN-<zone>/ECNN-<ecran>.wireframe.md` selon [le modèle de fiche](./assets/fiche-template.md), jusqu'à la section « Hiérarchie du contenu » : objectif de l'écran, contenus et actions classés par priorité pour le persona principal, sur mobile.

### 4. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- Les gabarits par zone (adresses à ouvrir avec `bun run dev`), notamment la navigation mobile
- La hiérarchie du contenu des écrans clés
- Les écarts déjà repérés avec l'architecture (libellé trop long sur mobile, rubrique qui ne tient pas)

Demander une validation explicite avant de maquetter les écrans.

### 5. Maquetter (après validation uniquement)
Traiter **un écran à la fois**, dans l'ordre de l'index (zone de l'écran, ou de son parent pour un contextuel) :
1. Compléter la fiche `ECNN-<ecran>.wireframe.md` : hiérarchie, actions et liens sortants, états, annotations, couverture.
2. Écrire `web/src/wireframes/ecrans/NN-<zone>/ECNN-<ecran>.tsx` sur le modèle des écrans d'exemple du socle : un composant par défaut qui reçoit `etat`, enveloppé dans `Gabarit`, construit **uniquement** avec les composants du kit et des éléments HTML sémantiques, en respectant [les règles de la méthode](./references/methode-wireframes.md).
3. Relier : chaque action qui mène à un autre écran porte `vers="ECNN"` (et `etat` si besoin). Pour une étape de flow passant par une décision ou un traitement système, viser l'écran qui suit sur le happy path.
4. Représenter chaque état de l'écran (vide, erreur, chargement, partiel, premier usage) qui correspond à un chemin d'un flow ou à un scénario Gherkin, selon la valeur de `etat`.
5. L'inscrire dans `src/wireframes/registre.ts` (composant, états, chemin de la fiche), lancer `bun test --test-name-pattern ECNN`, puis passer l'écran à *terminé* dans l'index.

Après chaque flow dont tous les écrans sont *terminés*, lancer `bun test --test-name-pattern "parcours"` et remplir sa ligne dans « Parcours cliquables » de l'index.

### 6. Traiter les retours
Rassembler dans la section « Retours » de l'index ce que le maquettage a révélé :
- **vers l'architecture** : libellé qui ne tient pas, rubrique à revoir, écran à rattacher ailleurs ;
- **vers les flows** : écran à scinder ou à fusionner, étape manquante ;
- **vers le backlog** : scénario ou story manquant (état non prévu, règle de gestion découverte). Avant de proposer une story, vérifier la section « Écartées » du story map ;
- **vers le kit** : composant manquant pour exprimer un motif. Le kit et le contrat `ui.ts` sont des copies conformes : un ajout se fait dans les assets du skill, avec l'accord de l'utilisateur, puis la copie est refaite.

Les présenter avec l'outil de questions interactif. Après accord uniquement, modifier les livrables concernés en suivant les règles de leur skill (`ux-05`, `ux-04` étape 5, `ux-03` : numéro libre, confiance ⚪, origine `WF`), puis mettre à jour les écrans touchés et les miroirs de `src/projet/`. Les retours refusés restent dans l'index, marqués *refusé*.

### 7. Relire
Lancer `cd web; bun run verifier` : types et tests doivent passer (inventaire couvert, un seul `h1` par état, chaque happy path cliquable). Puis rouvrir chaque écran (fiche et rendu), un à la fois, et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- chaque contenu et chaque action de l'écran dans `01-contenus.inventory.md` figure dans le wireframe (critère bloquant) ;
- chaque chemin alternatif ou d'erreur des flows a son écran ou son état ;
- les libellés sont ceux du glossaire ; `ecrans.ts` et `zones.ts` sont fidèles à l'architecture ;
- chaque champ a son libellé, aucun état n'est signalé par la seule couleur ;
- chaque annotation `Note` a sa description dans la fiche, et inversement ;
- l'écran reste lisible à 375 px et à 1280 px de large (navigateur intégré si disponible).

Corriger ce qui peut l'être. Mettre à jour le statut de chaque écran : *terminé* ou *incomplet : raison*.

### 8. Clôturer
Signaler les écrans *incomplets* et les parcours non cliquables de bout en bout.
Résumer le nombre d'écrans maquettés par zone et par version, les parcours cliquables, les retours acceptés et refusés, et lister les **composants récurrents** relevés (section de l'index). Indiquer comment ouvrir la galerie (`cd web; bun run dev`, puis `/#/wireframes`), conseiller un test des parcours cliquables avec quelques vrais utilisateurs, puis proposer l'étape suivante : `/ux-07-design-system`, à partir des composants récurrents des wireframes.

## Critères de qualité
- **Bloquant** : `bun run verifier` passe — chaque écran de l'inventaire est maquetté, chaque état déclaré a un seul `h1`, chaque happy path se parcourt en cliquant
- **Bloquant** : chaque écran de l'inventaire a sa fiche, avec le même identifiant et le même nom
- **Bloquant** : chaque contenu et chaque action de l'inventaire figure sur l'écran
- Chaque chemin alternatif ou d'erreur des flows a son écran ou son état
- Basse fidélité tenue : le kit seul donne la présentation (niveaux de gris, une police, aucune image réelle) ; les écrans n'ont ni `className` ni `style`
- Les fichiers copie conforme du socle sont identiques aux assets du skill
- Contenus réels et plausibles (montants, dates, noms d'actes), pas de faux texte, sauf `Texte` pour un long texte de corps
- Libellés identiques au glossaire ; `ecrans.ts`, `zones.ts` et `parcours.ts` fidèles à l'inventaire, à la navigation et aux flows
- Mobile d'abord : la hiérarchie du contenu est pensée pour l'appareil principal du persona, et chaque écran reste lisible à 375 px et à 1280 px
- Accessibilité dès le wireframe : un seul `h1` par état, titres hiérarchisés, champs étiquetés, `vers` pour naviguer et bouton sans `vers` pour agir, aucune information portée par la seule couleur
- Aucune dépendance hors socle, aucune ressource externe, aucun appel réseau
- Chaque annotation `Note` a sa description dans la fiche, et inversement
- Aucun livrable d'une phase précédente n'est modifié sans accord explicite
- Langue des livrables : celle du brief
