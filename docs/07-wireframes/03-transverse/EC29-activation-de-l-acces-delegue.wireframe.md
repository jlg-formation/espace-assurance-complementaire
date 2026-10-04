⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC29 — Activation de l'accès délégué (wireframe)

> Type : contextuel · Parent : [EC23](./EC23-connexion.wireframe.md) · Zone : Transverse · Version : V2 · Appareil principal : tablette
> Wireframe : [EC29-activation-de-l-acces-delegue.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC29-activation-de-l-acces-delegue.tsx) · `bun run dev` puis `/#/wireframes/EC29` · Inventaire : [EC29](../../06-architecture-information/01-contenus.inventory.md#ec29) · Libellé : « Activer mon accès »
> Flows : [UF-03.02](../../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) (étape 3) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Accepter l'accès donné par le titulaire et savoir ce qu'on pourra faire, ou non.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Qui donne l'accès (titre) | Accès délégué | Repère | US-03.02 « Délégation accordée par le titulaire » |
| 2 | Droits accordés | Accès délégué | Savoir ce qu'on peut faire | US-03.02 |
| 3 | Pièces médicales non visibles | — | Données de santé | US-03.02 « Pièces médicales du titulaire », T2 |
| 4 | Bouton principal « Accepter et créer mon accès » | — | Suite | UF-03.02 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Accepter et créer mon accès | bouton principal | `vers="EC27"` (via création des identifiants) | UF-03.02 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-03.02 `HP` ; US-03.02 « Délégation accordée par le titulaire » |

## Annotations

1. Sylvie peut transmettre une pièce médicale pour le titulaire ; elle part au service médical et Sylvie n'en voit pas le contenu après envoi (UF-03.02 `A1`).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Accès délégué : titulaire, droits | ✅ | titre, liste |
| Activer | ✅ | bouton principal |

## Retours

Aucun.
