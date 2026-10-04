⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC34 — Accusé de réception (wireframe)

> Type : contextuel · Parent : [EC33](./EC33-envoi-d-un-document.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC34-accuse-de-reception.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC34-accuse-de-reception.tsx) · `bun run dev` puis `/#/wireframes/EC34` · Inventaire : [EC34](../../06-architecture-information/01-contenus.inventory.md#ec34) · Libellé : « Accusé de réception »
> Flows : [UF-04.02](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) (étape 2), [UF-06.02](../../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md), [UF-08.02](../../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Avoir la preuve que l'envoi est arrivé et savoir quand viendra la réponse.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Ce qui est reçu, date, délai de réponse | Demande | Plus d'attente aveugle | US-04.02 « Devis transmis », `[SIM-A02]` |
| 2 | Bouton principal vers le suivi | — | Suite du flow | UF-04.02, UF-08.02 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Suivre mes demandes | bouton principal | `vers="EC36"` | UF-04.02 `HP`, UF-08.02 `HP` |
| Voir mon dossier d'arrêt | bouton principal (état pièce) | `vers="EC46"` | UF-06.02 |
| Retour à mon espace | lien | `vers="EC27"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal (devis) | `nominal` | Devis de 3 pages, réponse au plus tard le 10 octobre | UF-04.02 `HP` ; US-04.02 « Devis transmis » |
| Pièce d'arrêt | `piece` | Relevé reçu, vérifié sous 2 jours | UF-06.02 `HP` |
| Question | `question` | Question reçue, réponse sous 2 jours ouvrés | UF-08.02 `HP` ; US-08.02 « Question envoyée » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Demande : date, délai annoncé | ✅ | alerte de succès |
| Suivre la demande | ✅ | bouton principal |

## Retours

Aucun.
