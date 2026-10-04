// EC55 Plan du site — lieu (ajouté par l'architecture), second système de navigation RGAA.
import type { PropsEcran } from '../../../projet/ui';
import { Bloc, Colonnes, Gabarit, Lien, Ligne, Liste } from '../../kit/kit';

export default function EC55(_props: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Plan du site' }]}>
      <h1>Plan du site</h1>
      <Colonnes>
        <Bloc titre="Site public">
          <Liste>
            <Ligne><Lien vers="EC01">Accueil</Lien></Ligne>
            <Ligne><Lien vers="EC02">Mutuelle santé</Lien></Ligne>
            <Ligne><Lien vers="EC03">Prévoyance</Lien></Ligne>
            <Ligne><Lien vers="EC04">Simuler une perte de revenus</Lien></Ligne>
            <Ligne><Lien vers="EC06">Obtenir un tarif</Lien></Ligne>
          </Liste>
        </Bloc>
        <Bloc titre="Mon espace">
          <Liste>
            <Ligne><Lien vers="EC27">Mon espace</Lien></Ligne>
            <Ligne>Ma santé : <Lien vers="EC38">Mes remboursements</Lien>, <Lien vers="EC31">Estimer un soin</Lien>, <Lien vers="EC40">Ma carte de mutuelle</Lien></Ligne>
            <Ligne><Lien vers="EC36">Mes demandes</Lien> : <Lien vers="EC33">Envoyer un document</Lien></Ligne>
            <Ligne>Mon arrêt de travail : <Lien vers="EC43">Déclarer un arrêt</Lien>, <Lien vers="EC46">Mon dossier d'arrêt</Lien>, <Lien vers="EC48">Mes indemnités</Lien></Ligne>
            <Ligne><Lien vers="EC11">Mon contrat</Lien> : <Lien vers="EC41">Mes attestations</Lien></Ligne>
          </Liste>
        </Bloc>
        <Bloc titre="Aide et informations">
          <Liste>
            <Ligne><Lien vers="EC23">Se connecter</Lien></Ligne>
            <Ligne><Lien vers="EC54">Aide et contact</Lien> : <Lien vers="EC51">Être rappelé</Lien>, <Lien vers="EC53">Poser une question</Lien></Ligne>
            <Ligne><Lien vers="EC56">Accessibilité</Lien></Ligne>
            <Ligne><Lien vers="EC57">Mentions légales et données personnelles</Lien></Ligne>
          </Liste>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
