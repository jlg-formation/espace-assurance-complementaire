// Modèle de prototype : le wireframe EC04 du socle ux-06, import passé au design system, contenus tirés du jeu de données.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Pile } from '../../../design-system/composants';
import { demandes, type Demande } from '../../donnees/donnees';
import { dateCourte } from '../../donnees/formats';

const statuts = {
  traitee: { libelle: 'Traitée', ton: 'succes' },
  'en-cours': { libelle: 'En cours', ton: 'information' },
  refusee: { libelle: 'Refusée', ton: 'erreur' },
} as const;

const avancement = (d: Demande) =>
  d.reponseLe ? `Réponse le ${dateCourte(d.reponseLe)}` : `Réponse sous ${d.delaiJours} jours`;

export default function EC04({ etat }: PropsEcran) {
  const liste = etat === 'vide' ? [] : demandes;
  return (
    <Gabarit zone="espace-client" rubrique="mes-demarches" ariane={[{ libelle: 'Mes demandes' }]}>
      <h1>Mes demandes</h1>
      <Colonnes>
        <Pile>
          <Actions>
            <Bouton variante="principal" vers="EC05">Envoyer une demande</Bouton>
          </Actions>
          {liste.length === 0 ? (
            <p>Vous n'avez encore envoyé aucune demande. Vos demandes et leur avancement s'afficheront ici.</p>
          ) : (
            <>
              <h2>Dernières demandes</h2>
              <Liste>
                {liste.map((d) => (
                  <Ligne key={d.id}>
                    <Lien vers="EC04">{d.objet} — {dateCourte(d.envoyeeLe)}</Lien>
                    <span>
                      {avancement(d)} <Etiquette ton={statuts[d.statut].ton}>{statuts[d.statut].libelle}</Etiquette>
                    </span>
                  </Ligne>
                ))}
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
