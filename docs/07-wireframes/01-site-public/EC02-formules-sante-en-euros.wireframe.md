⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC02 — Formules santé en euros (wireframe)

> Type : lieu · Parent : — · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC02-formules-sante-en-euros.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC02-formules-sante-en-euros.tsx) · `bun run dev` puis `/#/wireframes/EC02` · Inventaire : [EC02](../../06-architecture-information/01-contenus.inventory.md#ec02) · Libellé : « Mutuelle santé »
> Flows : [UF-01.01](../../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) (étape 3) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Savoir, pour un soin concret, combien chaque formule rembourse et ce qui reste à payer, en euros.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Choix d'un soin de référence (couronne à 650 € par défaut) | Soin | Les euros sont le seul repère compris | US-01.01, `[SIM-P01][SIM-P02]` |
| 2 | Pour chaque formule : remboursé, reste à charge, prix mensuel | Formule | Choisir en connaissant le reste à charge | US-01.01 |
| 3 | Bouton principal « Obtenir un tarif pour cette formule » | Tarif | Suite du flow | UF-01.01 `HP` |
| 4 | Définition de « base de remboursement » sur place | — | Terme qui bloque | US-01.01 `A1`, T3 |
| 5 | Lien « Être rappelé » | — | Variante Sylvie | UF-01.01 `V1` |

**Replié, renvoyé ou supprimé** : tableau de garanties complet en % → replié sous « Voir toutes les garanties » (accessible, pas mis en avant).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Choisir un soin | champ | même écran (recalcul) | UF-01.01 `HP`, `A2` |
| Obtenir un tarif pour cette formule | bouton principal | `vers="EC06"` [fiche](./EC06-demande-de-tarif.wireframe.md) | UF-01.01 `HP` |
| Être rappelé | lien | `vers="EC51"` | UF-01.01 `V1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Couronne à 650 €, trois formules | UF-01.01 `HP` ; US-01.01 « Reste à charge en euros pour un soin courant » |
| Soin non couvert | `non-couvert` | Implant : « Non couvert » et 1 200 € à charge pour Essentielle | UF-01.01 `A2` ; US-01.01 « Soin non couvert par la formule » |

Le scénario « Terme technique rencontré » (`A1`) est couvert dans tous les états par le bloc de définition.

## Annotations

1. Le changement de soin recalcule les trois formules sans recharger la page ; les montants sont des exemples sur tarifs de référence (mention indicative).
2. Le tableau détaillé en pourcentages reste accessible, replié : il n'est jamais la première information.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Formule : prix | ✅ | titre de chaque bloc |
| Remboursement et reste à charge par soin de référence | ✅ | blocs |
| Choisir un soin | ✅ | champ |
| Comparer | ✅ | trois blocs |
| Obtenir un tarif | ✅ | bouton principal |

## Retours

Aucun.
