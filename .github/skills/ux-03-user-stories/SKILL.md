---
name: ux-03-user-stories
description: "Phase 3 de la démarche UX : transforme les personas fondés et les customer journey maps en user stories regroupées par épopée, organisées en story map, priorisées MoSCoW et dotées de critères d'acceptation Gherkin. À lancer après ux-02-research-synthesis ; les user flows sont produits ensuite par ux-04-user-flows."
argument-hint: "Aucun argument"
disable-model-invocation: true
---

# UX 03 — User stories : des journey maps au story map

## Principe

Les stories naissent des parcours, pas d'une liste de fonctionnalités. Chaque épopée correspond à une activité du parcours utilisateur ; chaque story répond à une friction ou à une opportunité d'une customer journey map, et reste **traçable** jusqu'aux sources de la recherche.

Méthode détaillée : [méthode des user stories](./references/methode-stories.md).

**Exemples commentés** : [exemples](./references/exemples.md) — opportunités, épopée, story complète avec Gherkin et MoSCoW sur un projet fictif, et paires ✅ / ❌. Les relire avant d'esquisser et de rédiger ; ne jamais recopier leur contenu.

## Prérequis
- Livrables de `ux-02-research-synthesis` : `docs/02-persona/*.persona.md`, `docs/03-customer-journey-map/*.cjm.md`, `docs/research/synthese.md`.
- `docs/01-vision.md` pour le périmètre et les contraintes.
- S'ils manquent, s'arrêter et proposer de lancer `/ux-02-research-synthesis` d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de chaque livrable : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.`

## Procédure

### 0. Vérifier l'existant
Si `docs/04-user-stories/` contient déjà des livrables, demander s'il faut les compléter (nouvelles épopées ou stories) ou les remplacer.

### 1. Inventorier les opportunités
Traiter **un persona à la fois** : lire sa fiche puis sa journey map, et relever dans chaque parcours :
- les points de friction et opportunités, avec l'étape et les sources ;
- les moments de vérité et priorités d'amélioration ;
- les « Implications pour la conception » du persona.

Consigner aussitôt chaque élément dans la section « Inventaire des opportunités » de `docs/04-user-stories/00-story-map.md` (créé selon [le modèle de story map](./assets/story-map-template.md)), avec un identifiant `O01`, `O02`... En cas d'interruption, reprendre aux personas absents de l'inventaire.

Relever ensuite dans la vision les exigences qui ne viennent pas de la recherche (réglementaire, RGPD, données sensibles, accessibilité, métier) et les trier :
- **exigence qui demande une action du persona** (donner son consentement, désigner un mandataire) : l'ajouter à l'inventaire avec la source `vision` ou `contrainte` ; elle deviendra une story ;
- **exigence transverse** (accessibilité, confidentialité, délais légaux) : la consigner dans la section « Exigences transverses » du story map ; elle sera reprise dans les critères d'acceptation des stories concernées, sans devenir une story.

Comparer enfin les parcours du périmètre de la vision (sections « Périmètre » et « Parcours à cartographier ») aux parcours des journey maps. Consigner chaque parcours sans journey map dans la section « Couverture du périmètre » du story map.

### 2. Construire la colonne vertébrale
À partir de l'inventaire uniquement :
- Regrouper les étapes des journey maps, tous personas confondus, en épopées (repère : **5 à 9** ; justifier un écart dans le story map) : des activités utilisateur nommées par un verbe (« Faire une demande »), jamais par un écran ou un module.
- Les ordonner selon le déroulé du parcours : cet ordre donne leur numéro.

### 3. Esquisser les stories
Pour chaque épopée, transformer les opportunités en stories (titre, persona, opportunités couvertes, MoSCoW proposé, version proposée). Une opportunité peut donner plusieurs stories ; une story peut couvrir plusieurs opportunités. Toute opportunité non couverte est justifiée.

Écrire l'esquisse dans la section de travail « Esquisse » de `00-story-map.md`. Relier chaque exigence transverse aux stories qu'elle concerne.

### 4. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- Les épopées et leur ordre
- Les stories par épopée, avec MoSCoW et version proposés
- Les stories issues d'exigences hors recherche (confiance ⚪), à confirmer une par une
- Les exigences transverses et les stories auxquelles elles s'appliquent
- Les opportunités volontairement non couvertes
- Les parcours du périmètre sans journey map, avec pour chacun une décision à prendre : stories ⚪ à partir de la vision, retour à `/ux-02-research-synthesis` pour le cartographier, ou exclusion du périmètre

Demander une validation explicite avant de rédiger.

### 5. Rédiger les livrables (après validation uniquement)
Traiter **une épopée à la fois**, dans `docs/04-user-stories/` :
- `NN-<epopee>/00-<epopee>.epic.md` selon [le modèle d'épopée](./assets/epic-template.md).
- `NN-<epopee>/SS-<story>.story.md` : un fichier par story selon [le modèle de story](./assets/story-template.md). Identifiant `US-NN.SS` (numéro d'épopée, numéro de story). Intégrer aux critères d'acceptation les exigences transverses qui la concernent.
- Mettre à jour `00-story-map.md` : colonne vertébrale (à partir de l'esquisse validée), versions, liens vers les fichiers.

Nommage : numéros à deux chiffres, noms courts en minuscules sans accents, verbe à l'infinitif (ex : `01-faire-une-demande/02-suivre-ma-demande.story.md`). Le numéro d'une story est un identifiant stable : une story ajoutée plus tard prend le prochain numéro libre, et l'ordre de lecture reste celui du story map. Les stories `Won't` ne sont pas rédigées : elles sont listées dans la section « Écartées » du story map avec leur raison.

