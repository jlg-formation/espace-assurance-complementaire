// EC05 Envoi d'une facture — exemple de modèle d'écran (contextuel, formulaire, état d'erreur).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Note, Pile } from '../../kit/kit';

export default function EC05({ etat }: PropsEcran) {
  const erreur = etat === 'erreur';
  return (
    <Gabarit
      zone="espace-adherent"
      rubrique="mes-soins"
      ariane={[{ libelle: 'Mes remboursements', vers: 'EC04' }, { libelle: 'Envoyer une facture' }]}
    >
      <h1>Envoyer une facture</h1>
      <Pile>
        {erreur && (
          <Alerte type="erreur" titre="Nous n'arrivons pas à lire cette facture.">
            <p>Reprenez la photo en pleine lumière, ou envoyez un PDF.</p>
          </Alerte>
        )}
        <Champ id="beneficiaire" libelle="Pour qui ?" options={['Moi', 'Léa (fille)']} obligatoire />
        <Champ
          id="facture"
          libelle="Facture"
          type="file"
          aide="Photo ou PDF, 10 Mo maximum"
          erreur={erreur ? 'Le fichier est illisible.' : undefined}
          obligatoire
        />
        <Actions>
          {/* Soumission simulée : mène à l'écran suivant du happy path. */}
          <Bouton variante="principal" vers="EC04">Envoyer</Bouton>
          <Note n={1} />
          <Bouton vers="EC04">Annuler</Bouton>
        </Actions>
      </Pile>
    </Gabarit>
  );
}
