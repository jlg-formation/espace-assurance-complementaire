// Miroir de docs/06-architecture-information/01-contenus.inventory.md : identifiants et noms inchangés.
import type { ZoneId } from './zones';

export interface FicheEcran {
  nom: string;
  libelle: string;
  zone: ZoneId;
  type: 'lieu' | 'contextuel';
  parent?: string;
  version: 'MVP' | 'V2' | 'Plus tard';
}

export const ecrans = {
  EC01: { nom: 'Accueil Clarea', libelle: 'Accueil', zone: 'site-public', type: 'lieu', version: 'MVP' },
  EC02: { nom: 'Formules santé en euros', libelle: 'Mutuelle santé', zone: 'site-public', type: 'lieu', version: 'MVP' },
  EC03: { nom: 'Formules prévoyance comparées', libelle: 'Prévoyance', zone: 'site-public', type: 'lieu', version: 'MVP' },
  EC04: { nom: "Simulateur de revenus en cas d'arrêt ou d'invalidité", libelle: 'Simuler une perte de revenus', zone: 'site-public', type: 'lieu', version: 'MVP' },
  EC05: { nom: 'Clause du contrat', libelle: 'Clause du contrat', zone: 'site-public', type: 'contextuel', parent: 'EC03', version: 'MVP' },
  EC06: { nom: 'Demande de tarif', libelle: 'Obtenir un tarif', zone: 'site-public', type: 'lieu', version: 'MVP' },
  EC07: { nom: 'Tarifs des formules', libelle: 'Tarifs des formules', zone: 'site-public', type: 'contextuel', parent: 'EC06', version: 'MVP' },
  EC08: { nom: 'Mes besoins de santé', libelle: 'Mes besoins de santé', zone: 'site-public', type: 'contextuel', parent: 'EC07', version: 'MVP' },
  EC09: { nom: 'Formule recommandée', libelle: 'Formule recommandée', zone: 'site-public', type: 'contextuel', parent: 'EC08', version: 'MVP' },
  EC10: { nom: 'Envoi du devis par e-mail', libelle: 'Recevoir mon devis par e-mail', zone: 'site-public', type: 'contextuel', parent: 'EC07', version: 'MVP' },
  EC11: { nom: 'Mon contrat et mes documents', libelle: 'Mon contrat', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC12: { nom: 'Consentement aux données de santé', libelle: 'Vos données de santé', zone: 'site-public', type: 'contextuel', parent: 'EC09', version: 'MVP' },
  EC13: { nom: 'Prévoyance impossible sans consentement', libelle: 'Prévoyance impossible sans consentement', zone: 'site-public', type: 'contextuel', parent: 'EC12', version: 'MVP' },
  EC14: { nom: 'Questionnaire de santé', libelle: 'Questionnaire de santé', zone: 'site-public', type: 'contextuel', parent: 'EC12', version: 'MVP' },
  EC15: { nom: 'Récapitulatif des réponses de santé', libelle: 'Vérifier mes réponses', zone: 'site-public', type: 'contextuel', parent: 'EC14', version: 'MVP' },
  EC16: { nom: 'Tarif mis à jour', libelle: 'Tarif mis à jour', zone: 'site-public', type: 'contextuel', parent: 'EC14', version: 'V2' },
  EC17: { nom: 'Proposition avec exclusion ou surprime', libelle: 'Notre proposition', zone: 'site-public', type: 'contextuel', parent: 'EC15', version: 'MVP' },
  EC18: { nom: 'Récapitulatif avant signature', libelle: 'Avant de signer', zone: 'site-public', type: 'contextuel', parent: 'EC09', version: 'MVP' },
  EC19: { nom: 'Signature électronique', libelle: 'Signer mon contrat', zone: 'site-public', type: 'contextuel', parent: 'EC18', version: 'MVP' },
  EC20: { nom: 'Paiement', libelle: 'Paiement', zone: 'site-public', type: 'contextuel', parent: 'EC19', version: 'MVP' },
  EC21: { nom: 'Échec du paiement', libelle: 'Échec du paiement', zone: 'site-public', type: 'contextuel', parent: 'EC20', version: 'MVP' },
  EC22: { nom: 'Confirmation de souscription', libelle: 'Vous êtes couvert', zone: 'site-public', type: 'contextuel', parent: 'EC20', version: 'MVP' },
  EC23: { nom: 'Connexion', libelle: 'Se connecter', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC24: { nom: 'Création du mot de passe', libelle: 'Créer mon mot de passe', zone: 'transverse', type: 'contextuel', parent: 'EC23', version: 'MVP' },
  EC25: { nom: 'Code de vérification', libelle: 'Code de vérification', zone: 'transverse', type: 'contextuel', parent: 'EC23', version: 'MVP' },
  EC26: { nom: 'Réinitialisation du mot de passe', libelle: 'Mot de passe oublié', zone: 'transverse', type: 'contextuel', parent: 'EC23', version: 'MVP' },
  EC27: { nom: "Accueil de l'espace adhérent", libelle: 'Mon espace', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC28: { nom: 'Accès délégués', libelle: 'Accès de mes proches', zone: 'espace-adherent', type: 'lieu', version: 'V2' },
  EC29: { nom: "Activation de l'accès délégué", libelle: 'Activer mon accès', zone: 'transverse', type: 'contextuel', parent: 'EC23', version: 'V2' },
  EC30: { nom: 'Demande de reconnaissance comme mandataire', libelle: 'Agir pour un proche', zone: 'transverse', type: 'lieu', version: 'V2' },
  EC31: { nom: 'Estimation du reste à charge', libelle: 'Estimer un soin', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC32: { nom: "Résultat de l'estimation", libelle: "Résultat de l'estimation", zone: 'espace-adherent', type: 'contextuel', parent: 'EC31', version: 'MVP' },
  EC33: { nom: "Envoi d'un document", libelle: 'Envoyer un document', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC34: { nom: 'Accusé de réception', libelle: 'Accusé de réception', zone: 'espace-adherent', type: 'contextuel', parent: 'EC33', version: 'MVP' },
  EC35: { nom: 'Document illisible', libelle: 'Document illisible', zone: 'espace-adherent', type: 'contextuel', parent: 'EC33', version: 'MVP' },
  EC36: { nom: 'Suivi de mes demandes', libelle: 'Mes demandes', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC37: { nom: 'Réponse au devis', libelle: 'Réponse à mon devis', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC38: { nom: 'Remboursements du foyer', libelle: 'Mes remboursements', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC39: { nom: "Détail d'un soin", libelle: "Détail d'un soin", zone: 'espace-adherent', type: 'contextuel', parent: 'EC38', version: 'MVP' },
  EC40: { nom: 'Carte de tiers payant', libelle: 'Ma carte de mutuelle', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC41: { nom: 'Attestations', libelle: 'Mes attestations', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC42: { nom: 'Modification des paramètres du contrat', libelle: 'Modifier mes garanties', zone: 'espace-adherent', type: 'contextuel', parent: 'EC11', version: 'V2' },
  EC43: { nom: "Déclaration d'un arrêt", libelle: 'Déclarer un arrêt', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC44: { nom: 'Pièces à fournir', libelle: 'Pièces à fournir', zone: 'espace-adherent', type: 'contextuel', parent: 'EC43', version: 'MVP' },
  EC45: { nom: 'Confirmation de déclaration', libelle: 'Arrêt déclaré', zone: 'espace-adherent', type: 'contextuel', parent: 'EC43', version: 'MVP' },
  EC46: { nom: "Dossier d'arrêt", libelle: "Mon dossier d'arrêt", zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC47: { nom: "Déclaration d'un changement de situation", libelle: 'Déclarer un changement', zone: 'espace-adherent', type: 'contextuel', parent: 'EC46', version: 'MVP' },
  EC48: { nom: 'Mes indemnités', libelle: 'Mes indemnités', zone: 'espace-adherent', type: 'lieu', version: 'MVP' },
  EC49: { nom: 'Expertise et invalidité expliquées', libelle: 'Expertise et invalidité', zone: 'espace-adherent', type: 'lieu', version: 'V2' },
  EC50: { nom: "Décision d'invalidité", libelle: "Décision d'invalidité", zone: 'espace-adherent', type: 'lieu', version: 'V2' },
  EC51: { nom: 'Demande de rappel', libelle: 'Être rappelé', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC52: { nom: 'Confirmation du rappel', libelle: 'Rappel confirmé', zone: 'transverse', type: 'contextuel', parent: 'EC51', version: 'MVP' },
  EC53: { nom: 'Question écrite', libelle: 'Poser une question', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC54: { nom: 'Aide et contact', libelle: 'Aide et contact', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC55: { nom: 'Plan du site', libelle: 'Plan du site', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC56: { nom: "Déclaration d'accessibilité", libelle: 'Accessibilité', zone: 'transverse', type: 'lieu', version: 'MVP' },
  EC57: { nom: 'Mentions légales et données personnelles', libelle: 'Mentions légales et données personnelles', zone: 'transverse', type: 'lieu', version: 'MVP' },
} as const satisfies Record<string, FicheEcran>;

export type EcranId = keyof typeof ecrans;

export const idsEcrans = Object.keys(ecrans) as EcranId[];
