---
name: ux-04-user-flows
description: "Phase 4 de la démarche UX : transforme les user stories (hors Won't) en user flows Mermaid, un par tâche utilisateur, avec chemin nominal, alternatives, erreurs, points d'entrée et étapes hors application. Tient un inventaire partagé des écrans (EC01...) et vérifie que chaque scénario Gherkin est couvert. À lancer après ux-03-user-stories."
argument-hint: "Optionnel : épopée à traiter (ex : 01)"
disable-model-invocation: true
---

# UX 04 — User flows : des stories aux parcours d'écrans

## Principe

Un user flow montre le chemin d'un persona pour accomplir **une tâche** : d'où il arrive, les écrans qu'il traverse, les décisions qu'il prend, ce que fait le système, et comment il s'en sort quand quelque chose échoue. Chaque flow couvre une ou plusieurs stories, et chaque scénario Gherkin de ces stories correspond à un chemin du flow.

Les écrans nommés dans les flows forment un inventaire unique, matière première de l'architecture de l'information.

Méthode détaillée : [méthode des user flows](./references/methode-flows.md).

## Prérequis
- Livrables de `ux-03-user-stories` : `docs/04-user-stories/00-story-map.md`, les `.epic.md` et `.story.md`.
- Pour les variantes et les points d'entrée : `docs/02-persona/*.persona.md`, `docs/03-customer-journey-map/*.cjm.md`.
- S'ils manquent, s'arrêter et proposer de lancer `/ux-03-user-stories` d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de chaque livrable : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.`

## Procédure

### 0. Vérifier l'existant
Si `docs/05-user-flows/` contient déjà des livrables, demander s'il faut les compléter (nouvelles épopées, nouvelles stories) ou les remplacer. En mode compléter, une story dont la section « User flows » est vide et qui n'est pas listée dans « Stories non couvertes » de l'index reste à traiter. Si une épopée est passée en argument, ne traiter qu'elle.

### 1. Identifier les tâches
Lire `00-story-map.md`, puis traiter **une épopée à la fois** : lire son `.epic.md` et ses `.story.md`.
- Regrouper les stories en **tâches** : un objectif du persona, avec un déclencheur et une fin nette (« Envoyer une facture et savoir quand je serai remboursé »).
- Pour chaque tâche, noter : stories couvertes, persona principal, autres personas concernés, points d'entrée (tirés des journey maps), appareil principal (tiré de la section « Quand et sur quoi » de la fiche persona).
- Chaque story hors `Won't` est couverte par au moins un flow. Une story peut l'être par plusieurs. Exception : une story sans interaction à dessiner est listée dans « Stories non couvertes » de l'index, avec sa raison, et présentée à la validation.
- Une tâche peut mobiliser des stories d'autres épopées (ex : se connecter avant d'envoyer une facture). Ranger le flow dans l'épopée de sa story principale. Les stories d'autres épopées sont **mobilisées**, pas couvertes : les citer avec leur chemin complet si leurs étapes sont dessinées ici, ou renvoyer vers le flow qui les couvre (`uf1[["UF-MM.FF ..."]]`). Un renvoi ne vise qu'un flow présent dans l'index ; sinon, dessiner les étapes et citer la story.

