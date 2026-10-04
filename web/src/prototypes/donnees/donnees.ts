// Jeu de données fictif, cohérent sur tous les écrans. Aucune personne réelle, aucun identifiant officiel.
// Deux profils : la prospecte du site public (Manon) et le foyer adhérent de l'espace (Sylvie).

export const aujourdhui = '2026-10-03';

// ——— Site public : Manon, prospecte, photographe à son compte, un fils ———

export const prospect = {
  prenom: 'Manon',
  nom: 'Fictif',
  naissance: '1996-03-14',
  codePostal: '31000',
  ville: 'Toulouse',
  enfant: { prenom: 'Léo', age: 4 },
  telephoneMasque: '06 •• •• •• 42',
  devisLe: '2026-10-03',
};

export type IdFormuleSante = 'essentielle' | 'confort' | 'renfort';

export interface Soin {
  id: string;
  libelle: string;
  prix: number;
  rembourse: Partial<Record<IdFormuleSante, number>>;
}

export const formulesSante: { id: IdFormuleSante; nom: string; cotisation2Personnes: number }[] = [
  { id: 'essentielle', nom: 'Essentielle', cotisation2Personnes: 22.4 },
  { id: 'confort', nom: 'Confort', cotisation2Personnes: 38.9 },
  { id: 'renfort', nom: 'Renfort', cotisation2Personnes: 56.1 },
];

// Remboursement total (Assurance Maladie + mutuelle) ; formule absente = soin non couvert.
export const soinsDeReference: Soin[] = [
  { id: 'couronne', libelle: 'Couronne dentaire', prix: 650, rembourse: { essentielle: 240, confort: 420, renfort: 585 } },
  { id: 'lunettes', libelle: 'Paire de lunettes', prix: 420, rembourse: { essentielle: 150, confort: 335, renfort: 400 } },
  { id: 'specialiste', libelle: 'Consultation chez un spécialiste', prix: 60, rembourse: { essentielle: 30, confort: 46.2, renfort: 60 } },
  { id: 'chambre', libelle: 'Hospitalisation, chambre particulière', prix: 80, rembourse: { essentielle: 0, confort: 50, renfort: 80 } },
  { id: 'implant', libelle: 'Implant dentaire', prix: 1200, rembourse: { confort: 400, renfort: 750 } },
];

export const resteACharge = (soin: Soin, formule: IdFormuleSante) =>
  soin.rembourse[formule] === undefined ? soin.prix : soin.prix - soin.rembourse[formule]!;

export const souscriptionSante = {
  formule: 'confort' as IdFormuleSante,
  debutCouverture: '2026-10-05',
  premierPrelevement: '2026-11-05',
  finCarenceDentaire: '2027-01-05',
};

export const formulesPrevoyance = {
  essentielle: { franchiseJours: 90, indemniteJour: 50, rente: 1000, bareme: 'fonctionnel', exclusions: 'sports à risque, troubles du dos sans hospitalisation' },
  confort: { franchiseJours: 30, indemniteJour: 90, rente: 1800, bareme: 'professionnel', exclusions: 'sports à risque' },
};

export const souscriptionPrevoyance = {
  revenuGaranti: 42000,
  tarifDevis: 61,
  tarifMisAJour: 64,
  tarifsMisAJourLe: '2026-11-01',
  reponsesEffaceesLe: '2026-11-03',
  etudeMedicaleAuPlusTard: '2026-10-17',
  questionsTotal: 12,
  questionReprise: 7,
};

export const reponsesSante = [
  { question: 'Arrêt de travail de plus de 30 jours (10 ans)', reponse: 'Oui : entorse du genou, 2022, 6 semaines' },
  { question: 'Hospitalisation de plus de 48 heures (5 ans)', reponse: 'Non' },
  { question: 'Traitement en cours', reponse: 'Non' },
];

// Simulateur : revenu de référence et deux niveaux de garantie (bien couvert, sous-évalué).
export const simulation = {
  revenuAnnuel: 42000,
  regimeObligatoireJour: 22,
  regimeObligatoireInvaliditeMois: 620,
  garanties: {
    adapte: { revenuGaranti: 42000, indemniteJour: 90, cotisation: 81 },
    sousEvalue: { revenuGaranti: 30000, indemniteJour: 65, cotisation: 64 },
  },
};

