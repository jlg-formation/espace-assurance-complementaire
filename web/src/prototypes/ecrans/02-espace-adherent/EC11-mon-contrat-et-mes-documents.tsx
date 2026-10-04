// EC11 Mon contrat et mes documents — prototype (état rappel annuel).
import type { PropsEcran } from '../../../projet/ui';
import { Alerte, Bloc, Colonnes, Gabarit, Lien, Ligne, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { contrats, foyer, mensualite, simulation } from '../../donnees/donnees';
import { dateCourte, euros } from '../../donnees/formats';

const { prevoyance, sante } = contrats;
const ecartMensuel = mensualite(simulation.garanties.adapte.indemniteJour) - mensualite(prevoyance.indemniteJour);
const beneficiaires = foyer.membres.map((m) => (m.age < 18 ? `${m.prenom} (${m.age} ans)` : m.prenom)).join(', ');

export default function EC11({ etat }: PropsEcran) {
  const rappel = etat === 'rappel';
  return (
    <Gabarit zone="espace-adherent" rubrique="mon-contrat" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon contrat' }]}>
      <h1>Mon contrat</h1>
      <Colonnes>
        <Pile>
          {rappel && (
            <Alerte type="avertissement" titre={`Rappel annuel : votre revenu déclaré (${euros(prevoyance.revenuDeclare)}) dépasse votre revenu garanti (${euros(prevoyance.revenuGaranti)}).`}>
              <p>En cas d'arrêt, il vous manquerait environ {euros(ecartMensuel)} par mois. <Lien vers="EC04" etat="sous-evalue">Voir l'effet en euros</Lien></p>
            </Alerte>
          )}
          <Bloc titre="Mes garanties">
            <Liste>
              <LigneValeur libelle={sante.nom}>{beneficiaires}</LigneValeur>
              <LigneValeur libelle={`${prevoyance.nom} de ${foyer.titulaire.prenom} : franchise`}>{prevoyance.franchiseJours} jours</LigneValeur>
              <LigneValeur libelle="Revenu garanti">{euros(prevoyance.revenuGaranti)} par an</LigneValeur>
              <LigneValeur libelle={`En cas d'arrêt, à partir du ${prevoyance.franchiseJours + 1}e jour`}>environ {euros(mensualite(prevoyance.indemniteJour))} par mois</LigneValeur>
            </Liste>
            <p>Montants indicatifs, recalculés à chaque changement de revenu déclaré.</p>
            <p><Lien vers="EC04">Simuler avec mon contrat</Lien> · <Lien vers="EC42">Modifier mes garanties</Lien></p>
          </Bloc>
        </Pile>
        <Bloc titre="Mes documents">
          <Liste>
            <Ligne>Contrat et conditions particulières (PDF)</Ligne>
            <Ligne>Document d'information normalisé (IPID)</Ligne>
            <Ligne>Le conseil reçu : vos besoins et notre recommandation, {dateCourte(sante.depuis)}</Ligne>
            <Ligne>Votre accord sur les données de santé, {dateCourte(sante.depuis)}, et vos droits</Ligne>
          </Liste>
          <p><Lien vers="EC41">Mes attestations</Lien></p>
        </Bloc>
      </Colonnes>
    </Gabarit>
  );
}
