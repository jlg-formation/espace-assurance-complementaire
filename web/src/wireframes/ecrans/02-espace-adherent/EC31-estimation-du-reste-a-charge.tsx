// EC31 Estimation du reste à charge — lieu, description du soin à estimer.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Champ, Gabarit, Lien, Pile } from '../../kit/kit';

export default function EC31(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Estimer un soin' }]}>
      <h1>Estimer un soin</h1>
      <Pile>
        <Champ id="pour-qui" libelle="Pour qui ?" options={['Manon', 'Léo (4 ans)']} obligatoire />
        <Champ id="soin" libelle="Type de soin" options={['Couronne dentaire', 'Lunettes', 'Appareil dentaire (orthodontie)', 'Consultation de spécialiste', 'Hospitalisation']} obligatoire />
        <Champ id="montant" libelle="Montant annoncé par le praticien" type="number" valeur="650" aide="En euros, tel qu'il figure sur le devis" obligatoire />
        <Champ id="code" libelle="Code de l'acte (facultatif)" aide="Sur le devis, une suite de lettres et de chiffres, par exemple HBLD634" />
        <Actions>
          <Bouton variante="principal" vers="EC32">Estimer</Bouton>
        </Actions>
        <p><Lien vers="EC33">Je n'ai pas ces informations : envoyer le devis</Lien></p>
      </Pile>
    </Gabarit>
  );
}
