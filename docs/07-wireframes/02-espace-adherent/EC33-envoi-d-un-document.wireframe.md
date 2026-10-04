⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC33 — Envoi d'un document (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : mobile
> Wireframe : [EC33-envoi-d-un-document.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC33-envoi-d-un-document.tsx) · `bun run dev` puis `/#/wireframes/EC33` · Inventaire : [EC33](../../06-architecture-information/01-contenus.inventory.md#ec33) · Libellé : « Envoyer un document »
> Flows : [UF-04.02](../../05-user-flows/04-connaitre-son-reste-a-charge/02-envoyer-un-devis.flow.md) (étape 1), [UF-06.01](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md), [UF-06.02](../../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md), [UF-06.03](../../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Transmettre un devis ou une pièce en le photographiant, et savoir qu'il est bien parti.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Quel document (devis, pièce d'arrêt) et pour qui | Document, Bénéficiaire | Le rattacher à la bonne demande | US-04.02 |
| 2 | Prendre en photo ou joindre, plusieurs pages possibles | Document : pages | Devis de 3 pages | US-04.02 « Devis de plusieurs pages » |
| 3 | Mention « Les pièces médicales ne sont lues que par notre médecin-conseil » | — | Confiance | T2, `[SIM-P06][SIM-P08]` |
| 4 | Bouton principal « Envoyer » | — | Suite du flow | UF-04.02 `HP` |
| 5 | Autre moyen : envoi par courrier (adresse) | — | Variante Sylvie, échecs de photo | UF-04.02 `V1` `E4` |

**Replié, renvoyé ou supprimé** : consignes de prise de vue → repliées (« Conseils pour une photo lisible »).

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Envoyer (devis) | bouton principal | `vers="EC34"` [fiche](./EC34-accuse-de-reception.wireframe.md) | UF-04.02 `HP` |
| Envoyer (pièces de la déclaration) | bouton principal, état `arret` | `vers="EC45"` | UF-06.01 `HP` |
| Envoyer (pièce du dossier) | bouton principal, état `piece` | `vers="EC34" etat="piece"` | UF-06.02 `HP` |
| Envoyer (reprise, prolongation) | bouton principal, états `reprise`, `prolongation` | `vers="EC48"` | UF-06.03 `HP`, `A1` |
| Être rappelé | lien | `vers="EC51"` | UF-04.02 `E4` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Devis d'orthodontie, 3 pages | UF-04.02 `HP` ; US-04.02 « Devis transmis », « Devis de plusieurs pages » |
| Déclaration d'arrêt | `arret` | Pièces de la déclaration, suite vers la confirmation | UF-06.01 `HP` ; US-06.01 « Pièces médicales protégées » |
| Pièce du dossier | `piece` | Relevé du régime obligatoire | UF-06.02 `HP` |
| Reprise | `reprise` | Certificat de reprise à temps partiel | UF-06.03 `HP` |
| Prolongation | `prolongation` | Avis de prolongation | UF-06.03 `A1` |

Le chemin d'erreur `E1` (photo floue) passe par EC35 ; la variante postale `V1` est décrite dans le bloc « Autre moyen : par courrier ».

## Annotations

1. Bouton de soumission dans l'interface réelle : contrôle de lisibilité, puis EC34 (ou EC35 si une page est illisible). Toutes les pages sont rattachées au même document.
2. Les pièces médicales sont réservées au médecin-conseil (T2) ; la mention est visible à chaque envoi.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Document : type, pages, bénéficiaire | ✅ | champs |
| Mention de confidentialité médicale | ✅ | paragraphe et annotation 2 |
| Photographier, transmettre | ✅ | champ fichier, bouton principal |

## Retours

Aucun.
