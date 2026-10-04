// EC02 Formules santé en euros — prototype (état non couvert).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Champ, Colonnes, Etiquette, Gabarit, Pile, RecoursHumain, Repli } from '../../../design-system/composants';
import { formulesSante, resteACharge, soinsDeReference } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

const libelleSoin = (s: (typeof soinsDeReference)[number]) =>
  `${s.libelle} — ${euros(s.prix)}${s.id === 'chambre' ? ' par nuit' : ''}`;

export default function EC02({ etat }: PropsEcran) {
  const nonCouvert = etat === 'non-couvert';
  const soin = soinsDeReference.find((s) => s.id === (nonCouvert ? 'implant' : 'couronne'))!;
  return (
    <Gabarit zone="site-public" rubrique="mutuelle-sante" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Mutuelle santé' }]}>
      <h1>Mutuelle santé : ce que chaque formule vous rembourse</h1>
      <Colonnes>
        <Pile>
          <Champ id="soin" libelle="Choisissez un soin" options={soinsDeReference.map(libelleSoin)} valeur={libelleSoin(soin)} />
          <h2>Pour {soin.libelle.toLowerCase().replace('couronne', 'une couronne').replace('implant', 'un implant')} à {euros(soin.prix)}</h2>
          {formulesSante.map((f) => {
            const rembourse = soin.rembourse[f.id];
            return (
              <Bloc key={f.id} titre={`${f.nom} — ${euros(f.cotisation2Personnes)} par mois`} niveau={3}>
                {rembourse === undefined ? (
                  <p><Etiquette ton="erreur">Non couvert</Etiquette> Cette formule ne rembourse pas les implants : <strong>{euros(soin.prix)} à votre charge</strong>.</p>
                ) : (
                  <p>Remboursé : {euros(rembourse)} · <strong>Reste à votre charge : {euros(resteACharge(soin, f.id))}</strong></p>
                )}
              </Bloc>
            );
          })}
          <Actions>
            <Bouton variante="principal" vers="EC06">Obtenir un tarif pour cette formule</Bouton>
          </Actions>
          <Repli titre="Voir toutes les garanties (tableau détaillé)">
            <p>Garanties exprimées en pourcentage de la base de remboursement, poste par poste : soins courants, hospitalisation, optique, dentaire, audiologie. Chaque ligne indique aussi un exemple en euros.</p>
          </Repli>
        </Pile>
        <Pile>
          <Bloc titre="Base de remboursement : de quoi parle-t-on ?">
            <p>C'est le tarif fixé par l'Assurance Maladie pour un soin. « 100 % de la base de remboursement » ne veut pas dire que tout ce que vous payez est remboursé.</p>
          </Bloc>
          <RecoursHumain question="Vous préférez qu'on vous explique ?" />
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
