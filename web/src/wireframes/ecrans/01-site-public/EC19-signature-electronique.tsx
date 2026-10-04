// EC19 Signature électronique — contextuel de EC18 (état code non reçu).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

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
          libelle={nonRecu ? 'Code reçu par e-mail' : 'Code reçu par SMS au 06 •• •• •• 42'}
          aide="6 chiffres, valable 15 minutes"
          obligatoire
        />
        <Actions>
          <Bouton variante="principal" vers="EC20">Signer</Bouton>
        </Actions>
        {!nonRecu && <p><Lien vers="EC19" etat="code-non-recu">Je n'ai pas reçu le code</Lien> <Note n={1} /></p>}
        <p>Vous préférez finir avec un conseiller ? <Lien vers="EC51">Être rappelé</Lien></p>
      </Pile>
    </Gabarit>
  );
}
