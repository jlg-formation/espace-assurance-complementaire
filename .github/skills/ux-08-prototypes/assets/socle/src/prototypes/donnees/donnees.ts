// Jeu de données fictif, cohérent sur tous les écrans. Aucune personne réelle. Valeurs d'exemple, à remplacer.
export interface Demande {
  id: string;
  objet: string;
  envoyeeLe: string;
  statut: 'traitee' | 'en-cours' | 'refusee';
  reponseLe: string | null;
  delaiJours: number | null;
}

export const client = {
  prenom: 'Claire',
  nom: 'Fictif',
};

export const demandes: Demande[] = [
  { id: 'D1', objet: "Changement d'adresse", envoyeeLe: '2026-09-12', statut: 'traitee', reponseLe: '2026-09-14', delaiJours: null },
  { id: 'D2', objet: 'Attestation annuelle', envoyeeLe: '2026-09-03', statut: 'en-cours', reponseLe: null, delaiJours: 5 },
];
