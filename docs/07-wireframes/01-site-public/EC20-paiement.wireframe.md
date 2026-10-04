⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC20 — Paiement (wireframe)

> Type : contextuel · Parent : [EC19](./EC19-signature-electronique.wireframe.md) · Zone : Site public · Version : MVP · Appareil principal : mobile
> Wireframe : [EC20-paiement.tsx](../../../web/src/wireframes/ecrans/01-site-public/EC20-paiement.tsx) · `bun run dev` puis `/#/wireframes/EC20` · Inventaire : [EC20](../../06-architecture-information/01-contenus.inventory.md#ec20) · Libellé : « Paiement »
> Flows : [UF-02.03](../../05-user-flows/02-souscrire-une-couverture/03-signer-et-payer.flow.md) (étape 3) · Personas : [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Autoriser le prélèvement de la cotisation.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Montant et date du premier prélèvement | Contrat | Savoir ce qu'on autorise | US-02.07, T3 |
| 2 | Titulaire, IBAN, jour de prélèvement | coordonnées bancaires | Action | US-02.07 |
| 3 | Bouton principal « Autoriser le prélèvement » | — | Suite du flow | UF-02.03 `HP` |

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Autoriser le prélèvement | bouton principal | `vers="EC22"` [fiche](./EC22-confirmation-de-souscription.wireframe.md) | UF-02.03 `HP` |
| Exemple : prélèvement refusé | lien de revue | `vers="EC21"` [fiche](./EC21-echec-du-paiement.wireframe.md) | UF-02.03 `E2` |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-02.03 `HP` ; US-02.07 « Souscription terminée » |

## Annotations

1. Bouton de soumission dans l'interface réelle : si l'autorisation est acceptée, EC22 ; sinon, EC21.
2. Lien présent uniquement pour la revue du wireframe : il donne accès à l'écran d'erreur, atteint en réalité après un refus.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Coordonnées bancaires | ✅ | champs |
| Autoriser le prélèvement | ✅ | bouton principal |

## Retours

Aucun.
