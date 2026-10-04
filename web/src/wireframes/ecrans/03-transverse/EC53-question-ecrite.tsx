// EC53 Question écrite — lieu (état information médicale détectée).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC53({ etat }: PropsEcran) {
  const medical = etat === 'medical';
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Aide et contact', vers: 'EC54' }, { libelle: 'Poser une question' }]}>
      <h1>Poser une question</h1>
      <Pile>
        <p>Réponse sous 2 jours ouvrés, conservée avec votre question. Connexion à votre espace demandée. <Note n={1} /></p>
        {medical && (
          <Alerte type="avertissement" titre="Votre question semble contenir une information médicale.">
            <p>Pour la protéger, envoyez-la à notre médecin-conseil comme une pièce : <Lien vers="EC33">Envoyer un document</Lien>. Ou retirez-la de votre question.</p>
          </Alerte>
        )}
        <Champ id="contrat" libelle="Contrat concerné" options={['Mutuelle santé Confort — n° 1234 5678', 'Prévoyance Confort — n° 1234 5679']} />
        <Champ id="sujet" libelle="Sujet" valeur="Attestation de cotisations 2025" obligatoire />
        <Champ id="question" libelle="Votre question" type="textarea" obligatoire />
        <Actions><Bouton variante="principal" vers="EC34" etat="question">Envoyer ma question</Bouton></Actions>
      </Pile>
    </Gabarit>
  );
}
