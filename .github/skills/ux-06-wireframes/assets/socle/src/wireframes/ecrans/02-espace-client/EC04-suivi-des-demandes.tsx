// EC04 Suivi des demandes — exemple de modèle d'écran (lieu, liste, état vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC04({ etat }: PropsEcran) {
  return (
    <Gabarit zone="espace-client" rubrique="mes-demarches" ariane={[{ libelle: 'Mes demandes' }]}>
      <h1>Mes demandes</h1>
      <Colonnes>
        <Pile>
          <Actions>
            <Bouton variante="principal" vers="EC05">Envoyer une demande</Bouton>
            <Note n={1} />
          </Actions>
          {etat === 'vide' ? (
            <p>Vous n'avez encore envoyé aucune demande. Vos demandes et leur avancement s'afficheront ici.</p>
          ) : (
            <>
              <h2>Dernières demandes</h2>
              <Liste>
                <Ligne>
                  <Lien vers="EC04">Changement d'adresse — 12 sept. 2026</Lien>
                  <span>Traitée le 14 sept. <Etiquette ton="succes">Traitée</Etiquette></span>
                </Ligne>
                <Ligne>
                  <Lien vers="EC04">Attestation annuelle — 3 sept. 2026</Lien>
                  <span>Réponse sous 5 jours <Etiquette ton="information">En cours</Etiquette></span>
                </Ligne>
              </Liste>
            </>
          )}
        </Pile>
        <Bloc titre="Une question ?">
          <p>Le service client vous répond du lundi au vendredi, de 9 h à 18 h.</p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
