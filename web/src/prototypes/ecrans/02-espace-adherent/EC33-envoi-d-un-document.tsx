// EC33 Envoi d'un document — prototype (états arret, piece, reprise, prolongation).
import type { PropsEcran } from '../../../projet/ui';
import type { EcranId } from '../../../projet/ecrans';
import { Actions, Bloc, Bouton, Champ, Gabarit, Pile, RecoursHumain, Repli } from '../../../design-system/composants';
import { arret, clarea, devisOrthodontie } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

const dossier = `Arrêt de ${arret.personne} du ${date(arret.debut)}`;

const contextes: Record<string, { titre: string; type: string; pour: string; suivant: EcranId; suivantEtat?: string; rubrique: string }> = {
  nominal: { titre: 'Envoyer un document', type: 'Devis d’un praticien', pour: `${devisOrthodontie.beneficiaire} (${devisOrthodontie.ageBeneficiaire} ans)`, suivant: 'EC34', rubrique: 'mes-demandes' },
  arret: { titre: 'Joindre les pièces de la déclaration', type: 'Avis d’arrêt de travail', pour: dossier, suivant: 'EC45', rubrique: 'mon-arret' },
  piece: { titre: 'Ajouter une pièce au dossier', type: 'Relevé des indemnités du régime obligatoire', pour: dossier, suivant: 'EC34', suivantEtat: 'piece', rubrique: 'mon-arret' },
  reprise: { titre: 'Joindre le certificat de reprise', type: 'Certificat de reprise à temps partiel thérapeutique', pour: dossier, suivant: 'EC48', suivantEtat: 'reprise', rubrique: 'mon-arret' },
  prolongation: { titre: 'Joindre l’avis de prolongation', type: 'Avis de prolongation d’arrêt', pour: dossier, suivant: 'EC48', rubrique: 'mon-arret' },
};

export default function EC33({ etat }: PropsEcran) {
  const c = contextes[etat] ?? contextes.nominal;
  const arretEnCours = c.rubrique === 'mon-arret';
  return (
    <Gabarit
      zone="espace-adherent"
      rubrique={c.rubrique}
      ariane={arretEnCours
        ? [{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: c.titre }]
        : [{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Envoyer un document' }]}
    >
      <h1>{c.titre}</h1>
      <Pile>
        <Champ id="type" libelle="Quel document ?" options={[...new Set([c.type, 'Devis d’un praticien', 'Pièce pour un arrêt de travail', 'Autre document'])]} valeur={c.type} obligatoire />
        <Champ id="pour" libelle={arretEnCours ? 'Pour quel dossier ?' : 'Pour qui ?'} options={[c.pour]} obligatoire />
        <Champ
          id="fichiers"
          libelle="Photos ou PDF"
          type="file"
          aide={`Prenez chaque page en photo. Vous pouvez ajouter plusieurs pages : ${devisOrthodontie.pages} pages ajoutées.`}
          obligatoire
        />
        <p>Les pièces médicales ne sont lues que par notre médecin-conseil.</p>
        <Repli titre="Conseils pour une photo lisible">
          <p>Posez le document à plat, en pleine lumière, sans ombre ; cadrez la page entière.</p>
        </Repli>
        <Actions>
          <Bouton variante="principal" vers={c.suivant} etat={c.suivantEtat}>Envoyer</Bouton>
        </Actions>
        <Bloc titre="Autre moyen : par courrier" niveau={2}>
          <p>{clarea.adressePostale}. Vous recevrez un accusé de réception dès son arrivée.</p>
          <RecoursHumain />
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