// ——— Espace adhérent : le foyer de Sylvie ———

export const adherent = {
  prenom: 'Sylvie',
  nom: 'Fictif',
  telephoneMasque: '06 •• •• •• 17',
  numeroAdherent: '1234 5678',
};

export const foyer = {
  titulaire: { prenom: 'Jean-Marc', metier: 'menuisier' },
  membres: [
    { prenom: 'Sylvie', age: 55 },
    { prenom: 'Jean-Marc', age: 57 },
    { prenom: 'Chloé', age: 16 },
    { prenom: 'Lucas', age: 14 },
  ],
};

export const contrats = {
  sante: { nom: 'Mutuelle santé Confort', numero: '1234 5678', depuis: '2024-01-15' },
  prevoyance: {
    nom: 'Prévoyance Confort',
    numero: '1234 5679',
    franchiseJours: 30,
    revenuDeclare: simulation.revenuAnnuel,
    revenuGaranti: simulation.garanties.sousEvalue.revenuGaranti,
    indemniteJour: simulation.garanties.sousEvalue.indemniteJour,
    cotisation: simulation.garanties.sousEvalue.cotisation,
    modification: { ...simulation.garanties.adapte, dateEffet: '2026-11-01' },
  },
};

// Une mensualité d'indemnités couvre 30 jours.
export const mensualite = (indemniteJour: number) => indemniteJour * 30;

export const arret = {
  personne: 'Jean-Marc',
  debut: '2026-05-12',
  finPrevue: '2026-08-12',
  situation: 'Opération chirurgicale',
  finFranchise: '2026-06-10',
  debutIndemnisation: '2026-06-11',
  dateLimitePieces: '2026-06-11',
  montantMensuel: mensualite(contrats.prevoyance.indemniteJour),
  versements: [
    { le: '2026-07-10', du: '2026-06-11', au: '2026-07-10' },
    { le: '2026-08-10', du: '2026-07-11', au: '2026-08-10' },
    { le: '2026-09-10', du: '2026-08-11', au: '2026-09-10' },
  ],
  prochainVersement: { le: '2026-10-10', du: '2026-09-11', au: '2026-10-10' },
  reprise: { le: '2026-10-12', versementSuivant: '2026-11-10' },
  expertiseLe: '2026-10-22',
  horsDelai: { debut: '2026-08-19', finPrevue: '2026-09-30', joursDepuisDebut: 45 },
  arretCourtJours: 10,
};

export type StatutPiece = 'Acceptée' | 'À fournir' | 'Refusée';

export interface Piece {
  libelle: string;
  ouLObtenir: string;
  recueLe: string | null;
  statut: StatutPiece;
}

export const pieces: Piece[] = [
  { libelle: "Avis d'arrêt de travail", ouLObtenir: 'remis par le médecin', recueLe: '2026-05-14', statut: 'Acceptée' },
  { libelle: 'Compte rendu opératoire', ouLObtenir: 'pièce médicale, lue uniquement par le médecin-conseil', recueLe: '2026-05-14', statut: 'Acceptée' },
  { libelle: 'Relevé des indemnités du régime obligatoire', ouLObtenir: 'à demander à votre caisse : 2 à 3 semaines', recueLe: null, statut: 'À fournir' },
  { libelle: 'Déclaration de revenus 2025', ouLObtenir: 'pour calculer le montant', recueLe: '2026-05-14', statut: 'Acceptée' },
  { libelle: 'RIB', ouLObtenir: 'pour les versements', recueLe: '2026-05-14', statut: 'Acceptée' },
];

export const pieceRefusee = { recueLe: '2026-09-28', motif: 'il ne couvre que les mois de mai et juin', periodeAttendue: 'du 12 mai au 30 septembre' };

export const invalidite = {
  taux: 40,
  rente: (formulesPrevoyance.confort.rente * 40) / 100,
  decisionLe: '2026-11-02',
  premierVersement: '2026-12-10',
  periodePremierVersement: 'novembre',
  contestationJusquAu: '2027-01-02',
};

export const devisOrthodontie = {
  beneficiaire: 'Lucas',
  ageBeneficiaire: 14,
  montant: 2400,
  pages: 3,
  envoyeLe: '2026-10-03',
  reponseAuPlusTard: '2026-10-10',
  retardeAu: '2026-10-17',
  valableJusquAu: '2027-04-03',
  semestres: [
    { montant: 800, assuranceMaladie: 193.5, clarea: 350 },
    { montant: 800, assuranceMaladie: 193.5, clarea: 350 },
    { montant: 800, assuranceMaladie: 193.5, clarea: 350 },
  ],
};

