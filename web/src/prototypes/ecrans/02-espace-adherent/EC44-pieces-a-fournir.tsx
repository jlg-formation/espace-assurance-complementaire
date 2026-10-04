// EC44 Pièces à fournir — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Ligne, Liste, Pile } from '../../../design-system/composants';
import { arret, pieces } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

export default function EC44(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Déclarer un arrêt', vers: 'EC43' }, { libelle: 'Pièces à fournir' }]}>
      <h1>Les {pieces.length} pièces à fournir</h1>
      <Pile>
        <p>Date limite d'envoi : {date(arret.dateLimitePieces)}. Envoyez celles que vous avez ; les autres pourront être ajoutées plus tard depuis votre dossier.</p>
        <Liste>
          {pieces.map((p) => (
            <Ligne key={p.libelle}><span>{p.libelle}</span><span>{p.ouLObtenir}</span></Ligne>
          ))}
        </Liste>
        <Actions><Bouton variante="principal" vers="EC33" etat="arret">Joindre les pièces</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
