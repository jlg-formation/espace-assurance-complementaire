// EC32 Résultat de l'estimation — prototype (états enfant, fourchette).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, LigneValeur, Liste, Pile, Repli } from '../../../design-system/composants';
import { contrats, estimations, resteEstimation } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

const { couronne, lunettes } = estimations;

export default function EC32({ etat }: PropsEcran) {
  const enfant = etat === 'enfant';
  const fourchette = etat === 'fourchette';
  const e = enfant ? lunettes : couronne;
  const titre = enfant
    ? `Lunettes de ${lunettes.pour} à ${euros(lunettes.prix)} : il vous resterait ${euros(resteEstimation(lunettes))}`
    : fourchette
      ? `Couronne dentaire à ${euros(couronne.prix)} : il vous resterait entre ${euros(couronne.fourchette[0])} et ${euros(couronne.fourchette[1])}`
      : `Couronne dentaire à ${euros(couronne.prix)} : il vous resterait ${euros(resteEstimation(couronne))}`;
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Estimer un soin', vers: 'EC31' }, { libelle: 'Résultat' }]}>
      <h1>{titre}</h1>
      <Pile>
        {fourchette ? (
          <Alerte type="information" titre="Sans le code de l'acte, nous ne pouvons donner qu'une fourchette.">
            <p>Envoyez le devis pour une réponse exacte, sous 5 jours ouvrés.</p>
          </Alerte>
        ) : (
          <Bloc titre="Répartition">
            <Liste>
              <LigneValeur libelle="Assurance Maladie">{euros(e.assuranceMaladie)}</LigneValeur>
              <LigneValeur libelle={`Votre mutuelle (${contrats.sante.nom.replace('Mutuelle santé ', '')})`}>{euros(e.mutuelle)}</LigneValeur>
              <LigneValeur libelle="Reste à votre charge" total>{euros(resteEstimation(e))}</LigneValeur>
            </Liste>
            {enfant && (
              <p>
                Plafond lunettes de {lunettes.pour} pour 2026 : {euros(lunettes.plafond - lunettes.plafondUtilise)} restants sur {euros(lunettes.plafond)} ({euros(lunettes.plafondUtilise)} déjà utilisés en {lunettes.utiliseEn}).
              </p>
            )}
          </Bloc>
        )}
        <p>Estimation à partir des tarifs connus ; le montant exact dépend de la facture.</p>
        <Repli titre="Reste à charge : de quoi parle-t-on ?">
          <p>Ce que vous payez vous-même après les remboursements de l'Assurance Maladie et de votre mutuelle.</p>
        </Repli>
        <Actions>
          {fourchette
            ? <Bouton variante="principal" vers="EC33">Envoyer le devis pour une réponse exacte</Bouton>
            : <Bouton vers="EC33">Envoyer le devis pour une réponse exacte</Bouton>}
        </Actions>
        <p><Lien vers="EC31">Estimer un autre soin</Lien></p>
      </Pile>
    </Gabarit>
  );
}
