⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC35 — Document illisible (wireframe)

> Type : contextuel · Parent : [EC33](./EC33-envoi-d-un-document.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC35-document-illisible.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC35-document-illisible.tsx) · `bun run dev` puis `/#/wireframes/EC35` · Inventaire : [EC35](../../06-architecture-information/01-contenus.inventory.md#ec35) · Libellé : « Document illisible »
> Flows : [UF-04.02](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) `E1`, `E4` ; [UF-06.02](../../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) `E1` · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Savoir quelle page est illisible et la renvoyer, ou passer par un autre moyen.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Quelle page pose problème, ce qui est conservé | Document | Ne pas tout refaire | US-04.02 « Photo illisible » |
| 2 | Consignes de prise de vue | — | Réussir la 2e fois | US-04.02 |
| 3 | Bouton principal « Reprendre la photo » | — | Issue `E1` | UF-04.02 `E1` |
| 4 | Courrier ou rappel après plusieurs échecs | — | Issue `E4` | UF-04.02 `E4` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Reprendre la photo | bouton principal | `vers="EC33"` | UF-04.02 `E1`, UF-06.02 `E1` |
| Être rappelé | lien (état répété) | `vers="EC51"` | UF-04.02 `E4` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal (1er échec) | `nominal` | — | UF-04.02 `E1` ; US-04.02 « Photo illisible » ; US-06.03 « Pièce illisible » |
| Échecs répétés | `repete` | Envoi par courrier et rappel proposés | UF-04.02 `E4` ; US-04.02 « Échecs répétés de photo » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Consignes de prise de vue | ✅ | bloc |
| Reprendre la photo | ✅ | bouton principal |
| Demander un rappel | ✅ | état `repete` |

## Retours

Aucun.
