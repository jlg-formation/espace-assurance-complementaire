// Happy path de chaque flow (docs/05-user-flows/), un parcours par point d'entrée si leurs premiers écrans diffèrent.
// Étape : 'EC05', ou 'EC05:erreur' si le happy path passe par un état précis.
import type { EcranId } from './ecrans';

export type Etape = EcranId | `${EcranId}:${string}`;

export interface Parcours {
  flow: string;
  tache: string;
  entree: string;
  happyPath: Etape[];
}

export const parcours: Parcours[] = [
  { flow: 'UF-01.01', tache: 'Comprendre ce que rembourse chaque formule santé avant de choisir', entree: 'Moteur de recherche', happyPath: ['EC01', 'EC02', 'EC06'] },
  { flow: 'UF-01.02', tache: 'Choisir une prévoyance en connaissant le montant net', entree: 'Site, sur ordinateur', happyPath: ['EC01', 'EC03', 'EC04', 'EC06'] },
  { flow: 'UF-01.02', tache: 'Choisir une prévoyance en connaissant le montant net', entree: "Lien d'un courtier", happyPath: ['EC04', 'EC06'] },
  { flow: 'UF-02.01', tache: 'Obtenir un tarif et une formule adaptée sans laisser ses coordonnées', entree: 'Accès direct ou suite de UF-01.01', happyPath: ['EC06', 'EC07', 'EC08', 'EC09', 'EC18'] },
  { flow: 'UF-02.02', tache: 'Répondre au questionnaire de santé de la prévoyance', entree: 'Suite de UF-02.01', happyPath: ['EC09:prevoyance', 'EC12', 'EC14', 'EC15', 'EC18'] },
  { flow: 'UF-02.02', tache: 'Répondre au questionnaire de santé de la prévoyance', entree: 'E-mail de reprise', happyPath: ['EC14:reprise', 'EC15', 'EC18'] },
  { flow: 'UF-02.03', tache: "Vérifier ce qui n'est pas couvert, signer et payer", entree: 'Suite de UF-02.01 ou UF-02.02', happyPath: ['EC18', 'EC19', 'EC20', 'EC22'] },
  { flow: 'UF-03.01', tache: 'Accéder à son espace', entree: 'Favori ou site public', happyPath: ['EC01', 'EC23', 'EC27'] },
  { flow: 'UF-03.02', tache: 'Obtenir et utiliser un accès délégué pour le foyer', entree: 'Titulaire connecté', happyPath: ['EC27', 'EC28'] },
  { flow: 'UF-03.02', tache: 'Obtenir et utiliser un accès délégué pour le foyer', entree: 'Invitation par e-mail', happyPath: ['EC29', 'EC27'] },
  { flow: 'UF-04.01', tache: 'Estimer ce qui restera à payer avant un soin', entree: 'Devis papier, salle d\u2019attente', happyPath: ['EC23', 'EC27', 'EC31', 'EC32'] },
  { flow: 'UF-04.02', tache: 'Envoyer un devis et obtenir sa prise en charge en euros', entree: 'Devis papier', happyPath: ['EC27', 'EC36', 'EC33', 'EC34', 'EC36', 'EC37'] },
  { flow: 'UF-05.01', tache: 'Retrouver à quel soin correspond un remboursement', entree: 'Relevé bancaire', happyPath: ['EC27', 'EC38', 'EC39'] },
  { flow: 'UF-05.02', tache: 'Présenter sa carte de tiers payant', entree: 'Comptoir du praticien', happyPath: ['EC27', 'EC40'] },
  { flow: 'UF-05.03', tache: 'Obtenir une attestation', entree: 'Déclaration de revenus', happyPath: ['EC27', 'EC11', 'EC41'] },
  { flow: 'UF-05.04', tache: 'Ajuster ses garanties après le rappel annuel', entree: 'E-mail de rappel annuel', happyPath: ['EC11'] },
  { flow: 'UF-06.01', tache: 'Déclarer un arrêt et savoir quand on sera indemnisé', entree: 'Arrêt de travail papier', happyPath: ['EC27', 'EC43', 'EC44', 'EC33:arret', 'EC45'] },
  { flow: 'UF-06.02', tache: "Compléter le dossier d'arrêt", entree: 'Relevé reçu par courrier', happyPath: ['EC27', 'EC46', 'EC33:piece', 'EC34:piece'] },
  { flow: 'UF-06.03', tache: 'Déclarer une reprise à temps partiel ou une prolongation', entree: 'Prescription de reprise', happyPath: ['EC27', 'EC46', 'EC47', 'EC33:reprise', 'EC48:reprise'] },
  { flow: 'UF-07.01', tache: 'Savoir quand et combien on sera payé', entree: 'Échéance de trésorerie', happyPath: ['EC27', 'EC48'] },
  { flow: 'UF-07.02', tache: 'Comprendre une expertise ou un passage en invalidité', entree: 'Courrier de convocation', happyPath: ['EC46:expertise', 'EC49'] },
  { flow: 'UF-07.02', tache: 'Comprendre une expertise ou un passage en invalidité', entree: 'Notification de décision', happyPath: ['EC50'] },
  { flow: 'UF-08.01', tache: 'Être rappelé par un conseiller qui connaît le dossier', entree: 'Dossier en ligne', happyPath: ['EC27', 'EC54', 'EC51', 'EC52'] },
  { flow: 'UF-08.01', tache: 'Être rappelé par un conseiller qui connaît le dossier', entree: 'Avant souscription (Manon)', happyPath: ['EC07', 'EC51', 'EC52'] },
  { flow: 'UF-08.02', tache: 'Poser une question écrite et suivre la réponse', entree: 'Aide et contact', happyPath: ['EC54', 'EC53', 'EC34:question', 'EC36'] },
];

export function decomposer(etape: Etape): { ecran: EcranId; etat?: string } {
  const [ecran, etat] = etape.split(':') as [EcranId, string | undefined];
  return { ecran, etat };
}
