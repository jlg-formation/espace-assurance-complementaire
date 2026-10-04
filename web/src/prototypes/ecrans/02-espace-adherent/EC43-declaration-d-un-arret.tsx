// EC43 Déclaration d'un arrêt — prototype (état hors délai).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Pile, RecoursHumain } from '../../../design-system/composants';
import { arret, foyer } from '../../donnees/donnees';

export default function EC43({ etat }: PropsEcran) {
  const horsDelai = etat === 'hors-delai';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Déclarer un arrêt' }]}>
      <h1>Déclarer un arrêt</h1>
      <Pile>
        {horsDelai ? (
          <Alerte type="avertissement" titre={`L'arrêt a commencé il y a ${arret.horsDelai.joursDepuisDebut} jours, au-delà du délai de 30 jours.`}>
            <p>Votre déclaration sera enregistrée. Si le retard a une raison (hospitalisation, convalescence), joignez un justificatif : il sera pris en compte.</p>
          </Alerte>
        ) : (
          <Alerte type="information" titre="Déclarez l'arrêt dans les 30 jours qui suivent son début." />
        )}
        <Champ id="personne" libelle="Personne arrêtée" options={[`${foyer.titulaire.prenom} (titulaire du contrat)`]} obligatoire />
        <Champ id="debut" libelle="Date de début de l'arrêt" type="date" valeur={horsDelai ? arret.horsDelai.debut : arret.debut} obligatoire />
        <Champ id="fin" libelle="Date de fin prévue" type="date" valeur={horsDelai ? arret.horsDelai.finPrevue : arret.finPrevue} aide="Celle de l'avis d'arrêt ; vous pourrez déclarer une prolongation" />
        <Champ id="situation" libelle="Situation" options={['Maladie', 'Accident', 'Opération chirurgicale', 'Autre']} valeur={arret.situation} obligatoire />
        <Actions><Bouton variante="principal" vers="EC44">Continuer</Bouton></Actions>
        <RecoursHumain />
      </Pile>
    </Gabarit>
  );
}
