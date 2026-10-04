// EC07 Tarifs des formules — contextuel de EC06.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Lien, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC07(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Tarifs' }]}>
      <h1>Vos tarifs pour 2 personnes</h1>
      <Pile>
        <p>Mutuelle santé, pour vous et votre enfant de 4 ans, à Toulouse.</p>
        <Liste>
          <Ligne><span>Essentielle</span><strong>22,40 € par mois</strong></Ligne>
          <Ligne><span>Confort</span><strong>38,90 € par mois</strong></Ligne>
          <Ligne><span>Renfort</span><strong>56,10 € par mois</strong></Ligne>
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC08">Trouver la formule adaptée à mes besoins</Bouton>
        </Actions>
        <p><Lien vers="EC10">Recevoir ce devis par e-mail</Lien></p>
        <p>Vous préférez choisir avec quelqu'un ? <Lien vers="EC51">Être rappelé</Lien></p>
      </Pile>
    </Gabarit>
  );
}
