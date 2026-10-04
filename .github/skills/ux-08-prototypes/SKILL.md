---
name: ux-08-prototypes
description: "Phase 8 de la démarche UX : produit les prototypes haute fidélité de tous les écrans maquettés, dans l'application Bun + Vite + TypeScript + React (web/). Chaque wireframe passe au design system en changeant son import, puis reçoit de vrais contenus tirés d'un jeu de données fictif cohérent. Mode test sans barre de revue pour les tests d'utilisabilité, protocole de test rédigé (résultats jamais simulés), contrôle d'accessibilité. Tests automatiques : couverture, états, contenus réels, parcours cliquables. À lancer après ux-07-design-system."
argument-hint: "Optionnel : zone ou écran à traiter (ex : espace client, EC04)"
disable-model-invocation: true
---

# UX 08 — Prototypes : des wireframes habillés aux parcours testables

## Principe

Un prototype haute fidélité montre l'expérience telle qu'elle sera : le design system appliqué, de vrais contenus, des parcours qu'un utilisateur peut suivre seul. Il sert à **tester** avant de développer.

Il n'invente rien : chaque écran est la copie de son wireframe dont l'import passe du kit au design system ; seuls les contenus deviennent réels, tirés d'un jeu de données fictif unique pour que les montants et les dates restent cohérents d'un écran à l'autre. Les parcours se vérifient comme pour les wireframes, et un **mode test** sans barre de revue permet de mener des tests d'utilisabilité.

Méthodes : [méthode des prototypes](./references/methode-prototypes.md) · [socle web](../ux-06-wireframes/references/socle-web.md).

**Exemples commentés** : [exemples](./references/exemples.md) — passage du wireframe au prototype, jeu de données, tâche de test et constats d'accessibilité, avec paires ✅ / ❌ ; le modèle `assets/modeles/EC04-suivi-des-demandes.tsx` est un prototype complet. Les relire avant de prototyper ; ne jamais recopier leur contenu.

## Prérequis
- Livrables de `ux-07-design-system` : `web/src/design-system/` complet (le test « correspondance avec le kit » passe) et `docs/08-design-system/` (principes, rédaction, inventaire des composants avec les fusions validées).
- Livrables de `ux-06-wireframes` : écrans dans `web/src/wireframes/ecrans/`, fiches dans `docs/07-wireframes/`.
- `docs/02-persona/*.persona.md` pour le jeu de données et le recrutement du test ; `docs/05-user-flows/` pour les tâches du test.
- Vérifier `cd web; bun run verifier`. S'il échoue, s'arrêter et proposer de terminer `/ux-07-design-system` (ou `/ux-06-wireframes`) d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de l'index et du protocole : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.` Le bandeau de l'application dépend de `donneesSimulees` dans `src/projet/projet.ts` ; il n'apparaît pas en mode test. Les résultats du test d'utilisabilité ne sont jamais simulés.

## Procédure

### 0. Vérifier l'existant
Si `docs/09-prototypes/` ou `web/src/prototypes/ecrans/` contiennent déjà des livrables, demander s'il faut les compléter (écrans maquettés depuis) ou les remplacer. En mode compléter, un écran présent dans `src/wireframes/registre.ts` et absent de `src/prototypes/registre.ts` reste à traiter, ainsi qu'un écran dont le wireframe a changé depuis son prototype. Si une zone ou un écran est passé en argument, ne traiter que lui.

### 1. Préparer
- Copier dans `web/` le contenu de [`assets/socle/`](./assets/socle/), sans écraser `donnees.ts` ni `registre.ts` s'ils existent déjà.
- Ajouter à `src/sections.tsx` l'entrée `{ chemin: '/prototypes', titre: 'Prototypes', description: 'Haute fidélité, parcours testables.', routes: routesPrototypes }`.
- Créer `docs/09-prototypes/00-index.md` selon [le modèle d'index](./assets/index-template.md), section « Écrans » remplie avec tous les écrans maquettés, dans l'ordre de l'index des wireframes (MVP d'abord). Statut *prévu*. En cas d'interruption, reprendre aux écrans *prévus*.

