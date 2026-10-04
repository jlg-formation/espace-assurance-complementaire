# Journal d'exploration — Site d'assurance complémentaire

> Source : [brief.md](../brief.md). Journal tenu au fil de l'exploration (skill ux-01-discovery).

## Restitution initiale

- **Reformulation** : concevoir le site d'un assureur complémentaire santé et prévoyance (invalidité) en France, à la manière de Swiss Life, Allianz ou April, pour le grand public : découvrir, souscrire, gérer.
- **Explicite** : domaine santé + invalidité ; France ; références Swiss Life, Allianz, April ; « site complet ».
- **Implicite (à valider)** : « complet » = vitrine + devis/souscription + espace adhérent ; cible particuliers, peut-être TNS ; projet fictif.
- **Absent** : problème à résoudre, segments prioritaires, exclusions, parcours clés, moyens de recherche, contraintes (RGPD, données de santé, accessibilité).

## Lot 1 — Pourquoi ce logiciel ? / Périmètre

| Question | Réponse |
|---|---|
| Projet réel ou fictif ? | Fictif / pédagogique (assureur inventé), réalisme crédible |
| Problème principal | Les quatre retenus : (1) garanties et remboursements incompris ; (2) comparer et souscrire est long et opaque ; (3) gérer son contrat oblige à appeler ; (4) déclarer un arrêt / une invalidité est complexe et anxiogène |
| Parcours inclus | Site vitrine (offres + pédagogie) ; devis et souscription en ligne ; espace adhérent (remboursements, carte tiers payant, attestations, documents) |
| Parcours non cochés | Déclaration de sinistre prévoyance ; contact/conseiller/RDV ; espace entreprise/courtier |
| Ce que le site ne doit pas être | Un tunnel de vente agressif qui cache les exclusions ; un comparateur multi-assureurs ; une app native (web responsive uniquement) |

**Point à clarifier** : le problème (4), sur la déclaration d'arrêt ou d'invalidité, est retenu, mais le parcours de déclaration de sinistre prévoyance n'est pas coché dans le périmètre.

## Lot 2 — Périmètre (suite), utilisateurs, contraintes

| Question | Réponse |
|---|---|
| Contradiction prévoyance | **Décision** : inclure la déclaration d'arrêt de travail / d'invalidité et son suivi dans l'espace adhérent |
| Contact humain | Minimal : formulaire de contact + demande de rappel par un conseiller |
| Types de clients | Particuliers en contrat individuel ; travailleurs non salariés (TNS) |
| Hors cible | Salariés couverts par un contrat collectif ; segment seniors spécifique (non retenu comme segment à part) |
| Contraintes | RGPD + données de santé (HDS, secret médical) ; RGAA niveau AA ; règles du secteur (DDA, IPID, devoir de conseil, résiliation) ; français uniquement |

**Périmètre consolidé** : vitrine (offres santé et prévoyance + pédagogie) ; devis et souscription en ligne ; espace adhérent (remboursements, carte tiers payant, attestations, documents, déclaration et suivi d'arrêt/invalidité) ; contact minimal (formulaire + rappel).
**Exclu** : comparateur multi-assureurs, app native, espace entreprise et espace courtier, prise de RDV, chat, messagerie.

## Lot 3 — Segments, parcours, comportements

| Question | Réponse |
|---|---|
| Segments prioritaires (4) | (1) Particulier qui cherche une première mutuelle individuelle ; (2) Adhérent famille qui gère les soins du foyer ; (3) TNS / indépendant qui cherche santé + prévoyance invalidité ; (4) Adhérent en arrêt de travail / invalidité |
| Segment non retenu | Retraité qui change de mutuelle |
| Parcours clés | Comprendre une offre et obtenir un devis ; souscrire en ligne ; savoir combien sera remboursé avant un soin ; suivre un remboursement / télécharger la carte tiers payant ; déclarer un arrêt ou une invalidité et suivre les indemnités |
| Parcours non retenu | Résilier / changer de mutuelle |
| Type de parcours | Un parcours par persona |
| Appareils / aisance numérique | **Hypothèse** : profils mixtes ; mobile majoritaire pour l'espace adhérent, ordinateur pour la souscription |

## Lot 4 — Moyens de recherche, validation

| Question | Réponse |
|---|---|
| Mode de collecte | **Collecte simulée** (pas de vrais utilisateurs) → `/ux-01b-mock-research` |
| Recherche documentaire | Oui, en complément (avis publics sur les assureurs de référence, statistiques publiques) |
| Volume / temps | 8 à 10 entretiens (2 à 3 par segment), 1 semaine |
| Validation des livrables | L'utilisateur seul |

**Fin de l'exploration** : tous les éléments obligatoires de la grille sont renseignés (problème, périmètre, segments, parcours, moyens de recherche).

## Validation de la synthèse

| Question | Réponse |
|---|---|
| Vision, proto-personas, hypothèses, méthodes | Validés : rédaction lancée |
| Nom de l'assureur fictif | Clarea Assurances |
| Priorités des proto-personas | Toutes hautes, ordre : 01 Léa, 02 Karim, 03 Stéphane, 04 Isabelle |
