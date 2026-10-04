⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC46 — Dossier d'arrêt (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette
> Wireframe : [EC46-dossier-d-arret.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC46-dossier-d-arret.tsx) · `bun run dev` puis `/#/wireframes/EC46` · Inventaire : [EC46](../../06-architecture-information/01-contenus.inventory.md#ec46) · Libellé : « Mon dossier d'arrêt »
> Flows : [UF-06.02](../../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md) (étape 1), [UF-06.03](../../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) (étape 1), [UF-07.02](../../05-user-flows/07-suivre-ses-indemnites/02-comprendre-le-passage-en-invalidite.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Savoir où en est le dossier, ce qui manque, et le compléter sans appeler.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | État du dossier et pièce attendue, avec bouton principal « Ajouter une pièce » | Dossier, Document | Pièces au compte-gouttes : moment de vérité | US-06.03, `[SIM-P07][SIM-A03]` |
| 2 | Liste des pièces : reçue, acceptée, refusée (raison), attendue | Document | Ne plus apprendre par courrier qu'il manque un papier | US-06.03 |
| 3 | Prochain versement et lien « Voir mes indemnités » | Indemnité | Le stress porte sur l'argent | US-07.01 |
| 4 | « Déclarer un changement » (reprise, prolongation) | — | Cas non standard qui cassent le parcours | US-06.04 |
| 5 | Étapes à venir (expertise, V2) et « Être rappelé » | — | Issue humaine | US-07.02, US-08.01 |

**Replié, renvoyé ou supprimé** : contenu des pièces médicales → jamais affiché (T2) ; seul l'état est visible.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Ajouter une pièce | bouton principal | `vers="EC33" etat="piece"` | UF-06.02 `HP` |
| Déclarer un changement | bouton | `vers="EC47"` [fiche](./EC47-declaration-d-un-changement-de-situation.wireframe.md) | UF-06.03 `HP` |
| Voir mes indemnités | lien | `vers="EC48"` | navigation contextuelle |
| Comprendre l'expertise | lien (état expertise) | `vers="EC49"` | UF-07.02 `HP` |
| Être rappelé | lien | `vers="EC51"` | issue humaine |
| Déclarer un arrêt | navigation locale ; bouton principal (état vide) | `vers="EC43"` | UF-06.01 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | 1 pièce attendue | UF-06.02 `HP` ; US-06.03 « État des pièces » |
| Pièce refusée | `refusee` | Raison du refus et pièce attendue | UF-06.02 `E2` ; US-06.03 « Pièce refusée » |
| Expertise | `expertise` | Étape à venir et lien vers les explications | UF-07.02 `HP` |
| Vide | `vide` | Aucun arrêt en cours | premier usage |

## Annotations

1. L'état de chaque pièce est visible ; le contenu des pièces médicales n'est jamais affiché (T2). Une pièce reçue par courrier change d'état dès son enregistrement (US-06.03, chemin `A1`).
2. « Déclarer un changement » couvre la reprise à temps partiel, la prolongation et les situations non prévues.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Dossier : état des pièces, étapes, expertise | ✅ | bloc « Pièces du dossier », état `expertise` |
| Ajouter une pièce | ✅ | bouton principal |
| Déclarer un changement | ✅ | bouton |

## Retours

Aucun.
