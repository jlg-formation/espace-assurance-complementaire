// Modèle de prototype : le wireframe EC04 du socle ux-06, import passé au design system, contenus tirés du jeu de données.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Pile } from '../../../design-system/composants';
import { remboursements } from '../../donnees/donnees';
import { dateCourte, euros } from '../../donnees/formats';

const statuts = {
  paye: { libelle: 'Payé', ton: 'succes' },
  'en-cours': { libelle: 'En cours', ton: 'information' },
  refuse: { libelle: 'Refusé', ton: 'erreur' },
} as const;

export default function EC04({ etat }: PropsEcran) {
  const liste = etat === 'vide' ? [] : remboursements;
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-soins" ariane={[{ libelle: 'Mes remboursements' }]}>
      <h1>Mes remboursements</h1>
      <Colonnes>
        <Pile>
          <Actions>
            <Bouton variante="principal" vers="EC05">Envoyer une facture</Bouton>
          </Actions>
          {liste.length === 0 ? (
            <p>Vous n'avez encore aucun remboursement. Envoyez votre première facture pour suivre son traitement ici.</p>
          ) : (
            <>
              <h2>Derniers remboursements</h2>
              <Liste>
                {liste.map((r) => (
                  <Ligne key={r.id}>
                    <Lien vers="EC04">{r.acte} — {dateCourte(r.date)}</Lien>
                    <span>
                      {r.rembourse === null ? 'En attente' : euros(r.rembourse)}{' '}
                      <Etiquette ton={statuts[r.statut].ton}>{statuts[r.statut].libelle}</Etiquette>
                    </span>
                  </Ligne>
                ))}
              </Liste>
            </>
          )}
        </Pile>
        <Bloc titre="Une question ?">
          <p>Un conseiller vous répond du lundi au vendredi, de 9 h à 18 h.</p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
