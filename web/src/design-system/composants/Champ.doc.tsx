import type { DocComposant } from '../doc';
import { Champ } from './Champ';

export const doc: DocComposant = {
  numero: '03',
  nom: 'Champ',
  role: "Recueillir une information : libellé toujours visible, aide avant le champ, erreur sous le champ avec la correction attendue.",
  fiche: 'docs/08-design-system/composants/03-champ.component.md',
  exemples: [
    {
      titre: 'Texte obligatoire avec aide (focus : tabuler)',
      rendu: <Champ id="doc-identifiant" libelle="Identifiant" aide="Votre adresse e-mail ou votre numéro d'adhérent" obligatoire />,
      code: '<Champ id="identifiant" libelle="Identifiant" aide="Votre adresse e-mail ou votre numéro d\'adhérent" obligatoire />',
    },
    {
      titre: 'Erreur',
      rendu: <Champ id="doc-mdp" libelle="Mot de passe" type="password" erreur="Mot de passe incorrect. Il vous reste 4 essais." obligatoire />,
      code: '<Champ id="mdp" libelle="Mot de passe" type="password" erreur="Mot de passe incorrect. Il vous reste 4 essais." obligatoire />',
    },
    {
      titre: "Liste d'options",
      rendu: <Champ id="doc-situation" libelle="Situation" options={['Reprise à temps partiel thérapeutique', "Prolongation de l'arrêt", 'Autre situation']} />,
      code: '<Champ id="situation" libelle="Situation" options={[\'Reprise à temps partiel thérapeutique\', \'Prolongation de l\\\'arrêt\', \'Autre situation\']} />',
    },
    {
      titre: 'Date',
      rendu: <Champ id="doc-debut" libelle="Date de début de l'arrêt" type="date" valeur="2026-05-12" />,
      code: '<Champ id="debut" libelle="Date de début de l\'arrêt" type="date" valeur="2026-05-12" />',
    },
    {
      titre: 'Fichier',
      rendu: <Champ id="doc-pages" libelle="Pages du devis" type="file" aide="Photo ou PDF, une page par fichier" obligatoire />,
      code: '<Champ id="pages" libelle="Pages du devis" type="file" aide="Photo ou PDF, une page par fichier" obligatoire />',
    },
    {
      titre: 'Zone de texte',
      rendu: <Champ id="doc-question" libelle="Votre question" type="textarea" obligatoire />,
      code: '<Champ id="question" libelle="Votre question" type="textarea" obligatoire />',
    },
  ],
};
