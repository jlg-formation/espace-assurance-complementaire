⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-05.02 — Présenter ma carte de tiers payant à jour

> Épopée : [05 Suivre ses remboursements et ses documents](./00-suivre-ses-remboursements.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Should · Version : MVP · Confiance : 🟡 partiel

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** présenter en quelques secondes ma carte de tiers payant valable, même chez un nouveau praticien ou en janvier **afin de** ne pas avancer les frais ni faire attendre la file.

## Origine
- Opportunité : O32 — vision
- Parcours : aucune journey map (décision de validation) ; constats de la [synthèse](../../research/synthese.md) (H6 invalidée : le besoin est ponctuel, pas quotidien)
- Sources : `vision` ; `[SIM-P03][SIM-P04][SIM-A02][SIM-S01]`

## Critères d'acceptation
Exigences transverses : T1, T4, T7.

```gherkin
# language: fr
Scénario: Carte présentée chez un nouveau praticien
  Étant donné que Manon consulte un nouveau dentiste
  Quand on lui demande sa carte de mutuelle
  Alors elle peut présenter sa carte valable depuis son téléphone
  Et la carte indique les bénéficiaires du contrat

Scénario: Renouvellement de janvier
  Étant donné que la nouvelle carte de l'année est disponible
  Quand Manon a besoin de sa carte en janvier
  Alors c'est la carte de l'année en cours qui lui est présentée, sans recherche parmi ses documents
  Et elle a été prévenue que la nouvelle carte était disponible

Scénario: Sans connexion internet
  Étant donné que Manon n'a pas de réseau dans la pharmacie
  Quand elle doit présenter sa carte
  Alors elle peut présenter la dernière carte valable enregistrée sur son téléphone

Scénario: Carte transmise à un proche
  Étant donné que le conjoint de Manon a besoin de la carte à la pharmacie
  Quand Manon la lui transmet
  Alors il peut la présenter depuis son propre téléphone
```

## Notes
- **Contraintes** : la carte doit pouvoir être partagée avec un proche (photo ou envoi) `[SIM-P03][SIM-P04]`.
- **Hors périmètre** : carte dans les portefeuilles numériques du téléphone (Plus tard).
- **Hypothèses** : aucune.

## User flows
- [UF-05.02 Présenter sa carte de tiers payant](../../05-user-flows/05-suivre-ses-remboursements/02-presenter-sa-carte.flow.md)
