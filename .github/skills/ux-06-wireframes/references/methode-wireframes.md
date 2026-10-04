# Méthode des wireframes

## 1. Niveaux de fidélité
| Niveau | Ce qu'il fixe | Usage ici |
|---|---|---|
| **Basse fidélité** | Structure, hiérarchie du contenu, actions, états, navigation | **Oui** : `ux-06` |
| Moyenne fidélité | Grille, espacements, composants précis | Non : sort du design system |
| Haute fidélité | Couleurs, typographie, images, marque | Plus tard : prototypes |

Un wireframe trop soigné fait discuter de la couleur d'un bouton au lieu de sa place. Tout ce qui relève du visuel attend le design system.

## 2. Règles de la basse fidélité
- **Niveaux de gris** uniquement, une seule police (celle du système), aucune image réelle : un emplacement d'image est un cadre barré (`Image`).
- **Vrais contenus** : montants, dates, noms d'actes, noms de garanties plausibles (« Consultation généraliste — 26,50 € — remboursé 18,55 € »). Le faux texte (*lorem ipsum*) cache les problèmes de longueur et de compréhension ; il n'est toléré que pour un long texte de corps (`Texte`).
- **Libellés du glossaire**, à la lettre : un libellé qui ne tient pas sur mobile est un retour vers l'architecture, pas une abréviation improvisée.
- **Aucun choix graphique** : pas de couleur de marque, d'icônes décoratives ni d'effets. Une icône utile est un mot entre crochets (`[i]`, `[↓]`).
- Le kit (`kit.tsx`, `wireframe.css`) porte toute la présentation : un écran n'a ni `className` ni `style`.

## 3. Mobile d'abord
Concevoir d'abord pour la plus petite largeur (375 px), puis élargir (1280 px). La hiérarchie du contenu se décide sur mobile, où tout est empilé : ce qui est en haut est ce qui compte le plus pour le persona principal.

Si l'appareil principal du persona est l'ordinateur, le dire dans la fiche, mais garder une version mobile lisible.

Le kit applique la même règle : ses styles de base valent pour le mobile, et ses requêtes média n'utilisent que `min-width` (768 px, 1024 px) pour enrichir la mise en page sur des écrans plus larges. `bun test` refuse toute requête `max-width` dans `wireframe.css`.

## 4. Hiérarchie du contenu
Pour chaque écran, avant de dessiner :
1. **Objectif** : ce que le persona vient faire ici, en une phrase (tiré du flow).
2. **Contenus et actions** classés par priorité pour lui : l'action principale (une seule, `<Bouton variante="principal">`), puis les informations nécessaires pour la décider, puis le reste.
3. Ce qui peut être replié, renvoyé à un autre écran ou supprimé.

La source : l'inventaire des contenus (objets et actions de l'écran), les étapes du happy path des flows, les constats « Ce qui le bloque » de la fiche persona.

## 5. États d'un écran
Un écran n'est pas qu'un état nominal. Passer en revue (d'après la « pile d'interface » de Scott Hurff) :

| État | Exemple | Quand le dessiner |
|---|---|---|
| Nominal | Liste des remboursements | Toujours |
| Vide | Aucun remboursement pour l'instant | Liste ou tableau |
| Premier usage | Première connexion, aucun bénéficiaire ajouté | Si un flow ou un scénario le prévoit |
| Partiel | Remboursement en attente du régime obligatoire | Données incomplètes ou en cours |
| Chargement | Envoi de la facture en cours | Traitement système visible par le persona |
| Erreur | Facture illisible, session expirée | Chaque chemin `E` des flows qui passe par l'écran |

Chaque chemin alternatif ou d'erreur des flows passe par un écran ou un état ; chaque scénario Gherkin qui décrit une réaction visible aussi. Un état sans chemin ni scénario est un retour « scénario manquant ».

L'écran reçoit l'état demandé dans sa prop `etat` (`nominal` par défaut) et rend ce qui change. Les états sont déclarés dans `registre.ts` ; la barre de revue permet de passer de l'un à l'autre (`/#/wireframes/EC04?etat=vide`). Chaque état garde un seul `h1`.

## 6. Écrans contextuels
- **Fenêtre modale** : reprendre le titre et l'essentiel du parent, sans le détailler, puis `<Modale titre="..." fermerVers="ECNN">` (rôle `dialog`, titre lié).
- **Étape d'un formulaire en plusieurs écrans** : indiquer l'étape (« Étape 2 sur 3 »).
- **Confirmation, erreur pleine page** : un écran à part, avec son issue (réessayer, contourner, contacter).
Le fichier va dans le dossier de la zone du parent.

