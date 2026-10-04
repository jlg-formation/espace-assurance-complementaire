// EC40 Carte de tiers payant — lieu (états janvier, hors ligne, partagée).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Image, Note, Pile } from '../../kit/kit';

export default function EC40({ etat }: PropsEcran) {
  const annee = etat === 'janvier' ? '2027' : '2026';
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Ma carte de mutuelle' }]}>
      <h1>Ma carte de mutuelle</h1>
      <Pile>
        {etat === 'janvier' && <Alerte type="information" titre="Votre carte 2027 est disponible : c'est elle qui s'affiche." />}
        {etat === 'hors-ligne' && <Alerte type="information" titre="Pas de connexion : voici la dernière carte valable enregistrée sur ce téléphone." />}
        {etat === 'partagee' && <Alerte type="succes" titre="Carte envoyée à Jean-Marc. Il peut la présenter depuis son téléphone." />}
        <Bloc titre={`Carte ${annee} — valable jusqu'au 31 décembre ${annee}`}>
          <p>Clarea Assurances · N° d'adhérent 1234 5678</p>
          <p>Bénéficiaires : Manon, Léo (4 ans)</p>
          <p>Tiers payant : pharmacie, laboratoire, radiologie, hôpital, opticien partenaire</p>
          <Image alt="Code à scanner de la carte de mutuelle" />
        </Bloc>
        <Note n={1} />
        <Actions>
          <Bouton variante="principal">Afficher en plein écran</Bouton>
          <Bouton vers="EC40" etat="partagee">Envoyer à un proche</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
