⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC36 — Suivi de mes demandes (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette (Sylvie), mobile (Manon)
> Wireframe : [EC36-suivi-de-mes-demandes.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC36-suivi-de-mes-demandes.tsx) · `bun run dev` puis `/#/wireframes/EC36` · Inventaire : [EC36](../../06-architecture-information/01-contenus.inventory.md#ec36) · Libellé : « Mes demandes »
> Flows : [UF-04.02](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md), [UF-08.02](../../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Savoir où en sont ses devis et ses questions, et envoyer un document.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Bouton principal « Envoyer un document » | — | Point d'entrée de UF-04.02 | UF-04.02 `HP` |
| 2 | Demandes : objet, date d'envoi, état, délai annoncé, élément manquant | Demande | Plus d'attente aveugle | US-04.03, `[SIM-P04][SIM-A02]` |
| 3 | Réponse disponible : lien vers la réponse | Demande : réponse | Suite du flow | US-04.03 |
| 4 | Lien « Poser une question » | Demande | Navigation contextuelle | UF-08.02 |

**Replié, renvoyé ou supprimé** : demandes closes de plus de 12 mois → « Voir les demandes plus anciennes ».

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer un document | bouton principal | `vers="EC33"` | UF-04.02 `HP` |
| Ouvrir une réponse | lien | `vers="EC37"` [fiche](./EC37-reponse-au-devis.wireframe.md) | UF-04.02 `HP` |
| Compléter le devis | lien (état manquant) | `vers="EC33"` | UF-04.02 `E3` |
| Poser une question | lien | `vers="EC53"` | UF-08.02 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Réponse disponible | UF-04.02 `HP`, UF-08.02 `HP` ; US-08.02 « Question envoyée » |
| Vide | `vide` | Aucun devis ni question | premier usage |
| Retard | `retard` | Raison et nouvelle date | UF-04.02 `E2`, UF-08.02 `E1` ; US-04.03 « Délai dépassé », US-08.02 « Réponse en retard » |
| Élément manquant | `manquant` | Ce qui manque, complément seul | UF-04.02 `E3` ; US-04.03 « Devis incomplet » |

## Annotations

1. Les demandes sont classées par date d'envoi, les plus récentes en premier ; chaque ligne porte son délai annoncé.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Demande : liste, état, délai, élément manquant, réponse | ✅ | liste, états |
| Ouvrir | ✅ | lien vers EC37 |
| Compléter | ✅ | état `manquant` |

## Retours

Aucun.
