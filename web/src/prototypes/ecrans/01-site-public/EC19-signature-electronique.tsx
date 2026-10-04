// EC19 Signature électronique — prototype (état code non reçu).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile, RecoursHumain } from '../../../design-system/composants';
import { prospect } from '../../donnees/donnees';

export default function EC19({ etat }: PropsEcran) {
  const nonRecu = etat === 'code-non-recu';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Signer mon contrat' }]}>
      <h1>Signer mon contrat</h1>
      <Pile>
        {nonRecu && (
          <Alerte type="information" titre="Nouveau code envoyé par e-mail à votre adresse.">
            <p>Il est valable 15 minutes. Les informations déjà saisies sont conservées.</p>
          </Alerte>
        )}
        <Champ
          id="code"
          libelle={nonRecu ? 'Code reçu par e-mail' : `Code reçu par SMS au ${prospect.telephoneMasque}`}
          aide="6 chiffres, valable 15 minutes"
          obligatoire
        />
        <Actions>
          <Bouton variante="principal" vers="EC20">Signer</Bouton>
        </Actions>
        {!nonRecu && <p><Lien vers="EC19" etat="code-non-recu">Je n'ai pas reçu le code</Lien></p>}
        <RecoursHumain question="Vous préférez finir avec un conseiller ?" />
      </Pile>
    </Gabarit>
  );
}
