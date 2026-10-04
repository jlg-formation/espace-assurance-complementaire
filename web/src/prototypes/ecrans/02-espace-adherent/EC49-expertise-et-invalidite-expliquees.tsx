// EC49 Expertise et invalidité expliquées — prototype (V2).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Gabarit, Pile } from '../../../design-system/composants';
import { arret, foyer } from '../../donnees/donnees';
import { date } from '../../donnees/formats';

const sansAnnee = (iso: string) => date(iso).replace(/ \d{4}$/, '');

export default function EC49(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: "Mon dossier d'arrêt", vers: 'EC46' }, { libelle: 'Expertise et invalidité' }]}>
      <h1>Expertise médicale du {sansAnnee(arret.expertiseLe)} : ce qui va se passer</h1>
      <Pile>
        <Bloc titre="Pourquoi cette expertise">
          <p>L'arrêt de {arret.personne} dure depuis le {sansAnnee(arret.debut)} : un médecin choisi par Clarea évalue son état et sa capacité à reprendre son métier de {foyer.titulaire.metier}.</p>
        </Bloc>
        <Bloc titre="Comment elle se déroule">
          <p>Un rendez-vous d'environ 45 minutes, au cabinet du médecin. Apportez vos comptes rendus et ordonnances. Vous pouvez être accompagné par votre médecin.</p>
        </Bloc>
        <Bloc titre="Ce qui peut en résulter">
          <p>Reprise à temps plein ou partiel, poursuite de l'arrêt, ou passage en invalidité avec une rente mensuelle selon le taux retenu.</p>
        </Bloc>
        <Bloc titre="Vos indemnités pendant ce temps">
          <p>Elles continuent jusqu'à la décision. Vous serez prévenue avant tout changement.</p>
        </Bloc>
        <Actions><Bouton variante="principal" vers="EC51">Être rappelé par un gestionnaire</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