Consigner aussitôt chaque tâche dans la section « Index des flows » de `docs/05-user-flows/00-index.md` (créé selon [le modèle d'index](./assets/index-template.md)). En cas d'interruption, reprendre aux épopées absentes de l'index.

### 2. Repérer les variantes de personas
Pour chaque tâche, relire uniquement les fiches des personas concernés (sections « Comment il utilise l'application » et « Ce qui le bloque ») et noter où leur chemin diverge de celui du persona principal (besoin d'humain, canal, aisance numérique).

### 3. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- La liste des tâches par épopée, les stories couvertes et mobilisées, et le persona principal
- Les stories non couvertes et leur raison
- Les variantes de personas retenues
- Les points d'entrée et étapes hors application retenus

Demander une validation explicite avant de dessiner.

### 4. Rédiger les flows (après validation uniquement)
Traiter **une épopée à la fois, un flow à la fois**, dans `docs/05-user-flows/` :
- `NN-<epopee>/FF-<tache>.flow.md` selon [le modèle de flow](./assets/flow-template.md), même numéro et même nom d'épopée que dans `04-user-stories/`. Identifiant `UF-NN.FF`.
- Dessiner d'abord le happy path (flèches épaisses `==>`), puis les alternatives, les erreurs et les variantes. Décrire chaque chemin dans la section « Chemins » avec son identifiant (`HP`, `A1`, `E1`, `V1`...), repris en tête du libellé de la flèche qui s'écarte du happy path.
- Avant de nommer un écran, chercher dans l'inventaire des écrans de `00-index.md` s'il existe déjà ; sinon l'y ajouter avec le prochain identifiant libre (`EC01`, `EC02`...).
- Identifiants des nœuds : un nœud d'écran porte toujours l'identifiant de l'écran (`EC05`) ; un écran qui revient dans le flow réutilise le même nœud (boucle, pas doublon). Les autres nœuds suivent les préfixes de la méthode (`start`, `fin`, `d1`, `s1`, `x1`, `v1`, `uf1`). La section « Chemins » utilise ces mêmes identifiants.
- Remplir le tableau de couverture : chaque scénario Gherkin des stories **couvertes** pointe vers un chemin (`HP`, `A1`, `E1`...) ; pour les stories **mobilisées**, seuls les scénarios dessinés ici sont listés. Un scénario sans chemin oblige à compléter le flow. S'il ne relève pas de cette tâche, le rattacher au flow qui le couvre ; s'il paraît faux ou obsolète, en faire un retour « scénario à revoir ».
- Un chemin sans scénario correspondant (erreur, retour arrière, état vide découverts en dessinant) donne un retour « scénario manquant » ; un besoin qui n'entre dans aucune story donne un retour « story manquante ».
- Ajouter le lien vers le flow dans la section « User flows » de chaque story couverte. C'est la seule modification des stories autorisée sans accord : elle ne change ni la story ni ses critères.

### 5. Traiter les retours vers le backlog
Rassembler les retours des flows traités dans cette exécution (tous, ou ceux de l'épopée passée en argument) dans la section « Retours vers le backlog » de `00-index.md`. Avant de proposer une nouvelle story, vérifier la section « Écartées » du story map : si elle y figure, la présenter comme une story déjà écartée, avec sa raison. Présenter ensuite les retours avec l'outil de questions interactif :
- scénarios Gherkin à ajouter à une story existante, ou à revoir ;
- nouvelles stories, avec persona, MoSCoW et version proposés.

Après accord uniquement, modifier `docs/04-user-stories/` : ajouter ou corriger les scénarios, créer les nouvelles `.story.md` (prochain numéro libre de l'épopée : le numéro est un identifiant stable, l'ordre de lecture reste celui du story map ; confiance ⚪ sauf source de recherche, origine `UF-NN.FF`), mettre à jour le `.epic.md` et `00-story-map.md`. Puis compléter la couverture des flows concernés. Les retours refusés restent dans le flow, marqués *refusé*.

### 6. Relire
Rouvrir chaque flow, un à la fois, et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- le diagramme Mermaid est syntaxiquement valide (libellés entre guillemets, aucun nœud nommé `end`) et respecte la légende ;
- les identifiants des nœuds sont ceux de l'inventaire pour les écrans et suivent les préfixes de la méthode pour les autres ; la section « Chemins » utilise les mêmes ;
- le happy path se suit en flèches épaisses du début à la fin, et chaque chemin du diagramme figure dans la section « Chemins » ;
- chaque scénario Gherkin des stories couvertes a un chemin dans le flow (critère bloquant) ;
- les renvois `uf` visent des flows présents dans l'index ;
- chaque écran du flow existe dans l'inventaire, avec le même identifiant et le même nom ;
- chaque story hors `Won't` est couverte par au moins un flow, ou listée dans « Stories non couvertes » avec sa raison ;
- les liens flow ↔ stories ↔ inventaire fonctionnent.

Corriger ce qui peut l'être. Mettre à jour le statut de chaque flow dans l'index : *terminé* si tous les critères sont respectés, *incomplet* sinon. Un flow dont la couverture des scénarios est incomplète est toujours *incomplet*.

### 7. Clôturer
Signaler les flows *incomplets* et ce qui leur manque.
Résumer les flows produits, le nombre d'écrans inventoriés, les retours vers le backlog acceptés et refusés, et proposer l'étape suivante : `/ux-05-information-architecture`, à partir de l'inventaire des écrans.

## Critères de qualité
- Un flow par tâche utilisateur, avec un déclencheur et une fin explicites ; chaque story hors `Won't` est couverte par au moins un flow, ou listée dans « Stories non couvertes » avec sa raison validée
- **Bloquant** : chaque scénario Gherkin des stories couvertes correspond à un chemin du flow ; sinon le flow est marqué *incomplet* dans l'index
- Chaque flow montre un happy path unique, les chemins alternatifs et les cas d'erreur, et chaque erreur a une issue (reprise, contournement, contact humain)
- Le happy path se distingue dans le diagramme (flèches épaisses `==>`) ; chaque chemin porte un identifiant (`HP`, `A1`, `E1`, `V1`...) repris dans la section « Chemins » et dans la couverture
- Les points d'entrée et étapes hors application issus des journey maps figurent dans le flow
- Les variantes des autres personas apparaissent en branches, rattachées à un constat de leur fiche
- La légende Mermaid est identique dans tous les flows
- Chaque écran porte un identifiant `EC` unique, partagé avec l'inventaire et utilisé comme identifiant de nœud ; pas deux identifiants pour le même écran, pas deux nœuds pour le même écran dans un flow
- Chaque chemin mène à une fin explicite ou rejoint un autre chemin ; un identifiant de chemin désigne un seul chemin
- Les stories d'autres épopées mobilisées par une tâche sont citées avec leur chemin complet, ou couvertes par un renvoi vers un flow existant
- Les écrans sont nommés par leur rôle pour le persona (« Suivi du remboursement »), pas par leur mise en page
- Aucune story n'est modifiée ni créée sans accord explicite, à l'exception du lien ajouté dans leur section « User flows »
- Langue des livrables : celle du brief
