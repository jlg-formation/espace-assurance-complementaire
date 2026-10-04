⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC10 — Envoi du devis par e-mail (wireframe)

> Type : contextuel · Parent : [EC07](./EC07-tarifs-des-formules.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC10-envoi-du-devis-par-e-mail.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC10-envoi-du-devis-par-e-mail.tsx) · `bun run dev` puis `/#/wireframes/EC10` · Inventaire : [EC10](../../06-architecture-information/01-contenus.inventory.md#ec10) · Libellé : « Recevoir mon devis par e-mail »
> Flows : [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) `A3` · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Garder son devis sans accepter d'être démarchée.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Adresse e-mail | Tarif | Seule information nécessaire | US-02.01 « Enregistrer son devis sans être rappelée » |
| 2 | Choix de recontact, « Non, merci » par défaut | consentement séparé | Pas de démarchage sans accord | T5, `[SIM-P01]` |
| 3 | Bouton principal « Recevoir mon devis » | — | Action | UF-02.01 `A3` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Recevoir mon devis | bouton principal | `vers="EC10" etat="envoye"` | UF-02.01 `A3` |
| Annuler, Revenir à mes tarifs | bouton, lien | `vers="EC07"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Formulaire | UF-02.01 `A3` |
| Envoyé | `envoye` | Confirmation, « nous ne vous appellerons pas » | US-02.01 « Enregistrer son devis sans être rappelée » |

## Annotations

1. Le consentement au recontact est distinct de l'envoi du devis et désactivé par défaut (T5). Le kit n'a pas de case à cocher : liste de choix (retour vers le kit).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Tarif | ✅ | rappel dans le devis envoyé (état `envoye`) |
| Consentement au recontact séparé | ✅ | champ « recontact » |
| Recevoir le devis | ✅ | bouton principal |

## Retours

Voir EC08 (case à cocher).
