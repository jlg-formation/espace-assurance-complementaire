// EC35 Document illisible — contextuel de EC33, erreur (état échecs répétés).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, Pile } from '../../kit/kit';

export default function EC35({ etat }: PropsEcran) {
  const repete = etat === 'repete';
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Document illisible' }]}>
      <h1>Nous n'arrivons pas à lire votre document</h1>
      <Pile>
        <Alerte type="erreur" titre={repete ? 'La page 2 du devis est encore illisible (2e essai).' : 'La page 2 du devis est floue.'}>
          <p>Vos autres pages et les informations saisies sont conservées.</p>
        </Alerte>
        <Bloc titre="Pour une photo lisible">
          <p>Document à plat, en pleine lumière, sans ombre ; page entière dans le cadre.</p>
        </Bloc>
        <Actions><Bouton variante="principal" vers="EC33">Reprendre la photo</Bouton></Actions>
        {repete && (
          <Bloc titre="Autres solutions">
            <p>Envoyez le devis par courrier : Clarea Assurances, Service des prestations, TSA 40000, 75000 Paris.</p>
            <p><Lien vers="EC51">Être rappelé</Lien></p>
          </Bloc>
        )}
      </Pile>
    </Gabarit>
  );
}
