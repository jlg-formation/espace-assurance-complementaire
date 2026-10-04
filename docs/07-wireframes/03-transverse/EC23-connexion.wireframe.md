⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC23 — Connexion (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC23-connexion.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC23-connexion.tsx) · `bun run dev` puis `/#/wireframes/EC23` · Inventaire : [EC23](../../06-architecture-information/01-contenus.inventory.md#ec23) · Libellé : « Se connecter »
> Flows : [UF-03.01](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Entrer dans son espace sans rester bloquée.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Identifiant et mot de passe | Compte | Connexion habituelle | US-03.01 |
| 2 | Bouton principal « Se connecter » | — | Suite du flow | UF-03.01 `HP` |
| 3 | « Mot de passe oublié » et « Première connexion » | — | Blocage = abandon de l'espace | US-03.01 `E2` `A1`, `[SIM-P07]` |
| 4 | « Être rappelé » | — | Issue si la réinitialisation échoue | UF-03.01 `E3` |

**Replié, renvoyé ou supprimé** : —

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Se connecter | bouton principal | `vers="EC27"` (appareil mémorisé) ; EC25 sinon | UF-03.01 `HP`, `A2` |
| Mot de passe oublié | lien | `vers="EC26"` [fiche](./EC26-reinitialisation-du-mot-de-passe.wireframe.md) | UF-03.01 `E2` |
| Première connexion | lien | `vers="EC24"` [fiche](./EC24-creation-du-mot-de-passe.wireframe.md) | UF-03.01 `A1` |
| Être rappelé | lien | `vers="EC51"` | UF-03.01 `E3` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-03.01 `HP` |
| Identifiants incorrects | `erreur` | Alerte avec le nombre d'essais restants, erreur sur le champ | UF-03.01 `E2` ; US-03.01 « Mot de passe oublié ou bloqué » |

## Annotations

1. Sur un appareil mémorisé, pas de code de vérification ; sur un nouvel appareil, passage par EC25 (UF-03.01 `A2`, US-03.01 « Connexion depuis un nouvel appareil »).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Compte : identifiant, mot de passe | ✅ | champs |
| Se connecter | ✅ | bouton principal |
| Réinitialiser, première connexion | ✅ | liens |

## Retours

Aucun.
