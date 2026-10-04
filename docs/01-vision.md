# Vision — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

> Ce document répond avant tout à la question : **pourquoi fait-on ce logiciel ?**
> Projet fictif et pédagogique : Clarea Assurances est un assureur inventé, inspiré des acteurs du marché français (Swiss Life, Allianz, April). Journal de l'exploration : [00-exploration.md](./00-exploration.md).

## Énoncé de vision
Permettre aux particuliers et aux indépendants de comprendre ce que leur complémentaire santé et prévoyance couvre vraiment, avant de souscrire, avant un soin et quand un arrêt de travail survient, sans avoir à appeler pour obtenir une réponse.

## Pourquoi ce logiciel ?

### Le problème
Le problème se présente à quatre moments, tous à valider par la recherche :
- **Au moment de choisir** : les tableaux de garanties parlent en « % de la base de remboursement », en « OPTAM » ou en « 100 % Santé ». Une personne qui cherche sa première mutuelle ne peut pas traduire ces termes en euros remboursés, et choisit donc sur le prix mensuel.
- **Au moment de souscrire** : comparer et souscrire est long et opaque. Il faut souvent laisser ses coordonnées avant de voir un tarif, et le questionnaire de santé de la prévoyance inquiète (exclusions, surprimes).
- **Au quotidien** : avant une paire de lunettes ou une couronne dentaire, l'adhérent ne sait pas ce qui lui restera à payer. Pour suivre un remboursement ou retrouver une attestation, il doit souvent appeler.
- **Quand un arrêt de travail ou une invalidité survient** : déclarer l'arrêt, savoir quels justificatifs envoyer et quand les indemnités seront versées est complexe et anxiogène. Cela arrive au moment où la personne est la plus fragile.

### Pourquoi les solutions actuelles ne suffisent pas
- Les sites des assureurs mettent en avant le tunnel de vente. La pédagogie sur les garanties et les exclusions passe au second plan.
- Les comparateurs multi-assureurs comparent surtout des prix et renvoient vers des démarchages téléphoniques.
- Pour savoir combien il sera remboursé, il faut appeler la mutuelle ou demander un devis au praticien, puis faire le calcul soi-même.
- La déclaration d'un arrêt passe encore souvent par le courrier, l'e-mail ou le téléphone, sans suivi visible.

*Constats issus de l'exploration : à confirmer par la recherche documentaire (avis publics) et les entretiens.*

### Pourquoi maintenant
- La résiliation infra-annuelle des complémentaires santé (possible à tout moment après un an de contrat) facilite les changements d'assureur. La clarté de l'offre devient donc un levier de choix et de fidélisation.
- Depuis la réforme 100 % Santé, une partie de l'optique, du dentaire et de l'audiologie est sans reste à charge, mais la frontière avec les autres équipements reste mal comprise.
- Les organismes complémentaires se sont engagés sur la lisibilité des garanties (libellés communs, exemples de remboursement en euros), ce qui fixe un niveau d'attente.
- Le nombre de travailleurs indépendants augmente. Ces personnes ne bénéficient pas d'un contrat collectif et doivent se couvrir seules, en santé comme en prévoyance.

### Ce qui change si on réussit
- **Pour les utilisateurs** : ils savent ce qu'ils achètent et ce qui est exclu, connaissent leur reste à charge avant un soin, et peuvent déclarer un arrêt puis suivre leurs indemnités sans relancer l'assureur.
- **Pour l'organisation** : moins d'appels de suivi (remboursements, indemnités, attestations), des dossiers d'arrêt complets dès le premier envoi, moins de résiliations dues à une couverture mal comprise.
- **Indicateurs de succès** *(valeurs cibles à définir)* :
  - taux de devis menés jusqu'au tarif, puis jusqu'à la souscription ;
  - part des adhérents qui estiment leur reste à charge en ligne avant un soin ;
  - part des appels « où en est mon remboursement / mon indemnité ? » dans le total des contacts ;
  - part des déclarations d'arrêt complètes dès le premier envoi ;
  - délai entre la déclaration d'un arrêt et le premier versement.

### Ce que ce logiciel n'est pas
- Un tunnel de vente agressif qui cache les exclusions : garanties, exclusions et délais de carence sont visibles avant la souscription.
- Un comparateur multi-assureurs : le site ne présente que les offres de Clarea.
- Une application mobile native : c'est un site web responsive, conçu mobile first.

## Périmètre
- **Inclus** :
  - **Site vitrine** : offres santé et prévoyance, contenus pédagogiques (lire ses garanties, 100 % Santé, indemnités journalières, invalidité).
  - **Devis et souscription en ligne** : tarif, questionnaire de santé (prévoyance), signature électronique, paiement.
  - **Espace adhérent** : remboursements, estimation du reste à charge, carte tiers payant, attestations et documents.
  - **Arrêt de travail et invalidité** : déclaration, envoi des justificatifs, suivi des indemnités dans l'espace adhérent.
  - **Contact minimal** : formulaire de contact et demande de rappel par un conseiller.
- **Exclu** : comparateur multi-assureurs ; application native ; espace entreprise (contrats collectifs) ; espace courtier ; prise de rendez-vous, chat et messagerie sécurisée ; parcours de résiliation et de changement d'assureur.
- **Contraintes** :
  - **RGPD et données de santé** : hébergement HDS, secret médical, accès restreint aux pièces médicales, consentements explicites.
  - **Règles du secteur** : directive sur la distribution d'assurances (DDA) et devoir de conseil, document d'information normalisé (IPID), information sur la résiliation, lisibilité des garanties.
  - **Accessibilité** : RGAA, niveau AA.
  - **Langue** : français uniquement.

