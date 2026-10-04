# Inventaire des contenus — {nom du projet}

<!-- Identifiants et noms d'écrans repris tels quels de ../05-user-flows/00-index.md. Un écran à la fois. -->

## Objets métier

| Objet | Attributs utiles au persona | Relations | Actions | Écrans | Stories |
|---|---|---|---|---|---|
| {Remboursement} | {date des soins, montant remboursé, reste à charge, statut} | {facture, bénéficiaire, garantie} | {consulter, contester} | EC04, EC07 | US-01.02 |

## Écrans

<!-- Type : lieu (destination, dans l'arborescence) ou contextuel (étape, modale, erreur : rattaché à un parent). -->
<!-- Version : la plus précoce de ses stories. Origine : flows, ou « IA » si ajouté par l'architecture. -->

| ID | Écran | Type | Parent | Zone | Objets et contenus | Actions | Personas | Version | Appareil | Origine |
|---|---|---|---|---|---|---|---|---|---|---|
| <a id="ec01"></a>[EC01](../05-user-flows/00-index.md#ec01) | {nom de l'inventaire des flows} | {lieu / contextuel} | {— / EC04} | {zone} | {Remboursement : liste, statut ; Facture : date} | {filtrer, ouvrir un remboursement} | {Prénom} | {MVP} | {mobile} | {UF-01.02} |

## Objets sans écran
- {objet} — {oubli à signaler en retour, ou raison}
