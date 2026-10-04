// EC03 Formules prévoyance comparées — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { formulesPrevoyance } from '../../donnees/donnees';
import { euros, pourcentage } from '../../donnees/formats';

const { essentielle, confort } = formulesPrevoyance;

export default function EC03(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="prevoyance" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Prévoyance' }]}>
      <h1>Prévoyance : arrêt de travail, invalidité</h1>
      <p>Une assurance qui vous verse de l'argent si vous ne pouvez plus travailler, pour un temps ou durablement.</p>
      <Colonnes>
        <Pile>
          <table>
            <caption>Comparer les formules</caption>
            <thead>
              <tr><th scope="col">Ce qui compte</th><th scope="col">Essentielle</th><th scope="col">Confort</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Franchise (jours sans indemnité)</th><td>{essentielle.franchiseJours} jours</td><td>{confort.franchiseJours} jours</td></tr>
              <tr><th scope="row">Indemnité par jour d'arrêt</th><td>{euros(essentielle.indemniteJour)}</td><td>{euros(confort.indemniteJour)}</td></tr>
              <tr><th scope="row">Rente d'invalidité par mois</th><td>{euros(essentielle.rente)}</td><td>{euros(confort.rente)}</td></tr>
              <tr><th scope="row">Barème d'invalidité</th><td>{essentielle.bareme}</td><td>{confort.bareme}</td></tr>
              <tr><th scope="row">Exclusions fréquentes</th><td>{essentielle.exclusions}</td><td>{confort.exclusions}</td></tr>
            </tbody>
          </table>
          <p><Lien vers="EC04">Simuler une perte de revenus</Lien></p>
          <Actions>
            <Bouton variante="principal" vers="EC06">Obtenir un tarif pour cette formule</Bouton>
          </Actions>
        </Pile>
        <Pile>
          <Bloc titre="Barème professionnel ou fonctionnel ?">
            <p>
              Pour une formatrice qui perd la voix : barème fonctionnel, taux de {pourcentage(15)}, pas de rente ;
              barème professionnel, taux de {pourcentage(70)}, rente de {euros(confort.rente)} par mois.
            </p>
            <p><Lien vers="EC05">Lire la clause « Barème d'invalidité »</Lien></p>
          </Bloc>
          <p>Conditions générales complètes : document PDF de 40 pages, à télécharger.</p>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
