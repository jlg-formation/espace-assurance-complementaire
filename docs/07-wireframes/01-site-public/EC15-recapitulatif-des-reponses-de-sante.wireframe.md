⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC15 — Récapitulatif des réponses de santé (wireframe)

> Type : contextuel · Parent : [EC14](./EC14-questionnaire-de-sante.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC15-recapitulatif-des-reponses-de-sante.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC15-recapitulatif-des-reponses-de-sante.tsx) · `bun run dev` puis `/#/wireframes/EC15` · Inventaire : [EC15](../../06-architecture-information/01-contenus.inventory.md#ec15) · Libellé : « Vérifier mes réponses »
> Flows : [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) (étape 3) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Relire ses réponses et confirmer en connaissant les conséquences d'une déclaration inexacte.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Récapitulatif des réponses | Questionnaire | Relire avant d'envoyer | US-02.03 « Récapitulatif avant validation » |
| 2 | « Corriger une réponse » | — | Rattraper un oubli | US-02.03 |
| 3 | Avertissement sur la déclaration inexacte | — | Risque d'omission | `[SIM-P05]` |
| 4 | Bouton principal « Confirmer et envoyer au médecin-conseil » | — | Suite du flow | UF-02.02 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Confirmer et envoyer | bouton principal | `vers="EC18"` (`EC17` si exclusion) | UF-02.02 `HP` ; UF-02.03 `A1` |
| Corriger une réponse | lien | `vers="EC14"` | — |
| Voir la proposition | lien | `vers="EC17"` | UF-02.02 `A5` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Décision immédiate sans exclusion | UF-02.02 `HP` ; US-02.03 « Récapitulatif avant validation » |
| Exclusion | `exclusion` | La confirmation mène à la proposition avec exclusion | UF-02.03 `A1` |
| Étude médicale | `etude` | Délai de décision annoncé, prévenue par e-mail | UF-02.02 `A5` ; US-02.03 « Réponses nécessitant une étude médicale » |

## Annotations

1. Bouton de soumission dans l'interface réelle : les réponses sont chiffrées et transmises au seul service médical.
2. La proposition arrive par un lien reçu par e-mail une fois l'étude terminée.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Questionnaire : réponses, avertissement | ✅ | liste et alerte |
| Confirmer | ✅ | bouton principal |
| Corriger | ✅ | lien |

## Retours

Aucun.
