⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC28 — Accès délégués (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : V2 · Appareil principal : tablette
> Wireframe : [EC28-acces-delegues.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC28-acces-delegues.tsx) · `bun run dev` puis `/#/wireframes/EC28` · Inventaire : [EC28](../../06-architecture-information/01-contenus.inventory.md#ec28) · Libellé : « Accès de mes proches »
> Flows : [UF-03.02](../../05-user-flows/03-acceder-a-son-espace/02-obtenir-un-acces-delegue.flow.md) (étape 1) · Personas : titulaire, pour [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Le titulaire donne à un proche un accès propre, avec des droits choisis, ou le retire.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Proches qui ont un accès, avec « Retirer l'accès » | Accès délégué | Contrôle du titulaire | US-03.02 « Retrait de la délégation » |
| 2 | Donner un accès : e-mail, droits | Accès délégué | Action principale | US-03.02 « Délégation accordée par le titulaire » |
| 3 | Mention sur les pièces médicales | — | Données de santé | US-03.02 « Pièces médicales du titulaire », T2 |
| 4 | Bouton principal « Envoyer l'invitation » | — | Suite du flow | UF-03.02 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer l'invitation | bouton principal | `vers="EC28" etat="invitation-envoyee"` ; le proche reçoit un e-mail vers EC29 | UF-03.02 `HP` |
| Retirer l'accès | bouton | `vers="EC28" etat="retire"` | UF-03.02 `A3` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-03.02 `HP` |
| Invitation envoyée | `invitation-envoyee` | Confirmation et délai d'activation | US-03.02 « Délégation accordée par le titulaire » |
| Accès retiré | `retire` | Confirmation du retrait | UF-03.02 `A3` ; US-03.02 « Retrait de la délégation » |

## Annotations

1. Les droits sont séparables (santé, arrêts) ; l'accès aux données médicales du titulaire demande une autorisation explicite distincte.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Accès délégué : proches, droits | ✅ | deux blocs |
| Désigner | ✅ | formulaire, bouton principal |
| Retirer | ✅ | bouton, état `retire` |

## Retours

Aucun.
