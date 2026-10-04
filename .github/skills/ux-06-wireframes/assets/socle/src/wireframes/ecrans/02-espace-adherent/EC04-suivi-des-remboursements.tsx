// EC04 Suivi des remboursements — exemple de modèle d'écran (lieu, liste, état vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC04({ etat }: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-soins" ariane={[{ libelle: 'Mes remboursements' }]}>
      <h1>Mes remboursements</h1>
      <Colonnes>
        <Pile>
          <Actions>
            <Bouton variante="principal" vers="EC05">Envoyer une facture</Bouton>
            <Note n={1} />
          </Actions>
          {etat === 'vide' ? (
            <p>Vous n'avez encore aucun remboursement. Envoyez votre première facture pour suivre son traitement ici.</p>
          ) : (
            <>
              <h2>Derniers remboursements</h2>
              <Liste>
                <Ligne>
                  <Lien vers="EC04">Consultation généraliste — 12 sept. 2026</Lien>
                  <span>18,55 € <Etiquette ton="succes">Payé</Etiquette></span>
                </Ligne>
                <Ligne>
                  <Lien vers="EC04">Pharmacie — 3 sept. 2026</Lien>
                  <span>En attente <Etiquette ton="information">En cours</Etiquette></span>
                </Ligne>
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
