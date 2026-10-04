⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-01.01 — Savoir ce que rembourse chaque formule, en euros

> Épopée : [01 Comprendre et comparer une offre](./00-comprendre-et-comparer-une-offre.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** savoir combien chaque formule me rembourserait pour des soins courants et ce qui resterait à ma charge **afin de** choisir sans mauvaise surprise au premier soin coûteux.

## Origine
- Opportunité : O03 — friction
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Comprendre et choisir
- Sources : `[SIM-P01][SIM-P02][SIM-A01][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Reste à charge en euros pour un soin courant
  Étant donné que Manon compare les formules Essentielle et Confort
  Quand elle consulte ce que couvre chaque formule pour une couronne dentaire à 650 €
  Alors elle connaît, pour chaque formule, le montant remboursé et le reste à sa charge en euros
  Et le prix mensuel de chaque formule est indiqué à côté

Scénario: Terme technique rencontré
  Étant donné que Manon rencontre l'expression « base de remboursement »
  Quand elle cherche à la comprendre
  Alors une explication en langage courant lui est donnée à cet endroit
  Et elle n'a pas à quitter sa comparaison

Scénario: Soin non couvert par la formule
  Étant donné qu'une formule ne prend pas en charge un soin de référence
  Quand Manon consulte ce soin pour cette formule
  Alors il est indiqué clairement que le soin n'est pas couvert
  Et le montant entièrement à sa charge est affiché
```

## Notes
- **Contraintes** : les montants affichés sont des exemples sur des tarifs de référence ; leur caractère indicatif doit être indiqué.
- **Hors périmètre** : estimation sur un devis personnel (voir US-04.01).
- **Hypothèses** : la liste des soins de référence reste à définir avec le métier.

## User flows
- [UF-01.01 Comprendre ce que rembourse chaque formule santé avant de choisir](../../05-user-flows/01-comprendre-et-comparer-une-offre/01-comprendre-ce-que-rembourse-chaque-formule.flow.md)
