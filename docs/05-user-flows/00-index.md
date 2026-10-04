⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Index des user flows — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Index des flows, inventaire unique des écrans (chercher ici avant d'en créer un), retours vers le backlog. Matière première de l'architecture de l'information. -->

## Index des flows

| Flow | Tâche | Épopée | Persona principal | Variantes | Stories couvertes | Stories mobilisées | Statut |
|---|---|---|---|---|---|---|---|
| [UF-01.01](./01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | Comprendre ce que rembourse chaque formule santé avant de choisir | 01 Comprendre et comparer une offre | Manon | Sylvie | US-01.01 | US-02.01, US-08.01 (renvois) | terminé |
| [UF-01.02](./01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | Choisir une prévoyance en connaissant le montant net | 01 Comprendre et comparer une offre | Hélène | Manon | US-01.02, US-01.03 | US-02.01 (renvoi) | terminé |
| [UF-02.01](./02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | Obtenir un tarif et une formule adaptée sans laisser ses coordonnées | 02 Souscrire une couverture | Manon | Sylvie | US-02.01, US-02.02 | US-03.01, US-08.01 (renvois) | terminé |
| [UF-02.02](./02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | Répondre au questionnaire de santé de la prévoyance | 02 Souscrire une couverture | Manon | Hélène | US-02.03, US-02.04, US-02.06 | US-03.01 (renvoi) | terminé |
| [UF-02.03](./02-souscrire-une-couverture/03-signer-et-payer.flow.md) | Vérifier ce qui n'est pas couvert, signer et payer | 02 Souscrire une couverture | Manon | Sylvie | US-02.05, US-02.07 | US-08.01 (renvoi) | terminé |
| [UF-03.01](./03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | Accéder à son espace | 03 Accéder à son espace | Sylvie | — | US-03.01 | US-08.01 (renvoi) | terminé |
| [UF-03.02](./03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) | Obtenir et utiliser un accès délégué pour le foyer | 03 Accéder à son espace | Sylvie | — | US-03.02 | US-03.01 (renvoi) | terminé |
| [UF-04.01](./04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | Estimer ce qui restera à payer avant un soin | 04 Connaître son reste à charge | Manon | Sylvie | US-04.01 | US-03.01 (renvoi) | terminé |
| [UF-04.02](./04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | Envoyer un devis et obtenir sa prise en charge en euros | 04 Connaître son reste à charge | Manon | Sylvie | US-04.02, US-04.03 | US-03.01, US-08.01 (renvois) | terminé |
| [UF-05.01](./05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) | Retrouver à quel soin correspond un remboursement | 05 Suivre ses remboursements | Sylvie | — | US-05.01 | US-03.01 (renvoi) | terminé |
| [UF-05.02](./05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) | Présenter sa carte de tiers payant | 05 Suivre ses remboursements | Manon | — | US-05.02 | US-03.01 (renvoi) | terminé |
| [UF-05.03](./05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md) | Obtenir une attestation | 05 Suivre ses remboursements | Sylvie | — | US-05.03 | US-03.01 (renvoi) | terminé |
| [UF-05.04](./05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) | Ajuster ses garanties après le rappel annuel | 05 Suivre ses remboursements | Hélène | — | US-05.04 | US-01.03 (dessinée), US-03.01, US-02.03 (renvois) | terminé |
| [UF-06.01](./06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | Déclarer un arrêt et savoir quand on sera indemnisé | 06 Déclarer un arrêt de travail | Sylvie | Hélène | US-06.01, US-06.02 | US-03.01 (renvoi) | terminé |
| [UF-06.02](./06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | Compléter le dossier d'arrêt | 06 Déclarer un arrêt de travail | Sylvie | — | US-06.03 | US-03.01 (renvoi) | terminé |
| [UF-06.03](./06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | Déclarer une reprise à temps partiel ou une prolongation | 06 Déclarer un arrêt de travail | Hélène | — | US-06.04 | US-03.01 (renvoi) | terminé |
| [UF-07.01](./07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | Savoir quand et combien on sera payé | 07 Suivre ses indemnités | Sylvie | Hélène | US-07.01 | US-03.01, US-06.03 (renvois) | terminé |
| [UF-07.02](./07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) | Comprendre une expertise ou un passage en invalidité | 07 Suivre ses indemnités | Sylvie | — | US-07.02 | US-03.01, US-08.01 (renvois) | terminé |
| [UF-08.01](./08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | Être rappelé par un conseiller qui connaît le dossier | 08 Être accompagné par un conseiller | Sylvie | Manon | US-08.01 | US-03.01 (renvoi) | terminé |
| [UF-08.02](./08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) | Poser une question écrite et suivre la réponse | 08 Être accompagné par un conseiller | Sylvie | — | US-08.02 | US-03.01 (renvoi) | terminé |

**Stories non couvertes** : aucune.

## Écrans

| ID | Écran | Rôle pour le persona | Flows | Stories |
|---|---|---|---|---|
| <a id="ec01"></a>EC01 | Accueil Clarea | Choisir entre mutuelle santé et prévoyance | UF-01.01, UF-01.02 | US-01.01, US-01.02 |
| <a id="ec02"></a>EC02 | Formules santé en euros | Voir, par formule, le remboursement et le reste à charge d'un soin de référence | UF-01.01 | US-01.01 |
| <a id="ec03"></a>EC03 | Formules prévoyance comparées | Comparer franchise, indemnités, rente, barème et exclusions types | UF-01.02 | US-01.02 |
| <a id="ec04"></a>EC04 | Simulateur de revenus en cas d'arrêt ou d'invalidité | Savoir ce qu'on toucherait du régime obligatoire et de l'assureur, et ce qui manque | UF-01.02, UF-05.04 | US-01.03, US-05.04 |
| <a id="ec05"></a>EC05 | Clause du contrat | Lire la clause précise des conditions générales | UF-01.02 | US-01.02 |
| <a id="ec06"></a>EC06 | Demande de tarif | Donner les seules informations nécessaires au calcul | UF-02.01 | US-02.01 |
| <a id="ec07"></a>EC07 | Tarifs des formules | Connaître le prix mensuel de chaque formule | UF-02.01 | US-02.01 |
| <a id="ec08"></a>EC08 | Mes besoins de santé | Indiquer les soins qui comptent pour le foyer | UF-02.01 | US-02.02 |
| <a id="ec09"></a>EC09 | Formule recommandée | Voir la formule conseillée et sa raison | UF-02.01 | US-02.02 |
| <a id="ec10"></a>EC10 | Envoi du devis par e-mail | Garder son devis sans accepter de démarchage | UF-02.01 | US-02.01 |
| <a id="ec11"></a>EC11 | Mon contrat et mes documents | Retrouver paramètres du contrat, conseil reçu, consentements | UF-02.01, UF-02.02, UF-05.04 | US-02.02, US-02.06, US-05.04 |
| <a id="ec12"></a>EC12 | Consentement aux données de santé | Savoir à quoi serviront ses données de santé et y consentir | UF-02.02 | US-02.06 |
| <a id="ec13"></a>EC13 | Prévoyance impossible sans consentement | Comprendre la conséquence d'un refus | UF-02.02 | US-02.06 |
| <a id="ec14"></a>EC14 | Questionnaire de santé | Répondre aux questions, aidé par des exemples | UF-02.02 | US-02.03, US-02.04 |
| <a id="ec15"></a>EC15 | Récapitulatif des réponses de santé | Relire et confirmer ses réponses | UF-02.02 | US-02.03 |
| <a id="ec16"></a>EC16 | Tarif mis à jour | Connaître le nouveau tarif après une interruption | UF-02.02 | US-02.04 |
| <a id="ec17"></a>EC17 | Proposition avec exclusion ou surprime | Connaître la portée d'une exclusion ou d'une surprime, accepter ou refuser | UF-02.03 | US-02.05 |
| <a id="ec18"></a>EC18 | Récapitulatif avant signature | Savoir ce qui n'est pas couvert, carences, résiliation ; recevoir l'IPID | UF-02.03 | US-02.05 |
| <a id="ec19"></a>EC19 | Signature électronique | Signer le contrat | UF-02.03 | US-02.07 |
| <a id="ec20"></a>EC20 | Paiement | Autoriser le prélèvement | UF-02.03 | US-02.07 |
| <a id="ec21"></a>EC21 | Échec du paiement | Comprendre l'échec et corriger, ou demander de l'aide | UF-02.03 | US-02.07 |
| <a id="ec22"></a>EC22 | Confirmation de souscription | Connaître la date de début de couverture | UF-02.03 | US-02.07 |
| <a id="ec23"></a>EC23 | Connexion | Entrer dans son espace | UF-03.01 | US-03.01 |
| <a id="ec24"></a>EC24 | Création du mot de passe | Choisir son mot de passe | UF-03.01 | US-03.01 |
| <a id="ec25"></a>EC25 | Code de vérification | Confirmer son identité sur un nouvel appareil | UF-03.01 | US-03.01 |
| <a id="ec26"></a>EC26 | Réinitialisation du mot de passe | Retrouver l'accès sans appeler | UF-03.01 | US-03.01 |
| <a id="ec27"></a>EC27 | Accueil de l'espace adhérent | Voir les démarches en cours du foyer et en lancer une | UF-03.01, UF-03.02, UF-04.01, UF-05.01, UF-05.03, UF-06.01, UF-07.01 | US-03.01, US-03.02, US-04.01 |
| <a id="ec28"></a>EC28 | Accès délégués | Le titulaire désigne un proche et choisit ses droits | UF-03.02 | US-03.02 |
| <a id="ec29"></a>EC29 | Activation de l'accès délégué | Le proche accepte et crée son accès | UF-03.02 | US-03.02 |
| <a id="ec30"></a>EC30 | Demande de reconnaissance comme mandataire | Demander à agir pour un titulaire hors d'état de le faire | UF-03.02 | US-03.02 |
| <a id="ec31"></a>EC31 | Estimation du reste à charge | Décrire un soin à estimer | UF-04.01 | US-04.01 |
| <a id="ec32"></a>EC32 | Résultat de l'estimation | Connaître la répartition en euros | UF-04.01 | US-04.01 |
| <a id="ec33"></a>EC33 | Envoi d'un document | Transmettre un devis ou une pièce, en photo | UF-04.02, UF-06.01, UF-06.02, UF-06.03 | US-04.02, US-06.01, US-06.03, US-06.04 |
| <a id="ec34"></a>EC34 | Accusé de réception | Savoir que l'envoi est reçu et le délai de réponse | UF-04.02, UF-06.02, UF-08.02 | US-04.02, US-06.03, US-08.02 |
| <a id="ec35"></a>EC35 | Document illisible | Savoir que le document n'est pas exploitable et le renvoyer | UF-04.02, UF-06.02 | US-04.02, US-06.03 |
| <a id="ec36"></a>EC36 | Suivi de mes demandes | Suivre devis et questions : état, retard, élément manquant, réponse | UF-04.02, UF-08.02 | US-04.03, US-08.02 |
| <a id="ec37"></a>EC37 | Réponse au devis | Connaître la prise en charge par période | UF-04.02 | US-04.03 |
| <a id="ec38"></a>EC38 | Remboursements du foyer | Retrouver un remboursement par soin, bénéficiaire ou virement | UF-05.01 | US-05.01 |
| <a id="ec39"></a>EC39 | Détail d'un soin | Voir les parts remboursées et le reste à charge d'un soin | UF-05.01 | US-05.01 |
| <a id="ec40"></a>EC40 | Carte de tiers payant | Présenter ou transmettre la carte valable | UF-05.02 | US-05.02 |
| <a id="ec41"></a>EC41 | Attestations | Obtenir une attestation | UF-05.03 | US-05.03 |
| <a id="ec42"></a>EC42 | Modification des paramètres du contrat | Ajuster revenu garanti ou franchise | UF-05.04 | US-05.04 |
| <a id="ec43"></a>EC43 | Déclaration d'un arrêt | Déclarer dates et situation | UF-06.01 | US-06.01 |
| <a id="ec44"></a>EC44 | Pièces à fournir | Connaître la date limite et la liste complète des pièces | UF-06.01 | US-06.01 |
| <a id="ec45"></a>EC45 | Confirmation de déclaration | Connaître franchise, date de début et montant estimé | UF-06.01 | US-06.02 |
| <a id="ec46"></a>EC46 | Dossier d'arrêt | Voir l'état de chaque pièce et les étapes du dossier | UF-06.02, UF-06.03, UF-07.02 | US-06.03, US-06.04, US-07.02 |
| <a id="ec47"></a>EC47 | Déclaration d'un changement de situation | Déclarer reprise partielle, prolongation ou autre situation | UF-06.03 | US-06.04 |
| <a id="ec48"></a>EC48 | Mes indemnités | Connaître le prochain versement et les versements passés | UF-06.03, UF-07.01 | US-06.04, US-07.01 |
| <a id="ec49"></a>EC49 | Expertise et invalidité expliquées | Comprendre une expertise et ses suites | UF-07.02 | US-07.02 |
| <a id="ec50"></a>EC50 | Décision d'invalidité | Connaître taux, rente, date de début, contestation | UF-07.02 | US-07.02 |
| <a id="ec51"></a>EC51 | Demande de rappel | Choisir un créneau et préciser l'objet | UF-08.01 | US-08.01 |
| <a id="ec52"></a>EC52 | Confirmation du rappel | Connaître le créneau confirmé | UF-08.01 | US-08.01 |
| <a id="ec53"></a>EC53 | Question écrite | Écrire une question rattachée à un contrat | UF-08.02 | US-08.02 |
| <a id="ec54"></a>EC54 | Aide et contact | Trouver comment être rappelé, poser une question ou agir pour un proche | — | origine IA |
| <a id="ec55"></a>EC55 | Plan du site | Retrouver n'importe quel lieu du site sans passer par les menus | — | origine IA |
| <a id="ec56"></a>EC56 | Déclaration d'accessibilité | Connaître le niveau d'accessibilité du site et signaler un défaut | — | origine IA |
| <a id="ec57"></a>EC57 | Mentions légales et données personnelles | Connaître l'éditeur du site, l'usage de ses données et ses droits | — | origine IA |

## Points d'entrée et étapes hors application

| Élément | Type | Flows |
|---|---|---|
| Paiement imprévu à la pharmacie | entrée | UF-01.01 |
| Moteur de recherche | entrée | UF-01.01 |
| Lien d'un courtier ou d'un expert-comptable | entrée | UF-01.02 |
| SMS du code de signature | sortie puis retour | UF-02.03 |
| E-mail de réinitialisation du mot de passe | sortie puis retour | UF-03.01 |
| Invitation à un accès délégué (e-mail) | entrée | UF-03.02 |
| Devis papier du praticien | entrée | UF-04.01, UF-04.02 |
| Appel au numéro de la carte | sortie (variante) | UF-04.01 |
| Envoi postal d'un devis ou d'une pièce | sortie | UF-04.02, UF-06.02 |
| Notifications : réponse disponible, élément manquant, pièce refusée | entrée | UF-04.02, UF-06.02, UF-08.02 |
| Relevé bancaire | entrée | UF-05.01 |
| Comptoir du praticien ou de la pharmacie | sortie | UF-05.02 |
| Notification : nouvelle carte de l'année | entrée | UF-05.02 |
| Déclaration de revenus (attestation demandée) | entrée | UF-05.03 |
| Rappel annuel des paramètres du contrat (e-mail) | entrée | UF-05.04 |
| Arrêt de travail, remarque du kinésithérapeute | entrée | UF-06.01 |
| Relevé du régime obligatoire reçu par courrier | entrée | UF-06.02 |
| Prescription de reprise à temps partiel | entrée | UF-06.03 |
| Échéance de trésorerie, notifications de versement ou de retard | entrée | UF-07.01 |
| Courrier de convocation à une expertise, notification de décision | entrée | UF-07.02 |
| Rappel téléphonique par un conseiller, notification de rappel manqué | sortie | UF-08.01 |

## Retours vers le backlog (consolidés)

| Flow | Type | Story | Proposition | Statut |
|---|---|---|---|---|
| UF-01.02 | scénario manquant | US-01.03 | Arrivée par le lien d'un intermédiaire | accepté |
| UF-02.02 | scénario manquant | US-02.03 | Réponses nécessitant une étude médicale | accepté |
| UF-03.01 | scénario manquant | US-03.01 | Connexion depuis un nouvel appareil | accepté |
| UF-04.02 | scénario manquant | US-04.02 | Échecs répétés de photo | accepté |
| UF-04.02 | scénario manquant | US-04.02 | Devis envoyé par courrier | accepté |
| UF-05.02 | scénario manquant | US-05.02 | Carte transmise à un proche | accepté |
| UF-05.04 | scénario manquant | US-05.04 | Hausse de garantie soumise à un questionnaire de santé | accepté |
| UF-06.02 | scénario manquant | US-06.03 | Pièce illisible | accepté |
| UF-07.01 | scénario manquant | US-07.01 | Franchise en cours | accepté |
| UF-07.01 | scénario manquant | US-07.01 | Récupérer l'historique des versements pour un suivi personnel | refusé |
