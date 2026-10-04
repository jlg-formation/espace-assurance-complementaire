// Un écran maquetté = une entrée.
import type { ComponentType } from 'react';
import type { EcranId } from '../projet/ecrans';
import type { PropsEcran } from '../projet/ui';
import EC01 from './ecrans/01-site-public/EC01-accueil-clarea';
import EC02 from './ecrans/01-site-public/EC02-formules-sante-en-euros';
import EC03 from './ecrans/01-site-public/EC03-formules-prevoyance-comparees';
import EC04 from './ecrans/01-site-public/EC04-simulateur-de-revenus';
import EC05 from './ecrans/01-site-public/EC05-clause-du-contrat';
import EC06 from './ecrans/01-site-public/EC06-demande-de-tarif';
import EC07 from './ecrans/01-site-public/EC07-tarifs-des-formules';
import EC08 from './ecrans/01-site-public/EC08-mes-besoins-de-sante';
import EC09 from './ecrans/01-site-public/EC09-formule-recommandee';
import EC10 from './ecrans/01-site-public/EC10-envoi-du-devis-par-e-mail';
import EC11 from './ecrans/02-espace-adherent/EC11-mon-contrat-et-mes-documents';
import EC12 from './ecrans/01-site-public/EC12-consentement-aux-donnees-de-sante';
import EC13 from './ecrans/01-site-public/EC13-prevoyance-impossible-sans-consentement';
import EC14 from './ecrans/01-site-public/EC14-questionnaire-de-sante';
import EC15 from './ecrans/01-site-public/EC15-recapitulatif-des-reponses-de-sante';
import EC16 from './ecrans/01-site-public/EC16-tarif-mis-a-jour';
import EC17 from './ecrans/01-site-public/EC17-proposition-avec-exclusion-ou-surprime';
import EC18 from './ecrans/01-site-public/EC18-recapitulatif-avant-signature';
import EC19 from './ecrans/01-site-public/EC19-signature-electronique';
import EC20 from './ecrans/01-site-public/EC20-paiement';
import EC21 from './ecrans/01-site-public/EC21-echec-du-paiement';
import EC22 from './ecrans/01-site-public/EC22-confirmation-de-souscription';
import EC23 from './ecrans/03-transverse/EC23-connexion';
import EC24 from './ecrans/03-transverse/EC24-creation-du-mot-de-passe';
import EC25 from './ecrans/03-transverse/EC25-code-de-verification';
import EC26 from './ecrans/03-transverse/EC26-reinitialisation-du-mot-de-passe';
import EC27 from './ecrans/02-espace-adherent/EC27-accueil-de-l-espace-adherent';
import EC28 from './ecrans/02-espace-adherent/EC28-acces-delegues';
import EC29 from './ecrans/03-transverse/EC29-activation-de-l-acces-delegue';
import EC30 from './ecrans/03-transverse/EC30-demande-de-reconnaissance-comme-mandataire';
import EC31 from './ecrans/02-espace-adherent/EC31-estimation-du-reste-a-charge';
import EC32 from './ecrans/02-espace-adherent/EC32-resultat-de-l-estimation';
import EC33 from './ecrans/02-espace-adherent/EC33-envoi-d-un-document';
import EC34 from './ecrans/02-espace-adherent/EC34-accuse-de-reception';
import EC35 from './ecrans/02-espace-adherent/EC35-document-illisible';
import EC36 from './ecrans/02-espace-adherent/EC36-suivi-de-mes-demandes';
import EC37 from './ecrans/02-espace-adherent/EC37-reponse-au-devis';
import EC38 from './ecrans/02-espace-adherent/EC38-remboursements-du-foyer';
import EC39 from './ecrans/02-espace-adherent/EC39-detail-d-un-soin';
import EC40 from './ecrans/02-espace-adherent/EC40-carte-de-tiers-payant';
import EC41 from './ecrans/02-espace-adherent/EC41-attestations';
import EC42 from './ecrans/02-espace-adherent/EC42-modification-des-parametres-du-contrat';
import EC43 from './ecrans/02-espace-adherent/EC43-declaration-d-un-arret';
import EC44 from './ecrans/02-espace-adherent/EC44-pieces-a-fournir';
import EC45 from './ecrans/02-espace-adherent/EC45-confirmation-de-declaration';
import EC46 from './ecrans/02-espace-adherent/EC46-dossier-d-arret';
import EC47 from './ecrans/02-espace-adherent/EC47-declaration-d-un-changement-de-situation';
import EC48 from './ecrans/02-espace-adherent/EC48-mes-indemnites';
import EC49 from './ecrans/02-espace-adherent/EC49-expertise-et-invalidite-expliquees';
import EC50 from './ecrans/02-espace-adherent/EC50-decision-d-invalidite';
import EC51 from './ecrans/03-transverse/EC51-demande-de-rappel';
import EC52 from './ecrans/03-transverse/EC52-confirmation-du-rappel';
import EC53 from './ecrans/03-transverse/EC53-question-ecrite';
import EC54 from './ecrans/03-transverse/EC54-aide-et-contact';
import EC55 from './ecrans/03-transverse/EC55-plan-du-site';
import EC56 from './ecrans/03-transverse/EC56-declaration-d-accessibilite';
import EC57 from './ecrans/03-transverse/EC57-mentions-legales-et-donnees-personnelles';

