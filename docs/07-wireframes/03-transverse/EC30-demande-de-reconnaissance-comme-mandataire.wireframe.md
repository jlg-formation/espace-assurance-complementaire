⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC30 — Demande de reconnaissance comme mandataire (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : V2 · Appareil principal : tablette
> Wireframe : [EC30-demande-de-reconnaissance-comme-mandataire.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC30-demande-de-reconnaissance-comme-mandataire.tsx) · `bun run dev` puis `/#/wireframes/EC30` · Inventaire : [EC30](../../06-architecture-information/01-contenus.inventory.md#ec30) · Libellé : « Agir pour un proche »
> Flows : [UF-03.02](../../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) `A2` · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Agir pour un proche qui ne peut pas désigner lui-même, en sachant quelles pièces fournir et sous quel délai.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Pièces à fournir | Document | Dossier complet du premier coup | US-03.02 « Titulaire dans l'incapacité d'agir » |
| 2 | Proche concerné, lien, pièces | Accès délégué | Demande | US-03.02 |
| 3 | Bouton principal « Envoyer ma demande » | — | Suite | UF-03.02 `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer ma demande | bouton principal | `vers="EC30" etat="envoyee"` | UF-03.02 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formulaire | UF-03.02 `A2` |
| Demande envoyée | `envoyee` | Confirmation et date de réponse | US-03.02 « Titulaire dans l'incapacité d'agir » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Pièces à fournir, délai | ✅ | bloc, alerte |
| Demander | ✅ | bouton principal |

## Retours

Aucun.
