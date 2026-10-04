// EC46 Dossier d'arrêt — lieu (états pièce refusée, expertise, vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC46({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Mon espace', vers: 'EC27' as const }, { libelle: 'Mon arrêt de travail', vers: 'EC46' as const }, { libelle: "Mon dossier d'arrêt" }];
  const sousNav = <p><Lien vers="EC43">Déclarer un arrêt</Lien> · <Lien vers="EC48">Mes indemnités</Lien></p>;
  if (etat === 'vide') {
    return (
      <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={ariane}>
        <h1>Mon dossier d'arrêt</h1>
        {sousNav}
        <p>Aucun arrêt de travail en cours.</p>
        <Actions><Bouton variante="principal" vers="EC43">Déclarer un arrêt</Bouton></Actions>
      </Gabarit>
    );
  }
  const refusee = etat === 'refusee';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={ariane}>
      <h1>Arrêt de Jean-Marc depuis le 12 mai 2026</h1>
      {sousNav}
      <Colonnes>
        <Pile>
          {refusee ? (
            <Alerte type="erreur" titre="Relevé du régime obligatoire refusé : il ne couvre que le mois de mai.">
              <p>Envoyez un relevé couvrant la période du 12 mai au 30 juin.</p>
            </Alerte>
          ) : (
            <Alerte type="avertissement" titre="1 pièce attendue : relevé des indemnités du régime obligatoire." />
          )}
          <Actions><Bouton variante="principal" vers="EC33" etat="piece">Ajouter une pièce</Bouton></Actions>
          <Bloc titre="Pièces du dossier">
            <Liste>
              <Ligne><span>Avis d'arrêt de travail — 14 mai</span><Etiquette ton="succes">Acceptée</Etiquette></Ligne>
              <Ligne><span>Compte rendu opératoire — 14 mai</span><Etiquette ton="succes">Acceptée</Etiquette></Ligne>
              <Ligne><span>Déclaration de revenus 2025 — 14 mai</span><Etiquette ton="succes">Acceptée</Etiquette></Ligne>
              <Ligne><span>RIB — 14 mai</span><Etiquette ton="succes">Acceptée</Etiquette></Ligne>
              <Ligne>
                <span>Relevé du régime obligatoire{refusee ? ' — 2 juin' : ''}</span>
                <Etiquette ton={refusee ? 'erreur' : 'avertissement'}>{refusee ? 'Refusée' : 'Attendue'}</Etiquette>
              </Ligne>
            </Liste>
            <Note n={1} />
          </Bloc>
          <p><Bouton vers="EC47">Déclarer un changement</Bouton> <Note n={2} /></p>
        </Pile>
        <Pile>
          <Bloc titre="Prochain versement">
            <p><strong>10 juillet 2026 — 1 840 €</strong></p>
            <p><Lien vers="EC48">Voir mes indemnités</Lien></p>
          </Bloc>
          {etat === 'expertise' && (
            <Bloc titre="Étape à venir : expertise médicale">
              <p>Jean-Marc est convoqué le 4 septembre 2026. Ses indemnités continuent pendant l'examen.</p>
              <p><Lien vers="EC49">Comprendre l'expertise</Lien></p>
            </Bloc>
          )}
          <p>Une question sur le dossier ? <Lien vers="EC51">Être rappelé</Lien></p>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
