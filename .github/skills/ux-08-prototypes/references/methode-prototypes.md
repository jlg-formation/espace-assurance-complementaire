# Méthode des prototypes

## 1. Fidélité
| Niveau | Ce qu'il fixe | Phase |
|---|---|---|
| Basse | Structure, hiérarchie, actions, états, navigation | `ux-06` wireframes |
| **Haute** | Tout ce qui précède, plus l'identité, les vrais contenus, les interactions locales | **`ux-08` prototypes** |
| Production | Données réelles, serveur, sécurité, performance | Développement |

Un prototype n'est pas le produit : pas de serveur, pas d'appel réseau, pas de donnée réelle. Il doit être assez crédible pour qu'un participant oublie qu'il s'agit d'une maquette.

## 2. Du wireframe au prototype
| Étape | Ce qui change | Ce qui ne change pas |
|---|---|---|
| Import | `../../kit/kit` → `../../../design-system/composants` | Noms des composants, props, structure |
| Annotations | `Note` retirées | Leur contenu reste dans la fiche du wireframe |
| Remplissage | `Texte` → vrai texte ; `Image` → image locale ou suppression | — |
| Contenus | Valeurs en dur → jeu de données + `formats.ts` | Libellés du glossaire |
| Fusions | Groupe du kit → composant fusionné validé en `ux-07` | — |
| Interactions | `useState` local si utile | Navigation par `vers` |

Tout autre écart de structure est un retour vers les wireframes : on corrige la source, puis on recopie.

## 3. Jeu de données fictif
Un seul jeu, `src/prototypes/donnees/donnees.ts`, lu par tous les écrans :
- **Cohérence** : la demande affichée dans la liste est la même que dans le détail ; une date de réponse suit la date d'envoi ; un total est la somme de ses lignes ; les dates suivent l'ordre du parcours.
- **Plausibilité** : objets, montants et délais réalistes pour le domaine du projet.
- **Couverture des états** : une demande en cours, une demande refusée, un compte sans historique... de quoi rendre chaque état sans inventer de cas à part.
- **Fiction** : prénom courant, nom manifestement fictif, aucun identifiant officiel (numéro de sécurité sociale, fiscal...), aucun IBAN ni adresse réels ; jamais un participant de la recherche.

Les données sont typées : une incohérence de forme ne compile pas.

## 4. Contrôle d'accessibilité
Le design system garantit les contrastes et les cibles ; le prototype vérifie l'expérience assemblée :

| Contrôle | Comment | Critère |
|---|---|---|
| Clavier seul | Parcourir le happy path avec Tab, Maj+Tab, Entrée, Espace, Échap | Ordre logique, focus visible, aucune impasse, aucune action à la souris seulement |
| Titre de page | Onglet du navigateur | Un titre par écran (fourni par la page de prototype) |
| Zoom 200 % | Zoom du navigateur | Aucun contenu coupé ni superposé, pas de défilement horizontal à 320 px de large |
| Mobile | Largeur 375 px | Navigation et action principale atteignables |
| Lecteur d'écran (sondage) | NVDA ou VoiceOver sur un parcours | Repères, titres, libellés de champs et erreurs annoncés |
| Audit automatique | Lighthouse ou équivalent, si disponible | Score accessibilité et problèmes reportés ; un audit automatique ne remplace pas les contrôles manuels |

Ce contrôle prépare un audit RGAA ; il n'en tient pas lieu.

## 5. Test d'utilisabilité
- **Format** : modéré, à distance ou en présentiel, 30 à 45 minutes, en pensant à voix haute.
- **Participants** : 5 par profil de persona suffisent à révéler l'essentiel des problèmes d'un parcours (Nielsen) ; recruter hors de l'équipe et hors des participants de la recherche si possible.
- **Consentement** : information sur l'enregistrement, finalité, durée de conservation, droit de retrait (RGPD) ; aucune donnée personnelle réelle saisie dans le prototype.
- **Scénarios** : une situation, avec les mots du persona, sans les libellés de l'interface (« Vous venez de déménager, vous voulez que votre nouvelle adresse soit prise en compte »). Une tâche par parcours `Must` du MVP.
- **Départ** : l'adresse en mode test du premier écran du parcours (`/#/test/ECNN`).
- **Mesures** : réussite (sans aide / avec aide / échec), temps, erreurs, facilité perçue après chaque tâche (question unique, échelle de 1 à 7), verbatims.
- **Analyse** : un problème = constat + gravité (bloquant, majeur, mineur) + écran + piste ; les problèmes alimentent les retours vers les skills concernés.

Les résultats ne sont jamais simulés : avec des données de recherche simulées, le protocole est prêt, le test reste à mener.

## 6. Mode revue et mode test
| | Revue `/#/prototypes/ECNN` | Test `/#/test/ECNN` |
|---|---|---|
| Barre de revue (identifiant, wireframe, états) | Oui | Non |
| Bandeau « données simulées » | Oui, si applicable | Non |
| Liens entre écrans | Restent en revue | Restent en test |
| Choix de l'état | Par la barre | Par l'adresse (`?etat=`), préparé par l'animateur |

## 7. Partager
`bun run build` produit `web/dist/`, une version statique (routeur à `#`, chemins relatifs) qui s'ouvre avec `bun run preview` ou sur tout hébergement statique. Publier sur un hébergement partagé (GitHub Pages, intranet...) se fait avec l'accord de l'utilisateur.
