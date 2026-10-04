---
name: ux-05-information-architecture
description: "Phase 5 de la démarche UX : construit l'architecture de l'information à partir de l'inventaire des écrans des user flows. Produit l'inventaire des contenus et des objets métier, l'arborescence (sitemap Mermaid), les systèmes de navigation, le glossaire des libellés tiré du vocabulaire des personas, et le protocole de test d'arborescence. Vérifie que chaque écran est placé et que chaque flow est atteignable. À lancer après ux-04-user-flows."
argument-hint: "Optionnel : zone à traiter (ex : espace adhérent)"
disable-model-invocation: true
---

# UX 05 — Architecture de l'information : des écrans à l'arborescence

## Principe

L'architecture de l'information organise et nomme les contenus pour que chaque persona trouve ce qu'il cherche et comprenne où il est. Les flows disent **comment** on accomplit une tâche ; l'architecture dit **où** se trouvent les écrans, **comment on y arrive** et **comment ils s'appellent**.

Tout part de l'inventaire des écrans de `ux-04-user-flows` : chaque écran est soit placé dans l'arborescence, soit rattaché à l'écran qui l'ouvre. Les libellés viennent du vocabulaire des personas, pas de celui de l'assureur.

Méthode détaillée : [méthode de l'architecture de l'information](./references/methode-ia.md).

## Prérequis
- Livrables de `ux-04-user-flows` : `docs/05-user-flows/00-index.md` (inventaire des écrans, points d'entrée) et les `.flow.md`.
- `docs/04-user-stories/00-story-map.md` pour les versions (MVP, V2, Plus tard).
- `docs/02-persona/*.persona.md`, `docs/research/synthese.md` et `docs/research/observations/*.obs.md` pour le vocabulaire.
- `docs/01-vision.md` pour le périmètre (site public, espace connecté).
- S'ils manquent, s'arrêter et proposer de lancer `/ux-04-user-flows` d'abord.

## Données simulées
Si `docs/research/raw/00-mock-research.md` existe, placer en tête de chaque livrable : `⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.` Le test d'arborescence n'est jamais simulé : sa section « Résultats » reste vide.

## Procédure

### 0. Vérifier l'existant
Si `docs/06-architecture-information/` contient déjà des livrables, demander s'il faut les compléter (écrans ajoutés à l'inventaire des flows depuis) ou les remplacer. En mode compléter, un écran de `05-user-flows/00-index.md` absent de `01-contenus.inventory.md` reste à traiter. Si une zone est passée en argument, ne traiter qu'elle.

### 1. Inventorier les objets et les contenus
Créer `docs/06-architecture-information/00-index.md` selon [le modèle d'index](./assets/index-template.md), puis `01-contenus.inventory.md` selon [le modèle d'inventaire](./assets/inventory-template.md).
- **Objets métier** : relever dans les stories et les flows les objets que manipulent les personas (contrat, garantie, remboursement, facture, bénéficiaire, document...). Pour chacun : attributs utiles au persona, relations avec les autres objets, actions possibles, écrans où il apparaît.
- **Écrans** : reprendre l'inventaire de `05-user-flows/00-index.md`, **un écran à la fois**, sans changer ni son identifiant ni son nom. Pour chacun : type (*lieu* ou *contextuel*, voir la méthode), parent s'il est contextuel, objets et contenus affichés (tirés des « Étapes du happy path » des flows), actions, personas, version (la plus précoce de ses stories), appareil principal.

Consigner chaque écran dans l'inventaire aussitôt traité. En cas d'interruption, reprendre aux écrans absents.

### 2. Collecter le vocabulaire
Dans les fiches personas (« Aisance »), la synthèse et les observations, relever les mots que les personas emploient pour les objets et les tâches, et les termes métier qui les bloquent. Les consigner comme brouillon dans `04-libelles.glossary.md` selon [le modèle de glossaire](./assets/glossary-template.md), chacun avec sa source (`[P04]`) et son niveau de confiance.

### 3. Esquisser l'organisation
À partir des écrans de type *lieu* :
- Délimiter les **zones** (site public, espace connecté, transverse) d'après la vision.
- Choisir le **schéma d'organisation** de chaque zone (par tâche, par objet, par audience) et le justifier par les personas et les flows.
- Regrouper les lieux en **rubriques** (7 au plus par niveau), nommées avec le vocabulaire collecté. Viser 3 niveaux au plus sous l'accueil d'une zone.
- Repérer les **écrans de navigation manquants** : accueil d'une zone, page de rubrique, résultats de recherche, plan du site... qu'aucun flow n'a nommés. Les proposer comme nouveaux écrans, avec le prochain identifiant `EC` libre.
- Repérer les points d'entrée des flows (notification, e-mail, courrier, moteur de recherche) qui exigent un **lien profond** vers un écran.

