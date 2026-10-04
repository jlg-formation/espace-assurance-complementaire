⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Navigation — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Libellés = glossaire. Les transitions internes aux flows ne sont pas de la navigation. -->

## Systèmes de navigation

### Site public

| Système | Entrées | Présent sur | Règle |
|---|---|---|---|
| Globale | Mutuelle santé, Prévoyance, Obtenir un tarif | tous les lieux du site public | « Obtenir un tarif » mis en avant : tâche commune aux deux offres |
| Locale | Prévoyance : Simuler une perte de revenus | EC03, EC04 | — |
| Utilitaire | Se connecter, Aide et contact | partout | « Se connecter » mène à EC23 puis à Mon espace |
| Pied de page | Plan du site, Accessibilité, Mentions légales et données personnelles | partout | obligatoire (RGAA, RGPD) |
| Fil d'Ariane | — | à partir du niveau 2 (EC04) | Accueil › Prévoyance › Simuler une perte de revenus |
| Recherche | non prévue : aucune story | — | le plan du site et le menu forment les deux systèmes de navigation exigés par le RGAA |

### Espace adhérent

| Système | Entrées | Présent sur | Règle |
|---|---|---|---|
| Globale | Mon espace, Ma santé, Mes demandes, Mon arrêt de travail, Mon contrat | tous les lieux de l'espace | « Mon arrêt de travail » n'apparaît que si le foyer a une prévoyance |
| Locale | Ma santé : Mes remboursements, Estimer un soin, Ma carte de mutuelle · Mon arrêt de travail : Déclarer un arrêt, Mon dossier d'arrêt, Mes indemnités · Mes demandes : Envoyer un document | lieux de la rubrique | — |
| Utilitaire | Mon compte (Accès de mes proches en V2), Aide et contact, Se déconnecter | partout | — |
| Pied de page | Plan du site, Accessibilité, Mentions légales et données personnelles | partout | identique au site public |
| Fil d'Ariane | — | à partir du niveau 2 | Mon espace › Mon arrêt de travail › Mon dossier d'arrêt |
| Recherche | non prévue : aucune story | — | — |

### Transverse

| Système | Entrées | Présent sur | Règle |
|---|---|---|---|
| Locale | Aide et contact : Être rappelé, Poser une question, Agir pour un proche (V2) | EC54 et ses enfants | « Poser une question » demande d'être connecté |

### Navigation contextuelle

