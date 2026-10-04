⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC13 — Prévoyance impossible sans consentement (wireframe)

> Type : contextuel · Parent : [EC12](./EC12-consentement-aux-donnees-de-sante.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC13-prevoyance-impossible-sans-consentement.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC13-prevoyance-impossible-sans-consentement.tsx) · `bun run dev` puis `/#/wireframes/EC13` · Inventaire : [EC13](../../06-architecture-information/01-contenus.inventory.md#ec13) · Libellé : « Prévoyance impossible sans consentement »
> Flows : [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) `E1` · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Comprendre la conséquence du refus et savoir qu'on peut revenir.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | « Aucune donnée de santé enregistrée » | Consentement | Rassurer | US-02.06 « Refus du consentement » |
| 2 | Pourquoi la prévoyance est impossible sans questionnaire | — | Comprendre | US-02.06 |
| 3 | Bouton principal « Revenir à ma décision » ; « Être rappelé » ; « Retour à l'accueil » | — | Issues | UF-02.02 `E1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Revenir à ma décision | bouton principal | `vers="EC12"` | UF-02.02 `E1` |
| Être rappelé | lien | `vers="EC51"` | issue humaine |
| Retour à l'accueil | lien | `vers="EC01"` | fin2 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.02 `E1` ; US-02.06 « Refus du consentement » |

## Annotations

Aucune.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Conséquence du refus | ✅ | texte et alerte |
| Revenir plus tard | ✅ | bouton et lien |

## Retours

Aucun.
