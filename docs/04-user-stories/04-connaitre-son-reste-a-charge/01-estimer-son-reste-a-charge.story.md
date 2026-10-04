⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-04.01 — Estimer mon reste à charge pour un type de soin

> Épopée : [04 Connaître son reste à charge avant un soin](./00-connaitre-son-reste-a-charge.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** savoir tout de suite, à partir du montant annoncé par le praticien, ce que ma formule rembourserait et ce qui me resterait à payer **afin de** décider du soin sans attendre ni appeler.

## Origine
- Opportunités : O07 — friction ; O10 — moment de vérité
- Parcours : [Savoir ce qui restera à payer avant un soin](../../03-customer-journey-map/01-manon.cjm.md#savoir-ce-qui-restera-à-payer-avant-un-soin) — étape Chercher le remboursement
- Sources : `[SIM-P01][SIM-P04][SIM-A02][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Estimation pour une couronne dentaire
  Étant donné que Manon a la formule Essentielle
  Et que son dentiste lui annonce une couronne à 650 €
  Quand elle estime son reste à charge pour ce soin
  Alors elle connaît la part de l'Assurance Maladie, la part de sa mutuelle et ce qui lui reste à payer, en euros
  Et il est précisé que le montant est une estimation

Scénario: Soin pour un enfant du foyer
  Étant donné que le fils de Manon est bénéficiaire de son contrat
  Quand elle estime le reste à charge de lunettes pour lui
  Alors l'estimation tient compte des remboursements déjà utilisés pour lui dans la période

Scénario: Informations insuffisantes pour estimer
  Étant donné que Manon ne connaît pas le code de l'acte ou le type d'équipement
  Quand l'estimation ne peut pas être calculée avec précision
  Alors elle reçoit une fourchette en euros
  Et elle sait qu'elle peut envoyer le devis pour obtenir une réponse exacte
```

## Notes
- **Contraintes** : T3, montants en euros ; les plafonds par période sont pris en compte.
- **Hors périmètre** : comparaison avec l'équipement 100 % Santé (écartée).
- **Hypothèses** : Manon fait confiance à une estimation sans confirmation écrite ⚪.

## User flows
- [UF-04.01 Estimer ce qui restera à payer avant un soin](../../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md)
