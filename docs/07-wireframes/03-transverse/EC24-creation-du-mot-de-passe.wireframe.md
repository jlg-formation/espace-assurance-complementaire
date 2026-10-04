⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC24 — Création du mot de passe (wireframe)

> Type : contextuel · Parent : [EC23](./EC23-connexion.wireframe.md) · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC24-creation-du-mot-de-passe.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC24-creation-du-mot-de-passe.tsx) · `bun run dev` puis `/#/wireframes/EC24` · Inventaire : [EC24](../../06-architecture-information/01-contenus.inventory.md#ec24) · Libellé : « Créer mon mot de passe »
> Flows : [UF-03.01](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) `A1`, `E2` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Créer son mot de passe en connaissant la règle avant de se tromper.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Nouveau mot de passe, avec la règle en aide | Compte | Éviter l'échec | US-03.01 « Première connexion » |
| 2 | Confirmation | Compte | — | US-03.01 |
| 3 | Bouton principal « Continuer » | — | Suite vers le code | UF-03.01 `A1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Continuer | bouton principal | `vers="EC25"` [fiche](./EC25-code-de-verification.wireframe.md) | UF-03.01 `A1`, `E2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-03.01 `A1`, `E2` ; US-03.01 « Première connexion », « Mot de passe oublié ou bloqué » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Compte : mot de passe, règle | ✅ | champs |
| Créer | ✅ | bouton principal |

## Retours

Aucun.
