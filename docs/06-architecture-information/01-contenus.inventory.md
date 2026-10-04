⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Inventaire des contenus — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Identifiants et noms d'écrans repris tels quels de ../05-user-flows/00-index.md. Un écran à la fois. -->

## Objets métier

| Objet | Attributs utiles au persona | Relations | Actions | Écrans | Stories |
|---|---|---|---|---|---|
| Formule | nom, prix mensuel, remboursements en euros par soin de référence, exclusions types | appartient à une offre (santé ou prévoyance) ; devient un contrat | comparer, simuler, choisir | EC02, EC03, EC07, EC09 | US-01.01, US-01.02, US-02.01, US-02.02 |
| Tarif (devis de souscription) | prix mensuel, bénéficiaires, validité | une formule ; des besoins exprimés | obtenir, recevoir par e-mail, reprendre | EC06, EC07, EC10, EC16 | US-02.01, US-02.04 |
| Simulation de revenus | revenu, franchise, durée d'arrêt, part régime obligatoire, part assureur, part non couverte | une formule de prévoyance, un contrat | simuler, ajuster | EC04 | US-01.03, US-05.04 |
| Questionnaire de santé | questions, réponses, période visée, état (en cours, transmis, en étude) | un consentement, un tarif, une proposition | répondre, interrompre, reprendre, confirmer | EC14, EC15, EC17 | US-02.03, US-02.04, US-02.05 |
| Consentement | objet, date, droits | un questionnaire, un contrat | donner, refuser, retrouver | EC12, EC13, EC11 | US-02.06 |
| Contrat | formule, date d'effet, bénéficiaires, franchise, revenu garanti, exclusions, conseil reçu | un titulaire, des bénéficiaires, des documents | signer, payer, consulter, modifier | EC17–EC22, EC11, EC42 | US-02.05, US-02.07, US-05.04 |
| Bénéficiaire (membre du foyer) | prénom, lien, plafonds déjà utilisés | un contrat | choisir pour un soin, une estimation, un devis | EC31, EC33, EC38, EC40 | US-04.01, US-05.01 |
| Soin et remboursement | date, bénéficiaire, montant payé, part Assurance Maladie, part mutuelle, reste à charge, virement | un bénéficiaire, un virement | retrouver, consulter | EC38, EC39 | US-05.01 |
| Estimation | soin, montant, répartition en euros ou fourchette | un bénéficiaire, une formule | estimer, envoyer le devis | EC31, EC32 | US-04.01 |
| Demande (devis de praticien, question écrite) | objet, date d'envoi, état, délai annoncé, élément manquant, réponse | des documents, un bénéficiaire, un contrat | envoyer, compléter, consulter | EC33–EC37, EC53 | US-04.02, US-04.03, US-08.02 |
| Document (devis, pièce justificative) | type, pages, lisibilité, état (reçu, accepté, refusé, attendu), confidentialité médicale | une demande ou un dossier d'arrêt | photographier, transmettre, remplacer | EC33, EC34, EC35, EC44, EC46 | US-04.02, US-06.01, US-06.03 |
| Carte de tiers payant | année, bénéficiaires, validité | un contrat | présenter, transmettre | EC40 | US-05.02 |
| Attestation | type, année, disponibilité | un contrat | obtenir | EC41 | US-05.03 |
| Dossier d'arrêt | dates, situation, délai de déclaration, pièces, étapes (expertise) | un contrat de prévoyance, des documents, des indemnités | déclarer, compléter, déclarer un changement | EC43–EC47, EC49 | US-06.01–US-06.04, US-07.02 |
| Indemnité (versement) | date prévue, période couverte, montant, état, raison d'un retard | un dossier d'arrêt | consulter | EC45, EC48 | US-06.02, US-07.01 |
| Décision d'invalidité | taux, rente mensuelle, date de début, voie de contestation | un dossier d'arrêt | consulter, contester | EC50 | US-07.02 |
| Accès délégué | proche désigné, droits (santé, arrêts), état | un titulaire, un proche | accorder, activer, retirer, demander un mandat | EC28, EC29, EC30 | US-03.02 |
| Rappel | créneau, objet, état | un dossier ou un projet de souscription | demander, reprogrammer | EC51, EC52 | US-08.01 |
| Compte | identifiant, mot de passe, appareils mémorisés | un titulaire ou un proche | se connecter, réinitialiser | EC23–EC26 | US-03.01 |

