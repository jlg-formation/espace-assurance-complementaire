// EC23 Connexion — prototype (état identifiants incorrects).
import type { PropsEcran } from '../../../projet/ui';
import { Actions, Alerte, Bouton, Champ, Gabarit, Lien, Pile, RecoursHumain } from '../../../design-system/composants';

export default function EC23({ etat }: PropsEcran) {
  const erreur = etat === 'erreur';
  return (
    <Gabarit zone="transverse" ariane={[{ libelle: 'Accueil', vers: 'EC01' }, { libelle: 'Se connecter' }]}>
      <h1>Se connecter à mon espace</h1>
      <Pile>
        {erreur && <Alerte type="erreur" titre="Identifiant ou mot de passe incorrect. Il vous reste 4 essais." />}
        <Champ id="identifiant" libelle="Identifiant" aide="Votre adresse e-mail ou votre numéro d'adhérent" obligatoire />
        <Champ id="mdp" libelle="Mot de passe" type="password" erreur={erreur ? 'Mot de passe incorrect.' : undefined} obligatoire />
        <Actions>
          <Bouton variante="principal" vers="EC27">Se connecter</Bouton>
        </Actions>
        <p><Lien vers="EC26">Mot de passe oublié</Lien> · <Lien vers="EC24">Première connexion</Lien></p>
        <RecoursHumain question="Vous n'y arrivez pas ?" />
      </Pile>
    </Gabarit>
  );
}
