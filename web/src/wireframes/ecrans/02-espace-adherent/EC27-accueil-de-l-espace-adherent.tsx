// EC27 Accueil de l'espace adhérent — lieu (états vide et souscription en cours).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Bouton, Carte, Colonnes, Etiquette, Gabarit, Grille, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC27({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-espace">
      <h1>Bonjour Sylvie</h1>
      <Colonnes>
        <Pile>
          {etat === 'souscription' && (
            <Alerte type="information" titre="Votre souscription Prévoyance n'est pas terminée.">
              <p>Il reste 6 questions de santé. <Bouton vers="EC14" etat="reprise">Reprendre ma souscription</Bouton></p>
            </Alerte>
          )}
          <Bloc titre="En cours pour le foyer">
            {vide ? (
              <p>Aucune démarche en cours. Vos devis, arrêts et demandes s'afficheront ici.</p>
            ) : (
              <Liste>
                <Ligne>
                  <Lien vers="EC48">Arrêt de travail de Jean-Marc : prochain versement le 10 juillet, 1 840 €</Lien>
                  <Etiquette ton="information">En cours</Etiquette>
                </Ligne>
                <Ligne>
                  <Lien vers="EC46">1 pièce attendue : relevé du régime obligatoire</Lien>
                  <Etiquette ton="avertissement">À fournir</Etiquette>
                </Ligne>
                <Ligne>
                  <Lien vers="EC36">Devis d'orthodontie de Lucas : réponse au plus tard le 10 octobre</Lien>
                  <Etiquette ton="information">En étude</Etiquette>
                </Ligne>
              </Liste>
            )}
            <Note n={1} />
          </Bloc>
          <Grille>
            <Carte titre="Ma carte de mutuelle" vers="EC40"><span>À présenter au comptoir</span></Carte>
            <Carte titre="Estimer un soin" vers="EC31"><span>Ce qui restera à payer, en euros</span></Carte>
            <Carte titre="Envoyer un document" vers="EC33"><span>Devis ou pièce, en photo</span></Carte>
          </Grille>
          <p><Lien vers="EC43">Déclarer un arrêt</Lien></p>
        </Pile>
        <Bloc titre="Derniers remboursements">
          {vide ? (
            <p>Aucun remboursement pour l'instant.</p>
          ) : (
            <Liste>
              <Ligne><span>Dentiste, Chloé — 3 sept.</span><strong>49 €</strong></Ligne>
              <Ligne><span>Pharmacie, Jean-Marc — 28 août</span><strong>63,40 €</strong></Ligne>
            </Liste>
          )}
          <p><Lien vers="EC38">Voir mes remboursements</Lien></p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
