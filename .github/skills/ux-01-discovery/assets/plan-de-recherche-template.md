# Plan de recherche — {nom du projet}

> **Mode de collecte** : {réelle / simulée via `/ux-01b-mock-research`}

## Objectifs de recherche
{Ce qu'on cherche à apprendre, formulé en questions. Ex : « Comment les utilisateurs accomplissent-ils aujourd'hui {tâche clé} ? »}

## Hypothèses à valider (par ordre de risque)
| # | Hypothèse | Proto-persona | Risque si fausse | Méthode |
|---|---|---|---|---|
| H1 | {...} | [{Prénom}](../02-persona/proto/{NN}-{prenom}.proto-persona.md) | {fort/moyen/faible} | {entretien / enquête / recherche documentaire} |

## Méthodes

### Entretiens (source principale)
- **Profils à recruter** : {par segment, critères d'inclusion et d'exclusion}
- **Nombre** : {5 à 8 par segment prioritaire}
- **Recrutement** : {entourage, collègues, réseaux, forums...}
- **Format** : {visio / présentiel, 30-45 min, enregistrement avec consentement}
- **Guide** : [guide-entretien.md](./guide-entretien.md)

### Enquête (optionnel)
- **Objectif** : {quantifier quelles hypothèses ?}
- **Diffusion** : {...}

### Recherche documentaire (complément)
- **Avis publics** : {plateformes d'avis, stores d'applications, forums, réseaux sociaux} — attention au biais négatif
- **Statistiques et études** : {organismes publics, études sectorielles, associations}

### Données simulées (non probantes)
Pour aller plus vite sans collecte réelle, via `/ux-01b-mock-research`. Toujours préfixées `SIM-`.

## Conventions de dépôt des données
Déposer les données brutes dans `docs/research/raw/`, une source par fichier :

| Type | Nommage | Exemple |
|---|---|---|
| Entretien | `P<NN>-<segment>.md` | `P01-occasionnel.md` |
| Enquête | `Q-<nom>.md` ou `.csv` | `Q-usages.csv` |
| Avis public | `A<NN>-<source>.md` | `A01-store.md` |
| Statistique / étude | `S<NN>-<source>.md` | `S01-etude-sectorielle.md` |
| Donnée simulée | `SIM-<nommage ci-dessus>` | `SIM-P01-occasionnel.md` |

En tête de chaque fichier : date, profil (anonymisé), méthode, et URL pour les sources publiques. Ne pas déposer de données personnelles identifiantes (nom, identifiants officiels, coordonnées) ni de données sensibles nominatives (santé, finances, opinions).

## Critère de suffisance
La recherche est suffisante quand les nouveaux entretiens d'un segment n'apportent plus de comportement nouveau (saturation), avec un minimum de {N} entretiens par segment prioritaire.
