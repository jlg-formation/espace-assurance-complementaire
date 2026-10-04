# Méthode des user flows

## 1. Task flow, user flow, wireflow
| Type | Contenu | Usage ici |
|---|---|---|
| Task flow | Une suite linéaire d'étapes, sans embranchement | Non : trop pauvre pour révéler les cas d'erreur |
| **User flow** | Écrans, décisions, traitements système, alternatives, erreurs, points d'entrée | **Oui** |
| Wireflow | User flow + maquette de chaque écran | Plus tard, au prototype |

## 2. Délimiter une tâche
Une tâche est un objectif du persona qui a :
- un **déclencheur** : ce qui le pousse à agir (un événement de vie, un courrier, une notification) ;
- une **fin** : le moment où il considère que c'est réglé, ou qu'il abandonne.

Trop petit : « Voir le statut » (un seul écran, c'est une story). Trop gros : « Gérer mon compte » (c'est une épopée ou plus). Bon niveau : « Envoyer une demande et savoir quand elle sera traitée ».

**Tâche à cheval sur plusieurs épopées** : une tâche mobilise souvent des stories d'autres épopées (se connecter, mettre à jour ses coordonnées). Le flow est rangé dans l'épopée de sa story principale. Les stories des autres épopées sont **mobilisées**, pas **couvertes** : leur couverture complète se vérifie dans leur propre flow. Elles sont :
- citées dans l'en-tête « Stories mobilisées » avec leur chemin complet, si leurs étapes sont dessinées dans ce flow ;
- ou remplacées par un renvoi `uf1[["UF-03.01 Me connecter"]]` vers le flow qui les détaille, pour ne pas redessiner la même séquence dans chaque flow. Un renvoi ne vise qu'un flow présent dans l'index.

## 3. Légende Mermaid (identique dans tous les flows)

| Forme | Syntaxe | Signification |
|---|---|---|
| Stade | `id(["…"])` | Début ou fin |
| Rectangle | `EC03["EC03 Suivi de la demande"]` | Écran |
| Losange | `d1{"Justificatif lisible ?"}` | Décision (du persona ou du système) |
| Parallélogramme | `s1[/"Vérification du justificatif"/]` | Traitement système |
| Double rectangle | `uf1[["UF-02.01 Mettre à jour mes coordonnées"]]` | Renvoi vers un autre flow |
| Flèche épaisse | `==>|"Transmet la demande"|` | **Happy path** |
| Flèche normale | `-->|"Choisit l'envoi postal"|` | Chemin alternatif ou d'erreur |
| Flèche pointillée | `-.->|"Marc : demande un rappel"|` | Variante d'un autre persona |

Le happy path se lit en suivant les flèches épaisses, du début à la fin, sans interruption. Ne pas utiliser `linkStyle` par index : il casse dès qu'on ajoute une flèche.

Classes :
```
classDef erreur fill:#fde2e2,stroke:#c0392b,color:#7b241c
classDef horsApp fill:#f2f2f2,stroke:#888,stroke-dasharray:5 5
classDef variante fill:#e3f0fc,stroke:#2e86c1
```
- `erreur` : écran ou état d'erreur.
- `horsApp` : point d'entrée ou étape hors application (notification, e-mail, courrier, moteur de recherche, appel au service client, envoi postal).
- `variante` : branche propre à un autre persona que le persona principal.

**Syntaxe** : toujours mettre les libellés entre guillemets (accents, deux-points et parenthèses cassent sinon le rendu). Ne jamais nommer un nœud `end` : c'est un mot réservé de Mermaid, il casse le diagramme. Orientation `flowchart TD` par défaut, `LR` si le flow est très linéaire.

### Identifiants des nœuds
| Nœud | Identifiant | Exemple |
|---|---|---|
| Début / fin | `start`, `fin` (`fin2`... si plusieurs fins) | `fin(["Demande traitée"])` |
| Écran | son identifiant d'inventaire, sans exception | `EC05["EC05 Justificatif illisible"]:::erreur` |
| Décision | `d1`, `d2`... | `d1{"Justificatif lisible ?"}` |
| Traitement système | `s1`, `s2`... | `s1[/"Vérification"/]` |
| Étape hors application | `x1`, `x2`... | `x1["Appelle le service client"]:::horsApp` |
| Étape de variante (hors écran) | `v1`, `v2`... | `v1["Marc : demande un rappel"]:::variante` |
| Renvoi vers un flow | `uf1`, `uf2`... | `uf1[["UF-03.01 Me connecter"]]` |

Un écran qui revient dans le flow réutilise le même nœud : on dessine une boucle, pas un doublon. Une étape de variante qui est un écran garde son identifiant `EC` et prend la classe `variante`. La section « Chemins » utilise ces mêmes identifiants.

