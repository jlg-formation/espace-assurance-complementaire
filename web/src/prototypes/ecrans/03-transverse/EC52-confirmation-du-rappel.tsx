// EC52 Confirmation du rappel — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { adherent, rappel } from '../../donnees/donnees';

export default function EC52(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Rappel confirmé' }]}>
      <h1>Rappel confirmé : {rappel.creneau.jour}, entre {rappel.creneau.plage.replace(' - ', ' et ')}</h1>
      <Pile>
        <Alerte type="succes" titre={`Un conseiller vous appellera au ${adherent.telephoneMasque}.`}>
          <p>Il aura votre dossier d'arrêt sous les yeux : vous n'aurez pas à tout réexpliquer.</p>
        </Alerte>
        <p><Lien vers="EC51">Changer de créneau</Lien></p>
        <p><Lien vers="EC27">Retour à mon espace</Lien></p>
      </Pile>
    </Gabarit>
  );
}
