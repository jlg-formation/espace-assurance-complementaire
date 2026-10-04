// EC41 Attestations — lieu (états obtenue, différée).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Pile } from '../../kit/kit';

export default function EC41({ etat }: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-contrat" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon contrat', vers: 'EC11' }, { libelle: 'Mes attestations' }]}>
      <h1>Mes attestations</h1>
      <Pile>
        {etat === 'obtenue' && (
          <Alerte type="succes" titre="Attestation de cotisations 2025 prête.">
            <p>Document PDF signé électroniquement, à imprimer ou à joindre à votre déclaration de revenus.</p>
          </Alerte>
        )}
        {etat === 'differee' && (
          <Alerte type="information" titre="Cette attestation est préparée par nos services.">
            <p>Vous la recevrez par e-mail sous 5 jours ouvrés, au plus tard le 10 octobre 2026.</p>
          </Alerte>
        )}
        <Champ id="type" libelle="Type d'attestation" options={['Attestation de cotisations', 'Attestation de droits', "Attestation d'adhésion"]} />
        <Champ id="annee" libelle="Année" options={['2025', '2026']} />
        <Actions><Bouton variante="principal" vers="EC41" etat="obtenue">Obtenir l'attestation</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
