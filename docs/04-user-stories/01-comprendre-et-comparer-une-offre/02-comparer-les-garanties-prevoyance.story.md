⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-01.02 — Comparer les garanties de prévoyance sans lire les conditions générales

> Épopée : [01 Comprendre et comparer une offre](./00-comprendre-et-comparer-une-offre.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Should · Version : MVP · Confiance : 🟡 partiel

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** connaître pour chaque formule de prévoyance la franchise, les indemnités journalières, la rente d'invalidité, le barème retenu et les exclusions types **afin de** comparer sans chercher ces informations au fond des conditions générales.

## Origine
- Opportunités : O20 — friction ; O23 — friction
- Parcours : [Choisir et souscrire une prévoyance](../../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) — étapes Comparer, Accepter les conditions
- Sources : `[SIM-P06][SIM-A01]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Paramètres clés de chaque formule
  Étant donné qu'Hélène étudie deux formules de prévoyance
  Quand elle les compare
  Alors elle connaît pour chacune la franchise, le montant des indemnités journalières, la rente d'invalidité et le barème (professionnel ou fonctionnel)
  Et les exclusions les plus fréquentes sont indiquées

Scénario: Barème expliqué par un exemple
  Étant donné qu'Hélène ne sait pas ce que change un barème professionnel ou fonctionnel
  Quand elle cherche à le comprendre
  Alors un exemple chiffré lui montre la différence pour une même incapacité

Scénario: Document de référence
  Étant donné qu'Hélène veut vérifier un point dans le contrat
  Quand elle demande le détail
  Alors elle accède à la clause précise des conditions générales, sans parcourir tout le document
```

## Notes
- **Contraintes** : les exclusions présentées sont indicatives ; seules les conditions particulières après questionnaire font foi.
- **Hors périmètre** : comparaison avec d'autres assureurs (pas un comparateur, voir vision).
- **Hypothèses** : schéma porté par 2 entretiens seulement.

## User flows
- [UF-01.02 Choisir une prévoyance en connaissant le montant net](../../05-user-flows/01-comprendre-et-comparer-une-offre/02-choisir-une-prevoyance.flow.md)