### 2. Construire le jeu de données fictif
Dans `web/src/prototypes/donnees/donnees.ts`, remplacer les données d'exemple par un jeu **unique** pour tous les écrans :
- un utilisateur fictif dont la situation reprend celle du persona principal (foyer ou entreprise, contrats ou abonnements, historique), sans jamais reprendre un participant de la recherche ni une personne réelle ;
- les objets métier de l'inventaire des contenus (comptes, demandes, documents...), typés, avec des valeurs plausibles et **cohérentes** (un total égal à la somme de ses lignes ; une réponse postérieure à l'envoi ; dates dans l'ordre du parcours) ;
- de quoi alimenter chaque état des wireframes (liste vide, demande en cours, refus...).

Les montants, dates et pourcentages s'affichent toujours par `formats.ts` (formats français des principes de rédaction).

### 3. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- Le jeu de données fictif (qui est l'utilisateur, ce qu'il a vécu)
- L'ordre de production et les fusions de composants du design system à appliquer
- Les parcours qui seront soumis au test d'utilisabilité

Demander une validation explicite avant de prototyper.

### 4. Prototyper (après validation uniquement)
Traiter **un écran à la fois**, dans l'ordre de l'index, sur le modèle de [l'écran prototypé d'exemple](./assets/modeles/EC04-suivi-des-demandes.tsx) :
1. Copier `src/wireframes/ecrans/NN-<zone>/ECNN-<ecran>.tsx` vers `src/prototypes/ecrans/NN-<zone>/ECNN-<ecran>.tsx`.
2. Remplacer l'import du kit par `../../../design-system/composants`. Retirer les `Note` (leur contenu est déjà dans la fiche du wireframe). Remplacer les `Texte` par du vrai texte, rédigé selon la voix et le ton des principes.
3. Remplacer les valeurs écrites en dur par des lectures du jeu de données, formatées par `formats.ts`.
4. Appliquer les fusions validées dans `docs/08-design-system/00-index.md` (un groupe de composants du kit remplacé par le composant fusionné). Aucune autre modification de structure : un besoin de structure est un retour vers les wireframes.
5. Ajouter si besoin une interaction locale (`useState` : déplier un détail, filtrer une liste, prévisualiser un fichier choisi) ; la navigation entre écrans reste portée par `vers`.
6. L'inscrire dans `src/prototypes/registre.ts` avec **au moins** les états de son wireframe, lancer `bun test --test-name-pattern ECNN`, puis passer l'écran à *terminé* dans l'index, avec ses écarts au wireframe s'il y en a.

Après chaque flow dont tous les écrans sont *terminés*, lancer `bun test --test-name-pattern "parcours"` et remplir sa ligne dans « Parcours » de l'index.

