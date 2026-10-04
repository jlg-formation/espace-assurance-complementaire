// EC43 Déclaration d'un arrêt — lieu (état hors délai).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC43({ etat }: PropsEcran) {
  const horsDelai = etat === 'hors-delai';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Déclarer un arrêt' }]}>
      <h1>Déclarer un arrêt</h1>
      <Pile>
        {horsDelai ? (
          <Alerte type="avertissement" titre="L'arrêt a commencé il y a 45 jours, au-delà du délai de 30 jours.">
            <p>Votre déclaration sera enregistrée. Si le retard a une raison (hospitalisation, convalescence), joignez un justificatif : il sera pris en compte.</p>
          </Alerte>
        ) : (
          <Alerte type="information" titre="Déclarez l'arrêt dans les 30 jours qui suivent son début." />
        )}
        <Note n={1} />
        <Champ id="personne" libelle="Personne arrêtée" options={['Jean-Marc (titulaire du contrat)']} obligatoire />
        <Champ id="debut" libelle="Date de début de l'arrêt" type="date" valeur={horsDelai ? '2026-08-19' : '2026-05-12'} obligatoire />
        <Champ id="fin" libelle="Date de fin prévue" type="date" valeur={horsDelai ? '2026-09-30' : '2026-08-12'} aide="Celle de l'avis d'arrêt ; vous pourrez déclarer une prolongation" />
        <Champ id="situation" libelle="Situation" options={['Maladie', 'Accident', 'Opération chirurgicale', 'Autre']} valeur="Opération chirurgicale" obligatoire />
        <Actions><Bouton variante="principal" vers="EC44">Continuer</Bouton></Actions>
        <p>Besoin d'aide ? <Lien vers="EC51">Être rappelé</Lien></p>
      </Pile>
    </Gabarit>
  );
}
