⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# UF-04.01 — Estimer ce qui restera à payer avant un soin

> Épopée : [04 Connaître son reste à charge avant un soin](../../04-user-stories/04-connaitre-son-reste-a-charge/00-connaitre-son-reste-a-charge.epic.md) · Persona principal : [Manon](../../02-persona/01-manon.persona.md) · Variantes : [Sylvie](../../02-persona/02-sylvie.persona.md)
> Stories couvertes : [US-04.01](../../04-user-stories/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.story.md)
> Stories mobilisées (autres épopées) : US-03.01 *(renvoi `uf1`)*

- **Déclencheur** : le dentiste remet à Manon un devis pour une couronne
- **Fin** : Manon connaît son reste à charge et décide du soin
- **Points d'entrée** : devis papier, dans la salle d'attente, sur mobile — d'après [Savoir ce qui restera à payer avant un soin](../../03-customer-journey-map/01-manon.cjm.md#savoir-ce-qui-restera-à-payer-avant-un-soin)
- **Appareil principal** : mobile — d'après « Quand et sur quoi » de la fiche de Manon

## Diagramme

<!-- Happy path : flèches épaisses ==> · alternatives et erreurs : --> · variantes : -.-> -->
<!-- Nœuds : écrans = ID d'inventaire (EC05) ; sinon start, fin, d1, s1, x1, v1, uf1. Jamais « end ». -->

```mermaid
flowchart TD
    start(["Le dentiste remet un devis : couronne à 650 €"]):::horsApp
    uf1[["UF-03.01 Accéder à son espace"]]
    EC27["EC27 Accueil de l'espace adhérent"]
    EC31["EC31 Estimation du reste à charge"]
    s1[/"Calcul : Assurance Maladie, mutuelle, reste à charge, plafonds déjà utilisés"/]
    d1{"Informations suffisantes ?"}
    s2[/"Fourchette en euros"/]
    EC32["EC32 Résultat de l'estimation"]
    uf2[["UF-04.02 Envoyer un devis et obtenir sa prise en charge"]]
    v1["Sylvie : appelle le numéro de la carte"]:::variante
    fin(["Reste à charge connu, décide du soin"])
    fin2(["Devis envoyé pour une réponse exacte"])

    start ==>|"Dans la salle d'attente"| uf1
    uf1 ==> EC27
    EC27 ==>|"Estimer un soin"| EC31
    EC31 ==>|"Couronne, 650 €, pour elle"| s1
    s1 ==> d1
    d1 ==>|"Oui"| EC32
    EC32 ==> fin

    EC31 -->|"A1 : Lunettes pour son fils"| s1
    d1 -->|"A2 : Non, type d'acte inconnu"| s2
    s2 --> EC32
    EC32 -->|"A2 : Veut une réponse exacte"| uf2
    uf2 --> fin2
    start -.->|"V1 : Sylvie préfère appeler"| v1
    v1 -.->|"On lui propose d'envoyer le devis"| uf2

    classDef erreur fill:#fde2e2,stroke:#c0392b,color:#7b241c
    classDef horsApp fill:#f2f2f2,stroke:#888,stroke-dasharray:5 5
    classDef variante fill:#e3f0fc,stroke:#2e86c1
```

## Chemins

| ID | Type | Quand | Suite de nœuds | Issue |
|---|---|---|---|---|
| `HP` | Happy path | Manon connaît le montant et le type de soin | start → uf1 → EC27 → EC31 → s1 → d1 → EC32 → fin | Reste à charge connu |
| `A1` | Alternatif | Le soin concerne un enfant bénéficiaire | EC31 → s1 | Rejoint le happy path, plafonds de l'enfant pris en compte |
| `A2` | Alternatif | Type d'acte inconnu | d1 → s2 → EC32 → uf2 → fin2 | Fourchette, puis envoi du devis |
| `V1` | Variante Sylvie | Premier réflexe : le téléphone `[SIM-P04]` | start → v1 → uf2 | Envoi du devis |

## Étapes du happy path

| # | Écran | Action du persona | Réponse du système | Story |
|---|---|---|---|---|
| 1 | — (renvoi UF-03.01) | Se connecte depuis son téléphone | — | US-03.01 |
| 2 | [EC27](../00-index.md#ec27) Accueil de l'espace adhérent | Choisit d'estimer un soin | — | US-04.01 |
| 3 | [EC31](../00-index.md#ec31) Estimation du reste à charge | Indique le soin, le montant et le bénéficiaire | Calcule avec les plafonds déjà utilisés | US-04.01 |
| 4 | [EC32](../00-index.md#ec32) Résultat de l'estimation | Lit la répartition en euros | Précise que c'est une estimation | US-04.01 |

## Couverture des scénarios

| Story | Scénario | Chemin |
|---|---|---|
| US-04.01 | Estimation pour une couronne dentaire | `HP` |
| US-04.01 | Soin pour un enfant du foyer | `A1` |
| US-04.01 | Informations insuffisantes pour estimer | `A2` |

## Retours vers le backlog

| Type | Story concernée | Proposition | Statut |
|---|---|---|---|
| — | — | Aucun | — |

## Questions ouvertes
- L'estimation doit-elle être accessible sans connexion, à partir de la formule seule ? Les plafonds déjà utilisés ne seraient alors pas pris en compte.
