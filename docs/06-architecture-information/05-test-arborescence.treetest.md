⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Test d'arborescence — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Protocole produit par ux-05. Les résultats ne sont jamais simulés. -->

## Protocole
- **Objectif** : vérifier que les personas trouvent les lieux des tâches `Must` du MVP dans l'arborescence, sans interface.
- **Participants** : 15 à 20 participants réels, répartis selon les schémas des personas :
  - 5 à 7 profils « Manon » (agissent au dernier moment, sur mobile) ;
  - 5 à 7 profils « Sylvie » (gèrent les démarches du foyer sans être titulaires, aisance faible à moyenne) ;
  - 5 profils « Hélène » (indépendants qui comparent et planifient).
- **Outil** : outil en ligne de test d'arborescence, ou version papier en entretien pour les profils « Sylvie »
- **Arbre testé** : [arborescence](./02-arborescence.sitemap.md), libellés seuls, sans écrans contextuels. Les trois zones sont présentées sous une racine unique : Site public, Mon espace, Aide et contact, Pied de page.
- **Mesures** : taux de réussite, réussite directe (sans retour arrière), premier clic
- **Seuil** : 80 % de réussite par question ; en dessous, revoir le rattachement ou le libellé

## Questions

<!-- Formulées avec les mots du persona, jamais avec les libellés de l'arbre. Au moins une par flow Must du MVP. -->

| # | Question | Persona | Flow | Réponse(s) attendue(s) | Chemin attendu |
|---|---|---|---|---|---|
| Q1 | Vous n'êtes plus couverte pour vos soins. Avant de choisir une offre, vous voulez savoir combien chacune vous rendrait sur une couronne dentaire à 650 €. | Manon | [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | EC02 | Accueil › Mutuelle santé |
| Q2 | Vous êtes à votre compte. Vous voulez savoir combien vous toucheriez chaque mois si vous ne pouviez plus travailler pendant trois mois. | Hélène | [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | EC04 (EC03 accepté) | Accueil › Prévoyance › Simuler une perte de revenus |
| Q3 | Vous voulez connaître le prix mensuel pour vous et votre enfant, sans laisser votre numéro de téléphone. | Manon | [UF-02.01](../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | EC06 | Accueil › Obtenir un tarif |
| Q4 | Vous avez décidé de vous protéger si vous tombez malade et ne pouvez plus travailler ; on vous a prévenue qu'il faudrait répondre à des questions sur votre santé. Où commencez-vous ? | Manon | [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | EC06 (EC03 accepté) | Accueil › Obtenir un tarif |
| Q5 | Vous avez choisi votre formule hier soir. Ce soir, vous voulez vous engager et payer pour être couverte dès que possible. | Manon | [UF-02.03](../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) | EC06 | Accueil › Obtenir un tarif |
| Q6 | Vous voulez consulter les informations de santé de votre famille chez l'assureur, avec vos identifiants. | Sylvie | [UF-03.01](../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | EC23 | Se connecter |
| Q7 | Le dentiste vous annonce une couronne à 650 €. Avant d'accepter, vous voulez savoir tout de suite ce qui restera pour vous. | Manon | [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | EC31 | Mon espace › Ma santé › Estimer un soin |
| Q8 | L'orthodontiste vous a remis un papier chiffré pour l'appareil de votre fils. Vous voulez le transmettre à l'assureur depuis votre téléphone. | Manon | [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | EC33 (EC36 accepté) | Mon espace › Mes demandes › Envoyer un document |
| Q9 | Vous avez transmis il y a dix jours le papier de l'orthodontiste. Vous voulez savoir ce qui sera pris en charge, semestre par semestre. | Sylvie | [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | EC37 (EC36 accepté) | Mon espace › Mes demandes › Réponse à mon devis |
| Q10 | Votre mari, artisan, vient d'être opéré et ne pourra pas travailler pendant plusieurs semaines. Vous voulez prévenir l'assureur. | Sylvie | [UF-06.01](../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | EC43 | Mon espace › Mon arrêt de travail › Déclarer un arrêt |
| Q11 | On vous a réclamé un relevé de la Sécurité sociale pour votre mari ; vous venez de le recevoir et voulez vérifier ce qui manque encore. | Sylvie | [UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | EC46 | Mon espace › Mon arrêt de travail › Mon dossier d'arrêt |
| Q12 | Votre médecin vous autorise à reprendre à mi-temps. Vous voulez le signaler pour continuer à être payée. | Hélène | [UF-06.03](../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | EC46 | Mon espace › Mon arrêt de travail › Mon dossier d'arrêt |
| Q13 | Le loyer tombe dans dix jours. Vous voulez savoir quand l'assureur versera l'argent de votre mari, et combien. | Sylvie | [UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | EC48 | Mon espace › Mon arrêt de travail › Mes indemnités |
| Q14 | Vous préférez qu'une personne de l'assureur vous téléphone pour parler de la situation de votre mari. | Sylvie | [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | EC51 | Aide et contact › Être rappelé |
| Q15 | Un nouveau dentiste vous demande la preuve de votre couverture complémentaire, à l'accueil du cabinet. | Manon | [UF-05.02](../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) *(Should)* | EC40 | Mon espace › Ma santé › Ma carte de mutuelle |
| Q16 | Vous voyez 112,40 € versés par l'assureur sur votre relevé bancaire et voulez savoir à quel soin cela correspond. | Sylvie | [UF-05.01](../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) *(Should)* | EC38 | Mon espace › Ma santé › Mes remboursements |

## Résultats

<!-- Vide tant que le test n'a pas été mené avec de vrais participants. -->

*Test non mené. Les données de recherche du projet sont simulées : ce test est à mener avec de vrais participants avant les wireframes.*

| # | Réussite | Réussite directe | Premier clic majoritaire | Décision |
|---|---|---|---|---|
