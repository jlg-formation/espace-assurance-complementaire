⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC32 — Résultat de l'estimation (wireframe)

> Type : contextuel · Parent : [EC31](./EC31-estimation-du-reste-a-charge.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC32-resultat-de-l-estimation.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC32-resultat-de-l-estimation.tsx) · `bun run dev` puis `/#/wireframes/EC32` · Inventaire : [EC32](../../06-architecture-information/01-contenus.inventory.md#ec32) · Libellé : « Résultat de l'estimation »
> Flows : [UF-04.01](../../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md) (étape 4) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Lire, en euros, ce qui restera à payer pour ce soin.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Reste à charge dans le titre | Estimation | La réponse, tout de suite | US-04.01, `[SIM-P01]` |
| 2 | Répartition : Assurance Maladie, mutuelle, reste | Estimation | Comprendre le calcul | US-04.01 |
| 3 | Mention « estimation » et définition du reste à charge | — | Honnêteté, T3 | US-04.01 |
| 4 | « Envoyer le devis pour une réponse exacte » | Demande | Alternative | UF-04.01 `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer le devis | bouton (principal dans l'état fourchette) | `vers="EC33"` | UF-04.01 `A2` |
| Estimer un autre soin | lien | `vers="EC31"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Couronne à 650 € | UF-04.01 `HP` ; US-04.01 « Estimation pour une couronne dentaire » |
| Enfant | `enfant` | Lunettes de Léo, plafond restant | UF-04.01 `A1` ; US-04.01 « Soin pour un enfant du foyer » |
| Fourchette | `fourchette` | Fourchette en euros, envoi du devis en action principale | UF-04.01 `A2` ; US-04.01 « Informations insuffisantes pour estimer » |

## Annotations

1. Calcul sur les tarifs connus et les plafonds déjà utilisés ; le montant exact dépend de la facture.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Estimation : répartition ou fourchette en euros | ✅ | bloc ou alerte |
| Envoyer le devis | ✅ | bouton |

## Retours

Aucun.
