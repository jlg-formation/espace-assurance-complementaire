⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC11 — Mon contrat et mes documents (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : ordinateur (version mobile lisible)
> Wireframe : [EC11-mon-contrat-et-mes-documents.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC11-mon-contrat-et-mes-documents.tsx) · `bun run dev` puis `/#/wireframes/EC11` · Inventaire : [EC11](../../06-architecture-information/01-contenus.inventory.md#ec11) · Libellé : « Mon contrat »
> Flows : [UF-05.04](../../05-user-flows/05-suivre-ses-remboursements/04-ajuster-ses-garanties.flow.md) (étape 1), [UF-05.03](../../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md), [UF-02.01](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md) `A4`, [UF-02.02](../../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) `A4` · Personas : [Hélène](../../02-persona/03-helene.persona.md), [Manon](../../02-persona/01-manon.persona.md)

## Objectif
Connaître les paramètres clés de son contrat en euros et retrouver ses documents.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Paramètres clés : formules, bénéficiaires, franchise, revenu garanti, montant mensuel estimé en cas d'arrêt | Contrat | Franchise oubliée jusqu'au sinistre | US-05.04, `[SIM-P08]` |
| 2 | Lien « Simuler avec mon contrat » | Simulation | Vérifier le montant net | navigation, US-01.03 |
| 3 | Documents : contrat, IPID, conseil reçu, consentements | Contrat, Consentement | Trace du conseil, consentement | US-02.02, US-02.06 |
| 4 | Lien « Mes attestations » | Attestation | Sous-rubrique | UF-05.03 |
| 5 | « Modifier mes garanties » (V2) | Contrat | Ajustement après rappel | US-05.04 |

**Replié, renvoyé ou supprimé** : conditions générales complètes → document à télécharger.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Simuler avec mon contrat | lien | `vers="EC04"` | UF-05.04 `A1` |
| Voir l'effet en euros | lien (état rappel) | `vers="EC04" etat="sous-evalue"` | UF-05.04 `A1` |
| Modifier mes garanties | lien | `vers="EC42"` [fiche](./EC42-modification-des-parametres-du-contrat.wireframe.md) | UF-05.04 `A1` |
| Mes attestations | lien | `vers="EC41"` [fiche](./EC41-attestations.wireframe.md) | UF-05.03 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-05.04 `HP` ; UF-02.01 `A4`, UF-02.02 `A4` ; US-02.02 « Trace du conseil », US-02.06 « Retrouver son consentement » |
| Rappel annuel | `rappel` | Alerte sur l'écart entre revenu déclaré et garanti | UF-05.04 `A1` ; US-05.04 « Rappel annuel », « Revenu garanti en décalage avec le revenu déclaré » |

## Annotations

1. Les montants sont recalculés à chaque changement de régime obligatoire ou de revenu déclaré ; ils restent indicatifs.
2. « Modifier mes garanties » n'est affiché qu'en V2.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Contrat : formule, franchise, revenu garanti, conseil reçu | ✅ | blocs « Mes garanties » et « Mes documents » |
| Consentement | ✅ | « Mes documents » |
| Consulter | ✅ | écran |
| Modifier les paramètres | ✅ | lien EC42 |
| Obtenir une attestation | ✅ | lien EC41 |

## Retours

Aucun.
