// EC12 Consentement aux données de santé — contextuel de EC09, étape 1 de la prévoyance.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC12(_props: PropsEcran) {
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif', vers: 'EC06' }, { libelle: 'Vos données de santé' }]}>
      <h1>Vos données de santé : ce que nous en faisons</h1>
      <Pile>
        <p>Étape 1 sur 3</p>
        <Bloc titre="À quoi elles servent" niveau={2}>
          <p>Uniquement à étudier votre demande de prévoyance et, plus tard, vos éventuels arrêts de travail.</p>
        </Bloc>
        <Bloc titre="Qui les lit" niveau={2}>
          <p>Seul notre médecin-conseil. Ni les conseillers ni les commerciaux n'y ont accès. <Note n={1} /></p>
        </Bloc>
        <Bloc titre="Combien de temps nous les gardons" niveau={2}>
          <p>Pendant la durée du contrat, puis 5 ans. Si vous ne souscrivez pas, elles sont effacées après 30 jours.</p>
        </Bloc>
        <p><Lien vers="EC03">Voir d'abord les exclusions fréquentes</Lien></p>
        <Actions>
          <Bouton variante="principal" vers="EC14">J'accepte et je réponds au questionnaire</Bouton>
          <Bouton vers="EC13">Je refuse</Bouton>
        </Actions>
        <Note n={2} />
      </Pile>
    </Gabarit>
  );
}
