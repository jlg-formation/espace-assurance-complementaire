// EC51 Demande de rappel — lieu (états aucun créneau, rappel manqué).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC51({ etat }: PropsEcran) {
  const complet = etat === 'complet';
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Être rappelé' }]}>
      <h1>Être rappelé par un conseiller</h1>
      <Pile>
        {etat === 'manque' && (
          <Alerte type="information" titre="Nous n'avons pas pu vous joindre mardi entre 14 h et 16 h.">
            <p>Votre demande est conservée : choisissez seulement un nouveau créneau.</p>
          </Alerte>
        )}
        {complet && (
          <Alerte type="information" titre="Aucun créneau d'ici 2 jours ouvrés. Premier créneau libre : jeudi 9 octobre, 9 h - 11 h.">
            <p>Vous pouvez aussi <Lien vers="EC53">poser plutôt une question écrite</Lien>.</p>
          </Alerte>
        )}
        <Champ id="objet" libelle="À quel sujet ?" options={["Dossier d'arrêt de travail", 'Devis ou remboursement', 'Choisir une formule', 'Accès à mon espace', 'Autre']} />
        <Champ id="jour" libelle="Jour" options={complet ? ['Jeudi 9 octobre', 'Vendredi 10 octobre'] : ['Mardi 7 octobre', 'Mercredi 8 octobre', 'Jeudi 9 octobre']} />
        <Champ id="plage" libelle="Plage horaire" options={['9 h - 11 h', '11 h - 13 h', '14 h - 16 h', '16 h - 18 h']} valeur="14 h - 16 h" />
        <Champ id="tel" libelle="Numéro de téléphone" type="tel" aide="Utilisé seulement pour ce rappel" obligatoire />
        <Note n={1} />
        <Actions><Bouton variante="principal" vers="EC52">Demander le rappel</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
