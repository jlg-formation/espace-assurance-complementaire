⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# UF-05.04 — Ajuster ses garanties après le rappel annuel

> Épopée : [05 Suivre ses remboursements et ses documents](../../04-user-stories/05-suivre-ses-remboursements/00-suivre-ses-remboursements.epic.md) · Persona principal : [Hélène](../../02-persona/03-helene.persona.md) · Variantes : —
> Stories couvertes : [US-05.04](../../04-user-stories/05-suivre-ses-remboursements/04-recevoir-le-rappel-annuel-du-contrat.story.md) *(V2)*
> Stories mobilisées (autres épopées) : [US-01.03](../../04-user-stories/01-comprendre-et-comparer-une-offre/03-simuler-ses-indemnites.story.md) *(simulation dessinée ici)*, US-03.01 *(renvoi `uf1`)*, US-02.03 *(renvoi `uf2`)*

- **Déclencheur** : rappel annuel reçu à la date anniversaire du contrat
- **Fin** : Hélène connaît ses paramètres et les a ajustés si besoin
- **Points d'entrée** : e-mail de rappel annuel — d'après [Déclarer un arrêt et suivre les indemnités](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) (franchise découverte au sinistre)
- **Appareil principal** : ordinateur

## Diagramme

<!-- Happy path : flèches épaisses ==> · alternatives et erreurs : --> · variantes : -.-> -->
<!-- Nœuds : écrans = ID d'inventaire (EC05) ; sinon start, fin, d1, s1, x1, v1, uf1. Jamais « end ». -->

```mermaid
flowchart TD
    start(["Rappel annuel : franchise, revenu garanti, montant en cas d'arrêt"]):::horsApp
    uf1[["UF-03.01 Accéder à son espace"]]
    EC11["EC11 Mon contrat et mes documents"]
    d1{"Revenu garanti cohérent avec le revenu déclaré ?"}
    s1[/"Écart et effet en euros sur les indemnités"/]
    EC04["EC04 Simulateur de revenus en cas d'arrêt ou d'invalidité"]
    EC42["EC42 Modification des paramètres du contrat"]
    d2{"Nouveau questionnaire de santé requis ?"}
    uf2[["UF-02.02 Répondre au questionnaire de santé"]]
    s2[/"Nouvelle cotisation et date d'effet"/]
    fin(["Paramètres connus, rien à changer"])
    fin2(["Paramètres ajustés"])

    start ==>|"Ouvre le lien du rappel"| uf1
    uf1 ==> EC11
    EC11 ==>|"Relit franchise, revenu garanti, montant estimé"| d1
    d1 ==>|"Oui"| fin

    d1 -->|"A1 : Non, 30 000 € garantis pour 42 000 € déclarés"| s1
    s1 --> EC04
    EC04 -->|"Simule avec 42 000 €"| EC42
    EC42 --> d2
    d2 -->|"Non"| s2
    s2 --> fin2
    d2 -->|"A2 : Oui"| uf2
    uf2 --> s2

    classDef erreur fill:#fde2e2,stroke:#c0392b,color:#7b241c
    classDef horsApp fill:#f2f2f2,stroke:#888,stroke-dasharray:5 5
    classDef variante fill:#e3f0fc,stroke:#2e86c1
```

## Chemins

| ID | Type | Quand | Suite de nœuds | Issue |
|---|---|---|---|---|
| `HP` | Happy path | Les paramètres restent adaptés | start → uf1 → EC11 → d1 → fin | Paramètres connus |
| `A1` | Alternatif | Revenu garanti sous-évalué, modification sans questionnaire | d1 → s1 → EC04 → EC42 → d2 → s2 → fin2 | Paramètres ajustés |
| `A2` | Alternatif | La hausse de garantie exige un questionnaire de santé | d2 → uf2 → s2 → fin2 | Paramètres ajustés après questionnaire |

## Étapes du happy path

| # | Écran | Action du persona | Réponse du système | Story |
|---|---|---|---|---|
| 1 | — (e-mail) | Ouvre le rappel | — | US-05.04 |
| 2 | [EC11](../00-index.md#ec11) Mon contrat et mes documents | Relit ses paramètres | Affiche franchise, revenu garanti et montant mensuel estimé, et comment les modifier | US-05.04 |

## Couverture des scénarios

| Story | Scénario | Chemin |
|---|---|---|
| US-05.04 | Rappel annuel | `HP` |
| US-05.04 | Revenu garanti en décalage avec le revenu déclaré | `A1` |
| US-05.04 | Hausse de garantie soumise à un questionnaire de santé | `A2` |
| US-01.03 *(mobilisée)* | Effet d'un revenu garanti sous-évalué | `A1` |

## Retours vers le backlog

| Type | Story concernée | Proposition | Statut |
|---|---|---|---|
| scénario manquant | US-05.04 | `A2` : « Étant donné qu'Hélène augmente son revenu garanti, Quand cette hausse nécessite un questionnaire de santé, Alors elle le sait avant de valider, Et la nouvelle cotisation ne s'applique qu'après acceptation » | accepté |

## Questions ouvertes
- La baisse de la franchise doit-elle aussi déclencher un questionnaire de santé ?
