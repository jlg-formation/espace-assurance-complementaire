# ux-04-user-flows — Manuel rapide

Transforme les user stories en user flows : le chemin d'un persona, écran par écran, pour accomplir une tâche.

## Prérequis
Avoir lancé `/ux-03-user-stories` : story map, épopées et stories dans `docs/04-user-stories/`.

## Lancer
```
/ux-04-user-flows        toutes les épopées
/ux-04-user-flows 01     une seule épopée
```

## Déroulé
1. **Tâches** : le skill regroupe les stories (hors Won't) en tâches utilisateur, une par flow.
2. **Variantes** : il repère où les autres personas suivent un autre chemin.
3. **Validation** : il vous présente les tâches, les variantes et les points d'entrée.
4. **Dessin** des flows, un à la fois, avec l'inventaire des écrans tenu à jour.
5. **Retours vers le backlog** : il vous propose les scénarios et stories manquants découverts en dessinant, et ne les applique qu'avec votre accord.
6. **Clôture** : bilan et passage à l'architecture de l'information.

## Livrables
```
docs/05-user-flows/
├── 00-index.md                                  index des flows, inventaire des écrans EC01..., retours backlog
├── 01-me-faire-rembourser/
│   ├── 01-envoyer-une-facture.flow.md           UF-01.01
│   └── 02-comprendre-un-remboursement.flow.md   UF-01.02
└── 02-comprendre-mes-garanties/
    └── ...
```

## Lire un flow
| Forme | Signification |
|---|---|
| `([ ])` stade | Début ou fin |
| `[ ]` rectangle | Écran (`EC03`) |
| `{ }` losange | Décision |
| `[/ /]` parallélogramme | Traitement système |
| `[[ ]]` double rectangle | Renvoi vers un autre flow |
| Flèche épaisse `==>` | **Happy path** |
| Flèche normale `-->` | Chemin alternatif (`A1`...) ou d'erreur (`E1`...) |
| Rouge | Erreur |
| Gris pointillé | Hors application (courrier, appel, notification...) |
| Bleu, flèche pointillée | Variante d'un autre persona |

Sous le diagramme, la section « Chemins » liste le happy path (`HP`), les alternatives (`A1`...), les erreurs (`E1`...) et les variantes (`V1`...). Le tableau « Couverture des scénarios » rattache chaque critère d'acceptation des stories à l'un de ces chemins.

**Affichage** : GitHub affiche les diagrammes Mermaid directement. Dans VS Code, l'aperçu Markdown nécessite une extension Mermaid (par exemple *Markdown Preview Mermaid Support*).

## Et ensuite ?
`/ux-05-information-architecture` (à partir de l'inventaire des écrans) → wireframes → design system → prototypes.
