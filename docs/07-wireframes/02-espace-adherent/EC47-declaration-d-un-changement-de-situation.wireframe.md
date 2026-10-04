⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC47 — Déclaration d'un changement de situation (wireframe)

> Type : contextuel · Parent : [EC46](./EC46-dossier-d-arret.wireframe.md) · Zone : Espace adhérent · Version : MVP · Appareil principal : ordinateur
> Wireframe : [EC47-declaration-d-un-changement-de-situation.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC47-declaration-d-un-changement-de-situation.tsx) · `bun run dev` puis `/#/wireframes/EC47` · Inventaire : [EC47](../../06-architecture-information/01-contenus.inventory.md#ec47) · Libellé : « Déclarer un changement »
> Flows : [UF-06.03](../../05-user-flows/06-declarer-un-arret-de-travail/03-declarer-un-changement-de-situation.flow.md) (étape 2) · Personas : [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Déclarer sa situation telle qu'elle est, sans interrompre les versements.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Situation, dont le temps partiel thérapeutique, défini sur place | situations possibles | Le cas qui cassait le parcours | US-06.04, `[SIM-P08][SIM-A03]` |
| 2 | Date | — | Calcul | US-06.04 |
| 3 | « Vos versements continuent » | — | Rassurer | US-06.04 |
| 4 | Bouton principal « Continuer » (ou « Envoyer » pour une autre situation) | — | Suite | UF-06.03 `HP`, `A2` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Continuer (reprise) | bouton principal | `vers="EC33" etat="reprise"` | UF-06.03 `HP` |
| Continuer (prolongation) | bouton principal, état prolongation | `vers="EC33" etat="prolongation"` | UF-06.03 `A1` |
| Envoyer (autre situation) | bouton principal, état autre | `vers="EC46"` | UF-06.03 `A2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Reprise à temps partiel thérapeutique | UF-06.03 `HP` ; US-06.04 « Reprise à temps partiel thérapeutique » |
| Prolongation | `prolongation` | Prolongation sélectionnée | UF-06.03 `A1` ; US-06.04 « Prolongation d'arrêt » |
| Autre situation | `autre` | Description libre, examen par un gestionnaire, versements maintenus | UF-06.03 `A2` ; US-06.04 « Situation non prévue » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Situations possibles, pièces attendues | ✅ | champ, texte |
| Déclarer | ✅ | bouton principal |
| Décrire une autre situation | ✅ | état `autre` |

## Retours

Aucun.
