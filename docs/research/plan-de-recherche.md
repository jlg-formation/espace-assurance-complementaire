# Plan de recherche — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

> **Mode de collecte** : simulée via `/ux-01b-mock-research`, complétée par une recherche documentaire réelle (avis publics, statistiques).
> Contexte : [vision](../01-vision.md) · [journal d'exploration](../00-exploration.md)

## Objectifs de recherche
- Comment un particulier sans contrat collectif choisit-il aujourd'hui sa première complémentaire santé ? Sur quels critères, avec quelles sources ?
- Comment les adhérents savent-ils, avant un soin coûteux, ce qui restera à leur charge ?
- Comment les adhérents suivent-ils leurs remboursements, et quand utilisent-ils leur carte de tiers payant ?
- Comment un travailleur indépendant décide-t-il de se couvrir (ou non) contre une perte de revenus ? Qui intervient dans cette décision ?
- Comment se passe concrètement une déclaration d'arrêt de travail auprès d'un assureur prévoyance, et qu'est-ce qui génère des relances et des appels ?

## Hypothèses à valider (par ordre de risque)
| # | Hypothèse | Proto-persona | Risque si fausse | Méthode |
|---|---|---|---|---|
| H1 | Un primo-souscripteur ne sait pas lire un tableau de garanties (BR, % BR, 100 % Santé, OPTAM) et choisit sur le prix mensuel | [Léa](../02-persona/proto/01-lea.proto-persona.md) | fort | entretien, recherche documentaire |
| H4 | Avant un soin coûteux (optique, dentaire, orthodontie), l'adhérent appelle sa mutuelle ou demande au praticien pour connaître son reste à charge | [Karim](../02-persona/proto/02-karim.proto-persona.md) | fort | entretien, recherche documentaire |
| H7 | Un TNS sous-estime sa perte de revenus en cas d'arrêt et ne comprend pas la franchise, les indemnités journalières ni le taux d'invalidité | [Stéphane](../02-persona/proto/03-stephane.proto-persona.md) | fort | entretien, recherche documentaire |
| H8 | Un TNS souscrit sa prévoyance sur le conseil d'un tiers (expert-comptable, courtier, proche) plutôt que seul en ligne | [Stéphane](../02-persona/proto/03-stephane.proto-persona.md) | fort | entretien, recherche documentaire |
| H9 | Le questionnaire de santé est un moment d'abandon : peur des exclusions et des surprimes | [Stéphane](../02-persona/proto/03-stephane.proto-persona.md) | fort | entretien, recherche documentaire |
| H10 | L'adhérent en arrêt ne sait pas quels justificatifs envoyer ni dans quel délai, et l'apprend par des relances ou des refus | [Isabelle](../02-persona/proto/04-isabelle.proto-persona.md) | fort | entretien, recherche documentaire |
| H11 | C'est surtout le manque de visibilité sur le versement des indemnités (date, montant) qui crée le stress et les appels | [Isabelle](../02-persona/proto/04-isabelle.proto-persona.md) | fort | entretien, recherche documentaire |
| H2 | Le primo-souscripteur abandonne un devis dès qu'on lui demande ses coordonnées avant de voir un tarif | [Léa](../02-persona/proto/01-lea.proto-persona.md) | moyen | entretien, recherche documentaire |
| H3 | Le primo-souscripteur compare les offres sur ordinateur, en plusieurs fois, sur plusieurs jours | [Léa](../02-persona/proto/01-lea.proto-persona.md) | moyen | entretien |
| H5 | L'adhérent consulte ses remboursements sur mobile, surtout pour vérifier le reste à charge après un soin | [Karim](../02-persona/proto/02-karim.proto-persona.md) | moyen | entretien |
| H6 | L'adhérent cherche sa carte de tiers payant au dernier moment, au comptoir, sur son téléphone | [Karim](../02-persona/proto/02-karim.proto-persona.md) | moyen | entretien |
| H12 | L'adhérent en arrêt hésite à envoyer des documents médicaux en ligne par crainte pour leur confidentialité | [Isabelle](../02-persona/proto/04-isabelle.proto-persona.md) | moyen | entretien |
| H13 | Le primo-souscripteur lit les avis en ligne avant de choisir et se méfie des exclusions cachées | [Léa](../02-persona/proto/01-lea.proto-persona.md) | moyen | entretien, recherche documentaire |

## Méthodes

### Entretiens (source principale, simulés dans ce projet)
- **Profils à recruter** :
  - *Première mutuelle individuelle* : 18 à 35 ans, a souscrit seul une complémentaire santé au cours des 12 derniers mois. Exclus : personnes couvertes uniquement par un contrat collectif.
  - *Adhérent famille* : adhérent d'un contrat individuel couvrant au moins un enfant, qui a eu un soin optique, dentaire ou orthodontique au cours des 12 derniers mois.
  - *TNS santé + prévoyance* : artisan, commerçant ou profession libérale installé depuis moins de 5 ans, qui a souscrit une prévoyance ou y a renoncé. Exclus : salariés.
  - *Adhérent en arrêt / invalidité* : adhérent d'une prévoyance individuelle, en arrêt de plus de 15 jours ou en invalidité au cours des 24 derniers mois.
- **Nombre** : 2 à 3 par segment, soit 8 à 10 entretiens.
- **Recrutement** *(si collecte réelle ultérieure)* : entourage, réseaux d'indépendants (chambres de métiers, groupes de freelances), forums de parents, associations de patients.
- **Format** : visio ou présentiel, 30 à 45 minutes, enregistrement avec consentement.
- **Guide** : [guide-entretien.md](./guide-entretien.md)

### Enquête (optionnel)
Non retenue pour cette itération. À envisager plus tard pour quantifier H3, H5 et H6 (appareils et moments d'usage).

### Recherche documentaire (complément)
- **Avis publics** : plateformes d'avis clients et forums sur les assureurs de référence (Swiss Life, Allianz, April) et sur les mutuelles en général. Cibles : compréhension des garanties (H1, H13), démarchage après un devis (H2), reste à charge (H4), questionnaire de santé (H9), délais d'indemnisation et pièces réclamées (H10, H11). Attention au biais négatif : les mécontents écrivent davantage.
- **Statistiques et études** : publications de la DREES sur les complémentaires santé et le reste à charge, publications de France Assureurs sur la prévoyance, informations de l'Assurance Maladie sur le 100 % Santé, informations publiques sur la protection sociale des indépendants (H7, H8).

### Données simulées (non probantes)
Pour aller plus vite sans collecte réelle, via `/ux-01b-mock-research`. Toujours préfixées `SIM-`. Les conclusions tirées des données simulées restent des hypothèses renforcées, pas des faits.

## Conventions de dépôt des données
Déposer les données brutes dans `docs/research/raw/`, une source par fichier :

| Type | Nommage | Exemple |
|---|---|---|
| Entretien | `P<NN>-<segment>.md` | `P01-premiere-mutuelle.md` |
| Enquête | `Q-<nom>.md` ou `.csv` | `Q-usages.csv` |
| Avis public | `A<NN>-<source>.md` | `A01-avis-assureurs.md` |
| Statistique / étude | `S<NN>-<source>.md` | `S01-drees.md` |
| Donnée simulée | `SIM-<nommage ci-dessus>` | `SIM-P01-premiere-mutuelle.md` |

Segments utilisés dans les noms de fichiers : `premiere-mutuelle`, `famille`, `tns`, `arret`.

En tête de chaque fichier : date, profil (anonymisé), méthode, et URL pour les sources publiques. Ne pas déposer de données personnelles identifiantes (nom, numéro de Sécurité sociale, numéro d'adhérent, coordonnées), ni de données sensibles nominatives : pathologies, comptes rendus médicaux, montants de revenus rattachés à une personne.

## Critère de suffisance
La recherche est suffisante quand les nouveaux entretiens d'un segment n'apportent plus de comportement nouveau (saturation), avec un minimum de 2 entretiens par segment prioritaire et de 8 entretiens au total.
