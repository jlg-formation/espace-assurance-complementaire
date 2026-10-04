// EC24 Création du mot de passe — contextuel de EC23.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Champ, Gabarit, Pile } from '../../kit/kit';

export default function EC24(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Se connecter', vers: 'EC23' }, { libelle: 'Créer mon mot de passe' }]}>
      <h1>Créer mon mot de passe</h1>
      <Pile>
        <Champ id="nouveau" libelle="Nouveau mot de passe" type="password" aide="12 caractères au moins, dont un chiffre" obligatoire />
        <Champ id="confirmation" libelle="Confirmer le mot de passe" type="password" obligatoire />
        <Actions><Bouton variante="principal" vers="EC25">Continuer</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
