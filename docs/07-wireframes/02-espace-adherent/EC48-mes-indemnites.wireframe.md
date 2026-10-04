⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC48 — Mes indemnités (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette
> Wireframe : [EC48-mes-indemnites.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC48-mes-indemnites.tsx) · `bun run dev` puis `/#/wireframes/EC48` · Inventaire : [EC48](../../06-architecture-information/01-contenus.inventory.md#ec48) · Libellé : « Mes indemnités »
> Flows : [UF-07.01](../../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) (étape 1), [UF-06.03](../../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) (dernière étape) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Savoir quand et combien l'assureur versera, et pourquoi en cas de retard.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Prochain versement : date prévue, période couverte, montant | Indemnité | Premier motif d'appel | US-07.01, `[SIM-S02]` |
| 2 | Retard éventuel : raison, nouvelle date, pièce manquante | Indemnité | Ne plus appeler le mardi | US-07.01 `E1` `E2` |
| 3 | Versements passés (date, période, montant) | Indemnité | Rapprochement avec le relevé | US-07.01 |
| 4 | Lien « Voir ce qui manque au dossier » | Dossier | Navigation contextuelle | UF-07.01 `E1` |

**Replié, renvoyé ou supprimé** : détail du calcul (régime obligatoire, franchise) → replié sous « Comment ce montant est calculé ».

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Voir ce qui manque au dossier | lien (état retard) | `vers="EC46"` | UF-07.01 `E1` |
| Déclarer un arrêt, Mon dossier d'arrêt | navigation locale | EC43, EC46 | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Prochain versement et versements passés | UF-07.01 `HP` ; US-07.01 « Prochain versement connu » |
| Retard | `retard` | Raison, pièce manquante, lien vers le dossier | UF-07.01 `E1`, `E2` ; US-07.01 « Versement retardé » |
| Franchise en cours | `franchise` | Aucun versement dû, date du premier versement | UF-07.01 `A2` ; US-07.01 « Franchise en cours » |
| Versement effectué | `verse` | Confirmation du montant et de la période | UF-07.01 `A1` ; US-07.01 « Versement effectué » |
| Reprise | `reprise` | Reprise à mi-temps prise en compte, nouveau montant | UF-06.03 `HP` ; US-06.04 « Reprise à temps partiel thérapeutique », « Prolongation d'arrêt » |

## Annotations

1. La date prévue est celle du traitement réel ; si elle change, une notification renvoie ici (lien profond).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Indemnité : prochain versement, versements passés, retards | ✅ | blocs, états |
| Consulter | ✅ | écran |

## Retours

Aucun.
