⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC44 — Pièces à fournir (wireframe)

> Type : contextuel · Parent : [EC43](./EC43-declaration-d-un-arret.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette
> Wireframe : [EC44-pieces-a-fournir.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC44-pieces-a-fournir.tsx) · `bun run dev` puis `/#/wireframes/EC44` · Inventaire : [EC44](../../06-architecture-information/01-contenus.inventory.md#ec44) · Libellé : « Pièces à fournir »
> Flows : [UF-06.01](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) (étape 2) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Connaître d'emblée toutes les pièces et la date limite, pour envoyer un dossier complet.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Nombre de pièces (titre) et date limite | Document | Fin du compte-gouttes | US-06.01, `[SIM-P07][SIM-S02]` |
| 2 | Liste des 5 pièces, avec où les obtenir et le délai | Document | Anticiper le relevé du régime obligatoire | US-06.01 |
| 3 | Bouton principal « Joindre les pièces » | — | Suite du flow | UF-06.01 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Joindre les pièces | bouton principal | `vers="EC33" etat="arret"` | UF-06.01 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-06.01 `HP`, `A2` ; US-06.01 « Déclaration d'un arrêt avec la liste des pièces », « Pièce envoyée plus tard » |

## Annotations

1. La liste dépend de la situation déclarée (ici : opération chirurgicale). Les pièces manquantes peuvent être ajoutées plus tard depuis le dossier.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Document : liste complète, date limite | ✅ | titre, paragraphe, liste |
| Joindre les pièces | ✅ | bouton principal |

## Retours

Aucun.
