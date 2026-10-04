# ux-01-discovery — Manuel rapide

Première étape de la démarche UX : on part d'un brief et on prépare la recherche utilisateur.

## Lancer
```
/ux-01-discovery brief.md
```
Sans argument, le skill prend `brief.md` à la racine du workspace : `/ux-01-discovery` suffit.

## Déroulé
1. Le skill lit le brief et vous restitue sa compréhension (explicite, implicite, manquant).
2. Il vous pose des questions par petits lots, en commençant par **« pourquoi fait-on ce logiciel ? »**. Répondez « je ne sais pas » sans hésiter : ce sera noté comme hypothèse.
3. Dites **« on rédige »** quand vous voulez arrêter l'exploration.
4. Il vous présente une synthèse et attend votre validation.
5. Il rédige les livrables.

## Livrables
```
docs/
├── 00-exploration.md          journal des questions/réponses
├── 01-vision.md               le « pourquoi » du projet
├── 02-persona/
│   └── proto/
│       └── 01-claire.proto-persona.md   hypothèses, pas encore de la recherche
└── research/
    ├── plan-de-recherche.md   quoi valider, auprès de qui, comment
    ├── guide-entretien.md     questions prêtes à l'emploi
    └── raw/                   où déposer les données collectées
```

## Et ensuite ?

### En formation (pas de vraie recherche)
```
/ux-01-discovery brief.md      → vision, proto-personas, plan de recherche
/ux-01b-mock-research          → fausses données de recherche (simulation)
/ux-02-research-synthesis      → personas fondés et journey maps
```

### En projet réel
1. `/ux-01-discovery brief.md`
2. Menez les entretiens avec le guide, déposez les notes dans `docs/research/raw/` (nommage dans le plan de recherche : `P01-segment.md`, etc.).
3. `/ux-02-research-synthesis`
