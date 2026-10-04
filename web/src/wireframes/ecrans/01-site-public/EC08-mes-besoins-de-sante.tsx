// EC08 Mes besoins de santé — contextuel de EC07, recueil des besoins (devoir de conseil).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Champ, Gabarit, Note, Pile } from '../../kit/kit';

const frequences = ['Pas de besoin', 'Pour moi', 'Pour mon enfant', 'Pour nous deux'];

export default function EC08(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Mes besoins' }]}>
      <h1>Quels soins comptent pour votre foyer ?</h1>
      <Pile>
        <p>Quatre questions pour vous conseiller une formule. <Note n={1} /></p>
        <Champ id="lunettes" libelle="Lunettes ou lentilles" options={frequences} valeur="Pour mon enfant" />
        <Champ id="dentaire" libelle="Soins dentaires prévus (couronne, appareil)" options={frequences} valeur="Pour moi" />
        <Champ id="specialistes" libelle="Consultations de spécialistes" options={frequences} />
        <Champ id="hospitalisation" libelle="Hospitalisation prévue" options={frequences} />
        <Actions>
          <Bouton variante="principal" vers="EC09">Voir la formule conseillée</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
