// EC47 Déclaration d'un changement de situation — contextuel de EC46 (états prolongation, autre).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Pile } from '../../kit/kit';

export default function EC47({ etat }: PropsEcran) {
  const autre = etat === 'autre';
  const prolongation = etat === 'prolongation';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: 'Déclarer un changement' }]}>
      <h1>Déclarer un changement de situation</h1>
      <Pile>
        <Champ
          id="situation"
          libelle="Votre nouvelle situation"
          options={['Reprise à temps partiel thérapeutique', "Prolongation de l'arrêt", 'Reprise à temps plein', 'Autre situation']}
          valeur={autre ? 'Autre situation' : prolongation ? "Prolongation de l'arrêt" : 'Reprise à temps partiel thérapeutique'}
          aide="Temps partiel thérapeutique : reprise à temps réduit prescrite par votre médecin, pendant laquelle vous pouvez continuer à toucher des indemnités."
        />
        <Champ id="date" libelle="À partir du" type="date" valeur="2026-08-01" />
        {autre ? (
          <>
            <Champ id="description" libelle="Décrivez votre situation" type="textarea" />
            <Alerte type="information" titre="Un gestionnaire étudiera votre situation sous 5 jours ouvrés.">
              <p>Vos versements continuent pendant l'examen, sauf décision motivée qui vous sera expliquée.</p>
            </Alerte>
            <Actions><Bouton variante="principal" vers="EC46">Envoyer</Bouton></Actions>
          </>
        ) : (
          <>
            <p>Vos versements continuent : le nouveau montant vous sera indiqué dès l'envoi du justificatif.</p>
            <Actions><Bouton variante="principal" vers="EC33" etat={prolongation ? 'prolongation' : 'reprise'}>Continuer</Bouton></Actions>
          </>
        )}
      </Pile>
    </Gabarit>
  );
}