## Segments d'utilisateurs
| Segment | Description | Priorité | Persona |
|---|---|---|---|
| Première mutuelle individuelle | Particulier sans contrat collectif qui souscrit seul pour la première fois (fin d'études, entre deux contrats, freelance qui débute) | haute | [Léa](./02-persona/proto/01-lea.proto-persona.md) *(proto)* |
| Adhérent famille | Adhérent qui gère les soins et les remboursements de tout le foyer, enfants compris | haute | [Karim](./02-persona/proto/02-karim.proto-persona.md) *(proto)* |
| TNS santé + prévoyance | Travailleur non salarié (artisan, commerçant, profession libérale) qui doit couvrir sa santé et sa perte de revenus | haute | [Stéphane](./02-persona/proto/03-stephane.proto-persona.md) *(proto)* |
| Adhérent en arrêt / invalidité | Adhérent prévoyance en arrêt de travail ou en invalidité, qui déclare et suit ses indemnités | haute | [Isabelle](./02-persona/proto/04-isabelle.proto-persona.md) *(proto)* |

Segments écartés pour cette version : salariés couverts par un contrat collectif, retraités qui changent de mutuelle.

## Personas fondés (après recherche)
> ⚠️ Livrable fondé sur des données simulées, sans valeur de recherche. Détail : [synthèse](./research/synthese.md).

Les segments ci-dessus ne prédisent pas le comportement : trois schémas les traversent.

| Priorité | Persona | Schéma de comportement | Journey map |
|---|---|---|---|
| 01 | [Manon](./02-persona/01-manon.persona.md) | Agit au dernier moment, sur mobile, veut un chiffre en euros, ne lit pas son contrat | [Parcours de Manon](./03-customer-journey-map/01-manon.cjm.md) |
| 02 | [Sylvie](./02-persona/02-sylvie.persona.md) | Proche qui gère les démarches du foyer sans être titulaire ; téléphone, courrier, conseiller | [Parcours de Sylvie](./03-customer-journey-map/02-sylvie.cjm.md) |
| 03 | [Hélène](./02-persona/03-helene.persona.md) | Compare, planifie et documente seule sur ordinateur ; veut le montant net et des parcours qui gèrent les cas non standard | [Parcours d'Hélène](./03-customer-journey-map/03-helene.cjm.md) |

Les proto-personas restent dans [02-persona/proto/](./02-persona/proto/) : Léa, fusionnée dans Manon ; Karim, Stéphane et Isabelle, scindés.

## Parcours cartographiés (état actuel)
- **Souscrire sa première couverture** et **savoir ce qui restera à payer avant un soin** : [Manon](./03-customer-journey-map/01-manon.cjm.md)
- **Faire estimer un devis coûteux** et **déclarer l'arrêt de son conjoint et suivre les versements** : [Sylvie](./03-customer-journey-map/02-sylvie.cjm.md)
- **Choisir et souscrire une prévoyance** et **déclarer un arrêt et suivre les indemnités jusqu'à la reprise** : [Hélène](./03-customer-journey-map/03-helene.cjm.md)

## Décisions prises pendant l'exploration
- Projet fictif : assureur inventé « Clarea Assurances », réalisme crédible, aucune donnée réelle.
- Cible : particuliers en contrat individuel et TNS. Pas de contrats collectifs.
- La déclaration et le suivi d'un arrêt ou d'une invalidité sont inclus dans l'espace adhérent, pour rester cohérent avec le problème identifié.
- Le contact humain est réduit au minimum (formulaire et demande de rappel) pour qu'un recours existe sans tunnel agressif.
- Site web responsive uniquement.
- Un parcours par proto-persona.
- Recherche en collecte simulée, complétée par une recherche documentaire.
- Les livrables sont validés par l'utilisateur seul.

## Hypothèses : statut après recherche (simulée)
Détail et sources : [synthèse](./research/synthese.md#confrontation-aux-hypothèses) · Hypothèses d'origine : [plan de recherche](./research/plan-de-recherche.md).

| Statut | Hypothèses |
|---|---|
| **Validées** | H1 (tableau illisible, choix au prix), H7 (perte de revenus sous-estimée), H10 (justificatifs inconnus), H11 (versements invisibles) |
| **Nuancées** | H2 (coordonnées avant le prix), H3 (comparaison sur ordinateur), H4 (appel avant un soin), H8 (conseil d'un tiers), H9 (questionnaire de santé), H13 (avis) |
| **Invalidées** | H5 (remboursements sur mobile), H6 (carte cherchée au comptoir), H12 (réticence à envoyer des pièces médicales) |

## Questions ouvertes
- Faut-il proposer une souscription assistée (rappel d'un conseiller) en plus du parcours en ligne, la majorité des TNS passant par un intermédiaire (H8 nuancée) ?
- Quelle place donner à l'estimation du reste à charge : outil autonome, ou estimation liée à un devis de praticien ?
- Dans quels cas la souscription en ligne n'est-elle pas possible (questionnaire de santé nécessitant une étude médicale) ?
- Quelles pièces justificatives exiger pour un arrêt ou une invalidité, et qui y a accès dans l'organisation (médecin-conseil) ?
- L'accès délégué à un proche ou à un bénéficiaire (besoin émergent) entre-t-il dans le périmètre de la première version ?

## Étapes suivantes
Recherche utilisateur → synthèse (personas fondés, journey maps) → user stories → user flows → architecture de l'information → design system → prototypes

User stories : [story map](./04-user-stories/00-story-map.md) (8 épopées, 27 stories).
