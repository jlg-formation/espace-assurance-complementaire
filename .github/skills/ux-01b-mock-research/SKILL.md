---
name: ux-01b-mock-research
description: "SIMULATION : génère de fausses données de recherche UX (entretiens, enquête, avis, statistiques fictifs) à partir du plan de recherche et du guide d'entretien produits par ux-01-discovery, et les dépose dans docs/research/raw/. Remplace la vraie collecte pour aller plus vite. Ne constitue en aucun cas une recherche utilisateur."
argument-hint: "Optionnel : nombre d'entretiens par segment (ex: 5)"
disable-model-invocation: true
---

# UX 01b — Mock research (simulation de recherche)

## Avertissement

**Ce skill est une simulation.** Il fabrique des données de recherche plausibles à la place d'une vraie collecte, pour aller plus vite. Les données produites ne décrivent aucune personne réelle et ne valent pas preuve. Toutes portent un bandeau d'avertissement et le préfixe `SIM-`.

## Prérequis
Livrables de `ux-01-discovery` : `docs/01-vision.md`, `docs/02-persona/proto/*.proto-persona.md`, `docs/research/plan-de-recherche.md`, `docs/research/guide-entretien.md`.

S'ils manquent, s'arrêter et proposer de lancer `/ux-01-discovery` d'abord.

Si le brief est nécessaire pour le contexte, lire `brief.md` à la racine du workspace.

## Procédure

### 0. Vérifier l'existant
Si `docs/research/raw/` contient déjà des données, demander s'il faut compléter (nouveaux participants) ou tout régénérer.

### 1. Lire les entrées
Lire la vision, les proto-personas, le plan de recherche (segments, hypothèses H1..Hn, méthodes) et le guide d'entretien.

### 2. Paramétrer la simulation
Utiliser l'outil de questions interactif natif (Ask Questions dans VS Code, AskUserQuestion dans Claude Code, etc.) pour fixer, avec des valeurs recommandées :
- **Nombre d'entretiens** par segment (recommandé : 4 à 6)
- **Sources complémentaires** : enquête, avis, statistiques (recommandé : enquête + quelques avis)

### 3. Constituer le panel
Définir les participants fictifs (`SIM-P01`, `SIM-P02`...) : segment, âge, situation, métier, solution actuelle, aisance numérique. Règles :
- Diversité réaliste (âge, genre, territoire, revenus, aisance numérique), sans stéréotypes
- Au moins un participant par segment qui **ne colle pas** au proto-persona
- Au moins un participant atypique, comme dans un vrai recrutement
- Les comportements varient le long de vraies variables comportementales (aisance numérique, fréquence d'usage, réflexe de vérification, besoin d'humain...)

Créer aussitôt le manifeste `docs/research/raw/00-mock-research.md` : bandeau, paramètres de simulation, panel (tableau), et une liste des fichiers à générer. Sa présence signale à `ux-02-research-synthesis` que les données sont simulées.

### 4. Générer les données
Suivre [les règles de réalisme](./references/regles-realisme.md) et les modèles fournis.

Pour ne pas saturer la mémoire de travail : générer **un fichier à la fois** et l'écrire immédiatement sur le disque, en ne s'appuyant que sur le manifeste, le guide d'entretien et la fiche du participant concerné. Après chaque fichier, compléter sa ligne dans le manifeste avec les 2-3 comportements marquants du participant, pour garder la cohérence d'ensemble sans relire les entretiens. En cas d'interruption, reprendre aux fichiers non encore générés.

- **Entretiens** : un fichier par participant selon [le modèle d'entretien simulé](./assets/entretien-simule-template.md), en suivant le guide d'entretien question par question.
- **Enquête** (si retenue) : `SIM-Q-<nom>.csv` (30 à 80 réponses) + `SIM-Q-<nom>.md` décrivant les questions et la diffusion fictive.
- **Avis** (si retenus) : `SIM-A<NN>-<type>.md`, 3 à 5 avis par fichier, rédigés comme des avis en ligne.
- **Statistiques** (si retenues) : `SIM-S<NN>-<sujet>.md`.

### 5. Relire
Passer en revue chaque fichier généré (en-têtes et extraits, sans tout recharger) et le confronter aux [critères de qualité](#critères-de-qualité). Vérifier en particulier : bandeau et préfixe `SIM-` sur chaque fichier, aucune source réelle citée, manifeste complet et cohérent avec les fichiers présents, chaque segment du plan couvert.

Corriger ce qui peut l'être ; noter ce qui reste non conforme pour la clôture.

### 6. Clôturer
Signaler les éventuels points restés non conformes à la relecture.
Résumer le panel et les fichiers générés, rappeler qu'il s'agit d'une simulation, et proposer de lancer `/ux-02-research-synthesis`.

## Critères de qualité
- Chaque fichier généré commence par le bandeau `⚠️ DONNÉES SIMULÉES — aucune personne réelle.`
- Tous les fichiers générés sont préfixés `SIM-` (sauf le manifeste `00-mock-research.md`)
- Aucune statistique fictive n'est attribuée à un organisme réel (pas de « selon l'INSEE »), aucun avis n'est attribué à une plateforme réelle
- Les données ne sont pas « trop propres » : contradictions, hors-sujets, réponses vagues, comportements qui contredisent les propos
- Comme dans une vraie recherche, certaines hypothèses du plan sont confirmées, d'autres nuancées ou contredites
