// EC28 Accès délégués — lieu (V2), le titulaire désigne un proche.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Champ, Gabarit, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC28({ etat }: PropsEcran) {
  const invite = etat === 'invitation-envoyee';
  return (
    <Gabarit zone="espace-adherent" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mon compte', vers: 'EC28' }, { libelle: 'Accès de mes proches' }]}>
      <h1>Accès de mes proches</h1>
      <Pile>
        {invite && <Alerte type="succes" titre="Invitation envoyée à Sylvie. Elle a 7 jours pour activer son accès." />}
        <Bloc titre="Proches qui ont un accès">
          <Liste>
            <Ligne>
              <span>Sylvie — remboursements et arrêts de travail</span>
              <Bouton vers="EC28" etat="retire">Retirer l'accès</Bouton>
            </Ligne>
          </Liste>
          {etat === 'retire' && <Alerte type="information" titre="Accès de Sylvie retiré : elle ne peut plus agir pour vous." />}
        </Bloc>
        <Bloc titre="Donner un accès à un proche">
          <Champ id="email-proche" libelle="Adresse e-mail du proche" type="email" obligatoire />
          <Champ id="droits" libelle="Ce qu'il pourra faire" options={['Remboursements et devis', 'Arrêts de travail', 'Remboursements et arrêts de travail']} />
          <p>Vos pièces médicales restent réservées au médecin-conseil, sauf si vous l'autorisez. <Note n={1} /></p>
          <Actions><Bouton variante="principal" vers="EC28" etat="invitation-envoyee">Envoyer l'invitation</Bouton></Actions>
        </Bloc>
      </Pile>
    </Gabarit>
  );
}
