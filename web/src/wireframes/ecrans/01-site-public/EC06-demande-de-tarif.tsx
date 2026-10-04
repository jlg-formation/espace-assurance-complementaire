// EC06 Demande de tarif — lieu, formulaire sans coordonnées (état prérempli depuis l'e-mail du devis).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Note, Pile } from '../../kit/kit';

export default function EC06({ etat }: PropsEcran) {
  const prerempli = etat === 'prerempli';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Obtenir un tarif' }]}>
      <h1>Obtenir un tarif</h1>
      <Pile>
        {prerempli && <Alerte type="information" titre="Nous avons repris les informations de votre devis du 3 octobre 2026." />}
        <p><strong>Aucun e-mail ni téléphone demandé pour voir les prix.</strong> <Note n={1} /></p>
        <Champ id="offre" libelle="Offre" options={['Mutuelle santé', 'Prévoyance']} obligatoire />
        <Champ id="naissance" libelle="Votre date de naissance" type="date" valeur={prerempli ? '1996-03-14' : undefined} obligatoire />
        <Champ id="cp" libelle="Code postal" valeur={prerempli ? '31000' : undefined} obligatoire />
        <Champ id="personnes" libelle="Personnes à couvrir" options={['Moi seul(e)', 'Moi et 1 enfant', 'Moi et mon conjoint', 'Toute la famille']} valeur={prerempli ? 'Moi et 1 enfant' : undefined} obligatoire />
        <Champ
          id="regime"
          libelle="Votre régime obligatoire"
          options={['Salarié (régime général)', 'Indépendant', 'Étudiant', 'Je ne sais pas']}
          aide="C'est votre assurance maladie de base. Si vous hésitez, choisissez « Je ne sais pas » : le tarif reste juste à quelques euros près."
        />
        <Actions>
          <Bouton variante="principal" vers="EC07">Voir les tarifs</Bouton>
          <Note n={2} />
        </Actions>
      </Pile>
    </Gabarit>
  );
}
