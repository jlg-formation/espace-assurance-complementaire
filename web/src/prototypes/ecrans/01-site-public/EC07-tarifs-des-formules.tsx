// EC07 Tarifs des formules — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Lien, LigneValeur, Liste, Pile, RecoursHumain } from '../../../design-system/composants';
import { formulesSante, prospect } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

export default function EC07(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Tarifs' }]}>
      <h1>Vos tarifs pour 2 personnes</h1>
      <Pile>
        <p>Mutuelle santé, pour vous et votre enfant de {prospect.enfant.age} ans, à {prospect.ville}.</p>
        <Liste>
          {formulesSante.map((f) => (
            <LigneValeur key={f.id} libelle={f.nom}>{euros(f.cotisation2Personnes)} par mois</LigneValeur>
          ))}
        </Liste>
        <Actions>
          <Bouton variante="principal" vers="EC08">Trouver la formule adaptée à mes besoins</Bouton>
        </Actions>
        <p><Lien vers="EC10">Recevoir ce devis par e-mail</Lien></p>
        <RecoursHumain question="Vous préférez choisir avec quelqu'un ?" />
      </Pile>
    </Gabarit>
  );
}
