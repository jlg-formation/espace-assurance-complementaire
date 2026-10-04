⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC26 — Réinitialisation du mot de passe (wireframe)

> Type : contextuel · Parent : [EC23](./EC23-connexion.wireframe.md) · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC26-reinitialisation-du-mot-de-passe.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC26-reinitialisation-du-mot-de-passe.tsx) · `bun run dev` puis `/#/wireframes/EC26` · Inventaire : [EC26](../../06-architecture-information/01-contenus.inventory.md#ec26) · Libellé : « Mot de passe oublié »
> Flows : [UF-03.01](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md) `E2`, `E3` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Retrouver l'accès sans appeler, ou être rappelée si cela échoue.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Adresse e-mail | Compte | Recevoir le lien | US-03.01 « Mot de passe oublié ou bloqué » |
| 2 | Bouton principal « Recevoir un lien » | — | Suite | UF-03.01 `E2` |
| 3 | En cas d'échec : rappel sous 1 jour ouvré | — | Issue humaine | UF-03.01 `E3`, `[SIM-P07]` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Recevoir un lien | bouton principal | `vers="EC26" etat="envoye"` | UF-03.01 `E2` |
| Ouvrir le lien reçu | lien (état envoyé) | `vers="EC24"` | UF-03.01 `E2` |
| Être rappelé | bouton principal (état échec) | `vers="EC51"` | UF-03.01 `E3` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formulaire | UF-03.01 `E2` |
| Lien envoyé | `envoye` | Confirmation, validité du lien | UF-03.01 `E2` ; US-03.01 « Mot de passe oublié ou bloqué » |
| Échec | `echec` | Rappel proposé avec délai | UF-03.01 `E3` |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Compte : adresse e-mail | ✅ | champ |
| Réinitialiser | ✅ | bouton principal |
| Demander un rappel | ✅ | état `echec` |

## Retours

Aucun.