export const resteSemestre = (s: { montant: number; assuranceMaladie: number; clarea: number }) => s.montant - s.assuranceMaladie - s.clarea;
export const resteDevis = devisOrthodontie.semestres.reduce((t, s) => t + resteSemestre(s), 0);

export const question = { sujet: 'Attestation de cotisations 2025', envoyeeLe: '2026-10-03', reponseAuPlusTard: '2026-10-07' };
export const devisLunettesChloe = { le: '2026-06-12' };

export const estimations = {
  couronne: { pour: 'Sylvie', soin: 'Couronne dentaire', prix: 650, assuranceMaladie: 75.25, mutuelle: 193.5, fourchette: [250, 420] as const },
  lunettes: { pour: 'Chloé', soin: 'Lunettes', prix: 420, assuranceMaladie: 0.05, mutuelle: 149.95, plafond: 200, plafondUtilise: 50, utiliseEn: 'mars' },
};
export const resteEstimation = (e: { prix: number; assuranceMaladie: number; mutuelle: number }) =>
  Math.round((e.prix - e.assuranceMaladie - e.mutuelle) * 100) / 100;

export interface SoinRembourse {
  id: string;
  praticien: string;
  beneficiaire: string;
  le: string;
  paye: number;
  assuranceMaladie: number;
  mutuelle: number;
  virementLe: string | null;
  rembourseVers?: string;
}

export const soins: SoinRembourse[] = [
  { id: 'S1', praticien: 'Dentiste', beneficiaire: 'Chloé', le: '2026-09-03', paye: 70, assuranceMaladie: 21, mutuelle: 49, virementLe: '2026-09-09' },
  { id: 'S2', praticien: 'Pharmacie', beneficiaire: 'Jean-Marc', le: '2026-08-28', paye: 100, assuranceMaladie: 36.6, mutuelle: 63.4, virementLe: '2026-09-09' },
  { id: 'S3', praticien: 'Ophtalmologiste', beneficiaire: 'Sylvie', le: '2026-08-14', paye: 60, assuranceMaladie: 30, mutuelle: 16.2, virementLe: '2026-08-20' },
  { id: 'S4', praticien: 'Kinésithérapeute', beneficiaire: 'Jean-Marc', le: '2026-09-20', paye: 48, assuranceMaladie: 0, mutuelle: 0, virementLe: null, rembourseVers: '2026-10-06' },
];

export const rembourse = (s: SoinRembourse) => Math.round((s.assuranceMaladie + s.mutuelle) * 100) / 100;
export const resteSoin = (s: SoinRembourse) => Math.round((s.paye - rembourse(s)) * 100) / 100;
// Un virement de la mutuelle règle la part mutuelle de tous les soins du même jour de virement.
export const virement = (le: string) => {
  const regles = soins.filter((s) => s.virementLe === le);
  return { le, soins: regles, montant: Math.round(regles.reduce((t, s) => t + s.mutuelle, 0) * 100) / 100 };
};

export const carte = { anneeCourante: 2026, anneeSuivante: 2027, tiersPayant: 'pharmacie, laboratoire, radiologie, hôpital, opticien partenaire' };

export const rappel = {
  creneau: { jour: 'mardi 7 octobre', plage: '14 h - 16 h' },
  joursProposes: ['Mardi 7 octobre', 'Mercredi 8 octobre', 'Jeudi 9 octobre'],
  premierCreneauLibre: { jour: 'jeudi 9 octobre', plage: '9 h - 11 h' },
  joursSiComplet: ['Jeudi 9 octobre', 'Vendredi 10 octobre'],
};

export const delais = {
  attestationAuPlusTard: '2026-10-10',
  mandataireAuPlusTard: '2026-10-17',
  invitationJours: 7,
};

export const clarea = {
  telephone: '09 70 00 00 00',
  horaires: 'du lundi au vendredi de 9 h à 18 h',
  adressePostale: 'Clarea Assurances, Service des prestations, TSA 40000, 75000 Paris',
  auditAccessibilite: { le: '2026-09-15', taux: 82 },
};
