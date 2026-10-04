⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC53 — Question écrite (wireframe)

> Type : lieu · Parent : — · Zone : Transverse · Version : MVP · Appareil principal : tablette
> Wireframe : [EC53-question-ecrite.tsx](../../../web/src/wireframes/ecrans/03-transverse/EC53-question-ecrite.tsx) · `bun run dev` puis `/#/wireframes/EC53` · Inventaire : [EC53](../../06-architecture-information/01-contenus.inventory.md#ec53) · Libellé : « Poser une question »
> Flows : [UF-08.02](../../05-user-flows/08-etre-accompagne-par-un-conseiller/02-poser-une-question-ecrite.flow.md) (étape 1) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Poser une question écrite, en sachant quand viendra la réponse et sans exposer de donnée de santé.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Délai de réponse | Demande | Plus d'attente aveugle | US-08.02 |
| 2 | Contrat, sujet, question | Demande | Contenu | US-08.02 « Question envoyée » |
| 3 | Bouton principal « Envoyer ma question » | — | Suite | UF-08.02 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer ma question | bouton principal | `vers="EC34" etat="question"` | UF-08.02 `HP` |
| Envoyer un document | lien (état médical) | `vers="EC33"` | UF-08.02 `A1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-08.02 `HP` ; US-08.02 « Question envoyée » |
| Information médicale | `medical` | Avertissement, passage par le médecin-conseil | UF-08.02 `A1` ; US-08.02 « Question contenant des informations de santé » |

## Annotations

1. Connexion demandée pour rattacher la réponse au dossier ; la réponse est conservée dans « Mes demandes ». Les mentions de santé sont détectées avant envoi (T2).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Demande : contrat, sujet, question, délai | ✅ | champs, paragraphe |
| Envoyer | ✅ | bouton principal |

## Retours

Aucun.
