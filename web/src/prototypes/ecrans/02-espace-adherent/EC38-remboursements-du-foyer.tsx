// EC38 Remboursements du foyer — prototype (états recherche par virement, vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Colonnes, Gabarit, Lien, Ligne, LigneSuivi, LigneValeur, Liste, Pile } from '../../../design-system/composants';
import { foyer, rembourse, resteSoin, soins, virement } from '../../donnees/donnees';
import { date, dateCourte, euros } from '../../donnees/formats';

const sansAnnee = (iso: string) => dateCourte(iso).replace(/ \d{4}$/, '');
const virementCherche = virement('2026-09-09');
const rembourses = soins.filter((s) => s.virementLe).sort((a, b) => b.le.localeCompare(a.le));
const enAttente = soins.filter((s) => !s.virementLe);

export default function EC38({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Mes remboursements' }]}>
      <h1>Mes remboursements</h1>
      <p><Lien vers="EC31">Estimer un soin</Lien> · <Lien vers="EC40">Ma carte de mutuelle</Lien></p>
      <Colonnes>
        <Pile>
          <Champ
            id="recherche"
            libelle="Rechercher un montant, un soin ou une date"
            valeur={etat === 'recherche' ? euros(virementCherche.montant).replace(/\s?€/, '') : undefined}
            aide="Par exemple le montant d'un virement lu sur votre relevé bancaire"
          />
          <Champ id="membre" libelle="Membre du foyer" options={['Tout le foyer', ...foyer.membres.map((m) => m.prenom)]} />
          <Actions><Bouton vers="EC38" etat="recherche">Rechercher</Bouton></Actions>
          {etat === 'recherche' && (
            <Alerte type="information" titre={`Le virement de ${euros(virementCherche.montant)} du ${date(virementCherche.le).replace(/ \d{4}$/, '')} règle ${virementCherche.soins.length} soins :`}>
              <Liste>
                {virementCherche.soins.map((s) => (
                  <LigneValeur key={s.id} libelle={s.id === 'S1'
                    ? <Lien vers="EC39">{s.praticien} — {s.beneficiaire} — {sansAnnee(s.le)}</Lien>
                    : `${s.praticien} — ${s.beneficiaire} — ${sansAnnee(s.le)}`}
                  >
                    {euros(s.mutuelle)}
                  </LigneValeur>
                ))}
              </Liste>
            </Alerte>
          )}
          {vide ? (
            <p>Aucun remboursement pour l'instant. Vos soins remboursés s'afficheront ici, par date de soin.</p>
          ) : (
            <>
              <h2>Soins remboursés</h2>
              <Liste>
                {rembourses.map((s) => {
                  const libelle = `${s.praticien} — ${s.beneficiaire} — ${dateCourte(s.le)}`;
                  return (
                    <Ligne key={s.id}>
                      {s.id === 'S1' ? <Lien vers="EC39">{libelle}</Lien> : <span>{libelle}</span>}
                      <span>payé {euros(s.paye)} · remboursé {euros(rembourse(s))} · reste {euros(resteSoin(s))} · virement du {sansAnnee(s.virementLe!)}</span>
                    </Ligne>
                  );
                })}
              </Liste>
              <h2>En attente</h2>
              <Liste>
                {enAttente.map((s) => (
                  <LigneSuivi key={s.id} statut="En cours" detail={`remboursement prévu vers le ${date(s.rembourseVers!).replace(/ \d{4}$/, '')}`}>
                    {s.praticien} — {s.beneficiaire} — {dateCourte(s.le)}
                  </LigneSuivi>
                ))}
              </Liste>
            </>
          )}
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
