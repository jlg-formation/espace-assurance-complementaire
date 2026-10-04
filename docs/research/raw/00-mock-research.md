⚠️ DONNÉES SIMULÉES — aucune personne réelle.

# Manifeste — Recherche simulée (mock research)

> Ce dossier contient des **données fabriquées** par le skill `ux-01b-mock-research` à la place d'une collecte réelle. Elles ne décrivent aucune personne réelle et ne valent pas preuve : les conclusions qu'on en tire restent des **hypothèses renforcées**, pas des faits. Tous les fichiers générés sont préfixés `SIM-`.
>
> Entrées : [vision](../../01-vision.md) · [plan de recherche](../plan-de-recherche.md) · [guide d'entretien](../guide-entretien.md)

## Paramètres de simulation

| Paramètre | Valeur |
|---|---|
| Entretiens | 2 par segment, 8 au total (minimum du plan de recherche) |
| Segments | `premiere-mutuelle`, `famille`, `tns`, `arret` |
| Enquête | non retenue |
| Avis en ligne | 3 fichiers (avis fictifs, plateforme fictive, assureurs non nommés) |
| Statistiques | 2 fichiers (sources explicitement fictives) |
| Période fictive de terrain | septembre 2026 |

## Panel

| ID | Segment | Profil | Aisance numérique | Comportements marquants |
|---|---|---|---|---|
| SIM-P01 | Première mutuelle | Inès, 24 ans, en recherche d'emploi après une alternance, colocation, périphérie d'une grande ville | forte, smartphone uniquement (pas d'ordinateur) | déclenchée par un incident (payé à la pharmacie) ; a souscrit en une soirée, entièrement sur mobile (**contredit H3**) ; a quitté un comparateur et un formulaire qui demandaient son téléphone avant le prix (**confirme H2**) ; lit « 100 % » comme « tout remboursé » (**confirme H1**) ; reste à charge expliqué par le dentiste |
| SIM-P02 | Première mutuelle *(atypique : ne colle pas au proto-persona)* | Bernard, 58 ans, licencié économique, fin de portabilité, marié, enfants adultes, village rural | moyenne, ordinateur fixe, imprime beaucoup | n'utilise que les exemples de remboursement en euros (**nuance H1**) ; a comparé 3 semaines sur papier et ordinateur (**confirme H3**) ; donner son numéro ne le gêne pas, ne lit pas les avis (**contredit H2, H13**) ; signature par SMS en échec, termine en agence ; son épouse gère les soins (proche qui agit à sa place) |
| SIM-P03 | Famille | Aurélie, 37 ans, en congé parental, conjoint chauffeur VTC indépendant, trois enfants, grande ville du Sud-Ouest | forte, smartphone | l'opticien a fait la demande de prise en charge à sa place (**nuance H4**) ; devis d'orthodontie non envoyé depuis 3 semaines (ne sait pas comment) ; vérifie sur son relevé bancaire, pas dans l'espace adhérent (**contredit H5**) ; carte rarement demandée, pharmacie déjà renseignée (**contredit H6**) ; gère tout sans avoir d'accès propre |
| SIM-P04 | Famille *(ne colle pas au proto-persona)* | Mamadou, 45 ans, gérant d'un restaurant, marié, deux enfants (dont un en orthodontie), grande ville du Sud-Est | moyenne, ordinateur au bureau, téléphone pour les appels | a appelé avant l'orthodontie (25 min d'attente), on lui a demandé d'envoyer le devis par la poste, 3 semaines de délai (**confirme H4**) ; consulte ses remboursements une fois par mois sur ordinateur (**contredit H5**) ; a dû chercher la carte une fois chez un nouveau dentiste (**nuance H6**) ; prévoyance souscrite via l'expert-comptable sans connaître les montants (H7, H8) ; voudrait un accès pour son épouse |
| SIM-P05 | TNS | Julien, 33 ans, couvreur à son compte depuis 18 mois, en couple, sans enfant, zone rurale de l'Ouest | moyenne, smartphone, fait l'administratif « le moins possible » | souscription guidée par l'expert-comptable puis un courtier (**confirme H8**) ; ne connaît ni la franchise ni le montant, revenu garanti sous-déclaré (**confirme H7**) ; questionnaire de santé rempli en 2 min sur le chantier, antécédent omis par inattention (**contredit H9**, risque de fausse déclaration) ; contrat jamais ouvert ; voudrait qu'un proche puisse agir en cas d'accident |
| SIM-P06 | TNS *(ne colle pas au proto-persona)* | Sandrine, 49 ans, formatrice et consultante en libéral, ancienne responsable RH, divorcée, un fils étudiant, ville moyenne du Nord | forte, ordinateur portable, tableurs | a refusé le courtier et comparé seule 4 assureurs dans un tableur (**contredit H8**) ; maîtrise franchise, indemnités et barème, mais n'a jamais calculé son montant net (**nuance H7**) ; questionnaire de santé laissé de côté 2 semaines, puis changement d'assureur pour une surprime plutôt qu'une exclusion (**nuance H9**) ; a écarté les sites demandant ses coordonnées (**confirme H2**) ; méfiance sur qui lit ses données de santé |
| SIM-P07 | Arrêt / invalidité | Patrick, 56 ans, boulanger artisan en arrêt depuis 4 mois (épaule), marié, petite ville de l'Est | faible, téléphone à touches + tablette de sa femme | déclaré tardivement, pièces réclamées une par une par courrier (**confirme H10**) ; aucune visibilité sur les versements, appel chaque mardi, découvert bancaire (**confirme H11**) ; aucune gêne à envoyer des pièces médicales, « tant qu'ils paient » (**contredit H12**) ; c'est son épouse qui fait toutes les démarches ; espace en ligne bloqué ; expertise et invalidité incomprises |
| SIM-P08 | Arrêt / invalidité *(atypique : reprise en temps partiel thérapeutique)* | Clémence, 41 ans, orthophoniste libérale, en couple, un enfant, grande ville de l'Ouest, reprise partielle après un traitement long | forte, ordinateur + smartphone | a tout déclaré en ligne le premier jour (**contredit H10** pour l'arrêt complet) ; franchise de 90 jours découverte au moment du sinistre ; le formulaire ne prévoit pas le temps partiel thérapeutique, paiements interrompus ; suivi des versements dans son propre tableur (**nuance H11**) ; pièces médicales envoyées en ligne, doute après coup (**nuance H12**) ; son conjoint utilisait ses identifiants |

## Fichiers à générer

| Fichier | Type | État |
|---|---|---|
| [SIM-P01-premiere-mutuelle.md](./SIM-P01-premiere-mutuelle.md) | entretien | généré |
| [SIM-P02-premiere-mutuelle.md](./SIM-P02-premiere-mutuelle.md) | entretien | généré |
| [SIM-P03-famille.md](./SIM-P03-famille.md) | entretien | généré |
| [SIM-P04-famille.md](./SIM-P04-famille.md) | entretien | généré |
| [SIM-P05-tns.md](./SIM-P05-tns.md) | entretien | généré |
| [SIM-P06-tns.md](./SIM-P06-tns.md) | entretien | généré |
| [SIM-P07-arret.md](./SIM-P07-arret.md) | entretien | généré |
| [SIM-P08-arret.md](./SIM-P08-arret.md) | entretien | généré |
| [SIM-A01-devis-souscription.md](./SIM-A01-devis-souscription.md) | avis (5) | généré |
| [SIM-A02-remboursements.md](./SIM-A02-remboursements.md) | avis (5) | généré |
| [SIM-A03-prevoyance-arret.md](./SIM-A03-prevoyance-arret.md) | avis (5) | généré |
| [SIM-S01-complementaire-sante.md](./SIM-S01-complementaire-sante.md) | statistiques | généré |
| [SIM-S02-prevoyance-independants.md](./SIM-S02-prevoyance-independants.md) | statistiques | généré |
