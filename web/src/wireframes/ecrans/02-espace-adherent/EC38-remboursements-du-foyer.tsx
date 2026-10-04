// EC38 Remboursements du foyer — lieu (états recherche par virement, vide).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Colonnes, Etiquette, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC38({ etat }: PropsEcran) {
  const vide = etat === 'vide';
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Mes remboursements' }]}>
      <h1>Mes remboursements</h1>
      <p><Lien vers="EC31">Estimer un soin</Lien> · <Lien vers="EC40">Ma carte de mutuelle</Lien></p>
      <Colonnes>
        <Pile>
          <Champ id="recherche" libelle="Rechercher un montant, un soin ou une date" valeur={etat === 'recherche' ? '112,40' : undefined} aide="Par exemple le montant d'un virement lu sur votre relevé bancaire" />
          <Champ id="membre" libelle="Membre du foyer" options={['Tout le foyer', 'Sylvie', 'Jean-Marc', 'Chloé', 'Lucas']} />
          <Actions><Bouton vers="EC38" etat="recherche">Rechercher</Bouton></Actions>
          {etat === 'recherche' && (
            <Alerte type="information" titre="Le virement de 112,40 € du 9 septembre règle 2 soins :">
              <Liste>
                <Ligne><Lien vers="EC39">Dentiste — Chloé — 3 sept.</Lien><strong>49 €</strong></Ligne>
                <Ligne><span>Pharmacie — Jean-Marc — 28 août</span><strong>63,40 €</strong></Ligne>
              </Liste>
            </Alerte>
          )}
          {vide ? (
            <p>Aucun remboursement pour l'instant. Vos soins remboursés s'afficheront ici, par date de soin.</p>
          ) : (
            <>
              <h2>Soins remboursés</h2>
              <Liste>
                <Ligne><Lien vers="EC39">Dentiste — Chloé — 3 sept. 2026</Lien><span>payé 70 € · remboursé 70 € · reste 0 € · virement du 9 sept.</span></Ligne>
                <Ligne><span>Pharmacie — Jean-Marc — 28 août 2026</span><span>payé 63,40 € · remboursé 63,40 € · reste 0 € · virement du 9 sept.</span></Ligne>
                <Ligne><span>Ophtalmologiste — Sylvie — 14 août 2026</span><span>payé 60 € · remboursé 46,20 € · reste 13,80 € · virement du 20 août</span></Ligne>
              </Liste>
              <Note n={1} />
              <h2>En attente</h2>
              <Liste>
                <Ligne><span>Kinésithérapeute — Jean-Marc — 20 sept. 2026 · remboursement prévu vers le 2 octobre</span><Etiquette ton="information">En attente</Etiquette></Ligne>
              </Liste>
            </>
          )}
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
