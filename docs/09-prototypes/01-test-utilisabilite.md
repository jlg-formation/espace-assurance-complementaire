⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Test d'utilisabilité — Clarea Assurances

<!-- Protocole produit par ux-08. Les résultats ne sont jamais simulés. -->

## Objectifs
- Vérifier qu'une personne qui cherche sa première mutuelle comprend, en euros, ce que chaque formule lui laisse à payer, et obtient un tarif sans laisser ses coordonnées.
- Vérifier qu'une indépendante connaît le montant net qu'elle toucherait en cas d'arrêt, et ose répondre au questionnaire de santé.
- Vérifier que la personne qui gère le foyer entre dans l'espace sans blocage, et envoie un devis en photo en sachant quand viendra la réponse.
- Vérifier qu'elle déclare un arrêt de travail en connaissant d'emblée toutes les pièces à fournir et la date du premier versement.
- Vérifier qu'elle suit le dossier d'arrêt et les versements sans appeler, et qu'elle trouve un humain quand elle le souhaite.
- Vérifier qu'une reprise à mi-temps se déclare sans crainte de perdre les versements.

## Participants

| Profil | Persona | Nombre | Critères de recrutement |
|---|---|---|---|
| Première mutuelle, sur mobile | [Manon](../02-persona/01-manon.persona.md) | 5 | 25 à 40 ans ; souscrit ou a souscrit seul une mutuelle individuelle ; utilise surtout son smartphone ; ne travaille pas dans l'assurance |
| Proche qui gère le foyer, sur tablette | [Sylvie](../02-persona/02-sylvie.persona.md) | 5 | 45 à 65 ans ; gère les démarches santé ou prévoyance d'un conjoint ou d'un parent ; aisance numérique moyenne à faible ; a déjà appelé un assureur pour un suivi |
| Indépendante qui compare, sur ordinateur | [Hélène](../02-persona/03-helene.persona.md) | 5 | travailleur non salarié (libéral, artisan, commerçant) ; a déjà comparé ou souscrit une prévoyance ; exclure les professionnels de l'assurance |

Recruter hors de l'équipe et hors des participants de la recherche. Prévoir 1 participant de remplacement par profil.

