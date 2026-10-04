⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC07 — Tarifs des formules (wireframe)

> Type : contextuel · Parent : [EC06](./EC06-demande-de-tarif.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC07-tarifs-des-formules.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC07-tarifs-des-formules.tsx) · `bun run dev` puis `/#/wireframes/EC07` · Inventaire : [EC07](../../06-architecture-information/01-contenus.inventory.md#ec07) · Libellé : « Tarifs des formules »
> Flows : [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) (étape 2), [UF-08.01](../../05-user-flows/08-etre-accompagne-par-un-conseiller/01-etre-rappele-par-un-conseiller.flow.md) `V1` · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Connaître le prix mensuel de chaque formule.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Prix mensuel de chaque formule | Tarif | Ce que Manon est venue chercher | US-02.01 |
| 2 | Bouton principal « Trouver la formule adaptée à mes besoins » | — | Devoir de conseil | US-02.02 |
| 3 | « Recevoir ce devis par e-mail » | Tarif | Garder le devis | US-02.01 `A3` |
| 4 | « Être rappelé » | Rappel | Variante Sylvie | UF-02.01 `V1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Trouver la formule adaptée | bouton principal | `vers="EC08"` [fiche](./EC08-mes-besoins-de-sante.wireframe.md) | UF-02.01 `HP` |
| Recevoir ce devis par e-mail | lien | `vers="EC10"` [fiche](./EC10-envoi-du-devis-par-e-mail.wireframe.md) | UF-02.01 `A3` |
| Être rappelé | lien | `vers="EC51"` | UF-02.01 `V1`, UF-08.01 `V1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.01 `HP` ; US-02.01 « Tarif obtenu sans coordonnées » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Tarif : prix mensuel par formule | ✅ | liste |
| Exprimer ses besoins | ✅ | bouton principal |
| Recevoir le devis | ✅ | lien |
| Demander un rappel | ✅ | lien |

## Retours

Aucun.
