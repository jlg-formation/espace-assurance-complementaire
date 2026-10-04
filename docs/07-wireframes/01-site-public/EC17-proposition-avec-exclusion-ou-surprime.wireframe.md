⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC17 — Proposition avec exclusion ou surprime (wireframe)

> Type : contextuel · Parent : [EC15](./EC15-recapitulatif-des-reponses-de-sante.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC17-proposition-avec-exclusion-ou-surprime.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC17-proposition-avec-exclusion-ou-surprime.tsx) · `bun run dev` puis `/#/wireframes/EC17` · Inventaire : [EC17](../../06-architecture-information/01-contenus.inventory.md#ec17) · Libellé : « Notre proposition »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) `A1`, `A2` · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Connaître la portée d'une exclusion ou d'une surprime, puis accepter ou refuser sans frais.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Exclusion et sa portée concrète (ce qui reste couvert) | Contrat | Comprendre avant de signer | US-02.05, `[SIM-P06][SIM-A01]` |
| 2 | Cotisation, avec ou sans surprime | Contrat | Décider | US-02.05 |
| 3 | Bouton principal « Accepter et continuer » ; « Refuser, sans frais » | — | Décision | UF-02.03 `A1`, `A2` |
| 4 | « Être rappelé » | — | Question sur l'exclusion | US-08.01 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Accepter et continuer | bouton principal | `vers="EC18"` | UF-02.03 `A1` |
| Refuser, sans frais | bouton | `vers="EC17" etat="refuse"` | UF-02.03 `A2` |
| Être rappelé | lien | `vers="EC51"` | issue humaine |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Proposition avec exclusion | UF-02.03 `A1` ; US-02.05 « Exclusion ou surprime après le questionnaire de santé » |
| Refusée | `refuse` | Confirmation : aucun engagement, aucun frais | UF-02.03 `A2` |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Contrat : exclusion ou surprime, portée | ✅ | blocs |
| Accepter | ✅ | bouton principal |
| Refuser | ✅ | bouton, état `refuse` |

## Retours

Aucun.
