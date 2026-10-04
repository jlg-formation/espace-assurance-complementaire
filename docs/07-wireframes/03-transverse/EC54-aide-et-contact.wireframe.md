⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC54 — Aide et contact (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : tablette (Sylvie), mobile (Manon)
> Wireframe : [EC54-aide-et-contact.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC54-aide-et-contact.tsx) · `bun run dev` puis `/#/wireframes/EC54` · Inventaire : [EC54](../../06-architecture-information/01-contenus.inventory.md#ec54) · Libellé : « Aide et contact »
> Flows : [UF-08.01](../../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md), [UF-08.02](../../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md), [UF-03.02](../../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) `A2` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Trouver comment parler à quelqu'un ou poser une question, client ou non.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | « Être rappelé » avec délai habituel | Rappel | Contact humain indispensable pour Sylvie | US-08.01 |
| 2 | « Poser une question » avec délai de réponse | Demande | Trace écrite | US-08.02 |
| 3 | « Agir pour un proche » (V2) | Accès délégué | Proche sans accès | US-03.02 |
| 4 | Horaires et numéro de téléphone | — | Repli | vision |

**Replié, renvoyé ou supprimé** : questions fréquentes → hors périmètre (aucune story).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Être rappelé | carte | `vers="EC51"` | UF-08.01 `HP` |
| Poser une question | carte | `vers="EC53"` [fiche](./EC53-question-ecrite.wireframe.md) | UF-08.02 `HP` |
| Agir pour un proche | carte | `vers="EC30"` [fiche](./EC30-demande-de-reconnaissance-comme-mandataire.wireframe.md) | UF-03.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | point d'entrée de UF-08.01, UF-08.02 |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Moyens de contact, délais | ✅ | cartes, bloc téléphone |
| Demander un rappel, poser une question | ✅ | cartes |

## Retours

Aucun.
