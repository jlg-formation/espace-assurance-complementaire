// Formats français : copie conforme de l'asset du skill ux-08.
const formatEuros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
const formatDateLongue = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const formatDateCourte = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
const formatPourcentage = new Intl.NumberFormat('fr-FR', { style: 'percent', maximumFractionDigits: 0 });

// Midi : évite qu'une date ISO bascule la veille selon le fuseau.
const jour = (iso: string) => new Date(`${iso}T12:00:00`);

export const euros = (montant: number) => formatEuros.format(montant);
export const date = (iso: string) => formatDateLongue.format(jour(iso));
export const dateCourte = (iso: string) => formatDateCourte.format(jour(iso));
export const pourcentage = (valeur: number) => formatPourcentage.format(valeur / 100);