| Depuis | Vers | Libellé du lien | Raison |
|---|---|---|---|
| EC02 Mutuelle santé | EC06 Obtenir un tarif | Obtenir un tarif pour cette formule | suite de [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) |
| EC03 Prévoyance | EC06 Obtenir un tarif | Obtenir un tarif pour cette formule | suite de [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) |
| EC11 Mon contrat | EC04 Simuler une perte de revenus | Simuler avec mon contrat | [UF-05.04](../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) |
| EC27 Mon espace | EC40 Ma carte de mutuelle | Ma carte de mutuelle (raccourci) | présentée au comptoir, en un clic ([UF-05.02](../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md)) |
| EC27 Mon espace | EC31 Estimer un soin | Estimer un soin (raccourci) | tâche `Must` de Manon |
| EC27 Mon espace | EC14 Questionnaire de santé | Reprendre ma souscription | adhérent santé qui ajoute une prévoyance et interrompt son questionnaire |
| EC32 Résultat de l'estimation | EC33 Envoyer un document | Envoyer le devis pour une réponse exacte | [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) A2 |
| EC46 Mon dossier d'arrêt | EC33 Envoyer un document | Ajouter une pièce | relation Dossier → Document ([UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md)) |
| EC46 Mon dossier d'arrêt | EC48 Mes indemnités | Voir mes indemnités | relation Dossier → Indemnité |
| EC48 Mes indemnités | EC46 Mon dossier d'arrêt | Voir ce qui manque au dossier | versement retardé par une pièce ([UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) E1) |
| EC46 Mon dossier d'arrêt | EC49 Expertise et invalidité | Comprendre l'expertise | convocation (V2) |
| EC36 Mes demandes | EC53 Poser une question | Poser une question | relation Demande → Question |
| EC11 Mon contrat | EC41 Mes attestations | Mes attestations | relation Contrat → Attestation |
| EC21, EC26, EC35, EC49 (erreurs et moments d'inquiétude) | EC51 Être rappelé | Être rappelé par un conseiller | issue humaine des flows UF-02.03, UF-03.01, UF-04.02, UF-07.02 |
| EC51 Être rappelé (aucun créneau) | EC53 Poser une question | Poser plutôt une question écrite | [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) A2 |
| EC54 Aide et contact | EC30 Agir pour un proche | Agir pour un proche (V2) | [UF-03.02](../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) A2 |

## Mobile

<!-- D'après l'appareil principal des personas. Barre d'onglets : 5 entrées au plus. -->

| Système | Ordinateur | Mobile |
|---|---|---|
| Globale, site public | menu horizontal, « Obtenir un tarif » en bouton | menu repliable ; bouton « Obtenir un tarif » toujours visible (Manon souscrit sur mobile) |
| Globale, espace adhérent | menu latéral | barre d'onglets à 5 entrées : Mon espace, Ma santé, Mes demandes, Mon arrêt de travail, Mon contrat |
| Utilitaire | en-tête | menu « Plus » : Aide et contact, Mon compte, Se déconnecter |
| Pied de page | en bas de page | en bas de page, replié |
| Fil d'Ariane | affiché | réduit au parent (« ‹ Mon arrêt de travail ») |

## Liens profonds

| Point d'entrée | Canal | Écran cible | Connexion requise | Après connexion |
|---|---|---|---|---|
| Résultat de moteur de recherche | web | EC01 ou EC02 | non | — |
| Lien d'un courtier ou d'un expert-comptable | e-mail | EC04 prérempli | non | — |
| Devis de souscription envoyé par e-mail | e-mail | EC06 prérempli, puis EC07 | non | — |
| Reprise d'un questionnaire de santé interrompu | e-mail | EC14 | non (lien sécurisé à usage limité) | — |
| Réinitialisation du mot de passe | e-mail | EC24 | non | EC27 |
| Invitation à un accès délégué (V2) | e-mail | EC29 | non | EC27 |
| Réponse à un devis disponible | notification | EC37 | oui | retour sur EC37 |
| Élément manquant sur un devis | notification | EC36 | oui | retour sur EC36 |
| Pièce refusée | notification | EC46 | oui | retour sur EC46 |
| Nouvelle carte de l'année | notification | EC40 | oui | retour sur EC40 |
| Rappel annuel du contrat | e-mail | EC11 | oui | retour sur EC11 |
| Versement effectué ou retardé | notification | EC48 | oui | retour sur EC48 |
| Décision d'invalidité (V2) | notification | EC50 | oui | retour sur EC50 |
| Rappel manqué | notification | EC51 | oui si la demande était connectée | retour sur EC51, demande conservée |
| Réponse à une question écrite | notification | EC36 | oui | retour sur EC36 |

## Vérification par flow

<!-- Un chemin par point d'entrée du flow (index des flows). Bloquant : aucun flow sans chemin. -->

| Flow | Point d'entrée | Premier écran | Chemin | Clics | Verdict |
|---|---|---|---|---|---|
| [UF-01.01](../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) | Moteur de recherche, sur mobile | EC01 | Résultat de recherche → EC01 | 0 | ✅ |
| [UF-01.02](../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) | Site, sur ordinateur | EC01 | Saisie de l'adresse ou recherche → EC01 | 0 | ✅ |
| UF-01.02 | Lien d'un courtier (variante Manon) | EC04 | Lien profond → EC04 prérempli | 0 | ✅ |
| [UF-02.01](../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) | Suite de UF-01.01 | EC06 | EC02 → lien « Obtenir un tarif pour cette formule » → EC06 | 1 | ✅ |
| UF-02.01 | Accès direct | EC06 | EC01 → nav. globale « Obtenir un tarif » → EC06 | 1 | ✅ |
| UF-02.01 | E-mail du devis (retour ultérieur) | EC06 | Lien profond → EC06 prérempli → EC07 | 0 | ✅ |
| [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | Suite de UF-02.01 | EC12 | transition interne au flow (EC09 → EC12) | 0 | ✅ |
| UF-02.02 | E-mail de reprise après interruption | EC14 | Lien profond sécurisé → EC14, réponses conservées (flow corrigé, retour R1) | 0 | ✅ |
| [UF-02.03](../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) | Suite de UF-02.01 ou UF-02.02 | EC17 ou EC18 | transition interne au flow | 0 | ✅ |
| [UF-03.01](../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) | Favori du navigateur | EC23 | Favori → EC23 | 0 | ✅ |
| UF-03.01 | Depuis le site public | EC23 | Tout lieu public → utilitaire « Se connecter » → EC23 | 1 | ✅ |
| UF-03.01 | Lien d'un e-mail de l'assureur | EC23 | Lien profond → EC23 → lieu demandé | 0 | ✅ |
| UF-03.01 | E-mail de réinitialisation | EC24 | Lien profond → EC24 | 0 | ✅ |
| [UF-03.02](../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) | Titulaire connecté (V2) | EC28 | EC27 → utilitaire « Mon compte » → EC28 | 2 | ✅ |
| UF-03.02 | Invitation par e-mail (V2) | EC29 | Lien profond → EC29 | 0 | ✅ |
| UF-03.02 | Titulaire hors d'état d'agir (V2) | EC30 | Tout lieu → utilitaire « Aide et contact » → EC54 → EC30 | 2 | ✅ |
| [UF-04.01](../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) | Devis papier, salle d'attente | EC31 | EC23 → EC27 → raccourci « Estimer un soin » → EC31 (ou nav. « Ma santé » → EC31) | 1 | ✅ |
| [UF-04.02](../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) | Devis papier | EC33 | EC23 → EC27 → nav. « Mes demandes » → « Envoyer un document » → EC33 | 2 | ✅ |
| UF-04.02 | Notification « réponse disponible » | EC37 | Lien profond → connexion → EC37 | 0 | ✅ |
| UF-04.02 | Notification « élément manquant » | EC36 | Lien profond → connexion → EC36 | 0 | ✅ |
| UF-04.02 | Envoi postal (variante Sylvie) | — | hors application ; suivi ensuite dans EC36 | — | ✅ |
| [UF-05.01](../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md) | Relevé bancaire | EC38 | EC23 → EC27 → nav. « Ma santé » → « Mes remboursements » → EC38 | 2 | ✅ |
| [UF-05.02](../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) | Comptoir du praticien | EC40 | EC23 → EC27 → raccourci « Ma carte de mutuelle » → EC40 | 1 | ✅ |
| UF-05.02 | Notification « nouvelle carte » | EC40 | Lien profond → connexion → EC40 | 0 | ✅ |
| [UF-05.03](../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md) | Déclaration de revenus | EC41 | EC23 → EC27 → nav. « Mon contrat » → « Mes attestations » → EC41 | 2 | ✅ |
| [UF-05.04](../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) | E-mail de rappel annuel | EC11 | Lien profond → connexion → EC11 | 0 | ✅ |
| [UF-06.01](../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) | Arrêt de travail papier, remarque du kiné | EC43 | EC23 → EC27 → nav. « Mon arrêt de travail » → « Déclarer un arrêt » → EC43 | 2 | ✅ |
| [UF-06.02](../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) | Relevé reçu par courrier | EC46 | EC23 → EC27 → nav. « Mon arrêt de travail » → « Mon dossier d'arrêt » → EC46 | 2 | ✅ |
| UF-06.02 | Notification « pièce refusée » | EC46 | Lien profond → connexion → EC46 | 0 | ✅ |
| UF-06.02 | Envoi postal | — | hors application ; état mis à jour dans EC46 | — | ✅ |
| [UF-06.03](../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) | Prescription de reprise | EC46 | EC23 → EC27 → nav. « Mon arrêt de travail » → « Mon dossier d'arrêt » → EC46 | 2 | ✅ |
| [UF-07.01](../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) | Échéance de trésorerie | EC48 | EC23 → EC27 → nav. « Mon arrêt de travail » → « Mes indemnités » → EC48 | 2 | ✅ |
| UF-07.01 | Notification de versement ou de retard | EC48 | Lien profond → connexion → EC48 | 0 | ✅ |
| [UF-07.02](../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) | Courrier de convocation (V2) | EC46 | EC23 → EC27 → nav. « Mon arrêt de travail » → « Mon dossier d'arrêt » → EC46 | 2 | ✅ |
| UF-07.02 | Notification de décision (V2) | EC50 | Lien profond → connexion → EC50 | 0 | ✅ |
| [UF-08.01](../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) | Dossier en ligne | EC51 | Tout lieu → utilitaire « Aide et contact » → EC54 → « Être rappelé » → EC51 | 2 | ✅ |
| UF-08.01 | Renvoi depuis un autre flow (blocage) | EC51 | lien contextuel « Être rappelé par un conseiller » → EC51 | 1 | ✅ |
| UF-08.01 | Avant souscription, sans compte (variante Manon) | EC51 | EC07 ou tout lieu public → « Aide et contact » → EC54 → EC51 | 2 | ✅ |
| UF-08.01 | Notification « rappel manqué » | EC51 | Lien profond → EC51, demande conservée | 0 | ✅ |
| [UF-08.02](../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) | Espace adhérent | EC53 | Tout lieu → « Aide et contact » → EC54 → « Poser une question » → EC53 (connexion demandée) | 2 | ✅ |
| UF-08.02 | Renvoi depuis UF-08.01 | EC53 | lien contextuel « Poser plutôt une question écrite » → EC53 | 1 | ✅ |
