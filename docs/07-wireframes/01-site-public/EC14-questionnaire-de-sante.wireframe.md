⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC14 — Questionnaire de santé (wireframe)

> Type : contextuel · Parent : [EC12](./EC12-consentement-aux-donnees-de-sante.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile (Manon), ordinateur (Hélène)
> Wireframe : [EC14-questionnaire-de-sante.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC14-questionnaire-de-sante.tsx) · `bun run dev` puis `/#/wireframes/EC14` · Inventaire : [EC14](../../06-architecture-information/01-contenus.inventory.md#ec14) · Libellé : « Questionnaire de santé »
> Flows : [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) (étape 2) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Répondre sans rien oublier, en comprenant ce que chaque question vise.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Progression (étape, question) | Questionnaire | Se repérer | US-02.03 |
| 2 | Questions avec période et exemples « même ancien, même guéri » | Questionnaire | Omission involontaire | US-02.03, `[SIM-P05]` |
| 3 | « Seul notre médecin-conseil lira vos réponses » | — | Confiance | US-02.03 « Qui lit les réponses », T2 |
| 4 | Bouton principal « Vérifier mes réponses » | — | Suite du flow | UF-02.02 `HP` |
| 5 | « Enregistrer et finir plus tard » | Questionnaire | Pause de plusieurs jours | US-02.04, `[SIM-P06]` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Vérifier mes réponses | bouton principal | `vers="EC15"` [fiche](./EC15-recapitulatif-des-reponses-de-sante.wireframe.md) | UF-02.02 `HP` |
| Enregistrer et finir plus tard | bouton | `vers="EC14" etat="interrompu"` | UF-02.02 `A2` |
| Voir le nouveau tarif | lien | `vers="EC16"` [fiche](./EC16-tarif-mis-a-jour.wireframe.md) | UF-02.02 `A3` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Question 3 sur 12 | UF-02.02 `HP`, `A1` ; US-02.03 « Question illustrée par des exemples », « Qui lit les réponses » |
| Interrompu | `interrompu` | Réponses enregistrées, lien de reprise envoyé, date d'effacement | UF-02.02 `A2` ; US-02.04 « Réponses conservées de façon confidentielle » |
| Reprise | `reprise` | Reprise à la question 7, réponses conservées | UF-02.02 `A2` ; US-02.04 « Reprise après une interruption » |
| Tarif expiré | `tarif-expire` | Alerte et lien vers le nouveau tarif | UF-02.02 `A3` ; US-02.04 « Tarif expiré pendant l'interruption » |

## Annotations

1. Phrase identique à EC12 : le médecin-conseil est le seul lecteur (T2).
2. Une question par écran sur mobile ; deux questions sont montrées ici pour illustrer le motif.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Questionnaire : questions, exemples, période | ✅ | champs avec aide |
| Répondre | ✅ | champs |
| Interrompre | ✅ | bouton secondaire |

## Retours

Aucun.
