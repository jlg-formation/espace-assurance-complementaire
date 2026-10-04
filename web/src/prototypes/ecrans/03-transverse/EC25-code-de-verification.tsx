// EC25 Code de vérification — prototype (état code renvoyé).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { adherent } from '../../donnees/donnees';

export default function EC25({ etat }: PropsEcran) {
  const renvoye = etat === 'renvoye';
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Se connecter', vers: 'EC23' }, { libelle: 'Code de vérification' }]}>
      <h1>Confirmer que c'est bien vous</h1>
      <Pile>
        {renvoye && <Alerte type="information" titre="Nouveau code envoyé par e-mail à votre adresse." />}
        <Champ id="code" libelle={renvoye ? 'Code reçu par e-mail' : `Code reçu par SMS au ${adherent.telephoneMasque}`} aide="6 chiffres, valable 15 minutes" obligatoire />
        <Champ id="memoriser" libelle="Se souvenir de cet appareil" options={['Oui, pendant 90 jours', 'Non']} />
        <p>Sur un appareil mémorisé, vous n'aurez plus de code à saisir pendant 90 jours.</p>
        <Actions><Bouton variante="principal" vers="EC27">Valider</Bouton></Actions>
        {!renvoye && <p><Lien vers="EC25" etat="renvoye">Je n'ai pas reçu le code</Lien></p>}
      </Pile>
    </Gabarit>
  );
}
