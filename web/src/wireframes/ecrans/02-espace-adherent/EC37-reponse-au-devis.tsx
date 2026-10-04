// EC37 Réponse au devis — lieu, prise en charge par semestre.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC37(_props: PropsEcran) {
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Réponse à mon devis' }]}>
      <h1>Orthodontie de Lucas : 769,50 € resteront à votre charge</h1>
      <Pile>
        <p>Devis de 2 400 € sur 3 semestres, envoyé le 3 octobre 2026.</p>
        <table>
          <caption>Prise en charge par semestre</caption>
          <thead>
            <tr><th scope="col">Semestre</th><th scope="col">Assurance Maladie</th><th scope="col">Clarea</th><th scope="col">Reste à votre charge</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">1 (800 €)</th><td>193,50 €</td><td>350 €</td><td>256,50 €</td></tr>
            <tr><th scope="row">2 (800 €)</th><td>193,50 €</td><td>350 €</td><td>256,50 €</td></tr>
            <tr><th scope="row">3 (800 €)</th><td>193,50 €</td><td>350 €</td><td>256,50 €</td></tr>
          </tbody>
        </table>
        <p>Réponse valable jusqu'au 3 avril 2027. <Note n={1} /></p>
        <Actions><Bouton variante="principal">Télécharger la réponse pour l'orthodontiste</Bouton></Actions>
        <p><Lien vers="EC36">Retour à mes demandes</Lien></p>
      </Pile>
    </Gabarit>
  );
}
