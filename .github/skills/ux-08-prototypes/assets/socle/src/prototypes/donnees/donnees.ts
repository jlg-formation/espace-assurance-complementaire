// Jeu de données fictif, cohérent sur tous les écrans. Aucune personne réelle. Valeurs d'exemple, à remplacer.
export interface Remboursement {
  id: string;
  date: string;
  acte: string;
  beneficiaire: string;
  paye: number;
  rembourse: number | null;
  statut: 'paye' | 'en-cours' | 'refuse';
}

export const adherent = {
  prenom: 'Claire',
  nom: 'Fictif',
  beneficiaires: ['Moi', 'Léa (fille)'],
};

export const remboursements: Remboursement[] = [
  { id: 'R1', date: '2026-09-12', acte: 'Consultation généraliste', beneficiaire: 'Moi', paye: 30, rembourse: 22.05, statut: 'paye' },
  { id: 'R2', date: '2026-09-03', acte: 'Pharmacie', beneficiaire: 'Léa (fille)', paye: 18.4, rembourse: null, statut: 'en-cours' },
];

export const resteAPayer = (r: Remboursement) => (r.rembourse === null ? null : r.paye - r.rembourse);
