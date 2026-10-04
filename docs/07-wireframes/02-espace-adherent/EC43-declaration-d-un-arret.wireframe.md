⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC43 — Déclaration d'un arrêt (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette
> Wireframe : [EC43-declaration-d-un-arret.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC43-declaration-d-un-arret.tsx) · `bun run dev` puis `/#/wireframes/EC43` · Inventaire : [EC43](../../06-architecture-information/01-contenus.inventory.md#ec43) · Libellé : « Déclarer un arrêt »
> Flows : [UF-06.01](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Déclarer l'arrêt dans les délais, en sachant d'emblée ce qu'il faudra fournir.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Délai de déclaration rappelé en haut | Dossier : délai | Délai inconnu aujourd'hui | US-06.01, `[SIM-P07]` |
| 2 | Pour qui, date de début, fin prévue, situation (maladie, accident, opération) | Dossier d'arrêt | Seules informations nécessaires | US-06.01 |
| 3 | Bouton principal « Continuer » vers les pièces à fournir | — | Suite du flow | UF-06.01 `HP` |
| 4 | Lien « Être rappelé » | — | Issue humaine | US-08.01 |

**Replié, renvoyé ou supprimé** : explication de la franchise → affichée sur la confirmation (EC45), avec la date de début.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Continuer | bouton principal | `vers="EC44"` [fiche](./EC44-pieces-a-fournir.wireframe.md) | UF-06.01 `HP` |
| Être rappelé | lien | `vers="EC51"` | issue humaine |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Délai rappelé | UF-06.01 `HP` ; US-06.01 « Déclaration d'un arrêt avec la liste des pièces » |
| Hors délai | `hors-delai` | Alerte : déclaration enregistrée, justificatif du retard | UF-06.01 `A1` ; US-06.01 « Déclaration hors délai » |

## Annotations

1. Au MVP, Sylvie déclare avec l'accès du titulaire ; en V2, avec son accès délégué (US-03.02). Variante Hélène : elle déclare pour elle-même, le champ « Personne arrêtée » est alors prérempli.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Dossier d'arrêt : dates, situation | ✅ | champs |
| Déclarer | ✅ | bouton principal |

## Retours

Aucun.
