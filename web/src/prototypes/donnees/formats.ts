// Formats français : copie conforme de l'asset du skill ux-08.
const formatEuros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
const formatEurosRond = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const formatDateLongue = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const formatDateCourte = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
const formatPourcentage = new Intl.NumberFormat('fr-FR', { style: 'percent', maximumFractionDigits: 0 });

// Midi : évite qu'une date ISO bascule la veille selon le fuseau.
const jour = (iso: string) => new Date(`${iso}T12:00:00`);

// Montant rond sans décimales (1 840 €), sinon deux décimales (381,25 €).
export const euros = (montant: number) => (Number.isInteger(montant) ? formatEurosRond : formatEuros).format(montant);
export const date = (iso: string) => formatDateLongue.format(jour(iso)).replace(/^1 /, '1er ');
export const dateCourte = (iso: string) => formatDateCourte.format(jour(iso));
export const pourcentage = (valeur: number) => formatPourcentage.format(valeur / 100);
