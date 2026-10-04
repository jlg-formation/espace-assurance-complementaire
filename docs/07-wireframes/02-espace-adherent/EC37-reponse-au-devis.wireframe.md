⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC37 — Réponse au devis (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette (Sylvie), mobile (Manon)
> Wireframe : [EC37-reponse-au-devis.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC37-reponse-au-devis.tsx) · `bun run dev` puis `/#/wireframes/EC37` · Inventaire : [EC37](../../06-architecture-information/01-contenus.inventory.md#ec37) · Libellé : « Réponse à mon devis »
> Flows : [UF-04.02](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) (étape 4) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Connaître la prise en charge, semestre par semestre, pour répondre au praticien et prévoir le budget.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Reste à charge total dans le titre | Demande : réponse | L'information attendue | US-04.03, `[SIM-P04]` |
| 2 | Tableau par semestre | Demande : réponse | Budget par période | US-04.03 « Réponse à un devis d'orthodontie » |
| 3 | Validité de la réponse | Demande | Règle de gestion | US-04.03 (contraintes) |
| 4 | Bouton principal « Télécharger la réponse pour l'orthodontiste » | — | L'orthodontiste attend aussi | `[SIM-P04]` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Télécharger la réponse | bouton principal (agit) | — | UF-04.02 `HP` ; US-04.03 « Réponse transmise au praticien » |
| Retour à mes demandes | lien | `vers="EC36"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-04.02 `HP` ; US-04.03 « Réponse à un devis d'orthodontie » |

## Annotations

1. La réponse indique sa durée de validité (contrainte de US-04.03). Lien profond depuis la notification « réponse disponible ».

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Prise en charge et reste à charge par période | ✅ | tableau |
| Validité | ✅ | paragraphe |
| Consulter | ✅ | écran |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| backlog | scénario manquant | US-04.03 | Scénario « Réponse transmise au praticien » | accepté |
