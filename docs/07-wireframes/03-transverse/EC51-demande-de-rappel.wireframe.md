⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC51 — Demande de rappel (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : tablette (Sylvie), mobile (Manon)
> Wireframe : [EC51-demande-de-rappel.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC51-demande-de-rappel.tsx) · `bun run dev` puis `/#/wireframes/EC51` · Inventaire : [EC51](../../06-architecture-information/01-contenus.inventory.md#ec51) · Libellé : « Être rappelé »
> Flows : [UF-08.01](../../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Être rappelée au moment choisi par quelqu'un qui connaît déjà la question.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Objet du rappel (dossier d'arrêt, devis, souscription...) | Rappel : objet | Ne pas tout réexpliquer | US-08.01, `[SIM-P07]` |
| 2 | Créneau (jour, plage horaire) | Rappel : créneau | Plus d'attente au téléphone | US-08.01 |
| 3 | Numéro de téléphone, avec mention « utilisé seulement pour ce rappel » | — | Pas de démarchage | T5, US-08.01 V1 |
| 4 | Bouton principal « Demander le rappel » | — | Suite du flow | UF-08.01 `HP` |

**Replié, renvoyé ou supprimé** : —

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Demander le rappel | bouton principal | `vers="EC52"` [fiche](./EC52-confirmation-du-rappel.wireframe.md) | UF-08.01 `HP`, `A1`, `V1` |
| Poser plutôt une question écrite | lien (état complet) | `vers="EC53"` | UF-08.01 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Créneaux sous 2 jours | UF-08.01 `HP`, `V1` ; US-08.01 « Rappel demandé sur un dossier », « Demande de rappel avant souscription » |
| Aucun créneau | `complet` | Premier créneau libre, alternative écrite | UF-08.01 `A1`, `A2` ; US-08.01 « Aucun créneau disponible » |
| Rappel manqué | `manque` | Demande conservée, nouveau créneau seul | UF-08.01 `E1` ; US-08.01 « Rappel manqué » |

## Annotations

1. Connecté, l'objet est prérempli selon l'écran d'où vient la demande (dossier d'arrêt, devis…) et le conseiller voit le dossier. Sans compte (Manon, `V1`), seul le numéro est demandé, sans sollicitation commerciale (T5).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Rappel : objet, créneau, numéro | ✅ | champs |
| Demander | ✅ | bouton principal |
| Changer de créneau | ✅ | état `manque` |

## Retours

Aucun.
