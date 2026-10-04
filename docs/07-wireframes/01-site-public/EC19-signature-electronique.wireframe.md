⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC19 — Signature électronique (wireframe)

> Type : contextuel · Parent : [EC18](./EC18-recapitulatif-avant-signature.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC19-signature-electronique.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC19-signature-electronique.tsx) · `bun run dev` puis `/#/wireframes/EC19` · Inventaire : [EC19](../../06-architecture-information/01-contenus.inventory.md#ec19) · Libellé : « Signer mon contrat »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) (étape 2) · Personas : [Manon](../../02-persona/01-manon.persona.md), [Sylvie](../../02-persona/02-sylvie.persona.md)

## Objectif
Signer avec un code, même si le SMS n'arrive pas.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Champ du code, avec le canal de réception | code de signature | Action de l'écran | US-02.07 |
| 2 | Bouton principal « Signer » | — | Suite du flow | UF-02.03 `HP` |
| 3 | « Je n'ai pas reçu le code » | — | SMS expiré en zone rurale | US-02.07 `E1`, `[SIM-P02]` |
| 4 | « Être rappelé » | — | Variante Sylvie | UF-02.03 `V1` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Signer | bouton principal | `vers="EC20"` [fiche](./EC20-paiement.wireframe.md) | UF-02.03 `HP` |
| Je n'ai pas reçu le code | lien | `vers="EC19" etat="code-non-recu"` | UF-02.03 `E1` |
| Être rappelé | lien | `vers="EC51"` | UF-02.03 `V1` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Code par SMS | UF-02.03 `HP` |
| Code non reçu | `code-non-recu` | Nouveau code par e-mail, saisie conservée | UF-02.03 `E1` ; US-02.07 « Code de signature non reçu ou expiré » |

## Annotations

1. Moyen alternatif retenu pour le wireframe : l'e-mail (question ouverte de UF-02.03).

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Code de signature | ✅ | champ |
| Demander un code | ✅ | lien « Je n'ai pas reçu le code » |
| Signer | ✅ | bouton principal |

## Retours

Aucun.
