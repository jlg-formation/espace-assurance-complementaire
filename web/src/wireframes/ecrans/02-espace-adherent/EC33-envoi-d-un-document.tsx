// EC33 Envoi d'un document — lieu, devis ou pièce (états arret, piece, reprise, prolongation).
import type { PropsEcran } from '../../../projet/ui';
import type { EcranId } from '../../../projet/ecrans';
import { Actions, Bloc, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

const contextes: Record<string, { titre: string; type: string; pour: string; suivant: EcranId; suivantEtat?: string; rubrique: string }> = {
  nominal: { titre: 'Envoyer un document', type: 'Devis d’un praticien', pour: 'Lucas (14 ans)', suivant: 'EC34', rubrique: 'mes-demandes' },
  arret: { titre: 'Joindre les pièces de la déclaration', type: 'Avis d’arrêt de travail', pour: 'Arrêt de Jean-Marc du 12 mai 2026', suivant: 'EC45', rubrique: 'mon-arret' },
  piece: { titre: 'Ajouter une pièce au dossier', type: 'Relevé des indemnités du régime obligatoire', pour: 'Arrêt de Jean-Marc du 12 mai 2026', suivant: 'EC34', suivantEtat: 'piece', rubrique: 'mon-arret' },
  reprise: { titre: 'Joindre le certificat de reprise', type: 'Certificat de reprise à temps partiel thérapeutique', pour: 'Arrêt d’Hélène du 6 janvier 2026', suivant: 'EC48', suivantEtat: 'reprise', rubrique: 'mon-arret' },
  prolongation: { titre: 'Joindre l’avis de prolongation', type: 'Avis de prolongation d’arrêt', pour: 'Arrêt d’Hélène du 6 janvier 2026', suivant: 'EC48', rubrique: 'mon-arret' },
};

export default function EC33({ etat }: PropsEcran) {
  const c = contextes[etat] ?? contextes.nominal;
  const arret = c.rubrique === 'mon-arret';
  return (
    <Gabarit
      zone="espace-adherent"
      rubrique={c.rubrique}
      ariane={arret
        ? [{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: c.titre }]
        : [{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Envoyer un document' }]}
    >
      <h1>{c.titre}</h1>
      <Pile>
        <Champ id="type" libelle="Quel document ?" options={[...new Set([c.type, 'Devis d’un praticien', 'Pièce pour un arrêt de travail', 'Autre document'])]} valeur={c.type} obligatoire />
        <Champ id="pour" libelle={arret ? 'Pour quel dossier ?' : 'Pour qui ?'} options={[c.pour]} obligatoire />
        <Champ id="fichiers" libelle="Photos ou PDF" type="file" aide="Prenez chaque page en photo. Vous pouvez ajouter plusieurs pages : 3 pages ajoutées." obligatoire />
        <Note n={1} />
        <p>Les pièces médicales ne sont lues que par notre médecin-conseil. <Note n={2} /></p>
        <details>
          <summary>Conseils pour une photo lisible</summary>
          <p>Posez le document à plat, en pleine lumière, sans ombre ; cadrez la page entière.</p>
        </details>
        <Actions>
          <Bouton variante="principal" vers={c.suivant} etat={c.suivantEtat}>Envoyer</Bouton>
        </Actions>
        <Bloc titre="Autre moyen : par courrier" niveau={2}>
          <p>Clarea Assurances, Service des prestations, TSA 40000, 75000 Paris. Vous recevrez un accusé de réception dès son arrivée.</p>
          <p>Besoin d'aide ? <Lien vers="EC51">Être rappelé</Lien></p>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
