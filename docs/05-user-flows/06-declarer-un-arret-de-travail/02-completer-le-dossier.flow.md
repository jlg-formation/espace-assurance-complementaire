⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# UF-06.02 — Compléter le dossier d'arrêt

> Épopée : [06 Déclarer un arrêt de travail](../../04-user-stories/06-declarer-un-arret-de-travail/00-declarer-un-arret-de-travail.epic.md) · Persona principal : [Sylvie](../../02-persona/02-sylvie.persona.md) · Variantes : —
> Stories couvertes : [US-06.03](../../04-user-stories/06-declarer-un-arret-de-travail/03-suivre-les-pieces-du-dossier.story.md)
> Stories mobilisées (autres épopées) : US-03.01 *(renvoi `uf1`)*

- **Déclencheur** : Sylvie a reçu le relevé du régime obligatoire, pièce encore attendue
- **Fin** : le dossier est complet et Sylvie le sait sans appeler
- **Points d'entrée** : relevé reçu par courrier ; notification de pièce refusée ; envoi postal — d'après [Déclarer l'arrêt de son conjoint](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements)
- **Appareil principal** : tablette

## Diagramme

<!-- Happy path : flèches épaisses ==> · alternatives et erreurs : --> · variantes : -.-> -->
<!-- Nœuds : écrans = ID d'inventaire (EC05) ; sinon start, fin, d1, s1, x1, v1, uf1. Jamais « end ». -->

```mermaid
flowchart TD
    start(["Relevé du régime obligatoire reçu par courrier"]):::horsApp
    uf1[["UF-03.01 Accéder à son espace"]]
    EC46["EC46 Dossier d'arrêt"]
    EC33["EC33 Envoi d'un document"]
    s1[/"Contrôle de lisibilité"/]
    d1{"Lisible ?"}
    EC35["EC35 Document illisible"]:::erreur
    EC34["EC34 Accusé de réception"]
    s2[/"Examen de la pièce"/]
    d2{"Pièce acceptée ?"}
    x2["Notification : pièce refusée, raison et pièce attendue"]:::horsApp
    x3["Envoie une pièce par courrier"]:::horsApp
    s4[/"Réception et enregistrement du courrier"/]
    s3[/"Mise à jour de l'état du dossier"/]
    fin(["Dossier complet, état visible sans appeler"])

    start ==> uf1
    uf1 ==> EC46
    EC46 ==>|"Voit le relevé « attendu », l'ajoute"| EC33
    EC33 ==> s1
    s1 ==> d1
    d1 ==>|"Oui"| EC34
    EC34 ==> s2
    s2 ==> d2
    d2 ==>|"Oui"| s3
    s3 ==> fin

    d1 -->|"E1 : Non"| EC35
    EC35 -->|"Reprend la photo"| EC33
    d2 -->|"E2 : Non, période incomplète"| x2
    x2 --> EC46
    x3 -->|"A1 : Pièce envoyée par courrier"| s4
    s4 --> s3

    classDef erreur fill:#fde2e2,stroke:#c0392b,color:#7b241c
    classDef horsApp fill:#f2f2f2,stroke:#888,stroke-dasharray:5 5
    classDef variante fill:#e3f0fc,stroke:#2e86c1
```

## Chemins

| ID | Type | Quand | Suite de nœuds | Issue |
|---|---|---|---|---|
| `HP` | Happy path | Pièce lisible et acceptée | start → uf1 → EC46 → EC33 → s1 → d1 → EC34 → s2 → d2 → s3 → fin | Dossier complet |
| `E1` | Erreur | Photo illisible | d1 → EC35 → EC33 | Nouvelle photo |
| `E2` | Erreur | Pièce refusée | d2 → x2 → EC46 | Raison et pièce attendue connues, nouvel envoi |
| `A1` | Alternatif | Pièce envoyée par courrier | x3 → s4 → s3 → fin | État mis à jour sans appel |

## Étapes du happy path

| # | Écran | Action du persona | Réponse du système | Story |
|---|---|---|---|---|
| 1 | [EC46](../00-index.md#ec46) Dossier d'arrêt | Consulte l'état des pièces | Indique pièces reçues, acceptées et attendues ; contenu médical non affiché | US-06.03 |
| 2 | [EC33](../00-index.md#ec33) Envoi d'un document | Ajoute le relevé | Vérifie la lisibilité | US-06.03 |
| 3 | [EC34](../00-index.md#ec34) Accusé de réception | — | Confirme la réception | US-06.03 |

## Couverture des scénarios

| Story | Scénario | Chemin |
|---|---|---|
| US-06.03 | État des pièces | `HP` |
| US-06.03 | Pièce refusée | `E2` |
| US-06.03 | Pièce annoncée manquante alors qu'envoyée par courrier | `A1` |
| US-06.03 | Pièce illisible | `E1` |

## Retours vers le backlog

| Type | Story concernée | Proposition | Statut |
|---|---|---|---|
| scénario manquant | US-06.03 | `E1` : « Étant donné que Sylvie transmet une photo floue d'une pièce, Quand la pièce est vérifiée, Alors elle est informée qu'elle n'est pas lisible, Et peut en transmettre une nouvelle » | accepté |

## Questions ouvertes
- Délai d'enregistrement des pièces reçues par courrier.
