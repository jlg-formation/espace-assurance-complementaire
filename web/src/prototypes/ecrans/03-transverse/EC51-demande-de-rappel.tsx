// EC51 Demande de rappel — prototype (états aucun créneau, rappel manqué).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { rappel } from '../../donnees/donnees';

export default function EC51({ etat }: PropsEcran) {
  const complet = etat === 'complet';
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Être rappelé' }]}>
      <h1>Être rappelé par un conseiller</h1>
      <Pile>
        {etat === 'manque' && (
          <Alerte type="information" titre={`Nous n'avons pas pu vous joindre ${rappel.creneau.jour} entre ${rappel.creneau.plage.replace(' - ', ' et ')}.`}>
            <p>Votre demande est conservée : choisissez seulement un nouveau créneau.</p>
          </Alerte>
        )}
        {complet && (
          <Alerte type="information" titre={`Aucun créneau d'ici 2 jours ouvrés. Premier créneau libre : ${rappel.premierCreneauLibre.jour}, ${rappel.premierCreneauLibre.plage}.`}>
            <p>Vous pouvez aussi <Lien vers="EC53">poser plutôt une question écrite</Lien>.</p>
          </Alerte>
        )}
        <Champ id="objet" libelle="À quel sujet ?" options={["Dossier d'arrêt de travail", 'Devis ou remboursement', 'Choisir une formule', 'Accès à mon espace', 'Autre']} />
        <Champ id="jour" libelle="Jour" options={complet ? rappel.joursSiComplet : rappel.joursProposes} />
        <Champ id="plage" libelle="Plage horaire" options={['9 h - 11 h', '11 h - 13 h', '14 h - 16 h', '16 h - 18 h']} valeur={rappel.creneau.plage} />
        <Champ id="tel" libelle="Numéro de téléphone" type="tel" aide="Utilisé seulement pour ce rappel" obligatoire />
        <p>Le conseiller verra l'objet choisi et votre dossier avant de vous appeler.</p>
        <Actions><Bouton variante="principal" vers="EC52">Demander le rappel</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
