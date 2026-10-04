// EC03 Formules prévoyance comparées — lieu, comparaison des paramètres clés.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Colonnes, Gabarit, Lien, Note, Pile } from '../../kit/kit';

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
              <tr><th scope="row">Franchise (jours sans indemnité)</th><td>90 jours</td><td>30 jours</td></tr>
              <tr><th scope="row">Indemnité par jour d'arrêt</th><td>50 €</td><td>90 €</td></tr>
              <tr><th scope="row">Rente d'invalidité par mois</th><td>1 000 €</td><td>1 800 €</td></tr>
              <tr><th scope="row">Barème d'invalidité</th><td>fonctionnel</td><td>professionnel</td></tr>
              <tr><th scope="row">Exclusions fréquentes</th><td>sports à risque, troubles du dos sans hospitalisation</td><td>sports à risque</td></tr>
            </tbody>
          </table>
          <Note n={1} />
          <p><Lien vers="EC04">Simuler une perte de revenus</Lien></p>
          <Actions>
            <Bouton variante="principal" vers="EC06">Obtenir un tarif pour cette formule</Bouton>
          </Actions>
        </Pile>
        <Pile>
          <Bloc titre="Barème professionnel ou fonctionnel ?">
            <p>Pour une formatrice qui perd la voix : barème fonctionnel, taux de 15 %, pas de rente ; barème professionnel, taux de 70 %, rente de 1 800 € par mois.</p>
            <p><Lien vers="EC05">Lire la clause « Barème d'invalidité »</Lien></p>
          </Bloc>
          <p>Conditions générales complètes : document PDF de 40 pages. <Note n={2} /></p>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
