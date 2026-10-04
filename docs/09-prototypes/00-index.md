⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Prototypes — Clarea Assurances

<!-- Index de la phase : écrans, parcours, accessibilité, retours. Code : web/src/prototypes/ -->

Ouvrir : `cd web; bun run dev`, puis `/#/prototypes` (revue) ou `/#/test/EC{NN}` (mode test). Vérifier : `bun run verifier`. Jeu de données : [donnees.ts](../../web/src/prototypes/donnees/donnees.ts).

## Jeu de données fictif

Validé le 4 octobre 2026. Date du jour fictive : 3 octobre 2026. Deux profils, un seul fichier.

- **Utilisateurs** :
  - Site public : Manon Fictif, 30 ans, photographe à son compte à Toulouse, reprend la situation de [Manon](../02-persona/01-manon.persona.md).
  - Espace adhérent : Sylvie Fictif, 55 ans, gère les démarches du foyer sans être titulaire, reprend la situation de [Sylvie](../02-persona/02-sylvie.persona.md).
- **Foyer et contrats** :
  - Le foyer de Sylvie : Jean-Marc (57 ans, menuisier, titulaire), Chloé (16 ans), Lucas (14 ans). Mutuelle santé Confort n° 1234 5678 et Prévoyance Confort n° 1234 5679 : franchise de 30 jours, revenu déclaré 42 000 €, revenu garanti 30 000 €, soit 65 € par jour et 64 € de cotisation.
  - Manon : fils Léo (4 ans), souscription Mutuelle santé Confort à 38,90 € par mois, couverte au 5 octobre ; Prévoyance Confort au tarif de 61 € (64 € après le 1er novembre).
- **Historique** :
  - Arrêt de Jean-Marc depuis le 12 mai 2026, après une opération. Franchise jusqu'au 10 juin ; 1 950 € par mois. Trois versements effectués, prochain le 10 octobre. Le relevé du régime obligatoire est à fournir (un relevé a été refusé le 28 septembre). Expertise le 22 octobre, reprise à mi-temps le 12 octobre. Décision d'invalidité (V2) : 40 %, rente de 720 €.
  - Devis d'orthodontie de Lucas : 2 400 € sur 3 semestres, envoyé le 3 octobre, réponse au plus tard le 10 octobre (retardée au 17 octobre), 769,50 € à charge.
  - 4 soins remboursés ou en cours ; le virement du 9 septembre, 112,40 €, règle 2 soins. Estimations : couronne de Sylvie (381,25 € à charge), lunettes de Chloé (270 €). Une question sur l'attestation de cotisations 2025.
