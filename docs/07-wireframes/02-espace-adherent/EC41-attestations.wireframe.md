⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC41 — Attestations (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC41-attestations.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC41-attestations.tsx) · `bun run dev` puis `/#/wireframes/EC41` · Inventaire : [EC41](../../06-architecture-information/01-contenus.inventory.md#ec41) · Libellé : « Mes attestations »
> Flows : [UF-05.03](../../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Obtenir soi-même une attestation, ou savoir quand on la recevra.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Type d'attestation et année | Attestation | Choix | US-05.03 |
| 2 | Bouton principal « Obtenir l'attestation » | — | Action | UF-05.03 `HP` |
| 3 | Résultat : document prêt, ou délai | Attestation | Issue | US-05.03 |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Obtenir l'attestation | bouton principal | `vers="EC41" etat="obtenue"` | UF-05.03 `HP` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formulaire | UF-05.03 `HP` |
| Obtenue | `obtenue` | Document prêt | US-05.03 « Attestation obtenue » |
| Différée | `differee` | Délai et moyen de réception | UF-05.03 `A1` ; US-05.03 « Attestation non disponible en ligne » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Attestation : type, année | ✅ | champs |
| Obtenir | ✅ | bouton principal |

## Retours

Aucun.
