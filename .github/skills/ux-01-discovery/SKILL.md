---
name: ux-01-discovery
description: "Phase 1 de la recherche UX : lit un brief, mène l'exploration avec l'utilisateur, puis rédige la vision, les proto-personas (hypothèses), le plan de recherche et le guide d'entretien. Les personas fondés sur la recherche et les journey maps sont produits ensuite par ux-02-research-synthesis."
argument-hint: "Chemin du brief (défaut : brief.md à la racine du workspace)"
disable-model-invocation: true
---

# UX 01 — Discovery : du brief au plan de recherche

## Principe

Ce skill ne produit **pas** de personas issus de la recherche : il produit des **proto-personas**, c'est-à-dire des hypothèses explicites sur les utilisateurs, et prépare la recherche qui permettra de les valider. Les personas fondés et les journey maps viennent après, avec `/ux-02-research-synthesis`.

Ne rien rédiger à la seule lecture du brief : l'exploration avec l'utilisateur est obligatoire.

## Procédure

### 0. Vérifier l'existant
Si `docs/` contient déjà des livrables de ce skill, demander s'il faut les compléter ou les remplacer avant de continuer.

### 1. Lire le brief
- Lire intégralement le fichier fourni en argument. Sans argument, utiliser `brief.md` à la racine du workspace ; s'il n'existe pas, demander le chemin.
- Extraire : contexte, objectif, cible, périmètre, contraintes, ton/langue.

### 2. Restituer sa compréhension
Répondre en quelques lignes (pas de livrable) :
- Reformulation du projet en 2-3 phrases
- Ce qui est **explicite** dans le brief
- Ce qui est **implicite / supposé** (à valider)
- Ce qui est **absent** (trous à combler)

### 3. Explorer avec l'utilisateur
Utiliser systématiquement l'outil de questions interactif natif de l'environnement (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, équivalent dans Cursor, etc.) plutôt que des questions en texte libre. Se rabattre sur des questions numérotées uniquement si aucun tel outil n'est disponible.

- Parcourir les thèmes de [la grille d'exploration](./references/grille-exploration.md), en commençant par « Pourquoi ce logiciel ? ».
- Poser les questions par lots thématiques de 3 à 5 maximum, les plus structurantes d'abord.
- Proposer des options (avec une recommandation) quand des réponses typiques existent ; laisser la saisie libre.
- Rebondir sur les réponses : approfondir les zones floues, relever les contradictions avec le brief.
- Si l'utilisateur ne sait pas, noter l'inconnue comme **hypothèse à valider** plutôt que d'insister.
- Ne pas inventer de données (chiffres, verbatims).
- **Consigner au fil de l'eau** chaque lot de questions et réponses dans `docs/00-exploration.md` (questions, réponses, décisions, hypothèses), pour ne rien perdre si la session s'interrompt.

**Fin de l'exploration** : elle s'arrête quand tous les éléments obligatoires de la grille sont renseignés (réponse ou hypothèse), ou dès que l'utilisateur demande à passer à la rédaction. Proposer d'arrêter après chaque lot si ce critère est atteint.

### 4. Synthétiser et valider
Avant de rédiger, présenter :
- L'énoncé de vision (le « pourquoi »)
- Les segments retenus et les proto-personas proposés (un par segment prioritaire)
- Les hypothèses les plus risquées, c'est-à-dire celles qui, si elles sont fausses, changent la conception
- Les méthodes de recherche envisagées

Demander une validation explicite (« on peut rédiger ? ») ; revenir à l'étape 3 si des points restent bloquants.

### 5. Rédiger les livrables (après validation uniquement)
Créer dans `docs/` :
- `00-exploration.md` : journal de l'exploration (déjà alimenté à l'étape 3)
- `01-vision.md` selon [le modèle vision](./assets/vision-template.md) : répond d'abord à « pourquoi fait-on ce logiciel ? »
- `02-persona/proto/NN-<prenom>.proto-persona.md` : un fichier par proto-persona selon [le modèle proto-persona](./assets/proto-persona-template.md). Numéro à deux chiffres par ordre de priorité, prénom en minuscules sans accents (ex : `proto/01-claire.proto-persona.md`). Le sous-dossier `proto/` sépare les hypothèses des personas fondés que `ux-02` placera dans `02-persona/`.
- `research/plan-de-recherche.md` selon [le modèle plan de recherche](./assets/plan-de-recherche-template.md)
- `research/guide-entretien.md` selon [le modèle guide d'entretien](./assets/guide-entretien-template.md)
- `research/raw/` : dossier où déposer les données collectées, avec un fichier `.gitkeep` pour qu'il soit suivi par Git

### 6. Relire
Rouvrir chaque fichier produit et le confronter un par un aux [critères de qualité](#critères-de-qualité). Vérifier en particulier :
- chaque hypothèse risquée du plan de recherche a au moins une question correspondante dans le guide d'entretien ;
- les identifiants H1, H2... sont identiques entre proto-personas et plan de recherche ;
- aucune question du guide ne porte sur une intention ou une opinion ;
- les liens entre vision, proto-personas et plan de recherche fonctionnent.

Corriger ce qui peut l'être ; noter ce qui reste non conforme pour la clôture.

### 7. Clôturer
- Signaler les éventuels points restés non conformes à la relecture.
- Résumer les fichiers créés et les hypothèses les plus risquées.
- Expliquer la suite selon le mode de collecte retenu pendant l'exploration (thème « Moyens de recherche ») et inscrit dans le plan de recherche :
  - **Collecte réelle** : mener la recherche (entretiens, enquête, recherche documentaire), déposer les données dans `docs/research/raw/` selon les conventions du plan, puis lancer `/ux-02-research-synthesis`.
  - **Collecte simulée** (pas de vrais utilisateurs ou pas le temps) : lancer `/ux-01b-mock-research`, puis `/ux-02-research-synthesis`.

## Critères de qualité
- Aucun livrable avant validation de l'étape 4, à l'exception du journal `00-exploration.md` alimenté pendant l'exploration
- Les proto-personas sont présentés comme des hypothèses, jamais comme des résultats de recherche
- Chaque proto-persona liste les hypothèses à valider et la façon de les valider
- Les hypothèses portent le même identifiant (H1, H2...) dans les proto-personas et dans le plan de recherche
- Chaque hypothèse risquée du plan de recherche est couverte par au moins une question du guide d'entretien
- Le guide d'entretien porte sur les comportements passés et réels (« racontez la dernière fois que... »), pas sur des opinions ou des intentions (« utiliseriez-vous... »)
- Langue des livrables : celle du brief
