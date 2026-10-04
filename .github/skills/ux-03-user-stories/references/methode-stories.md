# Méthode des user stories

## 1. Des journey maps aux épopées (story mapping, Jeff Patton)
Le story map se lit dans deux directions :
- **De gauche à droite** : la colonne vertébrale, c'est-à-dire les activités de l'utilisateur dans l'ordre où il les vit. Chaque activité est une **épopée**.
- **De haut en bas** : sous chaque épopée, les stories, empilées par importance et découpées en versions (MVP, V2, Plus tard).

Les épopées viennent des étapes des journey maps :
- Regrouper les étapes proches de plusieurs personas (« Envoyer ses justificatifs » chez Sophie, « Transmettre un document » chez Marc) en une seule activité.
- Nommer l'épopée par un verbe, du point de vue de l'utilisateur : « Faire une demande », pas « Module demandes » ni « Écran de suivi ».
- Une épopée partagée par plusieurs personas contient des stories rattachées à chacun d'eux.

## 2. Des opportunités aux stories
| Élément de la journey map | Ce qu'il devient |
|---|---|
| Point de friction | Une story qui le supprime ou le réduit |
| Opportunité | Une story qui la concrétise |
| Moment de vérité | Une story prioritaire (souvent `Must`) |
| Priorité d'amélioration | Un argument pour le MoSCoW et la version |
| Implication pour la conception (persona) | Une story, ou un critère d'acceptation d'une story existante |

Exemple : friction « Ne sait pas où en est sa demande, appelle le service client » `[P02][P05]` → *En tant que Sophie, cliente pressée, je veux savoir à quelle étape en est ma demande afin de ne plus avoir à appeler pour le savoir.*

**Exigences hors recherche** : une exigence qui demande une action du persona (donner son consentement) devient une story ⚪. Une exigence transverse (accessibilité, confidentialité, délai légal) n'est pas une story : elle va dans la section « Exigences transverses » du story map et dans les critères d'acceptation des stories concernées, car elle ne se livre ni ne se dessine seule.

## 3. Écrire une story
**En tant que** {prénom du persona}, {rôle} **je veux** {action ou information} **afin de** {bénéfice}.

- **En tant que** : le persona, pour garder en tête son comportement (aisance, contraintes, besoin d'humain).
- **Je veux** : ce que le persona cherche à faire ou à savoir, sans solution d'interface (« savoir où en est ma demande », pas « voir une barre de progression »).
- **Afin de** : le bénéfice réel. Test : si « afin de » répète « je veux », le bénéfice manque.

## 4. INVEST
| Critère | Question à se poser |
|---|---|
| **I**ndépendante | Peut-elle être livrée sans attendre une autre story ? |
| **N**égociable | Laisse-t-elle de la marge sur la solution ? |
| **V**alorisable | Apporte-t-elle seule quelque chose au persona ? |
| **E**stimable | L'équipe comprend-elle assez pour estimer ? |
| **S**mall (petite) | Tient-elle dans une itération ? |
| **T**estable | Les critères d'acceptation permettent-ils de dire « c'est fait » ? |

## 5. Découper une story trop grosse
Découper verticalement (chaque morceau apporte de la valeur), jamais par couche technique :
- **Par chemin** : le cas nominal d'abord, les variantes ensuite.
- **Par règle** : une règle de gestion par story (plafond, délai légal, pièce manquante).
- **Par donnée** : un type de demande, de produit ou de client à la fois.
- **Par canal ou contexte** : mobile d'abord, puis le reste, si la recherche le justifie.

## 6. MoSCoW et versions
Deux axes indépendants :
- **MoSCoW** dit l'importance pour le persona :
  - `Must` : sans elle, le parcours échoue ou le moment de vérité est raté.
  - `Should` : important, mais un contournement existe.
  - `Could` : confort, gain marginal.
  - `Won't` : écartée pour ce périmètre ; listée dans le story map avec sa raison, sans fichier.
- **Version** (MVP, V2, Plus tard) dit quand on la livre, selon les dépendances, le coût et la stratégie.

Un `Must` hors MVP ou un `Could` dans le MVP est possible, mais doit être justifié.

## 7. Critères d'acceptation en Gherkin
Rédiger en français (`Étant donné`, `Quand`, `Alors`, `Et`, `Mais`), avec `# language: fr` en première ligne du bloc pour que les outils Gherkin reconnaissent les mots-clés :
- Au moins un scénario **nominal** et un scénario **d'erreur ou alternatif**.
- Style **déclaratif** : décrire le comportement attendu, pas les clics. « Quand Sophie transmet sa demande », pas « Quand Sophie clique sur le bouton Envoyer ».
- Données concrètes et plausibles quand elles éclairent la règle (montants, délais).
- Intégrer les contraintes non fonctionnelles quand elles s'appliquent : accessibilité, confidentialité des données personnelles ou sensibles, consentement.

```gherkin
# language: fr
Scénario: Demande transmise avec succès
  Étant donné que Sophie a un justificatif à fournir
  Quand elle transmet sa demande avec ce justificatif
  Alors elle reçoit la confirmation que sa demande est enregistrée
  Et elle connaît le délai de traitement prévu

Scénario: Justificatif illisible
  Étant donné que Sophie transmet un justificatif illisible
  Quand la demande est vérifiée
  Alors elle est informée que le justificatif n'est pas exploitable
  Et elle peut en transmettre un nouveau sans ressaisir sa demande
```

## 8. Niveau de confiance
Une story hérite du niveau de confiance de l'opportunité qui la fonde :
- 🟢 **fondé** / 🟡 **partiel** : repris de la journey map ou du persona.
- ⚪ **hypothèse** : opportunité non étayée, ou exigence issue de la vision ou d'une contrainte (réglementaire, métier) sans donnée de recherche.
