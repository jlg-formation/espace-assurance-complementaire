// EC04 Simulateur de revenus en cas d'arrêt ou d'invalidité — lieu (états sous-évalué, invalidité, courtier).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Champ, Colonnes, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC04({ etat }: PropsEcran) {
  const invalidite = etat === 'invalidite';
  const sousEvalue = etat === 'sous-evalue';
  return (
    <Gabarit
      zone="site-public"
      rubrique="prevoyance"
      ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Prévoyance', vers: 'EC03' }, { libelle: 'Simuler une perte de revenus' }]}
    >
      <h1>Simuler une perte de revenus</h1>
      {etat === 'courtier' && (
        <Alerte type="information" titre="Options proposées par votre courtier : formule Confort, franchise de 30 jours.">
          <p>Vous pouvez les modifier pour comparer.</p>
        </Alerte>
      )}
      <Colonnes>
        <Pile>
          <Champ id="revenu" libelle="Votre revenu annuel" type="number" valeur="42000" aide="En euros, la moyenne de vos deux dernières années" />
          <Champ id="garanti" libelle="Revenu garanti" type="number" valeur={sousEvalue ? '30000' : '42000'} aide="Le revenu que l'assureur s'engage à compléter" />
          <Champ id="statut" libelle="Votre statut" options={['Profession libérale', 'Artisan', 'Commerçant', 'Micro-entrepreneur']} />
          <Champ id="franchise" libelle="Franchise" options={['30 jours', '60 jours', '90 jours']} aide="Nombre de jours d'arrêt pendant lesquels l'assureur ne verse encore rien" />
          <Champ id="situation" libelle="Situation à simuler" options={["Arrêt de 90 jours", "Arrêt de 6 mois", "Invalidité à 66 %"]} valeur={invalidite ? 'Invalidité à 66 %' : 'Arrêt de 90 jours'} />
          <Actions><Bouton>Simuler</Bouton></Actions>
        </Pile>
        <Pile>
          {invalidite ? (
            <Bloc titre="Pour une invalidité à 66 %">
              <Liste>
                <Ligne><span>Régime obligatoire</span><strong>620 € par mois</strong></Ligne>
                <Ligne><span>Clarea, rente (barème professionnel)</span><strong>1 800 € par mois</strong></Ligne>
                <Ligne><span>Ce qui manque par rapport à votre revenu</span><strong>1 080 € par mois</strong></Ligne>
              </Liste>
            </Bloc>
          ) : (
            <Bloc titre="Pour un arrêt de 90 jours">
              <Liste>
                <Ligne><span>Régime obligatoire</span><strong>1 980 €</strong></Ligne>
                <Ligne><span>Clarea, à partir du 31e jour</span><strong>{sousEvalue ? '3 900 €' : '5 400 €'}</strong></Ligne>
                <Ligne><span>Ce qui manque par rapport à votre revenu</span><strong>{sousEvalue ? '4 620 €' : '3 120 €'}</strong></Ligne>
              </Liste>
              <p>Pendant les 30 premiers jours, Clarea ne verse rien. <Note n={1} /></p>
            </Bloc>
          )}
          {sousEvalue && (
            <Alerte type="avertissement" titre="Votre revenu garanti (30 000 €) est inférieur à votre revenu (42 000 €).">
              <p>Il vous manquerait 500 € de plus par mois d'arrêt. Avec 42 000 € garantis, la cotisation passe de 64 € à 81 € par mois.</p>
            </Alerte>
          )}
          <Actions><Bouton variante="principal" vers="EC06">Obtenir un tarif</Bouton></Actions>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
