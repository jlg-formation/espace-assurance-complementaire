// EC17 Proposition avec exclusion ou surprime — prototype (état refusé).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, Pile, RecoursHumain } from '../../../design-system/composants';
import { souscriptionPrevoyance } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

export default function EC17({ etat }: PropsEcran) {
  const refuse = etat === 'refuse';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Notre proposition' }]}>
      <h1>{refuse ? 'Proposition refusée' : 'Notre proposition, après étude de vos réponses'}</h1>
      <Pile>
        {refuse ? (
          <>
            <Alerte type="succes" titre="Vous n'êtes engagée à rien et vous ne payez rien." />
            <p><Lien vers="EC01">Retour à l'accueil</Lien></p>
          </>
        ) : (
          <>
            <Bloc titre="Exclusion : troubles du dos">
              <p>Aucune indemnité pour un arrêt ou une invalidité dus à une hernie discale, une lombalgie ou une sciatique.</p>
              <p>Tous les autres arrêts restent couverts : accident, maladie, opération.</p>
            </Bloc>
            <Bloc titre="Votre cotisation">
              <p>{euros(souscriptionPrevoyance.tarifDevis)} par mois, sans surprime.</p>
            </Bloc>
            <Actions>
              <Bouton variante="principal" vers="EC18">Accepter et continuer</Bouton>
              <Bouton vers="EC17" etat="refuse">Refuser, sans frais</Bouton>
            </Actions>
            <RecoursHumain question="Une question sur cette exclusion ?" />
          </>
        )}
      </Pile>
    </Gabarit>
  );
}
