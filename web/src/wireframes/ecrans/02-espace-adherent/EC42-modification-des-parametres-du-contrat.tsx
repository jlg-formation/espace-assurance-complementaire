// EC42 Modification des paramètres du contrat — contextuel de EC11 (V2, état questionnaire requis).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC42({ etat }: PropsEcran) {
  const questionnaire = etat === 'questionnaire';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-contrat" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon contrat', vers: 'EC11' }, { libelle: 'Modifier mes garanties' }]}>
      <h1>Modifier mes garanties</h1>
      <Pile>
        <Champ id="garanti" libelle="Revenu garanti" type="number" valeur="42000" aide="Actuellement 36 000 €" />
        <Champ id="franchise" libelle="Franchise" options={['30 jours', '60 jours', '90 jours']} valeur="30 jours" />
        <Liste>
          <Ligne><span>Nouvelle cotisation</span><strong>81 € par mois au lieu de 64 €</strong></Ligne>
          <Ligne><span>En cas d'arrêt, à partir du 31e jour</span><strong>environ 3 150 € par mois</strong></Ligne>
          <Ligne><span>Date d'effet</span><strong>1er novembre 2026</strong></Ligne>
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
