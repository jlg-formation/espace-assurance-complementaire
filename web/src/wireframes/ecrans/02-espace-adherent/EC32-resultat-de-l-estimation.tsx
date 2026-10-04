// EC32 Résultat de l'estimation — contextuel de EC31 (états enfant, fourchette).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC32({ etat }: PropsEcran) {
  const enfant = etat === 'enfant';
  const fourchette = etat === 'fourchette';
  return (
    <Gabarit zone="espace-adherent" rubrique="ma-sante" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Ma santé', vers: 'EC38' }, { libelle: 'Estimer un soin', vers: 'EC31' }, { libelle: 'Résultat' }]}>
      <h1>{enfant ? 'Lunettes de Léo à 420 € : il vous resterait 270 €' : fourchette ? 'Couronne dentaire à 650 € : il vous resterait entre 250 € et 420 €' : 'Couronne dentaire à 650 € : il vous resterait 381,25 €'}</h1>
      <Pile>
        {fourchette ? (
          <Alerte type="information" titre="Sans le code de l'acte, nous ne pouvons donner qu'une fourchette.">
            <p>Envoyez le devis pour une réponse exacte, sous 5 jours ouvrés.</p>
          </Alerte>
        ) : (
          <Bloc titre="Répartition">
            <Liste>
              <Ligne><span>Assurance Maladie</span><strong>{enfant ? '0,05 €' : '75,25 €'}</strong></Ligne>
              <Ligne><span>Votre mutuelle (Confort)</span><strong>{enfant ? '149,95 €' : '193,50 €'}</strong></Ligne>
              <Ligne><span>Reste à votre charge</span><strong>{enfant ? '270 €' : '381,25 €'}</strong></Ligne>
            </Liste>
            {enfant && <p>Plafond lunettes de Léo pour 2026 : 150 € restants sur 200 € (50 € déjà utilisés en mars).</p>}
          </Bloc>
        )}
        <p>Estimation à partir des tarifs connus ; le montant exact dépend de la facture. <Note n={1} /></p>
        <details>
          <summary>Reste à charge : de quoi parle-t-on ?</summary>
          <p>Ce que vous payez vous-même après les remboursements de l'Assurance Maladie et de votre mutuelle.</p>
        </details>
        <Actions>
          {fourchette
            ? <Bouton variante="principal" vers="EC33">Envoyer le devis pour une réponse exacte</Bouton>
            : <Bouton vers="EC33">Envoyer le devis pour une réponse exacte</Bouton>}
        </Actions>
        <p><Lien vers="EC31">Estimer un autre soin</Lien></p>
      </Pile>
    </Gabarit>
  );
}
