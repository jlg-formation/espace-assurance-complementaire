// EC20 Paiement — contextuel de EC19, autorisation de prélèvement.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC20(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Paiement' }]}>
      <h1>Paiement de votre cotisation</h1>
      <Pile>
        <p>38,90 € par mois, prélevés à partir du 5 novembre 2026.</p>
        <Champ id="titulaire" libelle="Titulaire du compte" obligatoire />
        <Champ id="iban" libelle="IBAN" aide="27 caractères, commence par FR" obligatoire />
        <Champ id="jour" libelle="Jour de prélèvement" options={['5 du mois', '10 du mois', '15 du mois']} />
        <Actions>
          <Bouton variante="principal" vers="EC22">Autoriser le prélèvement</Bouton>
          <Note n={1} />
        </Actions>
        <p><Lien vers="EC21">Exemple : prélèvement refusé</Lien> <Note n={2} /></p>
      </Pile>
    </Gabarit>
  );
}
