import type { DocComposant } from '../doc';
import { Etiquette } from './Etiquette';

export const doc: DocComposant = {
  numero: '04',
  nom: 'Etiquette',
  role: "Afficher un statut court. Dans une liste de démarches, passer par LigneSuivi qui fixe le libellé et le ton ; pour un message qui demande une action, utiliser Alerte.",
  fiche: 'docs/08-design-system/composants/04-etiquette.component.md',
  exemples: [
    { titre: 'Neutre', rendu: <Etiquette>Terminée</Etiquette>, code: '<Etiquette>Terminée</Etiquette>' },
    { titre: 'Succès', rendu: <Etiquette ton="succes">Acceptée</Etiquette>, code: '<Etiquette ton="succes">Acceptée</Etiquette>' },
    { titre: 'Avertissement', rendu: <Etiquette ton="avertissement">À fournir</Etiquette>, code: '<Etiquette ton="avertissement">À fournir</Etiquette>' },
    { titre: 'Erreur', rendu: <Etiquette ton="erreur">Refusée</Etiquette>, code: '<Etiquette ton="erreur">Refusée</Etiquette>' },
    { titre: 'Information', rendu: <Etiquette ton="information">En cours</Etiquette>, code: '<Etiquette ton="information">En cours</Etiquette>' },
  ],
};
