⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC09 — Formule recommandée (wireframe)

> Type : contextuel · Parent : [EC08](./EC08-mes-besoins-de-sante.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC09-formule-recommandee.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC09-formule-recommandee.tsx) · `bun run dev` puis `/#/wireframes/EC09` · Inventaire : [EC09](../../06-architecture-information/01-contenus.inventory.md#ec09) · Libellé : « Formule recommandée »
> Flows : [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) (étape 4) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Voir la formule conseillée, pourquoi, et ce qui resterait à payer pour les soins indiqués.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Formule recommandée et prix | Formule | Réponse attendue | US-02.02 |
| 2 | Raison et reste à charge en euros pour les soins indiqués | Formule | Comprendre la recommandation | US-02.02, T3 |
| 3 | Bouton principal « Choisir Confort » | — | Suite du flow | UF-02.01 `HP` |
| 4 | « Choisir une autre formule » | Formule | Liberté de choix | US-02.02 `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Choisir la formule (santé) | bouton principal | `vers="EC18"` [fiche](./EC18-recapitulatif-avant-signature.wireframe.md) | UF-02.01 `HP` → UF-02.03 |
| Choisir une autre formule | lien | `vers="EC09" etat="autre"` | UF-02.01 `A2` |
| Répondre au questionnaire (prévoyance) | bouton principal | `vers="EC12"` [fiche](./EC12-consentement-aux-donnees-de-sante.wireframe.md) | UF-02.01 `A5` → UF-02.02 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formule Confort recommandée | UF-02.01 `HP` ; US-02.02 « Recommandation à partir des besoins » |
| Autre formule | `autre` | Alerte sur les soins moins bien remboursés, continuer avec Essentielle | UF-02.01 `A2` ; US-02.02 « Choix d'une formule différente de la recommandation » |
| Prévoyance | `prevoyance` | Prévoyance Confort, suite vers le questionnaire de santé | UF-02.01 `A5` |

## Annotations

1. La recommandation et les besoins exprimés sont conservés et retrouvés dans Mon contrat (trace du conseil, US-02.02).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Formule recommandée, raison, reste à charge estimé | ✅ | bloc |
| Choisir | ✅ | bouton principal |
| Choisir une autre formule | ✅ | lien, état `autre` |

## Retours

Aucun.