### 5. Contrôler l'accessibilité et le rendu
Pour chaque parcours `Must` du MVP, en mode test (`/#/test/ECNN`), et selon [la méthode](./references/methode-prototypes.md#4-contrôle-daccessibilité) :
- parcourir le happy path **au clavier seul** : ordre de tabulation logique, focus toujours visible, aucune impasse ;
- vérifier le rendu à 375 px, à 1280 px et avec un zoom à 200 % ;
- si un outil d'audit (Lighthouse ou équivalent) est disponible dans l'environnement, l'exécuter sur chaque écran du parcours et reporter les scores et les problèmes.

Consigner les constats dans la section « Accessibilité » de l'index.

### 6. Préparer le test d'utilisabilité
Rédiger `docs/09-prototypes/01-test-utilisabilite.md` selon [le modèle de protocole](./assets/test-utilisabilite-template.md) : objectifs, participants (profils rattachés aux personas, 5 par profil recommandé), consentement, scénarios formulés avec les mots du persona et sans les libellés de l'interface, une tâche par parcours `Must` du MVP, adresse de départ en mode test, critères de réussite, mesures. La section « Résultats » reste vide : le test se mène avec de vrais participants.

### 7. Traiter les retours
Rassembler dans la section « Retours » de l'index ce que le prototypage et le contrôle d'accessibilité ont révélé :
- **vers le design system** : composant, variante ou état manquant, contraste insuffisant en situation ;
- **vers les wireframes** : structure à corriger ;
- **vers l'architecture** : libellé qui ne tient pas, navigation à revoir ;
- **vers le backlog** : scénario ou story manquant. Avant de proposer une story, vérifier la section « Écartées » du story map.

Les présenter avec l'outil de questions interactif. Après accord uniquement, modifier les livrables concernés en suivant les règles de leur skill (`ux-07`, `ux-06`, `ux-05`, `ux-03` : numéro libre, confiance ⚪, origine `PR`), puis mettre à jour les prototypes touchés. Les retours refusés restent dans l'index, marqués *refusé*.

### 8. Relire
Lancer `cd web; bun run verifier` : types et tests doivent passer (chaque écran maquetté est prototypé avec au moins les états de son wireframe, un seul `h1` par état, aucune classe du kit, aucun faux texte ni champ de modèle, aucun `Texte`, `Note`, `className` ou `style` dans un écran, chaque happy path cliquable). Puis rouvrir chaque écran, un à la fois, et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- les contenus viennent du jeu de données et restent cohérents d'un écran à l'autre ;
- les textes suivent la voix, le ton, les formats et le glossaire ;
- la structure est celle du wireframe, aux fusions validées près ;
- `bun run build` réussit.

Corriger ce qui peut l'être. Mettre à jour le statut de chaque écran : *terminé* ou *incomplet : raison*.

### 9. Clôturer
Signaler les écrans *incomplets*, les parcours non cliquables et les problèmes d'accessibilité restants.
Résumer le nombre d'écrans prototypés par zone et par version, les parcours testables, les retours acceptés et refusés. Indiquer :
- comment ouvrir les prototypes : `cd web; bun run dev`, puis `/#/prototypes` (revue) ou `/#/test/ECNN` (mode test) ;
- comment produire une version statique à partager : `bun run build`, dossier `web/dist/` ; la mise en ligne sur un hébergement partagé se fait avec l'accord de l'utilisateur ;
- l'étape suivante : mener le test d'utilisabilité avec de vrais participants, puis itérer sur les constats en reprenant le skill concerné (flows, wireframes, design system ou prototypes).

## Critères de qualité
- **Bloquant** : `bun run verifier` passe — chaque écran maquetté a son prototype avec au moins les états de son wireframe, un seul `h1` par état, aucune classe du kit, aucun faux texte ni champ de modèle, aucun `Texte`, `Note`, `className` ou `style` dans un écran, chaque happy path cliquable
- **Bloquant** : chaque happy path `Must` du MVP se parcourt au clavier seul, avec un focus visible
- La structure de chaque écran est celle de son wireframe, aux fusions validées près ; tout autre écart est un retour
- Contenus réels : tirés du jeu de données fictif unique, cohérents entre écrans, formatés en français par `formats.ts`, rédigés selon la voix, le ton et le glossaire
- Aucune donnée personnelle réelle ; l'utilisateur fictif ne reprend aucun participant de la recherche
- Lisible à 375 px, à 1280 px et avec un zoom à 200 %
- Le mode test n'affiche ni barre de revue ni bandeau, et ses liens restent en mode test
- Le protocole de test couvre chaque parcours `Must` du MVP, avec des scénarios sans les libellés de l'interface ; aucun résultat n'est inventé
- Les fichiers copie conforme du socle sont identiques aux assets du skill ; aucune dépendance hors socle, aucune ressource externe, aucun appel réseau
- Aucun livrable d'une phase précédente n'est modifié sans accord explicite
- Niveau de détail comparable aux [exemples](./references/exemples.md), sans reprendre leur contenu
- Langue des livrables : celle du brief
