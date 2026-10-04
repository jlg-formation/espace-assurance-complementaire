⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC31 — Estimation du reste à charge (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC31-estimation-du-reste-a-charge.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC31-estimation-du-reste-a-charge.tsx) · `bun run dev` puis `/#/wireframes/EC31` · Inventaire : [EC31](../../06-architecture-information/01-contenus.inventory.md#ec31) · Libellé : « Estimer un soin »
> Flows : [UF-04.01](../../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) (étape 3) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Décrire le soin annoncé par le praticien pour savoir tout de suite ce qui restera à payer.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Pour qui (bénéficiaire du foyer) | Bénéficiaire | Plafonds propres à chaque personne | US-04.01 `A1` |
| 2 | Type de soin (liste en mots courants) et montant annoncé | Estimation | Ce que Manon a sous les yeux : le devis | US-04.01 |
| 3 | Bouton principal « Estimer » | — | Suite du flow | UF-04.01 `HP` |
| 4 | Lien « Je n'ai pas ces informations : envoyer le devis » | Demande | Alternative si l'acte est inconnu | UF-04.01 `A2` |

**Replié, renvoyé ou supprimé** : code de l'acte → facultatif, avec aide.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Estimer | bouton principal | `vers="EC32"` [fiche](./EC32-resultat-de-l-estimation.wireframe.md) | UF-04.01 `HP` |
| Envoyer le devis | lien | `vers="EC33"` | UF-04.01 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-04.01 `HP`, `A1` ; US-04.01 « Estimation pour une couronne dentaire », « Soin pour un enfant du foyer » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Estimation : soin, montant, bénéficiaire | ✅ | champs |
| Estimer | ✅ | bouton principal |

## Retours

Aucun.