export interface Wireframe {
  composant: ComponentType<PropsEcran>;
  etats: readonly string[];
  fiche: string;
}

const PUB = 'docs/07-wireframes/01-site-public/';
const ESP = 'docs/07-wireframes/02-espace-adherent/';
const TRA = 'docs/07-wireframes/03-transverse/';

export const wireframes: Partial<Record<EcranId, Wireframe>> = {
  EC01: { composant: EC01, etats: ['nominal'], fiche: `${PUB}EC01-accueil-clarea.wireframe.md` },
  EC02: { composant: EC02, etats: ['nominal', 'non-couvert'], fiche: `${PUB}EC02-formules-sante-en-euros.wireframe.md` },
  EC03: { composant: EC03, etats: ['nominal'], fiche: `${PUB}EC03-formules-prevoyance-comparees.wireframe.md` },
  EC04: { composant: EC04, etats: ['nominal', 'sous-evalue', 'invalidite', 'courtier'], fiche: `${PUB}EC04-simulateur-de-revenus.wireframe.md` },
  EC05: { composant: EC05, etats: ['nominal'], fiche: `${PUB}EC05-clause-du-contrat.wireframe.md` },
  EC06: { composant: EC06, etats: ['nominal', 'prerempli'], fiche: `${PUB}EC06-demande-de-tarif.wireframe.md` },
  EC07: { composant: EC07, etats: ['nominal'], fiche: `${PUB}EC07-tarifs-des-formules.wireframe.md` },
  EC08: { composant: EC08, etats: ['nominal'], fiche: `${PUB}EC08-mes-besoins-de-sante.wireframe.md` },
  EC09: { composant: EC09, etats: ['nominal', 'prevoyance', 'autre'], fiche: `${PUB}EC09-formule-recommandee.wireframe.md` },
  EC10: { composant: EC10, etats: ['nominal', 'envoye'], fiche: `${PUB}EC10-envoi-du-devis-par-e-mail.wireframe.md` },
  EC11: { composant: EC11, etats: ['nominal', 'rappel'], fiche: `${ESP}EC11-mon-contrat-et-mes-documents.wireframe.md` },
  EC12: { composant: EC12, etats: ['nominal'], fiche: `${PUB}EC12-consentement-aux-donnees-de-sante.wireframe.md` },
  EC13: { composant: EC13, etats: ['nominal'], fiche: `${PUB}EC13-prevoyance-impossible-sans-consentement.wireframe.md` },
  EC14: { composant: EC14, etats: ['nominal', 'reprise', 'interrompu', 'tarif-expire'], fiche: `${PUB}EC14-questionnaire-de-sante.wireframe.md` },
  EC15: { composant: EC15, etats: ['nominal', 'exclusion', 'etude'], fiche: `${PUB}EC15-recapitulatif-des-reponses-de-sante.wireframe.md` },
  EC16: { composant: EC16, etats: ['nominal'], fiche: `${PUB}EC16-tarif-mis-a-jour.wireframe.md` },
  EC17: { composant: EC17, etats: ['nominal', 'refuse'], fiche: `${PUB}EC17-proposition-avec-exclusion-ou-surprime.wireframe.md` },
  EC18: { composant: EC18, etats: ['nominal'], fiche: `${PUB}EC18-recapitulatif-avant-signature.wireframe.md` },
  EC19: { composant: EC19, etats: ['nominal', 'code-non-recu'], fiche: `${PUB}EC19-signature-electronique.wireframe.md` },
  EC20: { composant: EC20, etats: ['nominal'], fiche: `${PUB}EC20-paiement.wireframe.md` },
  EC21: { composant: EC21, etats: ['nominal'], fiche: `${PUB}EC21-echec-du-paiement.wireframe.md` },
  EC22: { composant: EC22, etats: ['nominal'], fiche: `${PUB}EC22-confirmation-de-souscription.wireframe.md` },
  EC23: { composant: EC23, etats: ['nominal', 'erreur'], fiche: `${TRA}EC23-connexion.wireframe.md` },
  EC24: { composant: EC24, etats: ['nominal'], fiche: `${TRA}EC24-creation-du-mot-de-passe.wireframe.md` },
  EC25: { composant: EC25, etats: ['nominal', 'renvoye'], fiche: `${TRA}EC25-code-de-verification.wireframe.md` },
  EC26: { composant: EC26, etats: ['nominal', 'envoye', 'echec'], fiche: `${TRA}EC26-reinitialisation-du-mot-de-passe.wireframe.md` },
  EC27: { composant: EC27, etats: ['nominal', 'vide', 'souscription'], fiche: `${ESP}EC27-accueil-de-l-espace-adherent.wireframe.md` },
  EC28: { composant: EC28, etats: ['nominal', 'invitation-envoyee', 'retire'], fiche: `${ESP}EC28-acces-delegues.wireframe.md` },
  EC29: { composant: EC29, etats: ['nominal'], fiche: `${TRA}EC29-activation-de-l-acces-delegue.wireframe.md` },
  EC30: { composant: EC30, etats: ['nominal', 'envoyee'], fiche: `${TRA}EC30-demande-de-reconnaissance-comme-mandataire.wireframe.md` },
  EC31: { composant: EC31, etats: ['nominal'], fiche: `${ESP}EC31-estimation-du-reste-a-charge.wireframe.md` },
  EC32: { composant: EC32, etats: ['nominal', 'enfant', 'fourchette'], fiche: `${ESP}EC32-resultat-de-l-estimation.wireframe.md` },
  EC33: { composant: EC33, etats: ['nominal', 'arret', 'piece', 'reprise', 'prolongation'], fiche: `${ESP}EC33-envoi-d-un-document.wireframe.md` },
  EC34: { composant: EC34, etats: ['nominal', 'piece', 'question'], fiche: `${ESP}EC34-accuse-de-reception.wireframe.md` },
  EC35: { composant: EC35, etats: ['nominal', 'repete'], fiche: `${ESP}EC35-document-illisible.wireframe.md` },
  EC36: { composant: EC36, etats: ['nominal', 'vide', 'retard', 'manquant'], fiche: `${ESP}EC36-suivi-de-mes-demandes.wireframe.md` },
  EC37: { composant: EC37, etats: ['nominal'], fiche: `${ESP}EC37-reponse-au-devis.wireframe.md` },
  EC38: { composant: EC38, etats: ['nominal', 'recherche', 'vide'], fiche: `${ESP}EC38-remboursements-du-foyer.wireframe.md` },
  EC39: { composant: EC39, etats: ['nominal'], fiche: `${ESP}EC39-detail-d-un-soin.wireframe.md` },
  EC40: { composant: EC40, etats: ['nominal', 'janvier', 'hors-ligne', 'partagee'], fiche: `${ESP}EC40-carte-de-tiers-payant.wireframe.md` },
  EC41: { composant: EC41, etats: ['nominal', 'obtenue', 'differee'], fiche: `${ESP}EC41-attestations.wireframe.md` },
  EC42: { composant: EC42, etats: ['nominal', 'questionnaire'], fiche: `${ESP}EC42-modification-des-parametres-du-contrat.wireframe.md` },
  EC43: { composant: EC43, etats: ['nominal', 'hors-delai'], fiche: `${ESP}EC43-declaration-d-un-arret.wireframe.md` },
  EC44: { composant: EC44, etats: ['nominal'], fiche: `${ESP}EC44-pieces-a-fournir.wireframe.md` },
  EC45: { composant: EC45, etats: ['nominal', 'court', 'sans-revenus'], fiche: `${ESP}EC45-confirmation-de-declaration.wireframe.md` },
  EC46: { composant: EC46, etats: ['nominal', 'refusee', 'expertise', 'vide'], fiche: `${ESP}EC46-dossier-d-arret.wireframe.md` },
  EC47: { composant: EC47, etats: ['nominal', 'prolongation', 'autre'], fiche: `${ESP}EC47-declaration-d-un-changement-de-situation.wireframe.md` },
  EC48: { composant: EC48, etats: ['nominal', 'retard', 'franchise', 'verse', 'reprise'], fiche: `${ESP}EC48-mes-indemnites.wireframe.md` },
  EC49: { composant: EC49, etats: ['nominal'], fiche: `${ESP}EC49-expertise-et-invalidite-expliquees.wireframe.md` },
  EC50: { composant: EC50, etats: ['nominal'], fiche: `${ESP}EC50-decision-d-invalidite.wireframe.md` },
  EC51: { composant: EC51, etats: ['nominal', 'complet', 'manque'], fiche: `${TRA}EC51-demande-de-rappel.wireframe.md` },
  EC52: { composant: EC52, etats: ['nominal'], fiche: `${TRA}EC52-confirmation-du-rappel.wireframe.md` },
  EC53: { composant: EC53, etats: ['nominal', 'medical'], fiche: `${TRA}EC53-question-ecrite.wireframe.md` },
  EC54: { composant: EC54, etats: ['nominal'], fiche: `${TRA}EC54-aide-et-contact.wireframe.md` },
  EC55: { composant: EC55, etats: ['nominal'], fiche: `${TRA}EC55-plan-du-site.wireframe.md` },
  EC56: { composant: EC56, etats: ['nominal'], fiche: `${TRA}EC56-declaration-d-accessibilite.wireframe.md` },
  EC57: { composant: EC57, etats: ['nominal'], fiche: `${TRA}EC57-mentions-legales-et-donnees-personnelles.wireframe.md` },
};
