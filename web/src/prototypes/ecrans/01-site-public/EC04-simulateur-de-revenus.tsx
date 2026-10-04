// EC04 Simulateur de revenus — prototype (états sous-évalué, invalidité, courtier).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Champ, Colonnes, Gabarit, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { formulesPrevoyance, mensualite, simulation } from '../../donnees/donnees';
import { euros, pourcentage } from '../../donnees/formats';

const DUREE_JOURS = 90;
const { franchiseJours, rente } = formulesPrevoyance.confort;

export default function EC04({ etat }: PropsEcran) {
  const invalidite = etat === 'invalidite';
  const sousEvalue = etat === 'sous-evalue';
  const garantie = sousEvalue ? simulation.garanties.sousEvalue : simulation.garanties.adapte;
  const regime = simulation.regimeObligatoireJour * DUREE_JOURS;
  const clarea = garantie.indemniteJour * (DUREE_JOURS - franchiseJours);
  const manque = simulation.revenuAnnuel / 4 - regime - clarea;
  const manqueInvalidite = simulation.revenuAnnuel / 12 - simulation.regimeObligatoireInvaliditeMois - rente;
  const ecartMensuel = mensualite(simulation.garanties.adapte.indemniteJour) - mensualite(simulation.garanties.sousEvalue.indemniteJour);
  return (
    <Gabarit
      zone="site-public"
      rubrique="prevoyance"
      ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Prévoyance', vers: 'EC03' }, { libelle: 'Simuler une perte de revenus' }]}
    >
      <h1>Simuler une perte de revenus</h1>
      {etat === 'courtier' && (
        <Alerte type="information" titre={`Options proposées par votre courtier : formule Confort, franchise de ${franchiseJours} jours.`}>
          <p>Vous pouvez les modifier pour comparer.</p>
        </Alerte>
      )}
      <Colonnes>
        <Pile>
          <Champ id="revenu" libelle="Votre revenu annuel" type="number" valeur={String(simulation.revenuAnnuel)} aide="En euros, la moyenne de vos deux dernières années" />
          <Champ id="garanti" libelle="Revenu garanti" type="number" valeur={String(garantie.revenuGaranti)} aide="Le revenu que l'assureur s'engage à compléter" />
          <Champ id="statut" libelle="Votre statut" options={['Profession libérale', 'Artisan', 'Commerçant', 'Micro-entrepreneur']} />
          <Champ id="franchise" libelle="Franchise" options={['30 jours', '60 jours', '90 jours']} aide="Nombre de jours d'arrêt pendant lesquels l'assureur ne verse encore rien" />
          <Champ id="situation" libelle="Situation à simuler" options={['Arrêt de 90 jours', 'Arrêt de 6 mois', 'Invalidité à 66 %']} valeur={invalidite ? 'Invalidité à 66 %' : 'Arrêt de 90 jours'} />
          <Actions><Bouton>Simuler</Bouton></Actions>
        </Pile>
        <Pile>
          {invalidite ? (
            <Bloc titre={`Pour une invalidité à ${pourcentage(66)}`}>
              <Liste>
                <LigneValeur libelle="Régime obligatoire">{euros(simulation.regimeObligatoireInvaliditeMois)} par mois</LigneValeur>
                <LigneValeur libelle="Clarea, rente (barème professionnel)">{euros(rente)} par mois</LigneValeur>
                <LigneValeur libelle="Ce qui manque par rapport à votre revenu" total>{euros(manqueInvalidite)} par mois</LigneValeur>
              </Liste>
            </Bloc>
          ) : (
            <Bloc titre={`Pour un arrêt de ${DUREE_JOURS} jours`}>
              <Liste>
                <LigneValeur libelle="Régime obligatoire">{euros(regime)}</LigneValeur>
                <LigneValeur libelle={`Clarea, à partir du ${franchiseJours + 1}e jour`}>{euros(clarea)}</LigneValeur>
                <LigneValeur libelle="Ce qui manque par rapport à votre revenu" total>{euros(manque)}</LigneValeur>
              </Liste>
              <p>Pendant les {franchiseJours} premiers jours, Clarea ne verse rien : c'est la franchise.</p>
            </Bloc>
          )}
          {sousEvalue && (
            <Alerte type="avertissement" titre={`Votre revenu garanti (${euros(garantie.revenuGaranti)}) est inférieur à votre revenu (${euros(simulation.revenuAnnuel)}).`}>
              <p>
                Il vous manquerait {euros(ecartMensuel)} de plus par mois indemnisé. Avec {euros(simulation.garanties.adapte.revenuGaranti)} garantis,
                la cotisation passe de {euros(simulation.garanties.sousEvalue.cotisation)} à {euros(simulation.garanties.adapte.cotisation)} par mois.
              </p>
            </Alerte>
          )}
          <Actions><Bouton variante="principal" vers="EC06">Obtenir un tarif</Bouton></Actions>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
