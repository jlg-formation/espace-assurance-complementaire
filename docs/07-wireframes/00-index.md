⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Wireframes — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Index de la phase : gabarits, écrans dans l'ordre de production, parcours cliquables, retours. Code : web/src/wireframes/ -->

Ouvrir la galerie : `cd web; bun run dev`, puis `/#/wireframes`. Vérifier : `bun run verifier`. Code des écrans : [`web/src/wireframes/ecrans/`](../../web/src/wireframes/ecrans/).

## Gabarits

| Zone | Adresse | Navigation mobile | Statut |
|---|---|---|---|
| Site public | `/#/wireframes/gabarit/site-public` | liste | validé |
| Espace adhérent | `/#/wireframes/gabarit/espace-adherent` | onglets (5) | validé |
| Transverse | `/#/wireframes/gabarit/transverse` | liste | validé |

## Écrans

<!-- Ordre de production : MVP, puis V2, puis Plus tard ; lieux avant contextuels. -->

| ID | Écran | Type | Zone | Version | Fiche | Wireframe | États | Statut |
|---|---|---|---|---|---|---|---|---|
| EC01 | Accueil Clarea | lieu | Site public | MVP | [fiche](./01-site-public/EC01-accueil-clarea.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC01-accueil-clarea.tsx) | nominal | terminé |
| EC02 | Formules santé en euros | lieu | Site public | MVP | [fiche](./01-site-public/EC02-formules-sante-en-euros.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC02-formules-sante-en-euros.tsx) | nominal, non-couvert | terminé |
| EC03 | Formules prévoyance comparées | lieu | Site public | MVP | [fiche](./01-site-public/EC03-formules-prevoyance-comparees.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC03-formules-prevoyance-comparees.tsx) | nominal | terminé |
| EC04 | Simulateur de revenus en cas d'arrêt ou d'invalidité | lieu | Site public | MVP | [fiche](./01-site-public/EC04-simulateur-de-revenus.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC04-simulateur-de-revenus.tsx) | nominal, sous-evalue, invalidite, courtier | terminé |
| EC06 | Demande de tarif | lieu | Site public | MVP | [fiche](./01-site-public/EC06-demande-de-tarif.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC06-demande-de-tarif.tsx) | nominal, prerempli | terminé |
| EC11 | Mon contrat et mes documents | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC11-mon-contrat-et-mes-documents.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC11-mon-contrat-et-mes-documents.tsx) | nominal, rappel | terminé |
| EC23 | Connexion | lieu | Transverse | MVP | [fiche](./03-transverse/EC23-connexion.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC23-connexion.tsx) | nominal, erreur | terminé |
| EC27 | Accueil de l'espace adhérent | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC27-accueil-de-l-espace-adherent.tsx) | nominal, vide, souscription | terminé |
| EC31 | Estimation du reste à charge | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC31-estimation-du-reste-a-charge.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC31-estimation-du-reste-a-charge.tsx) | nominal | terminé |
| EC33 | Envoi d'un document | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC33-envoi-d-un-document.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC33-envoi-d-un-document.tsx) | nominal, arret, piece, reprise, prolongation | terminé |
| EC36 | Suivi de mes demandes | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC36-suivi-de-mes-demandes.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC36-suivi-de-mes-demandes.tsx) | nominal, vide, retard, manquant | terminé |
| EC37 | Réponse au devis | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC37-reponse-au-devis.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC37-reponse-au-devis.tsx) | nominal | terminé |
| EC38 | Remboursements du foyer | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC38-remboursements-du-foyer.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC38-remboursements-du-foyer.tsx) | nominal, recherche, vide | terminé |
| EC40 | Carte de tiers payant | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC40-carte-de-tiers-payant.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC40-carte-de-tiers-payant.tsx) | nominal, janvier, hors-ligne, partagee | terminé |
| EC41 | Attestations | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC41-attestations.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC41-attestations.tsx) | nominal, obtenue, differee | terminé |
| EC43 | Déclaration d'un arrêt | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC43-declaration-d-un-arret.tsx) | nominal, hors-delai | terminé |
| EC46 | Dossier d'arrêt | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC46-dossier-d-arret.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC46-dossier-d-arret.tsx) | nominal, refusee, expertise, vide | terminé |
| EC48 | Mes indemnités | lieu | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC48-mes-indemnites.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC48-mes-indemnites.tsx) | nominal, retard, franchise, verse, reprise | terminé |
| EC51 | Demande de rappel | lieu | Transverse | MVP | [fiche](./03-transverse/EC51-demande-de-rappel.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC51-demande-de-rappel.tsx) | nominal, complet, manque | terminé |
| EC53 | Question écrite | lieu | Transverse | MVP | [fiche](./03-transverse/EC53-question-ecrite.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC53-question-ecrite.tsx) | nominal, medical | terminé |
| EC54 | Aide et contact | lieu | Transverse | MVP | [fiche](./03-transverse/EC54-aide-et-contact.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC54-aide-et-contact.tsx) | nominal | terminé |
| EC55 | Plan du site | lieu | Transverse | MVP | [fiche](./03-transverse/EC55-plan-du-site.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC55-plan-du-site.tsx) | nominal | terminé |
| EC56 | Déclaration d'accessibilité | lieu | Transverse | MVP | [fiche](./03-transverse/EC56-declaration-d-accessibilite.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC56-declaration-d-accessibilite.tsx) | nominal | terminé |
| EC57 | Mentions légales et données personnelles | lieu | Transverse | MVP | [fiche](./03-transverse/EC57-mentions-legales-et-donnees-personnelles.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC57-mentions-legales-et-donnees-personnelles.tsx) | nominal | terminé |
| EC05 | Clause du contrat | contextuel | Site public | MVP | [fiche](./01-site-public/EC05-clause-du-contrat.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC05-clause-du-contrat.tsx) | nominal | terminé |
| EC07 | Tarifs des formules | contextuel | Site public | MVP | [fiche](./01-site-public/EC07-tarifs-des-formules.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC07-tarifs-des-formules.tsx) | nominal | terminé |
| EC08 | Mes besoins de santé | contextuel | Site public | MVP | [fiche](./01-site-public/EC08-mes-besoins-de-sante.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC08-mes-besoins-de-sante.tsx) | nominal | terminé |
| EC09 | Formule recommandée | contextuel | Site public | MVP | [fiche](./01-site-public/EC09-formule-recommandee.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC09-formule-recommandee.tsx) | nominal, prevoyance, autre | terminé |
| EC10 | Envoi du devis par e-mail | contextuel | Site public | MVP | [fiche](./01-site-public/EC10-envoi-du-devis-par-e-mail.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC10-envoi-du-devis-par-e-mail.tsx) | nominal, envoye | terminé |
| EC12 | Consentement aux données de santé | contextuel | Site public | MVP | [fiche](./01-site-public/EC12-consentement-aux-donnees-de-sante.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC12-consentement-aux-donnees-de-sante.tsx) | nominal | terminé |
| EC13 | Prévoyance impossible sans consentement | contextuel | Site public | MVP | [fiche](./01-site-public/EC13-prevoyance-impossible-sans-consentement.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC13-prevoyance-impossible-sans-consentement.tsx) | nominal | terminé |
| EC14 | Questionnaire de santé | contextuel | Site public | MVP | [fiche](./01-site-public/EC14-questionnaire-de-sante.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC14-questionnaire-de-sante.tsx) | nominal, reprise, interrompu, tarif-expire | terminé |
| EC15 | Récapitulatif des réponses de santé | contextuel | Site public | MVP | [fiche](./01-site-public/EC15-recapitulatif-des-reponses-de-sante.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC15-recapitulatif-des-reponses-de-sante.tsx) | nominal, exclusion, etude | terminé |
| EC17 | Proposition avec exclusion ou surprime | contextuel | Site public | MVP | [fiche](./01-site-public/EC17-proposition-avec-exclusion-ou-surprime.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC17-proposition-avec-exclusion-ou-surprime.tsx) | nominal, refuse | terminé |
| EC18 | Récapitulatif avant signature | contextuel | Site public | MVP | [fiche](./01-site-public/EC18-recapitulatif-avant-signature.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC18-recapitulatif-avant-signature.tsx) | nominal | terminé |
| EC19 | Signature électronique | contextuel | Site public | MVP | [fiche](./01-site-public/EC19-signature-electronique.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC19-signature-electronique.tsx) | nominal, code-non-recu | terminé |
| EC20 | Paiement | contextuel | Site public | MVP | [fiche](./01-site-public/EC20-paiement.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC20-paiement.tsx) | nominal | terminé |
| EC21 | Échec du paiement | contextuel | Site public | MVP | [fiche](./01-site-public/EC21-echec-du-paiement.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC21-echec-du-paiement.tsx) | nominal | terminé |
| EC22 | Confirmation de souscription | contextuel | Site public | MVP | [fiche](./01-site-public/EC22-confirmation-de-souscription.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC22-confirmation-de-souscription.tsx) | nominal | terminé |
| EC24 | Création du mot de passe | contextuel | Transverse | MVP | [fiche](./03-transverse/EC24-creation-du-mot-de-passe.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC24-creation-du-mot-de-passe.tsx) | nominal | terminé |
| EC25 | Code de vérification | contextuel | Transverse | MVP | [fiche](./03-transverse/EC25-code-de-verification.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC25-code-de-verification.tsx) | nominal, renvoye | terminé |
| EC26 | Réinitialisation du mot de passe | contextuel | Transverse | MVP | [fiche](./03-transverse/EC26-reinitialisation-du-mot-de-passe.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC26-reinitialisation-du-mot-de-passe.tsx) | nominal, envoye, echec | terminé |
| EC32 | Résultat de l'estimation | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC32-resultat-de-l-estimation.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC32-resultat-de-l-estimation.tsx) | nominal, enfant, fourchette | terminé |
| EC34 | Accusé de réception | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC34-accuse-de-reception.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC34-accuse-de-reception.tsx) | nominal, piece, question | terminé |
| EC35 | Document illisible | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC35-document-illisible.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC35-document-illisible.tsx) | nominal, repete | terminé |
| EC39 | Détail d'un soin | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC39-detail-d-un-soin.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC39-detail-d-un-soin.tsx) | nominal | terminé |
| EC44 | Pièces à fournir | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC44-pieces-a-fournir.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC44-pieces-a-fournir.tsx) | nominal | terminé |
| EC45 | Confirmation de déclaration | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC45-confirmation-de-declaration.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC45-confirmation-de-declaration.tsx) | nominal, court, sans-revenus | terminé |
| EC47 | Déclaration d'un changement de situation | contextuel | Espace adhérent | MVP | [fiche](./02-espace-adherent/EC47-declaration-d-un-changement-de-situation.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC47-declaration-d-un-changement-de-situation.tsx) | nominal, prolongation, autre | terminé |
| EC52 | Confirmation du rappel | contextuel | Transverse | MVP | [fiche](./03-transverse/EC52-confirmation-du-rappel.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC52-confirmation-du-rappel.tsx) | nominal | terminé |
| EC28 | Accès délégués | lieu | Espace adhérent | V2 | [fiche](./02-espace-adherent/EC28-acces-delegues.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC28-acces-delegues.tsx) | nominal, invitation-envoyee, retire | terminé |
| EC30 | Demande de reconnaissance comme mandataire | lieu | Transverse | V2 | [fiche](./03-transverse/EC30-demande-de-reconnaissance-comme-mandataire.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC30-demande-de-reconnaissance-comme-mandataire.tsx) | nominal, envoyee | terminé |
| EC49 | Expertise et invalidité expliquées | lieu | Espace adhérent | V2 | [fiche](./02-espace-adherent/EC49-expertise-et-invalidite-expliquees.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC49-expertise-et-invalidite-expliquees.tsx) | nominal | terminé |
| EC50 | Décision d'invalidité | lieu | Espace adhérent | V2 | [fiche](./02-espace-adherent/EC50-decision-d-invalidite.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC50-decision-d-invalidite.tsx) | nominal | terminé |
| EC16 | Tarif mis à jour | contextuel | Site public | V2 | [fiche](./01-site-public/EC16-tarif-mis-a-jour.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/01-site-public/EC16-tarif-mis-a-jour.tsx) | nominal | terminé |
| EC29 | Activation de l'accès délégué | contextuel | Transverse | V2 | [fiche](./03-transverse/EC29-activation-de-l-acces-delegue.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/03-transverse/EC29-activation-de-l-acces-delegue.tsx) | nominal | terminé |
| EC42 | Modification des paramètres du contrat | contextuel | Espace adhérent | V2 | [fiche](./02-espace-adherent/EC42-modification-des-parametres-du-contrat.wireframe.md) | [tsx](../../web/src/wireframes/ecrans/02-espace-adherent/EC42-modification-des-parametres-du-contrat.tsx) | nominal, questionnaire | terminé |

