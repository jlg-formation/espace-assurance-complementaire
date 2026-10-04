// EC30 Demande de reconnaissance comme mandataire — lieu (V2, état demande envoyée).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Champ, Gabarit, Ligne, Liste, Pile } from '../../kit/kit';

export default function EC30({ etat }: PropsEcran) {
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Agir pour un proche' }]}>
      <h1>Agir pour un proche qui ne peut pas le faire</h1>
      <Pile>
        {etat === 'envoyee' && <Alerte type="succes" titre="Demande envoyée. Réponse sous 10 jours ouvrés, au plus tard le 17 octobre 2026." />}
        <Bloc titre="Pièces à fournir">
          <Liste>
            <Ligne>Votre pièce d'identité</Ligne>
            <Ligne>Un justificatif de votre lien avec l'adhérent (livret de famille, PACS)</Ligne>
            <Ligne>Un certificat médical indiquant que l'adhérent ne peut pas agir, ou un mandat signé</Ligne>
          </Liste>
        </Bloc>
        <Champ id="adherent" libelle="Nom et numéro d'adhérent de votre proche" obligatoire />
        <Champ id="lien" libelle="Votre lien avec lui" options={['Conjoint', 'Enfant', 'Parent', 'Autre']} />
        <Champ id="pieces" libelle="Pièces" type="file" obligatoire />
        <Actions><Bouton variante="principal" vers="EC30" etat="envoyee">Envoyer ma demande</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