## Déroulé
- **Format** : modéré, à distance (partage d'écran) ou en présentiel, 40 à 45 minutes, en pensant à voix haute.
- **Appareil** : celui du persona, d'après son appareil principal : smartphone pour Manon, tablette pour Sylvie, ordinateur pour Hélène.
- **Prototype** :
  - Lancer `bun run dev`, ou ouvrir la version statique `web/dist/`.
  - Toujours en **mode test** (`/#/test/...`) : ni barre de revue ni bandeau.
  - L'animateur ouvre l'adresse de départ de chaque tâche.
- **Consentement** :
  - Information orale et écrite sur l'enregistrement (écran et voix), sa finalité (améliorer le site) et sa durée de conservation (6 mois, puis effacement).
  - Le participant peut se retirer à tout moment, sans justification.
  - Aucune donnée personnelle réelle n'est saisie dans le prototype : le participant joue le rôle de la personne fictive décrite dans chaque scénario.
- **Introduction** : « Nous testons le site, pas vous. Il n'y a pas de mauvaise réponse. Dites à voix haute ce que vous cherchez, ce que vous comprenez, ce qui vous surprend. Certains boutons ne font rien : c'est une maquette. »
- **Ordre** : tâches du profil dans l'ordre du tableau ; une tâche par parcours `Must` du MVP. La question de facilité est posée après chaque tâche.

## Tâches

<!-- Une par parcours Must du MVP. Scénario avec les mots du persona, sans les libellés de l'interface. -->

| # | Profil | Scénario lu au participant | Flow | Départ | Réussite si | Écrans attendus |
|---|---|---|---|---|---|---|
| T1 | Manon | « Votre dentiste vous a parlé d'une couronne à 650 €. Vous cherchez une mutuelle et voulez savoir combien il vous resterait à payer selon ce que vous prenez. » | [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | `/#/test/EC01` | le participant dit, pour au moins deux formules, la somme qui resterait à sa charge | EC01 → EC02 |
| T2 | Manon | « Vous voulez connaître le prix d'une mutuelle pour vous et votre fils de 4 ans, sans être rappelée par un vendeur. Choisissez celle qui vous convient. » | [UF-02.01](../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | `/#/test/EC06` | une formule est choisie et le participant dit pourquoi ; il n'a laissé ni e-mail ni téléphone | EC06 → EC07 → EC08 → EC09 → EC18 |
| T3 | Manon | « Vous êtes décidée. Avant d'aller au bout, vous voulez savoir ce qui ne serait pas remboursé. Puis terminez l'inscription. » | [UF-02.03](../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) | `/#/test/EC18` | le participant cite une exclusion ou un délai d'attente, puis atteint la confirmation et dit à partir de quand il est couvert | EC18 → EC19 → EC20 → EC22 |
| T4 | Manon | « Vous êtes chez le dentiste ; il vous annonce une couronne à 650 €. Vous voulez savoir, avant d'accepter, ce que vous paierez de votre poche. » | [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | `/#/test/EC23` | le participant donne le montant à sa charge en euros | EC23 → EC27 → EC31 → EC32 |
| T5 | Sylvie | « Vous voulez consulter le compte santé de votre famille sur internet. Entrez-y. Si vous bloquez, dites ce que vous feriez. » | [UF-03.01](../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | `/#/test/EC01` | le participant atteint l'accueil de l'espace, ou trouve seul une issue en cas de blocage | EC01 → EC23 → EC27 |
| T6 | Sylvie | « L'orthodontiste de votre fils vous a remis un devis de 3 pages. Faites-le étudier par la mutuelle, puis, quand la réponse est là, dites combien vous paierez. » | [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | `/#/test/EC27` | le devis est envoyé, le participant dit quand viendra la réponse, puis donne le montant à charge | EC27 → EC36 → EC33 → EC34 → EC36 → EC37 |
| T7 | Sylvie | « Votre mari vient d'être opéré et le médecin l'arrête trois mois. Faites le nécessaire auprès de son assurance pour qu'il soit indemnisé. » | [UF-06.01](../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | `/#/test/EC27` | la déclaration est faite et le participant dit quels papiers manquent et à partir de quand l'argent arrivera | EC27 → EC43 → EC44 → EC33 → EC45 |
| T8 | Sylvie | « Vous avez reçu par courrier le papier de la Sécurité sociale que l'assurance attendait. Transmettez-le. » | [UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | `/#/test/EC27` | la pièce est envoyée et le participant dit où vérifier qu'elle est bien arrivée | EC27 → EC46 → EC33 → EC34 |
| T9 | Sylvie | « Vous devez payer une grosse facture le 15 du mois. Vous voulez savoir quand et combien l'assurance versera pour l'arrêt de votre mari. » | [UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | `/#/test/EC27` | le participant donne la date et le montant du prochain versement | EC27 → EC48 |
| T10 | Sylvie | « Vous ne comprenez pas un point du dossier d'arrêt et préférez en parler à quelqu'un, mardi après-midi. Organisez-le. » | [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | `/#/test/EC27` | le rappel est demandé et le participant dit quand il sera appelé | EC27 → EC54 → EC51 → EC52 |
| T11 | Hélène | « Vous êtes architecte d'intérieur à votre compte et gagnez environ 42 000 € par an. Vous voulez savoir ce qu'il vous manquerait chaque mois si vous étiez arrêtée trois mois. » | [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | `/#/test/EC01` | le participant donne la somme qui manquerait et explique la période sans indemnité | EC01 → EC03 → EC04 → EC06 |
| T12 | Hélène | « On vous a conseillé une assurance en cas d'arrêt de travail. Il faut répondre à des questions sur votre santé : allez jusqu'au bout. » | [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | `/#/test/EC09?etat=prevoyance` | les réponses sont confirmées et le participant dit qui les lira | EC09 → EC12 → EC14 → EC15 → EC18 |
| T13 | Hélène | « Après cinq mois d'arrêt, votre médecin vous autorise à reprendre à mi-temps à partir du 12 octobre. Signalez-le sans risquer de perdre vos versements. » | [UF-06.03](../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | `/#/test/EC27` | le changement est déclaré et le participant dit combien il touchera ensuite | EC27 → EC46 → EC47 → EC33 → EC48 |

Note : le jeu de données place Hélène dans l'espace du foyer de Sylvie (dossier de Jean-Marc) pour T13. Pendant le test, présenter le dossier comme celui de la participante.

## Mesures
- Réussite par tâche : sans aide / avec aide / échec
- Temps par tâche
- Erreurs et chemins de détour (écran visité hors du chemin attendu)
- Facilité perçue après chaque tâche : « Dans l'ensemble, cette tâche était… » de 1 (très difficile) à 7 (très facile)
- Verbatims marquants, en particulier sur les montants en euros, les délais annoncés et la confiance dans le traitement des données de santé

## Questions de fin
- Qu'avez-vous trouvé le plus simple ? Le plus difficile ?
- À quel moment auriez-vous préféré appeler quelqu'un ?
- Les montants affichés vous paraissaient-ils fiables ? Pourquoi ?
- Qu'est-ce qui vous ferait confiance, ou au contraire méfiance, pour confier vos informations de santé ?

## Résultats

<!-- Vide tant que le test n'a pas été mené avec de vrais participants. -->

*Test non mené.*

| Tâche | Réussite sans aide | Avec aide | Échec | Temps médian | Facilité médiane |
|---|---|---|---|---|---|

### Problèmes relevés

| # | Constat | Écran | Gravité | Participants | Piste | Retour vers |
|---|---|---|---|---|---|---|