- **Formats** : `formats.ts`, corrigé pour afficher les montants ronds sans décimales (retour accepté vers le skill ux-08).
- **Contenus unifiés** (accord du 4 octobre 2026) :
  - Les noms venus d'autres personas dans les wireframes de l'espace (Manon et Léo sur EC31, EC32 et EC40 ; Hélène et Inès sur EC11 ; arrêt d'Hélène sur EC33) deviennent ceux du foyer de Sylvie.
  - Les montants sont recalculés depuis le jeu de données.

## Écrans

<!-- Ordre de l'index des wireframes : MVP, puis V2, puis Plus tard. -->

| ID | Écran | Zone | Version | Prototype | États | Écarts au wireframe | Statut |
|---|---|---|---|---|---|---|---|
| EC01 | Accueil Clarea | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC01-accueil-clarea.tsx) | nominal | fusion `RecoursHumain` | terminé |
| EC02 | Formules santé en euros | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC02-formules-sante-en-euros.tsx) | nominal, non-couvert | fusions `Repli`, `RecoursHumain` ; montants calculés par formule | terminé |
| EC03 | Formules prévoyance comparées | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC03-formules-prevoyance-comparees.tsx) | nominal | — | terminé |
| EC04 | Simulateur de revenus en cas d'arrêt ou d'invalidité | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC04-simulateur-de-revenus.tsx) | nominal, sous-evalue, invalidite, courtier | fusion `LigneValeur` (total) ; écart mensuel recalculé : 750 € par mois indemnisé | terminé |
| EC06 | Demande de tarif | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC06-demande-de-tarif.tsx) | nominal, prerempli | — | terminé |
| EC11 | Mon contrat et mes documents | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC11-mon-contrat-et-mes-documents.tsx) | nominal, rappel | fusion `LigneValeur` ; contenus du foyer de Sylvie (au lieu d'Hélène et Inès) ; annotation 1 rendue visible | terminé |
| EC23 | Connexion | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC23-connexion.tsx) | nominal, erreur | fusion `RecoursHumain` | terminé |
| EC27 | Accueil de l'espace adhérent | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC27-accueil-de-l-espace-adherent.tsx) | nominal, vide, souscription | fusions `LigneSuivi` (« À fournir » en premier, annotation 1), `LigneValeur` ; remboursements affichés en total remboursé | terminé |
| EC31 | Estimation du reste à charge | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC31-estimation-du-reste-a-charge.tsx) | nominal | membres du foyer de Sylvie (au lieu de Manon et Léo) | terminé |
| EC33 | Envoi d'un document | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC33-envoi-d-un-document.tsx) | nominal, arret, piece, reprise, prolongation | fusions `Repli`, `RecoursHumain` ; arrêt de Jean-Marc pour reprise et prolongation | terminé |
| EC36 | Suivi de mes demandes | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC36-suivi-de-mes-demandes.tsx) | nominal, vide, retard, manquant | fusion `LigneSuivi` | terminé |
| EC37 | Réponse au devis | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC37-reponse-au-devis.tsx) | nominal | — | terminé |
| EC38 | Remboursements du foyer | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC38-remboursements-du-foyer.tsx) | nominal, recherche, vide | fusions `LigneValeur` (virement), `LigneSuivi` (en attente) | terminé |
| EC40 | Carte de tiers payant | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC40-carte-de-tiers-payant.tsx) | nominal, janvier, hors-ligne, partagee | bénéficiaires du foyer (au lieu de Manon et Léo) ; « Afficher en plein écran » sans effet (voir retours) | terminé |
| EC41 | Attestations | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC41-attestations.tsx) | nominal, obtenue, differee | — | terminé |
| EC43 | Déclaration d'un arrêt | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC43-declaration-d-un-arret.tsx) | nominal, hors-delai | fusion `RecoursHumain` | terminé |
| EC46 | Dossier d'arrêt | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC46-dossier-d-arret.tsx) | nominal, refusee, expertise, vide | fusions `LigneSuivi` (pièce à fournir en tête), `RecoursHumain` ; annotation 1 rendue visible | terminé |
| EC48 | Mes indemnités | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC48-mes-indemnites.tsx) | nominal, retard, franchise, verse, reprise | fusions `LigneValeur`, `Repli` ; trois versements passés ; annotation 1 rendue visible | terminé |
| EC51 | Demande de rappel | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC51-demande-de-rappel.tsx) | nominal, complet, manque | annotation 1 rendue visible | terminé |
| EC53 | Question écrite | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC53-question-ecrite.tsx) | nominal, medical | — | terminé |
| EC54 | Aide et contact | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC54-aide-et-contact.tsx) | nominal | — | terminé |
| EC55 | Plan du site | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC55-plan-du-site.tsx) | nominal | — | terminé |
| EC56 | Déclaration d'accessibilité | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC56-declaration-d-accessibilite.tsx) | nominal | `Texte` remplacé par la liste des contenus non accessibles (`Liste`) | terminé |
| EC57 | Mentions légales et données personnelles | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC57-mentions-legales-et-donnees-personnelles.tsx) | nominal | `Texte` remplacé par deux paragraphes | terminé |
| EC05 | Clause du contrat | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC05-clause-du-contrat.tsx) | nominal | `Texte` remplacé par les articles 12.2 à 12.4 | terminé |
| EC07 | Tarifs des formules | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC07-tarifs-des-formules.tsx) | nominal | fusions `LigneValeur`, `RecoursHumain` | terminé |
| EC08 | Mes besoins de santé | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC08-mes-besoins-de-sante.tsx) | nominal | annotation 1 rendue visible | terminé |
| EC09 | Formule recommandée | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC09-formule-recommandee.tsx) | nominal, prevoyance, autre | fusion `LigneValeur` ; tarif prévoyance du devis : 61 € | terminé |
| EC10 | Envoi du devis par e-mail | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC10-envoi-du-devis-par-e-mail.tsx) | nominal, envoye | annotation 1 rendue visible | terminé |
| EC12 | Consentement aux données de santé | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC12-consentement-aux-donnees-de-sante.tsx) | nominal | annotation 2 rendue visible | terminé |
| EC13 | Prévoyance impossible sans consentement | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC13-prevoyance-impossible-sans-consentement.tsx) | nominal | fusion `RecoursHumain` | terminé |
| EC14 | Questionnaire de santé | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC14-questionnaire-de-sante.tsx) | nominal, reprise, interrompu, tarif-expire | — | terminé |
| EC15 | Récapitulatif des réponses de santé | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC15-recapitulatif-des-reponses-de-sante.tsx) | nominal, exclusion, etude | fusion `LigneValeur` | terminé |
| EC17 | Proposition avec exclusion ou surprime | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC17-proposition-avec-exclusion-ou-surprime.tsx) | nominal, refuse | fusion `RecoursHumain` ; cotisation 61 € (tarif du devis) | terminé |
| EC18 | Récapitulatif avant signature | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC18-recapitulatif-avant-signature.tsx) | nominal | — | terminé |
| EC19 | Signature électronique | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC19-signature-electronique.tsx) | nominal, code-non-recu | fusion `RecoursHumain` | terminé |
| EC20 | Paiement | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC20-paiement.tsx) | nominal | annotation 1 rendue visible | terminé |
| EC21 | Échec du paiement | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC21-echec-du-paiement.tsx) | nominal | fusion `RecoursHumain` | terminé |
| EC22 | Confirmation de souscription | Site public | MVP | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC22-confirmation-de-souscription.tsx) | nominal | fusion `LigneValeur` | terminé |
| EC24 | Création du mot de passe | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC24-creation-du-mot-de-passe.tsx) | nominal | — | terminé |
| EC25 | Code de vérification | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC25-code-de-verification.tsx) | nominal, renvoye | annotation 1 rendue visible | terminé |
| EC26 | Réinitialisation du mot de passe | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC26-reinitialisation-du-mot-de-passe.tsx) | nominal, envoye, echec | — | terminé |
| EC32 | Résultat de l'estimation | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC32-resultat-de-l-estimation.tsx) | nominal, enfant, fourchette | fusions `LigneValeur` (total), `Repli` ; lunettes de Chloé (au lieu de Léo) | terminé |
| EC34 | Accusé de réception | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC34-accuse-de-reception.tsx) | nominal, piece, question | — | terminé |
| EC35 | Document illisible | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC35-document-illisible.tsx) | nominal, repete | fusion `RecoursHumain` | terminé |
| EC39 | Détail d'un soin | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC39-detail-d-un-soin.tsx) | nominal | fusion `LigneValeur` (total) | terminé |
| EC44 | Pièces à fournir | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC44-pieces-a-fournir.tsx) | nominal | annotation 1 rendue visible | terminé |
| EC45 | Confirmation de déclaration | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC45-confirmation-de-declaration.tsx) | nominal, court, sans-revenus | fusion `LigneValeur` (total) ; annotation 1 rendue visible | terminé |
| EC47 | Déclaration d'un changement de situation | Espace adhérent | MVP | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC47-declaration-d-un-changement-de-situation.tsx) | nominal, prolongation, autre | — | terminé |
| EC52 | Confirmation du rappel | Transverse | MVP | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC52-confirmation-du-rappel.tsx) | nominal | — | terminé |
| EC28 | Accès délégués | Espace adhérent | V2 | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC28-acces-delegues.tsx) | nominal, invitation-envoyee, retire | — | terminé |
| EC30 | Demande de reconnaissance comme mandataire | Transverse | V2 | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC30-demande-de-reconnaissance-comme-mandataire.tsx) | nominal, envoyee | — | terminé |
| EC49 | Expertise et invalidité expliquées | Espace adhérent | V2 | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC49-expertise-et-invalidite-expliquees.tsx) | nominal | expertise le 22 octobre (jeu de données) | terminé |
| EC50 | Décision d'invalidité | Espace adhérent | V2 | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC50-decision-d-invalidite.tsx) | nominal | fusions `LigneValeur` (total), `RecoursHumain` | terminé |
| EC16 | Tarif mis à jour | Site public | V2 | [tsx](../../web/src/prototypes/ecrans/01-site-public/EC16-tarif-mis-a-jour.tsx) | nominal | fusion `LigneValeur` (total) | terminé |
| EC29 | Activation de l'accès délégué | Transverse | V2 | [tsx](../../web/src/prototypes/ecrans/03-transverse/EC29-activation-de-l-acces-delegue.tsx) | nominal | annotation 1 rendue visible | terminé |
| EC42 | Modification des paramètres du contrat | Espace adhérent | V2 | [tsx](../../web/src/prototypes/ecrans/02-espace-adherent/EC42-modification-des-parametres-du-contrat.tsx) | nominal, questionnaire | fusion `LigneValeur` ; montant d'arrêt recalculé (2 700 €) | terminé |

