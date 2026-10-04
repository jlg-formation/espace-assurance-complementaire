// EC02 Formules santé en euros — lieu, comparaison par soin de référence (état non couvert).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bloc, Bouton, Champ, Colonnes, Etiquette, Gabarit, Lien, Note, Pile } from '../../kit/kit';

export default function EC02({ etat }: PropsEcran) {
  const nonCouvert = etat === 'non-couvert';
  return (
    <Gabarit zone="site-public" rubrique="mutuelle-sante" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Mutuelle santé' }]}>
      <h1>Mutuelle santé : ce que chaque formule vous rembourse</h1>
      <Colonnes>
        <Pile>
          <Champ
            id="soin"
            libelle="Choisissez un soin"
            options={['Couronne dentaire — 650 €', 'Paire de lunettes — 420 €', 'Consultation chez un spécialiste — 60 €', 'Hospitalisation, chambre particulière — 80 € par nuit', 'Implant dentaire — 1 200 €']}
            valeur={nonCouvert ? 'Implant dentaire — 1 200 €' : 'Couronne dentaire — 650 €'}
          />
          <Note n={1} />
          <h2>{nonCouvert ? 'Pour un implant dentaire à 1 200 €' : 'Pour une couronne dentaire à 650 €'}</h2>
          <Bloc titre="Essentielle — 22,40 € par mois" niveau={3}>
            {nonCouvert ? (
              <p><Etiquette ton="erreur">Non couvert</Etiquette> Cette formule ne rembourse pas les implants : <strong>1 200 € à votre charge</strong>.</p>
            ) : (
              <p>Remboursé : 240 € · <strong>Reste à votre charge : 410 €</strong></p>
            )}
          </Bloc>
          <Bloc titre="Confort — 38,90 € par mois" niveau={3}>
            <p>{nonCouvert ? 'Remboursé : 400 € · ' : 'Remboursé : 420 € · '}<strong>{nonCouvert ? 'Reste à votre charge : 800 €' : 'Reste à votre charge : 230 €'}</strong></p>
          </Bloc>
          <Bloc titre="Renfort — 56,10 € par mois" niveau={3}>
            <p>{nonCouvert ? 'Remboursé : 750 € · ' : 'Remboursé : 585 € · '}<strong>{nonCouvert ? 'Reste à votre charge : 450 €' : 'Reste à votre charge : 65 €'}</strong></p>
          </Bloc>
          <Actions>
            <Bouton variante="principal" vers="EC06">Obtenir un tarif pour cette formule</Bouton>
          </Actions>
          <details>
            <summary>Voir toutes les garanties (tableau détaillé)</summary>
            <p>Garanties exprimées en pourcentage de la base de remboursement, poste par poste. <Note n={2} /></p>
          </details>
        </Pile>
        <Pile>
          <Bloc titre="Base de remboursement : de quoi parle-t-on ?">
            <p>C'est le tarif fixé par l'Assurance Maladie pour un soin. « 100 % de la base de remboursement » ne veut pas dire que tout ce que vous payez est remboursé.</p>
          </Bloc>
          <p>Vous préférez qu'on vous explique ? <Lien vers="EC51">Être rappelé</Lien></p>
        </Pile>
      </Colonnes>
    </Gabarit>
  );
}
