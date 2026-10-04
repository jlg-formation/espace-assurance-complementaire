// EC37 Réponse au devis — prototype.
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Bouton, Gabarit, Lien, Pile } from '../../../design-system/composants';
import { devisOrthodontie, resteDevis, resteSemestre } from '../../donnees/donnees';
import { date, euros } from '../../donnees/formats';

export default function EC37(_props: PropsEcran) {
  const d = devisOrthodontie;
  return (
    <Gabarit zone="espace-adherent" rubrique="mes-demandes" ariane={[{ libelle: 'Mon espace', vers: 'EC27' }, { libelle: 'Mes demandes', vers: 'EC36' }, { libelle: 'Réponse à mon devis' }]}>
      <h1>Orthodontie de {d.beneficiaire} : {euros(resteDevis)} resteront à votre charge</h1>
      <Pile>
        <p>Devis de {euros(d.montant)} sur {d.semestres.length} semestres, envoyé le {date(d.envoyeLe)}.</p>
        <table>
          <caption>Prise en charge par semestre</caption>
          <thead>
            <tr><th scope="col">Semestre</th><th scope="col">Assurance Maladie</th><th scope="col">Clarea</th><th scope="col">Reste à votre charge</th></tr>
          </thead>
          <tbody>
            {d.semestres.map((s, i) => (
              <tr key={i}>
                <th scope="row">{i + 1} ({euros(s.montant)})</th>
                <td>{euros(s.assuranceMaladie)}</td>
                <td>{euros(s.clarea)}</td>
                <td>{euros(resteSemestre(s))}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Réponse valable jusqu'au {date(d.valableJusquAu)}.</p>
        <Actions><Bouton variante="principal">Télécharger la réponse pour l'orthodontiste</Bouton></Actions>
        <p><Lien vers="EC36">Retour à mes demandes</Lien></p>
      </Pile>
    </Gabarit>
  );
}
