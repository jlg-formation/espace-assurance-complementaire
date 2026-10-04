// EC09 Formule recommandée — prototype (états prévoyance et autre formule).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { formulesPrevoyance, formulesSante, prospect, resteACharge, soinsDeReference, souscriptionPrevoyance } from '../../donnees/donnees';
import { euros } from '../../donnees/formats';

const lunettes = soinsDeReference.find((s) => s.id === 'lunettes')!;
const couronne = soinsDeReference.find((s) => s.id === 'couronne')!;
const formule = (id: string) => formulesSante.find((f) => f.id === id)!;

export default function EC09({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Accueil', vers: 'EC01' as const }, { libelle: 'Obtenir un tarif', vers: 'EC06' as const }, { libelle: 'Formule recommandée' }];
  if (etat === 'prevoyance') {
    const confort = formulesPrevoyance.confort;
    return (
      <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
        <h1>Nous vous conseillons la Prévoyance Confort</h1>
        <Pile>
          <Bloc titre={`${euros(souscriptionPrevoyance.tarifDevis)} par mois`}>
            <p>Franchise de {confort.franchiseJours} jours, {euros(confort.indemniteJour)} par jour d'arrêt, revenu garanti de {euros(souscriptionPrevoyance.revenuGaranti)}.</p>
            <p>Pourquoi : vous avez peu d'épargne pour couvrir un arrêt long.</p>
          </Bloc>
          <p>Prochaine étape : un questionnaire de santé, lu uniquement par notre médecin-conseil.</p>
          <Actions><Bouton variante="principal" vers="EC12">Répondre au questionnaire de santé</Bouton></Actions>
        </Pile>
      </Gabarit>
    );
  }
  const autre = etat === 'autre';
  const enfant = `${prospect.enfant.prenom} (${prospect.enfant.age} ans)`;
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
      <h1>{autre ? 'Vous choisissez la formule Essentielle' : 'Nous vous conseillons la formule Confort'}</h1>
      <Pile>
        {autre ? (
          <Alerte type="avertissement" titre="Avec Essentielle, deux soins que vous avez indiqués seront moins bien remboursés :">
            <Liste>
              <LigneValeur libelle={`Lunettes de ${enfant}`}>{euros(resteACharge(lunettes, 'essentielle'))} à votre charge au lieu de {euros(resteACharge(lunettes, 'confort'))}</LigneValeur>
              <LigneValeur libelle="Couronne dentaire">{euros(resteACharge(couronne, 'essentielle'))} à votre charge au lieu de {euros(resteACharge(couronne, 'confort'))}</LigneValeur>
            </Liste>
          </Alerte>
        ) : (
          <Bloc titre={`${euros(formule('confort').cotisation2Personnes)} par mois pour 2 personnes`}>
            <p>Pourquoi cette formule : elle rembourse le mieux les soins que vous avez indiqués, pour un écart de {euros(formule('confort').cotisation2Personnes - formule('essentielle').cotisation2Personnes)} par mois avec Essentielle.</p>
            <Liste>
              <LigneValeur libelle={`Lunettes de ${enfant} (${euros(lunettes.prix)})`}>{euros(resteACharge(lunettes, 'confort'))} à votre charge</LigneValeur>
              <LigneValeur libelle={`Couronne dentaire (${euros(couronne.prix)})`}>{euros(resteACharge(couronne, 'confort'))} à votre charge</LigneValeur>
            </Liste>
          </Bloc>
        )}
        <Actions>
          <Bouton variante="principal" vers="EC18">{autre ? 'Continuer avec Essentielle' : 'Choisir Confort'}</Bouton>
        </Actions>
        {!autre && <p><Lien vers="EC09" etat="autre">Choisir une autre formule</Lien></p>}
      </Pile>
    </Gabarit>
  );
}
