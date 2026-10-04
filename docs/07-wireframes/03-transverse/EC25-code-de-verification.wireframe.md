⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC25 — Code de vérification (wireframe)

> Type : contextuel · Parent : [EC23](./EC23-connexion.wireframe.md) · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC25-code-de-verification.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC25-code-de-verification.tsx) · `bun run dev` puis `/#/wireframes/EC25` · Inventaire : [EC25](../../06-architecture-information/01-contenus.inventory.md#ec25) · Libellé : « Code de vérification »
> Flows : [UF-03.01](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) `A1`, `A2`, `E1`, `E2` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Confirmer son identité une fois, puis ne plus le refaire sur cet appareil.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Code reçu, avec le canal et la validité | Compte | Action attendue | US-03.01 « Connexion depuis un nouvel appareil » |
| 2 | « Se souvenir de cet appareil » | Compte | Ne plus refaire | US-03.01 |
| 3 | Bouton principal « Valider » | — | Suite | UF-03.01 |
| 4 | « Je n'ai pas reçu le code » | — | Issue `E1` | UF-03.01 `E1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Valider | bouton principal | `vers="EC27"` | UF-03.01 `A1`, `A2` |
| Je n'ai pas reçu le code | lien | `vers="EC25" etat="renvoye"` | UF-03.01 `E1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Code par SMS | UF-03.01 `A1`, `A2` |
| Code renvoyé | `renvoye` | Nouveau code par e-mail | UF-03.01 `E1` ; US-03.01 « Code de vérification non reçu » |

## Annotations

1. Appareil mémorisé 90 jours : la connexion suivante se fait sans code (UF-03.01 `HP`).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Code, canal, validité | ✅ | champ |
| Mémoriser l'appareil | ✅ | champ |
| Renvoyer le code | ✅ | lien, état `renvoye` |

## Retours

Aucun.
