⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC42 — Modification des paramètres du contrat (wireframe)

> Type : contextuel · Parent : [EC11](./EC11-mon-contrat-et-mes-documents.wireframe.md) · Zone : Espace adhérent · Version : V2 · Appareil principal : ordinateur
> Wireframe : [EC42-modification-des-parametres-du-contrat.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC42-modification-des-parametres-du-contrat.tsx) · `bun run dev` puis `/#/wireframes/EC42` · Inventaire : [EC42](../../06-architecture-information/01-contenus.inventory.md#ec42) · Libellé : « Modifier mes garanties »
> Flows : [UF-05.04](../../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) `A1`, `A2` · Personas : [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Ajuster revenu garanti ou franchise en voyant l'effet sur la cotisation et sur les indemnités.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Revenu garanti et franchise | Contrat | Paramètres à ajuster | US-05.04 |
| 2 | Effet : cotisation, montant en cas d'arrêt, date d'effet | Contrat | Décider en euros | US-05.04, T3 |
| 3 | Alerte si un questionnaire de santé est requis | Questionnaire | Règle de gestion | US-05.04 « Hausse de garantie soumise à un questionnaire de santé » |
| 4 | Bouton principal « Valider » ou « Répondre au questionnaire » | — | Suite | UF-05.04 `A1`, `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Valider la modification | bouton principal | `vers="EC11"` | UF-05.04 `A1` |
| Répondre au questionnaire de santé | bouton principal (état questionnaire) | `vers="EC14"` | UF-05.04 `A2` |
| Annuler | bouton | `vers="EC11"` | — |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Modification sans questionnaire | UF-05.04 `A1` |
| Questionnaire requis | `questionnaire` | Alerte et suite vers le questionnaire | UF-05.04 `A2` ; US-05.04 « Hausse de garantie soumise à un questionnaire de santé » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Contrat : revenu garanti, franchise, nouvelle cotisation | ✅ | champs et liste |
| Modifier | ✅ | bouton principal |

## Retours

Aucun.
