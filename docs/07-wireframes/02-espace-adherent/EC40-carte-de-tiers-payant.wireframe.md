⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC40 — Carte de tiers payant (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC40-carte-de-tiers-payant.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC40-carte-de-tiers-payant.tsx) · `bun run dev` puis `/#/wireframes/EC40` · Inventaire : [EC40](../../06-architecture-information/01-contenus.inventory.md#ec40) · Libellé : « Ma carte de mutuelle »
> Flows : [UF-05.02](../../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md) (étape 2) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Présenter en quelques secondes la carte valable au comptoir.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Carte valable : année, numéro, bénéficiaires, tiers payant, code à scanner | Carte | À présenter tout de suite | US-05.02 |
| 2 | Bouton principal « Afficher en plein écran » | — | Lisible par le praticien | US-05.02 |
| 3 | « Envoyer à un proche » | Carte | Le conjoint en a besoin | US-05.02 « Carte transmise à un proche » |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Afficher en plein écran | bouton principal (agit) | — | UF-05.02 `HP` |
| Envoyer à un proche | bouton | `vers="EC40" etat="partagee"` | UF-05.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Carte 2026 | UF-05.02 `HP` ; US-05.02 « Carte présentée chez un nouveau praticien » |
| Janvier | `janvier` | Carte 2027 affichée d'office | UF-05.02 `A1` ; US-05.02 « Renouvellement de janvier » |
| Hors ligne | `hors-ligne` | Dernière carte enregistrée sur le téléphone | UF-05.02 `E1` ; US-05.02 « Sans connexion internet » |
| Partagée | `partagee` | Confirmation d'envoi à Jean-Marc | UF-05.02 `A2` ; US-05.02 « Carte transmise à un proche » |

## Annotations

1. Accessible sans nouvelle saisie sur un appareil mémorisé ; la dernière carte reste disponible hors connexion.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Carte : année, bénéficiaires | ✅ | bloc |
| Présenter | ✅ | bouton principal |
| Transmettre | ✅ | bouton, état `partagee` |

## Retours

Aucun.
