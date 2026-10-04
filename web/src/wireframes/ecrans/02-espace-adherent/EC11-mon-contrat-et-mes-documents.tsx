// EC11 Mon contrat et mes documents — lieu (état rappel annuel).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Colonnes, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC11({ etat }: PropsEcran) {
  const rappel = etat === 'rappel';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-contrat" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon contrat' }]}>
      <h1>Mon contrat</h1>
      <Colonnes>
        <Pile>
          {rappel && (
            <Alerte type="avertissement" titre="Rappel annuel : votre revenu déclaré (42 000 €) dépasse votre revenu garanti (36 000 €).">
              <p>En cas d'arrêt, il vous manquerait environ 500 € par mois. <Lien vers="EC04" etat="sous-evalue">Voir l'effet en euros</Lien></p>
            </Alerte>
          )}
          <Bloc titre="Mes garanties">
            <Liste>
              <Ligne><span>Mutuelle santé Confort</span><strong>Hélène et Inès (16 ans)</strong></Ligne>
              <Ligne><span>Prévoyance Confort : franchise</span><strong>30 jours</strong></Ligne>
              <Ligne><span>Revenu garanti</span><strong>36 000 € par an</strong></Ligne>
              <Ligne><span>En cas d'arrêt, à partir du 31e jour</span><strong>environ 2 700 € par mois</strong></Ligne>
            </Liste>
            <Note n={1} />
            <p><Lien vers="EC04">Simuler avec mon contrat</Lien> · <Lien vers="EC42">Modifier mes garanties</Lien> <Note n={2} /></p>
          </Bloc>
        </Pile>
        <Bloc titre="Mes documents">
          <Liste>
            <Ligne>Contrat et conditions particulières (PDF)</Ligne>
            <Ligne>Document d'information normalisé (IPID)</Ligne>
            <Ligne>Le conseil reçu : vos besoins et notre recommandation, 3 oct. 2026</Ligne>
            <Ligne>Votre accord sur les données de santé, 3 oct. 2026, et vos droits</Ligne>
          </Liste>
          <p><Lien vers="EC41">Mes attestations</Lien></p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
