⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC12 — Consentement aux données de santé (wireframe)

> Type : contextuel · Parent : [EC09](./EC09-formule-recommandee.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC12-consentement-aux-donnees-de-sante.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC12-consentement-aux-donnees-de-sante.tsx) · `bun run dev` puis `/#/wireframes/EC12` · Inventaire : [EC12](../../06-architecture-information/01-contenus.inventory.md#ec12) · Libellé : « Vos données de santé »
> Flows : [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) (étape 1) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Savoir à quoi serviront ses données de santé, qui les lira, combien de temps, puis décider.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | À quoi elles servent, qui les lit, combien de temps | Consentement | Consentement éclairé | US-02.06, T2, `[SIM-P06]` |
| 2 | Bouton principal « J'accepte et je réponds » et bouton « Je refuse » | Consentement | Décision | US-02.06 |
| 3 | « Voir d'abord les exclusions fréquentes » | Formule | Variante Hélène | UF-02.02 `V1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| J'accepte et je réponds au questionnaire | bouton principal | `vers="EC14"` [fiche](./EC14-questionnaire-de-sante.wireframe.md) | UF-02.02 `HP` |
| Je refuse | bouton | `vers="EC13"` [fiche](./EC13-prevoyance-impossible-sans-consentement.wireframe.md) | UF-02.02 `E1` |
| Voir d'abord les exclusions fréquentes | lien | `vers="EC03"` | UF-02.02 `V1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.02 `HP` ; US-02.06 « Consentement éclairé » |

## Annotations

1. Le médecin-conseil est le seul lecteur des réponses (T2) ; la même phrase est reprise sur le questionnaire.
2. Le consentement est enregistré avec sa date et retrouvé dans Mon contrat (US-02.06 « Retrouver son consentement »).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Consentement : finalité, accès, durée | ✅ | trois blocs |
| Accepter | ✅ | bouton principal |
| Refuser | ✅ | bouton |

## Retours

Aucun.