## 7. Wireflow : relier les écrans
Les écrans sont reliés comme dans les flows :
- une action qui mène à un autre écran porte `vers="EC07"` (`Bouton`, `Lien`, `Carte`), et `etat="..."` si elle mène à un état précis ; l'identifiant est typé : un écran absent de l'inventaire ne compile pas ;
- une décision ou un traitement système du flow est franchi en visant l'écran suivant du **happy path** ; les autres issues sont accessibles par les états ou par un lien noté en annotation ;
- une étape hors application (courrier, notification, appel) est figurée par une annotation ; le point d'entrée figure dans la galerie (`parcours.ts`).

Un formulaire se soumet par un `Bouton variante="principal"` avec `vers` vers l'écran suivant : il n'y a pas de serveur. L'annoter : « Bouton de soumission dans l'interface réelle ».

Le **parcours cliquable** d'un flow est vérifié par `bun test` : pour chaque étape du happy path déclaré dans `parcours.ts`, l'écran doit contenir un lien vers l'étape suivante.

## 8. Accessibilité dès le wireframe
La France impose le RGAA aux services publics et aux grandes entreprises ; la structure se décide ici, pas au développement :
- repères `header`, `nav`, `main`, `footer` : fournis par `Gabarit` ;
- un seul `h1` par état (vérifié par `bun test`), puis des titres sans saut de niveau ;
- ordre du code = ordre de lecture = ordre de la hiérarchie du contenu ;
- chaque champ a un libellé visible (`Champ libelle`) ; les erreurs de saisie sont décrites en texte, près du champ (`Champ erreur`) ;
- un lien navigue (`vers`), un bouton agit (`Bouton` sans `vers`) ;
- aucun état porté par la seule couleur : une erreur a un texte et un marqueur (`Alerte`) ;
- cibles tactiles de 44 px au moins (assuré par le kit) ;
- rubrique courante marquée `aria-current="page"` : passer `rubrique` à `Gabarit`.

## 9. Annotations
Ce que le wireframe ne montre pas s'annote : comportement (« se replie au-delà de 3 éléments »), règle de gestion (« montant estimé tant que le régime obligatoire n'a pas payé »), origine des données, accessibilité, écart volontaire.

Dans l'écran : `<Note n={1} />` près de l'élément. Dans la fiche : la description de la note 1. Chaque note a ses deux moitiés.

## 10. Composants du kit
Contrat : `src/projet/ui.ts`. Le design system implémentera les mêmes composants avec les mêmes props.

| Composant | Props principales | Usage |
|---|---|---|
| `Gabarit` | `zone`, `rubrique`, `ariane` | En-tête, navigation globale (onglets en bas sur mobile si la zone le prévoit), fil d'Ariane, `main`, pied de page |
| `Bouton` | `variante` (`principal` / `secondaire`), `vers`, `etat`, `desactive` | Avec `vers` : navigue ; sans : agit |
| `Lien` | `vers`, `etat` | Lien dans le texte ou une liste |
| `Champ` | `id`, `libelle`, `type`, `options`, `aide`, `erreur`, `valeur`, `obligatoire` | Champ étiqueté ; `options` donne une liste déroulante, `type="textarea"` une zone de texte |
| `Liste`, `Ligne` | — | Liste de lignes séparées |
| `Carte` | `titre`, `vers` | Élément cliquable d'une grille ou d'une liste |
| `Bloc` | `titre`, `niveau` | Zone encadrée avec titre |
| `Alerte` | `type` (`erreur`, `succes`, `avertissement`, `information`), `titre` | Message avec préfixe textuel |
| `Etiquette` | `ton` | Statut court (« En cours », « Payé ») ; le ton sert au design system |
| `Image`, `Texte` | `alt` ; `lignes` | Emplacement d'image ; lignes de texte de remplissage |
| `Modale` | `titre`, `fermerVers` | Fenêtre modale |
| `Pile`, `Grille`, `Colonnes`, `Actions` | — | Empilement, grille de cartes, deux colonnes sur ordinateur, rangée de boutons |
| `Note` | `n` | Marqueur d'annotation numéroté |
| `Mobile`, `Ordinateur` | — | Visible seulement sur mobile, ou seulement sur ordinateur |

Un besoin non couvert est un retour « vers le kit » : il se traite dans les assets du skill (`ui.ts`, `kit.tsx`, `wireframe.css`), avec l'accord de l'utilisateur, puis la copie est refaite dans `web/`.
