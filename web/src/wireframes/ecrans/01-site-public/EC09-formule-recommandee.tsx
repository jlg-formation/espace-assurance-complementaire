// EC09 Formule recommandée — contextuel de EC08 (états prévoyance et autre formule).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bloc, Bouton, Gabarit, Lien, Ligne, Liste, Note, Pile } from '../../kit/kit';

export default function EC09({ etat }: PropsEcran) {
  const ariane = [{ libelle: 'Accueil', vers: 'EC01' as const }, { libelle: 'Obtenir un tarif', vers: 'EC06' as const }, { libelle: 'Formule recommandée' }];
  if (etat === 'prevoyance') {
    return (
      <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
        <h1>Nous vous conseillons la Prévoyance Confort</h1>
        <Pile>
          <Bloc titre="64 € par mois">
            <p>Franchise de 30 jours, 90 € par jour d'arrêt, revenu garanti de 42 000 €.</p>
            <p>Pourquoi : vous avez peu d'épargne pour couvrir un arrêt long. <Note n={1} /></p>
          </Bloc>
          <p>Prochaine étape : un questionnaire de santé, lu uniquement par notre médecin-conseil.</p>
          <Actions><Bouton variante="principal" vers="EC12">Répondre au questionnaire de santé</Bouton></Actions>
        </Pile>
      </Gabarit>
    );
  }
  const autre = etat === 'autre';
  return (
    <Gabarit zone="site-public" rubrique="tarif" ariane={ariane}>
      <h1>{autre ? 'Vous choisissez la formule Essentielle' : 'Nous vous conseillons la formule Confort'}</h1>
      <Pile>
        {autre ? (
          <Alerte type="avertissement" titre="Avec Essentielle, deux soins que vous avez indiqués seront moins bien remboursés :">
            <Liste>
              <Ligne><span>Lunettes de votre enfant</span><strong>270 € à votre charge au lieu de 85 €</strong></Ligne>
              <Ligne><span>Couronne dentaire</span><strong>410 € à votre charge au lieu de 230 €</strong></Ligne>
            </Liste>
          </Alerte>
        ) : (
          <Bloc titre="38,90 € par mois pour 2 personnes">
            <p>Pourquoi cette formule : elle rembourse le mieux les soins que vous avez indiqués. <Note n={1} /></p>
            <Liste>
              <Ligne><span>Lunettes de votre enfant (420 €)</span><strong>85 € à votre charge</strong></Ligne>
              <Ligne><span>Couronne dentaire (650 €)</span><strong>230 € à votre charge</strong></Ligne>
            </Liste>
          </Bloc>
        )}
        <Actions>
          <Bouton variante="principal" vers="EC18">{autre ? 'Continuer avec Essentielle' : 'Choisir Confort'}</Bouton>
        </Actions>
        {!autre && <p><Lien vers="EC09" etat="autre">Choisir une autre formule</Lien></p>}
      </Pile>
    </Gabarit>
  );
}
