import type { DocComposant } from '../doc';
import { Alerte } from './Alerte';
import { Lien } from './Lien';

export const doc: DocComposant = {
  numero: '05',
  nom: 'Alerte',
  role: "Signaler ce qui change pour l'adhérent et ce qu'il doit faire ensuite. Une erreur ou un avertissement contient toujours l'action suivante.",
  fiche: 'docs/08-design-system/composants/05-alerte.component.md',
  exemples: [
    {
      titre: 'Erreur, avec la correction attendue',
      rendu: (
        <Alerte type="erreur" titre="Relevé du régime obligatoire refusé : il ne couvre que le mois de mai.">
          <p>Envoyez un relevé couvrant la période du 12 mai au 30 juin.</p>
        </Alerte>
      ),
      code: '<Alerte type="erreur" titre="Relevé du régime obligatoire refusé : il ne couvre que le mois de mai.">\n  <p>Envoyez un relevé couvrant la période du 12 mai au 30 juin.</p>\n</Alerte>',
    },
    {
      titre: 'Avertissement, avec un lien',
      rendu: (
        <Alerte type="avertissement" titre="Devis d'orthodontie de Lucas : il manque le code des actes sur la page 1.">
          <p><Lien vers="EC33">Compléter le devis</Lien> (seule la page 1 est à renvoyer).</p>
        </Alerte>
      ),
      code: '<Alerte type="avertissement" titre="Devis d\'orthodontie de Lucas : il manque le code des actes sur la page 1.">\n  <p><Lien vers="EC33">Compléter le devis</Lien> (seule la page 1 est à renvoyer).</p>\n</Alerte>',
    },
    {
      titre: 'Succès',
      rendu: <Alerte type="succes" titre="Relevé du régime obligatoire reçu le 3 octobre 2026." />,
      code: '<Alerte type="succes" titre="Relevé du régime obligatoire reçu le 3 octobre 2026." />',
    },
    {
      titre: 'Information',
      rendu: <Alerte type="information" titre="Votre carte 2027 est disponible : c'est elle qui s'affiche." />,
      code: '<Alerte type="information" titre="Votre carte 2027 est disponible : c\'est elle qui s\'affiche." />',
    },
  ],
};
