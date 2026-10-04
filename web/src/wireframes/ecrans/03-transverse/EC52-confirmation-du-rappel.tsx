// EC52 Confirmation du rappel — contextuel de EC51.
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Gabarit, Lien, Pile } from '../../kit/kit';

export default function EC52(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Rappel confirmé' }]}>
      <h1>Rappel confirmé : mardi 7 octobre, entre 14 h et 16 h</h1>
      <Pile>
        <Alerte type="succes" titre="Un conseiller vous appellera au 06 •• •• •• 17.">
          <p>Il aura votre dossier d'arrêt sous les yeux : vous n'aurez pas à tout réexpliquer.</p>
        </Alerte>
        <p><Lien vers="EC51">Changer de créneau</Lien></p>
        <p><Lien vers="EC27">Retour à mon espace</Lien></p>
      </Pile>
    </Gabarit>
  );
}
