// EC48 Mes indemnités — lieu (états retard, franchise en cours, versement effectué, reprise).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC48({ etat }: PropsEcran) {
  const franchise = etat === 'franchise';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-arret" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon arrêt de travail', vers: 'EC46' }, { libelle: 'Mes indemnités' }]}>
      <h1>Mes indemnités</h1>
      <p><Lien vers="EC43">Déclarer un arrêt</Lien> · <Lien vers="EC46">Mon dossier d'arrêt</Lien></p>
      <Pile>
        {etat === 'reprise' && (
          <Alerte type="succes" titre="Reprise à mi-temps thérapeutique prise en compte au 1er août.">
            <p>Vos versements continuent : environ 920 € par mois à partir d'août.</p>
          </Alerte>
        )}
        {etat === 'verse' && <Alerte type="succes" titre="Versement de 1 840 € effectué le 10 juillet, pour la période du 11 juin au 10 juillet." />}
        {etat === 'retard' && (
          <Alerte type="avertissement" titre="Le versement prévu le 10 juillet est retardé : le relevé du régime obligatoire manque.">
            <p>Nouvelle date dès réception de la pièce. <Lien vers="EC46">Voir ce qui manque au dossier</Lien></p>
          </Alerte>
        )}
        <Bloc titre="Prochain versement">
          {franchise ? (
            <p>Aucun versement avant la fin de votre franchise le 10 juin. <strong>Premier versement prévu le 10 juillet 2026</strong>, pour la période du 11 juin au 10 juillet.</p>
          ) : (
            <p><strong>{etat === 'reprise' ? '10 août 2026 — environ 920 €' : '10 août 2026 — 1 840 €'}</strong>, pour la période du 11 juillet au 10 août.</p>
          )}
          <Note n={1} />
        </Bloc>
        {!franchise && (
          <Bloc titre="Versements passés">
            <Liste>
              <Ligne><span>10 juillet 2026 — du 11 juin au 10 juillet</span><strong>1 840 €</strong></Ligne>
            </Liste>
          </Bloc>
        )}
        <details>
          <summary>Comment ce montant est calculé</summary>
          <p>Revenu garanti de 36 000 € par an, moins les indemnités du régime obligatoire, après 30 jours de franchise.</p>
        </details>
      </Pile>
    </Gabarit>
  );
}
