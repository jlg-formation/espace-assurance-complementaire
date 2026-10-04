# Méthode de l'architecture de l'information

## 1. Les quatre systèmes
D'après Rosenfeld et Morville (*Information Architecture*) :

| Système | Question | Livrable |
|---|---|---|
| Organisation | Comment regrouper les contenus ? | `02-arborescence.sitemap.md` |
| Nommage | Comment les appeler ? | `04-libelles.glossary.md` |
| Navigation | Comment passer de l'un à l'autre ? | `03-navigation.nav.md` |
| Recherche | Comment trouver sans parcourir ? | `03-navigation.nav.md`, si une story la prévoit |

L'inventaire des contenus (`01-contenus.inventory.md`) les alimente tous.

## 2. Objets métier
Avant de ranger les écrans, nommer les **objets** que le persona manipule (approche « orientée objet », OOUX) : un objet a des attributs, des relations et des actions.

| Objet | Attributs utiles au persona | Relations | Actions | Écrans |
|---|---|---|---|---|
| Demande | objet, date d'envoi, statut, délai estimé, réponse | des pièces jointes, un compte, un contrat | consulter, compléter, annuler | EC04, EC07 |

Un objet qui apparaît dans beaucoup d'écrans est un bon candidat pour une rubrique (« Mes demandes »). Un objet sans écran révèle un oubli.

## 3. Lieu ou contextuel
| Type | Définition | Dans l'arborescence |
|---|---|---|
| **Lieu** | Une destination : le persona peut vouloir y aller directement, la retrouver, la mettre en favori, y arriver par un lien profond | Oui, une seule fois |
| **Contextuel** | N'existe qu'au cours d'une tâche : étape intermédiaire, confirmation, fenêtre modale, écran d'erreur | Non : rattaché à son **parent** dans l'inventaire |

Test rapide : « Le persona peut-il vouloir y revenir demain sans refaire la tâche ? » Oui → lieu.

## 4. Schémas d'organisation
| Schéma | Principe | Quand l'utiliser |
|---|---|---|
| Par tâche | Rubriques = ce que le persona veut faire (« Faire une demande ») | Espace connecté, tâches fréquentes et bien identifiées |
| Par objet | Rubriques = ce que le persona possède (« Mes contrats », « Mes demandes ») | Espace connecté, consultation et suivi |
| Par audience | Rubriques = qui est le visiteur (« Particuliers », « Entreprises ») | Site public, publics aux besoins distincts |
| Par sujet | Rubriques = thèmes (« Offres », « Conseils ») | Site public, offres et informations |

Les schémas exacts (alphabétique, chronologique) servent à l'intérieur d'une rubrique (liste des demandes par date), rarement à la navigation.

Un schéma par zone, justifié par les personas et les flows : les épopées de `04-user-stories/` sont souvent un bon point de départ pour un schéma par tâche. Mélanger tâches et objets au même niveau rend les rubriques ambiguës.

## 5. Profondeur et largeur
- 7 rubriques au plus par niveau : au-delà, le persona compare au lieu de choisir.
- 3 niveaux au plus sous l'accueil d'une zone : au-delà, il se perd.
- Entre trop large et trop profond, préférer large : les études de navigation montrent qu'un niveau de plus coûte plus cher qu'un choix de plus.
- Les tâches `Must` du MVP doivent être à 2 niveaux au plus de l'accueil de leur zone.

## 6. Légende Mermaid de l'arborescence (identique dans toutes les zones)

```
flowchart TD
    subgraph z1["Espace client"]
        EC10["EC10 · Accueil"]
        r1["Mes démarches"]:::rubrique
        EC04["EC04 · Mes demandes"]
        EC21["EC21 · Plan du site"]:::ajoutIa
        EC15["EC15 · Mes documents"]:::horsMvp
    end
    EC10 --> r1
    r1 --> EC04
    EC10 --> EC15

    classDef rubrique fill:#fafafa,stroke:#555,font-weight:bold
    classDef horsMvp fill:#ffffff,stroke:#999,stroke-dasharray:5 5,color:#777
    classDef ajoutIa fill:#fff7e0,stroke:#d4a017
```

| Nœud | Identifiant | Libellé |
|---|---|---|
| Écran (lieu) | son identifiant d'inventaire, sans exception | `"EC04 · {libellé de navigation}"` |
| Rubrique sans écran propre (simple regroupement de menu) | `r1`, `r2`... | `"{libellé}"`, classe `rubrique` |
| Zone | `z1`, `z2`... (sous-graphe) | `"{nom de la zone}"` |

