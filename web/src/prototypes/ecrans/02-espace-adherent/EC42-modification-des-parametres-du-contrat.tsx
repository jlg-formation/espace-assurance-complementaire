// EC42 Modification des paramètres du contrat — prototype (V2, état questionnaire requis).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { contrats, mensualite } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

const { prevoyance } = contrats;
const nouveau = prevoyance.modification;

export default function EC42({ etat }: PropsEcran) {
  const questionnaire = etat === 'questionnaire';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-contrat" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon contrat', vers: 'EC11' }, { libelle: 'Modifier mes garanties' }]}>
      <h1>Modifier mes garanties</h1>
      <Pile>
        <Champ id="garanti" libelle="Revenu garanti" type="number" valeur={String(nouveau.revenuGaranti)} aide={`Actuellement ${euros(prevoyance.revenuGaranti)}`} />
        <Champ id="franchise" libelle="Franchise" options={['30 jours', '60 jours', '90 jours']} valeur={`${prevoyance.franchiseJours} jours`} />
        <Liste>
          <LigneValeur libelle="Nouvelle cotisation">{euros(nouveau.cotisation)} par mois au lieu de {euros(prevoyance.cotisation)}</LigneValeur>
          <LigneValeur libelle={`En cas d'arrêt, à partir du ${prevoyance.franchiseJours + 1}e jour`}>environ {euros(mensualite(nouveau.indemniteJour))} par mois</LigneValeur>
          <LigneValeur libelle="Date d'effet">{date(nouveau.dateEffet)}</LigneValeur>
        </Liste>
        {questionnaire && (
          <Alerte type="avertissement" titre="Cette hausse de garantie demande un nouveau questionnaire de santé.">
            <p>La nouvelle cotisation ne s'appliquera qu'après acceptation par notre médecin-conseil.</p>
          </Alerte>
        )}
        <Actions>
          {questionnaire
            ? <Bouton variante="principal" vers="EC14">Répondre au questionnaire de santé</Bouton>
            : <Bouton variante="principal" vers="EC11">Valider la modification</Bouton>}
          <Bouton vers="EC11">Annuler</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