## Parcours

<!-- Bloquant : vérifié par bun test d'après web/src/projet/parcours.ts, puis au clavier pour les parcours Must du MVP. -->

Clavier seul : Tab jusqu'au lien de l'étape suivante puis Entrée, à 1280 px, en mode test. Le nombre indique les tabulations nécessaires depuis le haut de la page.

| Flow | Départ en mode test | Cliquable | Clavier seul | Testé en utilisabilité |
|---|---|---|---|---|
| [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | `/#/test/EC01` | ✅ | ✅ (4, 6) | non |
| [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | `/#/test/EC01` ; courtier `/#/test/EC04` | ✅ | ✅ (5, 8, 6) | non |
| [UF-02.01](../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | `/#/test/EC06` | ✅ | ✅ (16, 9, 13, 9) ; focus des dates corrigé | non |
| [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | `/#/test/EC09?etat=prevoyance` ; reprise `/#/test/EC14?etat=reprise` | ✅ | ✅ (9, 10, 11, 10) | non |
| [UF-02.03](../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) | `/#/test/EC18` | ✅ | ✅ (9, 10, 12) | non |
| [UF-03.01](../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | `/#/test/EC01` | ✅ | ✅ (2, 10) | non |
| [UF-03.02](../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) (V2) | `/#/test/EC27` ; invitation `/#/test/EC29` | ✅ | non contrôlé (V2) | non |
| [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | `/#/test/EC23` | ✅ | ✅ (10, 14, 16) | non |
| [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | `/#/test/EC27` | ✅ | ✅ (7, 11, 16, 7, 12) | non |
| [UF-05.01](../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) (Should) | `/#/test/EC27` | ✅ | non contrôlé (Should) | non |
| [UF-05.02](../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) (Should) | `/#/test/EC27` | ✅ | non contrôlé (Should) | non |
| [UF-05.03](../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md) (Should) | `/#/test/EC27` | ✅ | non contrôlé (Should) | non |
| [UF-05.04](../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) (V2) | `/#/test/EC11` | ✅ | non contrôlé (V2) | non |
| [UF-06.01](../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | `/#/test/EC27` | ✅ | ✅ (16, 22, 12, 16) ; focus des dates corrigé | non |
| [UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | `/#/test/EC27` | ✅ | ✅ (8, 14, 16) | non |
| [UF-06.03](../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | `/#/test/EC27` | ✅ | ✅ (8, 15, 17, 16) ; focus des dates corrigé | non |
| [UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | `/#/test/EC27` | ✅ | ✅ (11) | non |
| [UF-07.02](../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) (V2) | `/#/test/EC46?etat=expertise` ; décision `/#/test/EC50` | ✅ | non contrôlé (V2) | non |
| [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | `/#/test/EC27` ; Manon `/#/test/EC07` | ✅ | ✅ (2, 8, 12) | non |
| [UF-08.02](../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) (Should) | `/#/test/EC54` | ✅ | non contrôlé (Should) | non |

## Accessibilité

| Écran | Contrôle | Constat | Gravité | Suite |
|---|---|---|---|---|
| EC06, EC43, EC47 | clavier | Les champs de date (`input type="date"`) ne montrent aucun contour au focus : Chromium n'applique pas `:focus-visible` au champ lui-même | bloquant | corrigé (DS-1) : contour de 3 px vérifié |
| EC02 | 375 px et 320 px | La liste « Choisissez un soin » dépasse la largeur de l'écran : un `select` prend la largeur de son option la plus longue, et la colonne de `Colonnes` s'élargit avec lui | majeur | corrigé (DS-2) : `Champ` et `Colonnes` |
| EC03, EC37 | 320 px (zoom 400 %) | Les tableaux de comparaison et de prise en charge débordent horizontalement | majeur | corrigé (DS-3) : 57 écrans sans débordement à 320 et 375 px |
| Espace adhérent | clavier | 16 à 22 tabulations avant l'action principale (en-tête, 5 onglets, fil d'Ariane) : aucun lien d'évitement « Aller au contenu » | majeur | corrigé (DS-4) : premier Tab sur « Aller au contenu », Entrée puis Tab mène au premier champ |
| EC04, EC37, EC40 | clavier | « Simuler », « Télécharger la réponse », « Afficher en plein écran » : boutons sans effet, le contrat `Bouton` n'a pas d'action locale | mineur | refusé (DS-5) : à annoncer aux participants (« certains boutons ne font rien ») |
| EC33 | console | Option « Devis d'un praticien » en double dans le wireframe (clé React dupliquée) | mineur | corrigé dans le prototype et le wireframe (WF-1) |
| 57 écrans | 640 px (zoom 200 % à 1280 px) et 1280 px | Aucun débordement ; à 375 px, aucun bouton principal masqué par la barre d'onglets | — | — |
| EC27, EC02, EC33 (`arret`), EC46 (`refusee`) | audit automatique (Lighthouse, mobile) | Accessibilité 100, bonnes pratiques 100. Échecs SEO hors périmètre : `meta description`, `robots.txt`, `llms.txt` | — | — |
| Tous | titre de page | Un titre par écran, « Libellé — Clarea Assurances » (page de prototype) | — | — |
| Tous | lecteur d'écran | Non mené : sondage NVDA ou VoiceOver à faire avant le test d'utilisabilité | — | à faire |

## Bilan

| Zone | MVP | V2 | Plus tard | Terminés | Incomplets |
|---|---|---|---|---|---|
| Site public | 20 | 1 | 0 | 21 | 0 |
| Espace adhérent | 19 | 4 | 0 | 23 | 0 |
| Transverse | 11 | 2 | 0 | 13 | 0 |

20 flows cliquables (25 parcours), dont 13 flows `Must` du MVP parcourus au clavier seul avec un focus visible. Avec le lien d'évitement, l'action principale de l'espace est atteinte en quelques tabulations. 561 tests passent.

## Retours

| Écran | Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|---|
| EC06, EC43, EC47 | design system | état manquant | DS-1 `Champ`, focus | Contour de focus sur `input`, `select`, `textarea` avec `:focus` (et non seulement `:focus-visible`), pour les champs de date | accepté : `Champ.css`, fiche 03 |
| EC02 | design system | débordement | DS-2 `Champ`, `Colonnes` | `max-width: 100%` sur les champs et `min-width: 0` sur les colonnes : un `select` ne dépasse plus l'écran | accepté : `Champ.css`, `MiseEnPage.css`, fiches 03 et 10 |
| EC03, EC37 | design system | débordement | DS-3 tableaux (`base.css`) | À moins de 768 px, cellules plus serrées et mots coupés (`overflow-wrap: anywhere`), plutôt qu'un défilement horizontal | accepté : `base.css` |
| Espace adhérent | design system et kit | accessibilité | DS-4 `Gabarit` | Lien d'évitement « Aller au contenu » en tête de page, visible au focus ; `main` reçoit un `id` (contrat `ui.ts` inchangé, structure du kit modifiée dans les assets d'ux-06 et d'ux-07) | accepté : kit (asset ux-06 et copie), `Gabarit` du design system, fiche 18 |
| EC04, EC37, EC40 | kit | prop manquante | DS-5 `Bouton` | Prop `onClick` facultative dans le contrat, pour une action locale (afficher, télécharger) | refusé |
| EC33 | wireframes | structure | WF-1 options | Retirer l'option en double « Devis d'un praticien » du wireframe | accepté |
| EC36 | wireframes | état | WF-2 état `manquant` | Le devis passe en « À fournir » (et non « Réponse disponible ») quand il manque un élément | accepté |
| EC42 | skill ux-08 | format | F-1 `formats.ts`, date | Premier jour du mois écrit « 1er » (« 1er novembre 2026 ») | accepté : asset ux-08 et copie |

## Questions ouvertes
- Résultats du test d'utilisabilité : à mener avec de vrais participants (protocole : [01-test-utilisabilite.md](./01-test-utilisabilite.md)).
- Sondage au lecteur d'écran (NVDA, VoiceOver) sur UF-06.01 et UF-04.02 avant le test.