## Parcours cliquables

<!-- Bloquant : vérifié par bun test d'après web/src/projet/parcours.ts. -->

| Flow | Happy path (écrans) | Chemins A / E / V représentés | Verdict |
|---|---|---|---|
| [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | EC01 → EC02 → EC06 | A1 : définition sur place EC02 ; A2 : EC02 #non-couvert ; V1 : EC51 | ✅ cliquable |
| [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | EC01 → EC03 → EC04 → EC06 ; lien courtier : EC04 → EC06 | A1 : exemple EC03 ; A2 : EC05 ; A3 : EC04 #sous-evalue ; A4 : EC04 #invalidite ; V1 : EC04 #courtier | ✅ cliquable |
| [UF-02.01](../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | EC06 → EC07 → EC08 → EC09 → EC18 | A1 : aide EC06 ; A2 : EC09 #autre ; A3 : EC10 #envoye ; A4 : EC11 ; A5 : EC09 #prevoyance ; V1 : EC51 | ✅ cliquable |
| [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | EC09 #prevoyance → EC12 → EC14 → EC15 → EC18 ; reprise : EC14 #reprise → EC15 → EC18 | E1 : EC13 ; A1 : EC14 ; A2 : EC14 #interrompu, #reprise ; A3 : EC14 #tarif-expire → EC16 ; A4 : EC11 ; A5 : EC15 #etude ; V1 : EC12 | ✅ cliquable |
| [UF-02.03](../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) | EC18 → EC19 → EC20 → EC22 | A1 : EC15 #exclusion → EC17 ; A2 : EC17 #refuse ; A3 : EC18 ; E1 : EC19 #code-non-recu ; E2, E3 : EC21 ; V1 : EC51 | ✅ cliquable |
| [UF-03.01](../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | EC01 → EC23 → EC27 | A1 : EC24 → EC25 ; A2 : EC25 ; E1 : EC25 #renvoye ; E2 : EC23 #erreur → EC26 #envoye ; E3 : EC26 #echec | ✅ cliquable |
| [UF-03.02](../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) | EC27 → EC28 ; invitation : EC29 → EC27 | A1 : EC33 ; A2 : EC30 #envoyee ; A3 : EC28 #retire | ✅ cliquable |
| [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | EC23 → EC27 → EC31 → EC32 | A1 : EC32 #enfant ; A2 : EC32 #fourchette → EC33 ; V1 : EC33 | ✅ cliquable |
| [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | EC27 → EC36 → EC33 → EC34 → EC36 → EC37 | E1 : EC35 ; E2 : EC36 #retard ; E3 : EC36 #manquant ; E4 : EC35 #repete ; V1 : courrier EC33 | ✅ cliquable |
| [UF-05.01](../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) | EC27 → EC38 → EC39 | A1 : EC38 → EC39 ; A2 : EC38 (soin en attente) | ✅ cliquable |
| [UF-05.02](../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) | EC27 → EC40 | A1 : EC40 #janvier ; E1 : EC40 #hors-ligne ; A2 : EC40 #partagee | ✅ cliquable |
| [UF-05.03](../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md) | EC27 → EC11 → EC41 | A1 : EC41 #differee | ✅ cliquable |
| [UF-05.04](../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) | EC11 | A1 : EC11 #rappel → EC04 → EC42 ; A2 : EC42 #questionnaire → EC14 | ✅ cliquable |
| [UF-06.01](../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | EC27 → EC43 → EC44 → EC33 #arret → EC45 | A1 : EC43 #hors-delai ; A2 : EC44 ; A3 : EC45 #court ; A4 : EC45 #sans-revenus ; V1 : EC43 (annotation) | ✅ cliquable |
| [UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | EC27 → EC46 → EC33 #piece → EC34 #piece | E1 : EC35 ; E2 : EC46 #refusee ; A1 : EC46 (annotation) | ✅ cliquable |
| [UF-06.03](../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | EC27 → EC46 → EC47 → EC33 #reprise → EC48 #reprise | A1 : EC47 #prolongation → EC33 #prolongation ; A2 : EC47 #autre | ✅ cliquable |
| [UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | EC27 → EC48 | E1, E2 : EC48 #retard ; A1 : EC48 #verse ; A2 : EC48 #franchise ; V1 : non représenté (export, hors maquette) | ✅ cliquable |
| [UF-07.02](../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) | EC46 #expertise → EC49 ; décision : EC50 | A1 : EC50 ; A2 : EC49 → EC51 | ✅ cliquable |
| [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | EC27 → EC54 → EC51 → EC52 ; Manon : EC07 → EC51 → EC52 | A1, A2 : EC51 #complet ; E1 : EC51 #manque ; V1 : EC07 → EC51 | ✅ cliquable |
| [UF-08.02](../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) | EC54 → EC53 → EC34 #question → EC36 | A1 : EC53 #medical ; E1 : EC36 #retard | ✅ cliquable |

## Bilan

| Zone | MVP | V2 | Plus tard | Terminés | Incomplets |
|---|---|---|---|---|---|
| Site public | 20 | 1 | 0 | 21 | 0 |
| Espace adhérent | 19 | 4 | 0 | 23 | 0 |
| Transverse | 11 | 2 | 0 | 13 | 0 |

**Composants récurrents** (entrée du design system) : carte de démarche (accueil de l'espace, suivi des demandes), liste de pièces avec leur état (EC44, EC46), envoi de document multi-pages (EC33), bloc montant en euros avec répartition (EC02, EC04, EC32, EC37, EC45, EC48), alerte d'erreur ou de retard avec la suite à donner, cartes de raccourcis, lien « Être rappelé » présent sur chaque issue humaine, tableau de comparaison (EC03, EC37).

## Retours

| Écran | Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|---|
| EC28, EC38, EC40, EC43, EC46, EC48 | kit | comportement du composant | `Gabarit`, fil d'Ariane | Ne marquer `aria-current` que sur le dernier élément ; contourné en donnant un `vers` à chaque rubrique intermédiaire | accepté (kit du skill corrigé et recopié) |
| EC03, EC37 | kit | composant manquant | Tableau | Ajouter un composant `Tableau` (en-têtes de lignes et de colonnes) ; contourné par un `table` HTML sémantique | refusé (suffisant en basse fidélité) |
| EC08, EC10 | kit | composant manquant | Case à cocher | Permettre plusieurs choix dans `Champ` (cases à cocher) ; contourné par des listes d'options | refusé (reporté au design system) |
| EC37 | backlog | scénario manquant | US-04.03 | « Étant donné que la réponse au devis est disponible, Quand Sylvie la télécharge, Alors elle obtient un document à remettre à l'orthodontiste » | accepté (scénario « Réponse transmise au praticien », ⚪) |
| EC28 | architecture | lien vers un écran V2 | utilitaire « Mon compte » | Au MVP, « Mon compte » mène à EC28 (V2) : prévoir une page compte MVP ou masquer le lien au MVP | refusé (maquette cible V2 conservée) |

## Questions ouvertes
- ~~Le libellé d'onglet « Mon arrêt de travail » tient-il sur une ligne à 375 px ?~~ Oui, vérifié dans le gabarit espace adhérent.
