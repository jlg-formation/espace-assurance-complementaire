# Test d'utilisabilité — {nom du projet}

<!-- Protocole produit par ux-08. Les résultats ne sont jamais simulés. -->

## Objectifs
- {Vérifier qu'un client envoie une demande et sait quand elle sera traitée, sans aide.}
- {...}

## Participants
| Profil | Persona | Nombre | Critères de recrutement |
|---|---|---|---|
| {Client actif, à l'aise sur mobile} | [{Prénom}](../02-persona/{NN}-{prenom}.persona.md) | {5} | {âge, situation, aisance numérique, exclusions} |

## Déroulé
- **Format** : {modéré, à distance / en présentiel}, {30 à 45} minutes, en pensant à voix haute
- **Appareil** : {mobile / ordinateur}, d'après l'appareil principal du persona
- **Prototype** : `bun run dev` ou version statique `web/dist/`, en **mode test** (`/#/test/...`)
- **Consentement** : {information sur l'enregistrement, finalité, durée de conservation, droit de retrait}. Aucune donnée personnelle réelle n'est saisie dans le prototype.
- **Introduction** : {« Nous testons le site, pas vous. Il n'y a pas de mauvaise réponse. »}

## Tâches

<!-- Une par parcours Must du MVP. Scénario avec les mots du persona, sans les libellés de l'interface. -->

| # | Scénario lu au participant | Flow | Départ | Réussite si | Écrans attendus |
|---|---|---|---|---|---|
| T1 | {Vous venez de déménager. Vous voulez que votre nouvelle adresse soit prise en compte le plus vite possible.} | [UF-{NN}.{FF}](../05-user-flows/{NN}-{epopee}/{FF}-{tache}.flow.md) | `/#/test/EC{NN}` | {la demande est envoyée et le participant sait où suivre son avancement} | {EC{NN} → EC{NN} → EC{NN}} |

## Mesures
- Réussite par tâche : sans aide / avec aide / échec
- Temps par tâche
- Erreurs et chemins de détour
- Facilité perçue après chaque tâche : « Dans l'ensemble, cette tâche était… » de 1 (très difficile) à 7 (très facile)
- Verbatims marquants

## Questions de fin
- {Qu'avez-vous trouvé le plus simple ? Le plus difficile ?}
- {...}

## Résultats

<!-- Vide tant que le test n'a pas été mené avec de vrais participants. -->

*Test non mené.*

| Tâche | Réussite sans aide | Avec aide | Échec | Temps médian | Facilité médiane |
|---|---|---|---|---|---|

### Problèmes relevés

| # | Constat | Écran | Gravité | Participants | Piste | Retour vers |
|---|---|---|---|---|---|---|
