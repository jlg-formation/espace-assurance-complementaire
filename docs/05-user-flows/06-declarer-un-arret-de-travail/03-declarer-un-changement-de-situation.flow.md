⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# UF-06.03 — Déclarer une reprise à temps partiel ou une prolongation

> Épopée : [06 Déclarer un arrêt de travail](../../04-user-stories/06-declarer-un-arret-de-travail/00-declarer-un-arret-de-travail.epic.md) · Persona principal : [Hélène](../../02-persona/03-helene.persona.md) · Variantes : —
> Stories couvertes : [US-06.04](../../04-user-stories/06-declarer-un-arret-de-travail/04-declarer-une-reprise-a-temps-partiel.story.md)
> Stories mobilisées (autres épopées) : US-03.01 *(renvoi `uf1`)*

- **Déclencheur** : le médecin prescrit à Hélène une reprise à mi-temps thérapeutique à partir du 1er août
- **Fin** : la reprise est déclarée, les versements continuent, le nouveau montant est connu
- **Points d'entrée** : prescription du médecin (papier) — d'après [Déclarer un arrêt et suivre les indemnités](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise), étape « Déclarer la reprise partielle »
- **Appareil principal** : ordinateur

## Diagramme

<!-- Happy path : flèches épaisses ==> · alternatives et erreurs : --> · variantes : -.-> -->
<!-- Nœuds : écrans = ID d'inventaire (EC05) ; sinon start, fin, d1, s1, x1, v1, uf1. Jamais « end ». -->

```mermaid
flowchart TD
    start(["Reprise à mi-temps thérapeutique prescrite au 1er août"]):::horsApp
    uf1[["UF-03.01 Accéder à son espace"]]
    EC46["EC46 Dossier d'arrêt"]
    EC47["EC47 Déclaration d'un changement de situation"]
    EC33["EC33 Envoi d'un document"]
    s1[/"Recalcul : versements maintenus, nouveau montant, pièces attendues"/]
    s2[/"Mise à jour du calendrier des versements"/]
    s3[/"Transmission à un gestionnaire, versements maintenus pendant l'examen sauf décision motivée"/]
    EC48["EC48 Mes indemnités"]
    fin(["Versements continus, nouveau montant connu"])
    fin2(["Situation examinée par un gestionnaire"])

    start ==> uf1
    uf1 ==> EC46
    EC46 ==>|"Déclarer un changement"| EC47
    EC47 ==>|"Choisit la reprise à temps partiel thérapeutique"| EC33
    EC33 ==>|"Joint le certificat de reprise"| s1
    s1 ==> EC48
    EC48 ==> fin

    EC47 -->|"A1 : Prolongation de l'arrêt"| EC33
    EC33 -->|"A1 : Joint l'avis de prolongation"| s2
    s2 --> EC48
    EC47 -->|"A2 : Aucun cas ne correspond, décrit sa situation"| s3
    s3 --> fin2

    classDef erreur fill:#fde2e2,stroke:#c0392b,color:#7b241c
    classDef horsApp fill:#f2f2f2,stroke:#888,stroke-dasharray:5 5
    classDef variante fill:#e3f0fc,stroke:#2e86c1
```

## Chemins

| ID | Type | Quand | Suite de nœuds | Issue |
|---|---|---|---|---|
| `HP` | Happy path | Reprise à temps partiel thérapeutique | start → uf1 → EC46 → EC47 → EC33 → s1 → EC48 → fin | Versements continus |
| `A1` | Alternatif | Prolongation de l'arrêt | EC47 → EC33 → s2 → EC48 → fin | Calendrier mis à jour |
| `A2` | Alternatif | Situation non prévue | EC47 → s3 → fin2 | Examen par un gestionnaire, versements maintenus |

## Étapes du happy path

| # | Écran | Action du persona | Réponse du système | Story |
|---|---|---|---|---|
| 1 | [EC46](../00-index.md#ec46) Dossier d'arrêt | Choisit de déclarer un changement | — | US-06.04 |
| 2 | [EC47](../00-index.md#ec47) Déclaration d'un changement de situation | Choisit « reprise à temps partiel thérapeutique » | Indique les pièces attendues | US-06.04 |
| 3 | [EC33](../00-index.md#ec33) Envoi d'un document | Joint le certificat | Transmet au service médical | US-06.04 |
| 4 | [EC48](../00-index.md#ec48) Mes indemnités | Lit le nouveau montant | Confirme que les versements continuent | US-06.04 |

## Couverture des scénarios

| Story | Scénario | Chemin |
|---|---|---|
| US-06.04 | Reprise à temps partiel thérapeutique | `HP` |
| US-06.04 | Prolongation d'arrêt | `A1` |
| US-06.04 | Situation non prévue | `A2` |

## Retours vers le backlog

| Type | Story concernée | Proposition | Statut |
|---|---|---|---|
| — | — | Aucun | — |

## Questions ouvertes
- Maintien des versements pendant l'examen : décision métier à confirmer.