Une fois toutes les épopées rédigées, ajouter dans `01-vision.md` un lien vers le story map.

### 6. Relire
Rouvrir chaque épopée et ses stories, une épopée à la fois, et les confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- chaque story cite une opportunité de l'inventaire et ses sources, ou est marquée ⚪ ;
- chaque story a au moins un scénario nominal et un scénario d'erreur ou alternatif ;
- les critères d'acceptation ne décrivent ni écran ni composant d'interface ;
- les identifiants `US-NN.SS` correspondent aux noms de fichiers et au story map ;
- les liens story ↔ épopée ↔ persona ↔ journey map fonctionnent.

Corriger ce qui peut l'être ; noter ce qui reste non conforme pour la clôture.

### 7. Clôturer
Signaler les éventuels points restés non conformes à la relecture.
Résumer les épopées, le nombre de stories par version et par priorité, les stories fondées sur des hypothèses, et proposer de lancer `/ux-04-user-flows`.

## Critères de qualité
- Chaque story est traçable jusqu'à une opportunité de l'inventaire, elle-même rattachée à une étape de journey map et à des sources ; sinon elle est marquée ⚪ avec sa source (`vision`, `contrainte`)
- « En tant que » nomme le persona et son rôle (« En tant que Sophie, cliente pressée »), jamais « l'utilisateur »
- « Afin de » exprime un bénéfice pour le persona, pas une fonctionnalité
- Chaque story respecte INVEST (indépendante, négociable, valorisable, estimable, petite, testable)
- Chaque story a des critères d'acceptation Gherkin : au moins un scénario nominal et un scénario d'erreur ou alternatif
- Les critères d'acceptation décrivent des comportements, pas des écrans ni des composants (l'interface vient avec les user flows et le prototype)
- Les épopées sont des activités utilisateur nommées par un verbe ; repère de 5 à 9, écart justifié dans le story map
- Les exigences transverses ne sont pas des stories : elles figurent dans la section dédiée du story map et dans les critères d'acceptation des stories concernées
- Chaque parcours du périmètre de la vision a une journey map, ou la décision prise à son sujet (stories ⚪, retour à ux-02, exclusion) est consignée dans le story map
- MoSCoW et version sont choisis indépendamment ; toute story `Must` placée hors MVP est justifiée
- Niveau de détail comparable aux [exemples](./references/exemples.md), sans reprendre leur contenu
- Langue des livrables : celle du brief
