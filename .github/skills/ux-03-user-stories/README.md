# ux-03-user-stories — Manuel rapide

Transforme les personas et les customer journey maps en user stories regroupées par épopée (*epic*, parfois appelée « épique »), dans un story map.

## Prérequis
Avoir lancé `/ux-02-research-synthesis` : personas fondés et journey maps dans `docs/`.

## Lancer
```
/ux-03-user-stories
```

## Déroulé
1. **Inventaire** : le skill relève, persona par persona, les frictions et opportunités des journey maps, ainsi que les exigences de la vision (réglementaire, RGPD...). Les exigences transverses (accessibilité, confidentialité) deviennent des critères d'acceptation, pas des stories.
2. **Colonne vertébrale** : il regroupe les étapes des parcours en 5 à 9 épopées.
3. **Esquisse** : stories par épopée, avec priorité MoSCoW et version proposées.
4. **Validation** : il vous présente le tout et attend votre accord.
5. **Rédaction**, une épopée à la fois.
6. **Clôture** : bilan par version et par priorité, stories fondées sur des hypothèses.

## Livrables
```
docs/04-user-stories/
├── 00-story-map.md                              vue d'ensemble + inventaire des opportunités
├── 01-faire-une-demande/
│   ├── 00-faire-une-demande.epic.md             l'épopée et la liste de ses stories
│   ├── 01-envoyer-une-demande.story.md          US-01.01
│   └── 02-suivre-ma-demande.story.md            US-01.02
└── 02-gerer-mon-compte/
    └── ...
```

## Lire une story
- `US-01.02` = story 2 de l'épopée 01.
- **MoSCoW** (importance) et **version** (MVP, V2, Plus tard) sont indépendants.
- Critères d'acceptation en Gherkin : un scénario nominal et au moins un scénario d'erreur ou alternatif.
- Confiance : 🟢 fondé · 🟡 partiel · ⚪ hypothèse (dont les exigences hors recherche).

## Et ensuite ?
User flows (`/ux-04-user-flows`) → architecture de l'information → design system → prototypes.
