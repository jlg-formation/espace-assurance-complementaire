// EC45 Confirmation de déclaration — contextuel de EC43 (états arrêt court, revenus inconnus).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC45({ etat }: PropsEcran) {
  const court = etat === 'court';
  const sansRevenus = etat === 'sans-revenus';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Déclarer un arrêt', vers: 'EC43' }, { libelle: 'Arrêt déclaré' }]}>
      <h1>{court ? 'Arrêt déclaré : pas d\'indemnité pour cet arrêt' : 'Arrêt déclaré : indemnisation à partir du 11 juin 2026'}</h1>
      <Pile>
        {court ? (
          <Alerte type="information" titre="Votre arrêt de 10 jours est plus court que votre franchise de 30 jours.">
            <p>Clarea ne versera rien pour cet arrêt. Il reste enregistré : en cas de rechute, il sera pris en compte.</p>
          </Alerte>
        ) : (
          <Bloc titre="Ce que vous toucherez">
            <Liste>
              <Ligne><span>Franchise</span><strong>30 jours (du 12 mai au 10 juin)</strong></Ligne>
              <Ligne><span>Début de l'indemnisation</span><strong>11 juin 2026</strong></Ligne>
              <Ligne><span>Montant estimé</span><strong>{sansRevenus ? 'calculé dès réception de la déclaration de revenus 2025' : 'environ 1 840 € par mois'}</strong></Ligne>
            </Liste>
            <Note n={1} />
          </Bloc>
        )}
        <Alerte type="avertissement" titre="1 pièce encore attendue : relevé des indemnités du régime obligatoire." />
        <Actions><Bouton variante="principal" vers="EC46">Voir mon dossier d'arrêt</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