## Écrans

<!-- Type : lieu (destination, dans l'arborescence) ou contextuel (étape, modale, erreur : rattaché à un parent). -->
<!-- Version : la plus précoce de ses stories. Origine : flows, ou « IA » si ajouté par l'architecture. -->

| ID | Écran | Type | Parent | Zone | Objets et contenus | Actions | Personas | Version | Appareil | Origine |
|---|---|---|---|---|---|---|---|---|---|---|
| <a id="ec01"></a>[EC01](../05-user-flows/00-index.md#ec01) | Accueil Clarea | lieu | — | Site public | offres santé et prévoyance | aller à une offre, obtenir un tarif, se connecter | Manon, Hélène | MVP | mobile | UF-01.01, UF-01.02 |
| <a id="ec02"></a>[EC02](../05-user-flows/00-index.md#ec02) | Formules santé en euros | lieu | — | Site public | Formule : prix, remboursement et reste à charge par soin de référence | choisir un soin, comparer, obtenir un tarif | Manon, Sylvie | MVP | mobile | UF-01.01 |
| <a id="ec03"></a>[EC03](../05-user-flows/00-index.md#ec03) | Formules prévoyance comparées | lieu | — | Site public | Formule : franchise, indemnités, rente, barème, exclusions types | comparer, lire une clause, simuler | Hélène | MVP | ordinateur | UF-01.02 |
| <a id="ec04"></a>[EC04](../05-user-flows/00-index.md#ec04) | Simulateur de revenus en cas d'arrêt ou d'invalidité | lieu | — | Site public | Simulation : régime obligatoire, assureur, part non couverte | simuler, ajuster le revenu garanti | Hélène, Manon | MVP | ordinateur | UF-01.02, UF-05.04 |
| <a id="ec05"></a>[EC05](../05-user-flows/00-index.md#ec05) | Clause du contrat | contextuel | EC03 | Site public | extrait des conditions générales | revenir à la comparaison | Hélène | MVP | ordinateur | UF-01.02 |
| <a id="ec06"></a>[EC06](../05-user-flows/00-index.md#ec06) | Demande de tarif | lieu | — | Site public | Tarif : âge, code postal, bénéficiaires, régime | obtenir un tarif | Manon | MVP | mobile | UF-02.01 |
| <a id="ec07"></a>[EC07](../05-user-flows/00-index.md#ec07) | Tarifs des formules | contextuel | EC06 | Site public | Tarif : prix mensuel par formule | exprimer ses besoins, recevoir le devis, demander un rappel | Manon, Sylvie | MVP | mobile | UF-02.01 |
| <a id="ec08"></a>[EC08](../05-user-flows/00-index.md#ec08) | Mes besoins de santé | contextuel | EC07 | Site public | besoins du foyer | indiquer ses soins prioritaires | Manon | MVP | mobile | UF-02.01 |
| <a id="ec09"></a>[EC09](../05-user-flows/00-index.md#ec09) | Formule recommandée | contextuel | EC08 | Site public | Formule recommandée, raison, reste à charge estimé | choisir, choisir une autre formule | Manon | MVP | mobile | UF-02.01 |
| <a id="ec10"></a>[EC10](../05-user-flows/00-index.md#ec10) | Envoi du devis par e-mail | contextuel | EC07 | Site public | Tarif ; consentement au recontact séparé | recevoir le devis | Manon | MVP | mobile | UF-02.01 |
| <a id="ec11"></a>[EC11](../05-user-flows/00-index.md#ec11) | Mon contrat et mes documents | lieu | — | Espace adhérent | Contrat : formule, franchise, revenu garanti, conseil reçu ; Consentement ; documents | consulter, modifier les paramètres, obtenir une attestation | Hélène, Manon | MVP | ordinateur | UF-02.01, UF-02.02, UF-05.04 |
| <a id="ec12"></a>[EC12](../05-user-flows/00-index.md#ec12) | Consentement aux données de santé | contextuel | EC09 | Site public | Consentement : finalité, accès, durée | accepter, refuser | Manon, Hélène | MVP | mobile | UF-02.02 |
| <a id="ec13"></a>[EC13](../05-user-flows/00-index.md#ec13) | Prévoyance impossible sans consentement | contextuel | EC12 | Site public | conséquence du refus | revenir plus tard | Manon | MVP | mobile | UF-02.02 |
| <a id="ec14"></a>[EC14](../05-user-flows/00-index.md#ec14) | Questionnaire de santé | contextuel | EC12 | Site public | Questionnaire : questions, exemples, période | répondre, interrompre | Manon, Hélène | MVP | mobile | UF-02.02 |
| <a id="ec15"></a>[EC15](../05-user-flows/00-index.md#ec15) | Récapitulatif des réponses de santé | contextuel | EC14 | Site public | Questionnaire : réponses, avertissement | confirmer, corriger | Manon | MVP | mobile | UF-02.02 |
| <a id="ec16"></a>[EC16](../05-user-flows/00-index.md#ec16) | Tarif mis à jour | contextuel | EC14 | Site public | Tarif : nouveau prix | continuer | Hélène | V2 | ordinateur | UF-02.02 |
| <a id="ec17"></a>[EC17](../05-user-flows/00-index.md#ec17) | Proposition avec exclusion ou surprime | contextuel | EC15 | Site public | Contrat : exclusion ou surprime, portée | accepter, refuser | Manon | MVP | mobile | UF-02.03 |
| <a id="ec18"></a>[EC18](../05-user-flows/00-index.md#ec18) | Récapitulatif avant signature | contextuel | EC09 | Site public | Contrat : non couvert, carences, résiliation ; IPID | signer | Manon | MVP | mobile | UF-02.03 |
| <a id="ec19"></a>[EC19](../05-user-flows/00-index.md#ec19) | Signature électronique | contextuel | EC18 | Site public | code de signature | demander un code, signer | Manon | MVP | mobile | UF-02.03 |
| <a id="ec20"></a>[EC20](../05-user-flows/00-index.md#ec20) | Paiement | contextuel | EC19 | Site public | coordonnées bancaires | autoriser le prélèvement | Manon | MVP | mobile | UF-02.03 |
| <a id="ec21"></a>[EC21](../05-user-flows/00-index.md#ec21) | Échec du paiement | contextuel | EC20 | Site public | raison de l'échec | corriger, demander un rappel | Manon | MVP | mobile | UF-02.03 |
| <a id="ec22"></a>[EC22](../05-user-flows/00-index.md#ec22) | Confirmation de souscription | contextuel | EC20 | Site public | Contrat : date d'effet ; carte | accéder à son espace | Manon | MVP | mobile | UF-02.03 |
| <a id="ec23"></a>[EC23](../05-user-flows/00-index.md#ec23) | Connexion | lieu | — | Transverse | Compte | se connecter, mot de passe oublié | Sylvie, Manon, Hélène | MVP | tablette | UF-03.01 |
| <a id="ec24"></a>[EC24](../05-user-flows/00-index.md#ec24) | Création du mot de passe | contextuel | EC23 | Transverse | Compte | choisir un mot de passe | Sylvie | MVP | tablette | UF-03.01 |
| <a id="ec25"></a>[EC25](../05-user-flows/00-index.md#ec25) | Code de vérification | contextuel | EC23 | Transverse | Compte : appareil | saisir le code, en demander un autre | Sylvie | MVP | tablette | UF-03.01 |
| <a id="ec26"></a>[EC26](../05-user-flows/00-index.md#ec26) | Réinitialisation du mot de passe | contextuel | EC23 | Transverse | Compte | demander un lien, obtenir de l'aide | Sylvie | MVP | tablette | UF-03.01 |
| <a id="ec27"></a>[EC27](../05-user-flows/00-index.md#ec27) | Accueil de l'espace adhérent | lieu | — | Espace adhérent | démarches en cours du foyer, raccourcis | lancer une démarche, reprendre une souscription | Sylvie, Manon, Hélène | MVP | tablette, mobile | UF-03.01, UF-04.01, UF-05.01, UF-06.01, UF-07.01 |
| <a id="ec28"></a>[EC28](../05-user-flows/00-index.md#ec28) | Accès délégués | lieu | — | Espace adhérent | Accès délégué : proches, droits | désigner, retirer | titulaire de Sylvie | V2 | tablette | UF-03.02 |
| <a id="ec29"></a>[EC29](../05-user-flows/00-index.md#ec29) | Activation de l'accès délégué | contextuel | EC23 | Transverse | Accès délégué : droits accordés | accepter, créer ses identifiants | Sylvie | V2 | tablette | UF-03.02 |
| <a id="ec30"></a>[EC30](../05-user-flows/00-index.md#ec30) | Demande de reconnaissance comme mandataire | lieu | — | Transverse | pièces à fournir, délai | demander un mandat | Sylvie | V2 | tablette | UF-03.02 |
| <a id="ec31"></a>[EC31](../05-user-flows/00-index.md#ec31) | Estimation du reste à charge | lieu | — | Espace adhérent | Estimation : soin, montant, bénéficiaire | estimer | Manon | MVP | mobile | UF-04.01 |
| <a id="ec32"></a>[EC32](../05-user-flows/00-index.md#ec32) | Résultat de l'estimation | contextuel | EC31 | Espace adhérent | Estimation : répartition ou fourchette en euros | envoyer le devis | Manon | MVP | mobile | UF-04.01 |
| <a id="ec33"></a>[EC33](../05-user-flows/00-index.md#ec33) | Envoi d'un document | lieu | — | Espace adhérent | Document : type, pages, bénéficiaire ; mention de confidentialité médicale | photographier, transmettre | Manon, Sylvie | MVP | mobile | UF-04.02, UF-06.01, UF-06.02, UF-06.03 |
| <a id="ec34"></a>[EC34](../05-user-flows/00-index.md#ec34) | Accusé de réception | contextuel | EC33 | Espace adhérent | Demande : date, délai annoncé | suivre la demande | Manon, Sylvie | MVP | mobile | UF-04.02, UF-06.02, UF-08.02 |
| <a id="ec35"></a>[EC35](../05-user-flows/00-index.md#ec35) | Document illisible | contextuel | EC33 | Espace adhérent | consignes de prise de vue | reprendre la photo, demander un rappel | Manon, Sylvie | MVP | mobile | UF-04.02, UF-06.02 |
| <a id="ec36"></a>[EC36](../05-user-flows/00-index.md#ec36) | Suivi de mes demandes | lieu | — | Espace adhérent | Demande : liste, état, délai, élément manquant, réponse | ouvrir, compléter | Sylvie, Manon | MVP | tablette, mobile | UF-04.02, UF-08.02 |
| <a id="ec37"></a>[EC37](../05-user-flows/00-index.md#ec37) | Réponse au devis | lieu | — | Espace adhérent | Demande : prise en charge et reste à charge par période, validité | consulter | Sylvie, Manon | MVP | tablette, mobile | UF-04.02 |
| <a id="ec38"></a>[EC38](../05-user-flows/00-index.md#ec38) | Remboursements du foyer | lieu | — | Espace adhérent | Soin et remboursement : liste par soin, bénéficiaire, virement | rechercher par montant, date, bénéficiaire | Sylvie | MVP | ordinateur | UF-05.01 |
| <a id="ec39"></a>[EC39](../05-user-flows/00-index.md#ec39) | Détail d'un soin | contextuel | EC38 | Espace adhérent | Soin : parts, reste à charge, virement | revenir à la liste | Sylvie | MVP | ordinateur | UF-05.01 |
| <a id="ec40"></a>[EC40](../05-user-flows/00-index.md#ec40) | Carte de tiers payant | lieu | — | Espace adhérent | Carte : année, bénéficiaires | présenter, transmettre | Manon | MVP | mobile | UF-05.02 |
| <a id="ec41"></a>[EC41](../05-user-flows/00-index.md#ec41) | Attestations | lieu | — | Espace adhérent | Attestation : type, année | obtenir | Sylvie | MVP | ordinateur | UF-05.03 |
| <a id="ec42"></a>[EC42](../05-user-flows/00-index.md#ec42) | Modification des paramètres du contrat | contextuel | EC11 | Espace adhérent | Contrat : revenu garanti, franchise, nouvelle cotisation | modifier | Hélène | V2 | ordinateur | UF-05.04 |
| <a id="ec43"></a>[EC43](../05-user-flows/00-index.md#ec43) | Déclaration d'un arrêt | lieu | — | Espace adhérent | Dossier d'arrêt : dates, situation | déclarer | Sylvie, Hélène | MVP | tablette | UF-06.01 |
| <a id="ec44"></a>[EC44](../05-user-flows/00-index.md#ec44) | Pièces à fournir | contextuel | EC43 | Espace adhérent | Document : liste complète, date limite | joindre les pièces | Sylvie | MVP | tablette | UF-06.01 |
| <a id="ec45"></a>[EC45](../05-user-flows/00-index.md#ec45) | Confirmation de déclaration | contextuel | EC43 | Espace adhérent | Indemnité : franchise, date de début, montant estimé ; pièces attendues | suivre le dossier | Sylvie, Hélène | MVP | tablette | UF-06.01 |
| <a id="ec46"></a>[EC46](../05-user-flows/00-index.md#ec46) | Dossier d'arrêt | lieu | — | Espace adhérent | Dossier : état des pièces, étapes, expertise | ajouter une pièce, déclarer un changement | Sylvie, Hélène | MVP | tablette | UF-06.02, UF-06.03, UF-07.02 |
| <a id="ec47"></a>[EC47](../05-user-flows/00-index.md#ec47) | Déclaration d'un changement de situation | contextuel | EC46 | Espace adhérent | situations possibles, pièces attendues | déclarer, décrire une autre situation | Hélène | MVP | ordinateur | UF-06.03 |
| <a id="ec48"></a>[EC48](../05-user-flows/00-index.md#ec48) | Mes indemnités | lieu | — | Espace adhérent | Indemnité : prochain versement, versements passés, retards | consulter | Sylvie, Hélène | MVP | tablette | UF-06.03, UF-07.01 |
| <a id="ec49"></a>[EC49](../05-user-flows/00-index.md#ec49) | Expertise et invalidité expliquées | lieu | — | Espace adhérent | expertise : motif, déroulement, suites, indemnités pendant l'examen | demander un rappel | Sylvie | V2 | tablette | UF-07.02 |
| <a id="ec50"></a>[EC50](../05-user-flows/00-index.md#ec50) | Décision d'invalidité | lieu | — | Espace adhérent | Décision : taux, rente, date de début, contestation | contester | Sylvie | V2 | tablette | UF-07.02 |
| <a id="ec51"></a>[EC51](../05-user-flows/00-index.md#ec51) | Demande de rappel | lieu | — | Transverse | Rappel : créneau, objet | demander, reprogrammer | Sylvie, Manon | MVP | tablette, mobile | UF-08.01 |
| <a id="ec52"></a>[EC52](../05-user-flows/00-index.md#ec52) | Confirmation du rappel | contextuel | EC51 | Transverse | Rappel : créneau confirmé | — | Sylvie, Manon | MVP | tablette, mobile | UF-08.01 |
| <a id="ec53"></a>[EC53](../05-user-flows/00-index.md#ec53) | Question écrite | lieu | — | Transverse | Demande : contrat, question | envoyer | Sylvie | MVP | tablette | UF-08.02 |
| <a id="ec54"></a>[EC54](../05-user-flows/00-index.md#ec54) | Aide et contact | lieu | — | Transverse | moyens de contact, délais | être rappelé, poser une question, agir pour un proche | Sylvie, Manon | MVP | tablette, mobile | IA |
| <a id="ec55"></a>[EC55](../05-user-flows/00-index.md#ec55) | Plan du site | lieu | — | Transverse | liste de tous les lieux par zone | aller à un lieu | tous | MVP | tous | IA |
| <a id="ec56"></a>[EC56](../05-user-flows/00-index.md#ec56) | Déclaration d'accessibilité | lieu | — | Transverse | niveau de conformité RGAA, défauts connus, contact | signaler un défaut | tous | MVP | tous | IA |
| <a id="ec57"></a>[EC57](../05-user-flows/00-index.md#ec57) | Mentions légales et données personnelles | lieu | — | Transverse | éditeur, hébergement des données de santé, droits RGPD | exercer ses droits | tous | MVP | tous | IA |

## Objets sans écran
- Aucun.
