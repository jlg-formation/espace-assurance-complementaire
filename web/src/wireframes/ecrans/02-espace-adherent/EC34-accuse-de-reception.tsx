// EC34 Accusé de réception — contextuel de EC33 (états pièce, question).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Gabarit, Lien, Pile } from '../../kit/kit';

export default function EC34({ etat }: PropsEcran) {
  if (etat === 'piece') {
    return (
      <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: 'Accusé de réception' }]}>
        <h1>Pièce bien reçue</h1>
        <Pile>
          <Alerte type="succes" titre="Relevé du régime obligatoire reçu le 3 octobre 2026.">
            <p>Il sera vérifié sous 2 jours ouvrés. Vous serez prévenue s'il ne convient pas.</p>
          </Alerte>
          <Actions><Bouton variante="principal" vers="EC46">Voir mon dossier d'arrêt</Bouton></Actions>
        </Pile>
      </Gabarit>
    );
  }
  const question = etat === 'question';
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Accusé de réception' }]}>
      <h1>{question ? 'Question bien reçue' : 'Devis bien reçu'}</h1>
      <Pile>
        <Alerte
          type="succes"
          titre={question ? 'Question envoyée le 3 octobre 2026 : réponse sous 2 jours ouvrés, au plus tard le 7 octobre.' : 'Devis d’orthodontie de Lucas reçu le 3 octobre 2026 (3 pages) : réponse au plus tard le 10 octobre.'}
        />
        <Actions><Bouton variante="principal" vers="EC36">Suivre mes demandes</Bouton></Actions>
        <p><Lien vers="EC27">Retour à mon espace</Lien></p>
      </Pile>
    </Gabarit>
  );
}