### 4. Valider avec l'utilisateur
Présenter avec l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) :
- Les zones et le schéma d'organisation de chacune
- Les rubriques de premier niveau et leurs libellés
- Les nouveaux écrans de navigation proposés
- Les rattachements discutables (écran qui pourrait vivre dans deux rubriques, contextuel ou lieu)
- Les arbitrages de libellés (terme du persona contre terme réglementaire ou métier)

Demander une validation explicite avant de rédiger.

### 5. Rédiger les livrables (après validation uniquement)
Dans `docs/06-architecture-information/` :
- Ajouter les nouveaux écrans validés à l'inventaire de `05-user-flows/00-index.md` (flows : « — », stories : « origine IA »), puis à `01-contenus.inventory.md`. C'est la seule modification de `05-user-flows/` autorisée sans nouvel accord.
- `02-arborescence.sitemap.md` selon [le modèle d'arborescence](./assets/sitemap-template.md) : un diagramme Mermaid par zone, chaque lieu placé **une seule fois** à son emplacement principal, versions distinguées.
- `03-navigation.nav.md` selon [le modèle de navigation](./assets/navigation-template.md) : navigation globale, locale, contextuelle, utilitaire et pied de page ; adaptation mobile ; liens profonds ; puis la **vérification par flow** : pour chaque flow, le chemin de navigation depuis chacun de ses points d'entrée jusqu'à son premier écran.
- `04-libelles.glossary.md` : version finale, un libellé par écran *lieu* et par rubrique, termes à éviter, définitions des termes métier inévitables.
- `05-test-arborescence.treetest.md` selon [le modèle de test](./assets/treetest-template.md) : au moins une question par flow `Must` du MVP, formulée avec les mots du persona et sans les libellés de l'arborescence, avec la réponse attendue.

### 6. Traiter les retours
Rassembler dans la section « Retours » de `00-index.md` ce que l'architecture a révélé :
- **vers les flows** : un premier écran inatteignable depuis un point d'entrée, un renvoi `uf` à ajouter, un écran à scinder ou à fusionner ;
- **vers le backlog** : un besoin de navigation sans story (recherche, plan du site, accueil de l'espace connecté...). Avant de proposer une story, vérifier la section « Écartées » du story map.

Les présenter avec l'outil de questions interactif. Après accord uniquement, modifier les flows ou les stories en suivant les règles de `ux-04-user-flows` (étape 5) et de `ux-03-user-stories` (numéro libre, confiance ⚪, origine `IA`). Les retours refusés restent dans l'index, marqués *refusé*.

### 7. Relire
Rouvrir chaque livrable, un à la fois, et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- chaque écran de `05-user-flows/00-index.md` figure dans l'inventaire des contenus, avec le même identifiant et le même nom (critère bloquant) ;
- chaque *lieu* figure une seule fois dans l'arborescence ; chaque *contextuel* a un parent qui est un lieu ou un autre contextuel rattaché à un lieu ;
- chaque flow a un chemin de navigation depuis chacun de ses points d'entrée (critère bloquant) ;
- chaque lieu et chaque rubrique a un libellé dans le glossaire, et l'arborescence, la navigation et le test emploient les mêmes ;
- les diagrammes Mermaid sont valides (libellés entre guillemets, aucun nœud nommé `end`) et respectent la légende ;
- les liens entre livrables, vers les flows et vers les stories fonctionnent.

Corriger ce qui peut l'être. Mettre à jour le statut de chaque livrable dans l'index : *terminé* ou *incomplet : raison*.

### 8. Clôturer
Signaler les livrables *incomplets*, les écrans non placés et les flows inatteignables.
Résumer les zones, les rubriques, le nombre d'écrans par type et par version, les écrans ajoutés, les retours acceptés et refusés. Rappeler que le test d'arborescence reste à mener avec de vrais utilisateurs, puis proposer l'étape suivante : `/ux-06-wireframes`, avant le design system.

## Critères de qualité
- **Bloquant** : chaque écran de l'inventaire des flows est classé *lieu* ou *contextuel*, avec un identifiant et un nom inchangés
- **Bloquant** : chaque flow est atteignable depuis chacun de ses points d'entrée (navigation ou lien profond) ; sinon le livrable de navigation est *incomplet*
- Chaque lieu figure une seule fois dans l'arborescence ; les autres accès passent par la navigation contextuelle
- Le schéma d'organisation de chaque zone est justifié par les personas ou les flows
- 7 rubriques au plus par niveau, 3 niveaux au plus sous l'accueil d'une zone, ou l'écart est justifié
- Les libellés viennent du vocabulaire des personas, avec leur source ; un terme métier inévitable est défini
- Un libellé désigne un seul lieu, et le même partout (arborescence, navigation, test)
- Les écrans hors MVP sont distingués dans l'arborescence
- Les écrans ajoutés par l'architecture sont identifiés `origine IA` dans l'inventaire des flows
- Les questions du test d'arborescence n'emploient pas les libellés de l'arborescence ; aucun résultat n'est inventé
- Aucun flow ni aucune story n'est modifié sans accord explicite, à l'exception de l'ajout des écrans validés à l'inventaire
- Langue des livrables : celle du brief
