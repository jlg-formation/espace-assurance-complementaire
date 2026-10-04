⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC45 — Confirmation de déclaration (wireframe)

> Type : contextuel · Parent : [EC43](./EC43-declaration-d-un-arret.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette
> Wireframe : [EC45-confirmation-de-declaration.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC45-confirmation-de-declaration.tsx) · `bun run dev` puis `/#/wireframes/EC45` · Inventaire : [EC45](../../06-architecture-information/01-contenus.inventory.md#ec45) · Libellé : « Arrêt déclaré »
> Flows : [UF-06.01](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md) (étape 4) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Savoir dès la déclaration à partir de quand et combien on sera indemnisé, et ce qui manque encore.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Date de début d'indemnisation (titre) | Indemnité | Franchise découverte trop tard | US-06.02, `[SIM-P08][SIM-A03]` |
| 2 | Franchise, date de début, montant estimé | Indemnité | Organiser ses finances | US-06.02 |
| 3 | Pièce encore attendue | Document | Dossier complet | US-06.01 « Pièce envoyée plus tard » |
| 4 | Bouton principal « Voir mon dossier d'arrêt » | — | Suite | UF-06.02 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Voir mon dossier d'arrêt | bouton principal | `vers="EC46"` | fin de UF-06.01 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Indemnisation au 11 juin, environ 1 840 € par mois | UF-06.01 `HP` ; US-06.02 « Indemnisation annoncée à la déclaration » |
| Arrêt court | `court` | Pas d'indemnité, arrêt conservé en cas de rechute | UF-06.01 `A3` ; US-06.02 « Arrêt plus court que la franchise » |
| Revenus inconnus | `sans-revenus` | Date de début connue, montant calculé à réception de la pièce | UF-06.01 `A4` ; US-06.02 « Estimation impossible faute de revenus connus » |

## Annotations

1. Montant indicatif tant que le dossier n'est pas complet ; il est recalculé dès réception des pièces.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Indemnité : franchise, date de début, montant estimé | ✅ | bloc |
| Pièces attendues | ✅ | alerte |
| Suivre le dossier | ✅ | bouton principal |

## Retours

Aucun.
