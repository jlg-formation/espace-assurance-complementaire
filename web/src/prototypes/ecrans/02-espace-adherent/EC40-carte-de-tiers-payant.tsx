// EC40 Carte de tiers payant — prototype (états janvier, hors ligne, partagée).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Image, Pile } from '../../../design-system/composants';
import { adherent, carte, foyer } from '../../donnees/donnees';

const beneficiaires = foyer.membres.map((m) => (m.age < 18 ? `${m.prenom} (${m.age} ans)` : m.prenom)).join(', ');

export default function EC40({ etat }: PropsEcran) {
  const annee = etat === 'janvier' ? carte.anneeSuivante : carte.anneeCourante;
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Ma carte de mutuelle' }]}>
      <h1>Ma carte de mutuelle</h1>
      <Pile>
        {etat === 'janvier' && <Alerte type="information" titre={`Votre carte ${carte.anneeSuivante} est disponible : c'est elle qui s'affiche.`} />}
        {etat === 'hors-ligne' && <Alerte type="information" titre="Pas de connexion : voici la dernière carte valable enregistrée sur ce téléphone." />}
        {etat === 'partagee' && <Alerte type="succes" titre={`Carte envoyée à ${foyer.titulaire.prenom}. Il peut la présenter depuis son téléphone.`} />}
        <Bloc titre={`Carte ${annee} — valable jusqu'au 31 décembre ${annee}`}>
          <p>Clarea Assurances · N° d'adhérent {adherent.numeroAdherent}</p>
          <p>Bénéficiaires : {beneficiaires}</p>
          <p>Tiers payant : {carte.tiersPayant}</p>
          <Image alt={`Code à scanner de la carte de mutuelle ${annee}`} />
        </Bloc>
        <Actions>
          <Bouton variante="principal">Afficher en plein écran</Bouton>
          <Bouton vers="EC40" etat="partagee">Envoyer à un proche</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
