⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC01 — Accueil Clarea (wireframe)

> Type : lieu · Parent : — · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC01-accueil-clarea.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC01-accueil-clarea.tsx) · `bun run dev` puis `/#/wireframes/EC01` · Inventaire : [EC01](../../06-architecture-information/01-contenus.inventory.md#ec01) · Libellé : « Accueil »
> Flows : [UF-01.01](../../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md) (étape 2), [UF-01.02](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md) (étape 1) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Choisir en quelques secondes entre la mutuelle santé et la prévoyance, ou aller droit au tarif.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Deux entrées : « Mutuelle santé » et « Prévoyance », chacune avec une promesse en euros | Formule | Manon arrive d'un moteur de recherche avec un besoin précis ; Hélène vient pour la prévoyance | UF-01.01, UF-01.02 |
| 2 | Bouton principal « Obtenir un tarif » | Tarif | Tâche commune aux deux offres | UF-02.01 |
| 3 | Engagement « Votre prix sans laisser votre numéro » | — | Démarchage = premier motif de fuite | `[SIM-P01][SIM-A01]`, T5 |
| 4 | Lien « Être rappelé » | — | Issue humaine pour Sylvie | UF-01.01 `V1` |

**Replié, renvoyé ou supprimé** : contenus pédagogiques détaillés → renvoyés aux pages d'offre (définitions sur place, T3).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Mutuelle santé | carte | `vers="EC02"` [fiche](./EC02-formules-sante-en-euros.wireframe.md) | UF-01.01 `HP` |
| Prévoyance | carte | `vers="EC03"` [fiche](./EC03-formules-prevoyance-comparees.wireframe.md) | UF-01.02 `HP` |
| Obtenir un tarif | bouton principal | `vers="EC06"` [fiche](./EC06-demande-de-tarif.wireframe.md) | UF-02.01 |
| Être rappelé | lien | `vers="EC51"` [fiche](../03-transverse/EC51-demande-de-rappel.wireframe.md) | UF-01.01 `V1` |
| Se connecter, Aide et contact | navigation utilitaire | EC23, EC54 | UF-03.01 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-01.01 `HP`, UF-01.02 `HP` |

## Annotations

1. Engagement de non-démarchage (exigence transverse T5) : aucune coordonnée n'est demandée avant d'afficher un prix.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Offres santé et prévoyance | ✅ | deux cartes |
| Aller à une offre | ✅ | cartes |
| Obtenir un tarif | ✅ | bouton principal |
| Se connecter | ✅ | navigation utilitaire |

## Retours

Aucun.
