// EC36 Suivi de mes demandes — lieu (états vide, retard, élément manquant).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Etiquette, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC36({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes' }]}>
      <h1>Mes demandes</h1>
      <Pile>
        <Actions>
          <Bouton variante="principal" vers="EC33">Envoyer un document</Bouton>
        </Actions>
        {etat === 'manquant' && (
          <Alerte type="avertissement" titre="Devis d'orthodontie de Lucas : il manque le code des actes sur la page 1.">
            <p><Lien vers="EC33">Compléter le devis</Lien> (seule la page 1 est à renvoyer).</p>
          </Alerte>
        )}
        {vide ? (
          <p>Vous n'avez encore envoyé aucun devis ni aucune question. Ils s'afficheront ici avec leur délai de réponse.</p>
        ) : (
          <Liste>
            <Ligne>
              {etat === 'retard' ? (
                <span>Devis d'orthodontie de Lucas — envoyé le 3 oct. — <strong>réponse retardée au 17 oct. : avis de notre dentiste-conseil en cours</strong></span>
              ) : (
                <Lien vers="EC37">Devis d'orthodontie de Lucas — envoyé le 3 oct. 2026</Lien>
              )}
              <Etiquette ton={etat === 'retard' ? 'avertissement' : 'succes'}>{etat === 'retard' ? 'Retardée' : 'Réponse disponible'}</Etiquette>
            </Ligne>
            <Ligne>
              <span>Question : attestation de cotisations 2025 — envoyée le 1er oct., réponse sous 2 jours ouvrés</span>
              <Etiquette ton="information">En cours</Etiquette>
            </Ligne>
            <Ligne>
              <span>Devis de lunettes de Chloé — 12 juin 2026</span>
              <Etiquette ton="neutre">Terminée</Etiquette>
            </Ligne>
          </Liste>
        )}
        <Note n={1} />
        <p><Lien vers="EC53">Poser une question</Lien></p>
      </Pile>
    </Gabarit>
  );
}
