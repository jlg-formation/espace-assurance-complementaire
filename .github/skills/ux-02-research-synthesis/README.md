# ux-02-research-synthesis — Manuel rapide

Transforme les données de recherche en personas fondés sur des preuves et en customer journey maps.

## Prérequis
- Avoir lancé `/ux-01-discovery`.
- Avoir des données dans `docs/research/raw/` : vraies (entretiens, enquêtes...) ou simulées via `/ux-01b-mock-research`.

## Lancer
```
/ux-02-research-synthesis
```

## Déroulé
1. **Bilan des données** : le skill liste les sources et signale les segments mal couverts. Il peut compléter par une recherche documentaire si vous le demandez.
2. **Synthèse** : regroupement des observations par thèmes, variables comportementales, schémas de comportement, statut de chaque hypothèse (validée, invalidée, nuancée, non testée).
3. **Validation** : il vous présente les personas proposés, qui peuvent différer des proto-personas, et attend votre accord.
4. **Rédaction** des livrables.
5. **Clôture** : apprentissages clés, hypothèses invalidées, zones encore fragiles.

## Livrables
```
docs/
├── 01-vision.md                         mis à jour (liens, statut des hypothèses)
├── 02-persona/
│   ├── 01-sophie.persona.md             persona fondé sur la recherche
│   └── proto/                           proto-personas d'ux-01, conservés pour l'historique
│       └── 01-claire.proto-persona.md
├── 03-customer-journey-map/
│   └── 01-sophie.cjm.md                 parcours actuels du persona
└── research/
    ├── observations/                    observations extraites, une source par fichier
    │   └── P01.obs.md
    └── synthese.md                      thèmes, variables, hypothèses
```

## Lire un persona
- Chaque affirmation cite sa source : `[P03]` = entretien 3, `[A12]` = avis 12.
- Niveau de confiance par section : 🟢 fondé · 🟡 partiel · ⚪ hypothèse.

## Données simulées
Si les données viennent de `/ux-01b-mock-research`, le skill les traite comme des données de terrain et ajoute un bandeau « données simulées » sur chaque livrable.

## Et ensuite ?
User stories → user flows → architecture de l'information → design system → prototypes.