## 4. Les types de chemins
| ID | Type | Description | Dans le diagramme |
|---|---|---|---|
| `HP` | **Happy path** | Tout se passe bien, du déclencheur à la fin. Un seul par flow, dessiné en premier, sur l'axe principal. | Flèches épaisses `==>` |
| `A1`, `A2`... | **Alternatif** | Un autre chemin valide (le persona n'a pas son justificatif sous la main, choisit un autre canal, revient plus tard). | Flèches normales `-->` |
| `E1`, `E2`... | **Erreur** | Quelque chose échoue (document illisible, session expirée, plafond atteint). | Flèches normales `-->`, nœuds `erreur` |
| `V1`, `V2`... | **Variante** | Chemin propre à un autre persona. | Flèches pointillées `-.->`, nœuds `variante` |

Chaque chemin est décrit dans la section « Chemins » du flow : identifiant, déclencheur de l'écart, suite de nœuds, issue. Un chemin alternatif ou d'erreur part d'un nœud du happy path et y revient, ou mène à une fin explicite (`fin2`...). Un identifiant désigne un seul chemin : deux issues différentes font deux chemins (`E1`, `E2`).

Chaque erreur doit avoir une **issue** : réessayer, contourner, ou joindre un humain. Une erreur sans issue est un cul-de-sac à signaler.

Penser aussi aux états souvent oubliés : premier usage, état vide (aucune demande), retour après interruption, délai d'attente.

## 5. Points d'entrée et étapes hors application
Les journey maps montrent par où le persona arrive vraiment (courrier de l'organisation, notification, recherche Google, lien dans un e-mail) et quand il sort de l'application (appel, envoi postal, visite en agence). Les représenter avec la classe `horsApp` : ce sont souvent là que se jouent les frictions.

## 6. Variantes de personas
Le flow suit le persona principal. Quand un autre persona diverge, ajouter une branche `variante` avec son prénom dans le libellé, rattachée à un constat de sa fiche (ex : « Marc préfère être rappelé » → branche vers une demande de rappel). Si les chemins divergent dès le début et sur toute la longueur, c'est probablement une autre tâche.

## 7. Nommer les écrans
- Nommer par le **rôle pour le persona** : « Suivi de la demande », pas « Page avec tableau » ni « Dashboard v2 ».
- Un écran = un lieu où le persona voit quelque chose et agit. Une fenêtre modale ou un message d'erreur pleine page compte comme écran ; un simple message dans un écran existant, non.
- Toujours chercher dans l'inventaire des écrans (`00-index.md`) avant de créer : le même écran utilisé par deux flows garde le même identifiant.

## 8. Couverture Gherkin
Pour chaque story **couverte**, chaque scénario de ses critères d'acceptation doit correspondre à un chemin du flow. Pour une story **mobilisée**, seuls les scénarios dessinés ici sont listés. Le tableau de couverture le rend vérifiable :

| Story | Scénario | Chemin |
|---|---|---|
| US-01.01 | Demande transmise avec succès | `HP` |
| US-01.01 | Justificatif illisible | `E1` |

Deux écarts possibles :
- **Scénario sans chemin** : le flow est incomplet, il faut le compléter. Si le scénario relève d'une autre tâche, le rattacher au flow qui le couvre. S'il paraît faux ou obsolète, en faire un retour « scénario à revoir ».
- **Chemin sans scénario** : il manque un critère d'acceptation, c'est un retour « scénario manquant ».

Un flow dont la couverture est incomplète est marqué *incomplet* dans l'index.

## 9. Retours vers le backlog
Dessiner un flow fait toujours apparaître des oublis. Les noter dans le flow, sans toucher aux stories :
- **Scénario manquant** : un chemin du flow qui n'est décrit par aucun critère d'acceptation → proposer un scénario Gherkin pour la story concernée.
- **Scénario à revoir** : un scénario qui paraît faux, obsolète ou contradictoire avec le flow → proposer sa correction ou sa suppression.
- **Story manquante** : un besoin qui n'entre dans aucune story → proposer une story (persona, « en tant que / je veux / afin de », MoSCoW, version).

Ils sont présentés en bloc à l'utilisateur, et appliqués aux stories seulement après son accord.

Avant de proposer une story, vérifier la section « Écartées » du story map : une story déjà classée `Won't` est présentée comme telle, avec sa raison, pour que l'utilisateur décide en connaissance de cause.

Une story ajoutée prend le prochain numéro libre de son épopée. Ce numéro est un identifiant stable ; l'ordre de lecture dans le parcours est celui du story map.
