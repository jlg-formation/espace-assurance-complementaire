import type { DocComposant } from '../doc';
import { LigneSuivi } from './LigneSuivi';
import { Liste } from './Liste';

export const doc: DocComposant = {
  numero: '16',
  nom: 'LigneSuivi',
  role: "Dire où en est une démarche sans l'ouvrir : objet, délai ou raison, statut parmi 7 libellés fixes. Ce qui attend l'adhérent (À fournir) se place en premier.",
  fiche: 'docs/08-design-system/composants/16-ligne-suivi.component.md',
  exemples: [
    {
      titre: 'Tous les statuts',
      rendu: (
        <Liste>
          <LigneSuivi statut="À fournir" vers="EC46" detail="à envoyer avant le 11 juin 2026">Relevé du régime obligatoire</LigneSuivi>
          <LigneSuivi statut="En cours" vers="EC36" detail="réponse au plus tard le 10 octobre">Devis d'orthodontie de Lucas</LigneSuivi>
          <LigneSuivi statut="Réponse disponible" vers="EC37">Devis d'orthodontie de Lucas — envoyé le 3 oct.</LigneSuivi>
          <LigneSuivi statut="Retardée" detail="réponse au 17 oct. : avis de notre dentiste-conseil en cours">Devis d'orthodontie de Lucas — envoyé le 3 oct.</LigneSuivi>
          <LigneSuivi statut="Acceptée">Avis d'arrêt de travail — 14 mai</LigneSuivi>
          <LigneSuivi statut="Refusée" detail="ne couvre que le mois de mai">Relevé du régime obligatoire — 2 juin</LigneSuivi>
          <LigneSuivi statut="Terminée">Devis de lunettes de Chloé — 12 juin 2026</LigneSuivi>
        </Liste>
      ),
      code: '<Liste>\n  <LigneSuivi statut="À fournir" vers="EC46" detail="à envoyer avant le 11 juin 2026">Relevé du régime obligatoire</LigneSuivi>\n  <LigneSuivi statut="En cours" vers="EC36" detail="réponse au plus tard le 10 octobre">Devis d\'orthodontie de Lucas</LigneSuivi>\n  <LigneSuivi statut="Refusée" detail="ne couvre que le mois de mai">Relevé du régime obligatoire — 2 juin</LigneSuivi>\n</Liste>',
    },
  ],
};