- Le libellé du nœud est le **libellé de navigation** du glossaire ; le nom de l'inventaire (rôle pour le persona) reste dans l'inventaire.
- Classe `horsMvp` : écran dont toutes les stories sont en V2 ou Plus tard.
- Classe `ajoutIa` : écran ajouté par l'architecture, absent des flows.
- Seuls les lieux figurent ; les contextuels sont dans l'inventaire.
- Flèches simples `-->` : relation parent → enfant uniquement. Les liens transverses sont décrits dans la navigation, pas dans l'arbre.
- Mêmes règles de syntaxe que les flows : libellés entre guillemets, aucun nœud nommé `end` (le mot-clé `end` ne sert qu'à fermer un sous-graphe).

## 7. Systèmes de navigation
| Système | Rôle | Exemple |
|---|---|---|
| Globale | Rubriques de premier niveau, présentes partout dans la zone | Menu principal de l'espace client |
| Locale | Sous-rubriques de la rubrique courante | Onglets « En cours / Terminées » |
| Contextuelle | Liens vers un lieu lié, au fil du contenu | « Voir le contrat concerné » depuis une demande |
| Utilitaire | Fonctions transverses | Compte, déconnexion, aide, contact, recherche |
| Pied de page | Accès secondaires et obligatoires | Mentions légales, accessibilité, plan du site |
| Fil d'Ariane | Situer le persona dans l'arbre | Accueil › Mes démarches › Mes demandes |
| Lien profond | Arriver directement sur un lieu depuis l'extérieur | Notification « demande traitée » → EC07 |

**Mobile** : préciser comment la navigation globale se réduit (barre d'onglets, menu) d'après l'appareil principal des personas. Une barre d'onglets accepte 5 entrées au plus : les choisir parmi les tâches `Must` du MVP.

**Lien profond et authentification** : un lien profond vers l'espace connecté passe par la connexion puis ramène au lieu demandé. Le noter dans la vérification par flow.

## 8. Vérification par flow
Pour chaque flow et **chacun de ses points d'entrée** : le chemin de navigation jusqu'au premier écran du flow.

| Flow | Point d'entrée | Chemin | Clics | Verdict |
|---|---|---|---|---|
| UF-01.01 | Courrier demandant un justificatif | EC10 Accueil → nav. globale « Mes démarches » → EC04 → bouton « Envoyer une demande » → EC05 | 2 | ✅ |
| UF-01.02 | Notification « demande traitée » | Lien profond → connexion → EC07 | 0 | ✅ |

Un flow sans chemin depuis l'un de ses points d'entrée est **bloquant**. Un chemin de plus de 3 clics pour une tâche `Must` est à justifier. Les transitions **à l'intérieur** d'un flow ne sont pas de la navigation : elles sont déjà dans le flow.

## 9. Nommage
- Partir des mots du persona (verbatims, observations) : « ma demande » plutôt que « requête » ou « ticket », « où en est mon dossier » plutôt que « statut de traitement ».
- Un terme réglementaire ou métier inévitable (délai de rétractation, pièce justificative, mandat) garde son nom, avec une définition courte accessible depuis l'écran.
- Un libellé de navigation est court (1 à 3 mots), sans jargon, sans ambiguïté avec une autre rubrique.
- Possessif (« Mes contrats ») dans l'espace connecté, neutre (« Nos offres ») sur le site public : garder la même convention dans toute une zone.
- Niveau de confiance d'un libellé : 🟢 verbatim de plusieurs participants, 🟡 un participant ou une source indirecte, ⚪ hypothèse.

## 10. Tri par cartes et test d'arborescence
| Méthode | Ce qu'elle vérifie | Moment |
|---|---|---|
| Tri par cartes (*card sorting*) ouvert | Comment les utilisateurs regroupent et nomment les contenus | Avant l'arborescence, si les données de recherche ne suffisent pas |
| Test d'arborescence (*tree testing*) | Si les utilisateurs trouvent un contenu dans l'arbre, sans interface | Après l'arborescence, avant les wireframes |

Ce skill produit le **protocole** du test d'arborescence ; il ne le mène pas. Les questions :
- partent des tâches des flows, formulées comme le persona les dirait (« Vous avez envoyé un dossier la semaine dernière, vous voulez savoir s'il avance ») ;
- n'emploient jamais un libellé de l'arborescence (sinon le test mesure la correspondance des mots, pas la compréhension) ;
- ont une ou plusieurs réponses correctes dans l'arbre.

Mesures : taux de réussite, réussite directe (sans retour arrière), premier clic. Seuil indicatif : 80 % de réussite par question ; en dessous, revoir le rattachement ou le libellé.

Les résultats ne sont jamais simulés : avec des données de recherche simulées, la section « Résultats » reste vide et le test est signalé comme à mener.
