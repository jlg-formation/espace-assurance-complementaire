// EC14 Questionnaire de santé — prototype (états reprise, interrompu, tarif expiré).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { prospect, souscriptionPrevoyance } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

const { questionsTotal, questionReprise } = souscriptionPrevoyance;

export default function EC14({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Accueil', vers: 'EC01' as const }, { libelle: 'Obtenir un tarif', vers: 'EC06' as const }, { libelle: 'Questionnaire de santé' }];
  if (etat === 'interrompu') {
    return (
      <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
        <h1>Vos réponses sont enregistrées</h1>
        <Alerte type="succes" titre={`Nous vous avons envoyé un lien par e-mail pour reprendre à la question ${questionReprise}.`}>
          <p>Vos réponses ne sont lisibles que par notre médecin-conseil. Elles seront effacées le {date(souscriptionPrevoyance.reponsesEffaceesLe)} si vous ne reprenez pas d'ici là.</p>
        </Alerte>
        <p><Lien vers="EC01">Retour à l'accueil</Lien></p>
      </Gabarit>
    );
  }
  const reprise = etat === 'reprise';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
      <h1>Questionnaire de santé</h1>
      <Pile>
        <p>Étape 2 sur 3 · Question {reprise ? questionReprise : 3} sur {questionsTotal}</p>
        {reprise && <Alerte type="information" titre={`Bon retour : vous reprenez à la question ${questionReprise}, vos ${questionReprise - 1} premières réponses sont conservées.`} />}
        {etat === 'tarif-expire' && (
          <Alerte type="avertissement" titre={`Votre tarif a pu changer depuis votre devis du ${date(prospect.devisLe)}.`}>
            <p><Lien vers="EC16">Voir le nouveau tarif avant de continuer</Lien></p>
          </Alerte>
        )}
        <p>Seul notre médecin-conseil lira vos réponses.</p>
        <Champ
          id="q-arret"
          libelle="Au cours des 10 dernières années, avez-vous été en arrêt de travail plus de 30 jours d'affilée ?"
          options={['Non', 'Oui']}
          aide="Comptez aussi les arrêts anciens ou guéris : par exemple, une entorse du genou avec 6 semaines d'arrêt il y a 4 ans."
          obligatoire
        />
        <Champ
          id="q-hospitalisation"
          libelle="Au cours des 5 dernières années, avez-vous été hospitalisé plus de 48 heures ?"
          options={['Non', 'Oui']}
          aide="Hors accouchement. Une opération avec deux nuits à l'hôpital compte."
          obligatoire
        />
        <Actions>
          <Bouton variante="principal" vers="EC15">Vérifier mes réponses</Bouton>
          <Bouton vers="EC14" etat="interrompu">Enregistrer et finir plus tard</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
