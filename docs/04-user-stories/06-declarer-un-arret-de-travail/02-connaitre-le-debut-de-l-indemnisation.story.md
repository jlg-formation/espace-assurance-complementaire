⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-06.02 — Savoir dès la déclaration à partir de quand et combien je serai indemnisée

> Épopée : [06 Déclarer un arrêt de travail](./00-declarer-un-arret-de-travail.epic.md) · Persona : [Hélène](../../02-persona/03-helene.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Hélène, indépendante qui compare et planifie, **je veux** connaître, au moment où je déclare mon arrêt, ma franchise, la date du début de mon indemnisation et le montant mensuel estimé **afin d'**organiser mes finances dès le premier jour au lieu de le découvrir des semaines plus tard.

## Origine
- Opportunité : O24 — moment de vérité
- Parcours : [Déclarer un arrêt et suivre les indemnités jusqu'à la reprise](../../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) — étapes Déclarer en ligne, Découvrir la franchise
- Sources : `[SIM-P08][SIM-A03][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Indemnisation annoncée à la déclaration
  Étant donné qu'Hélène a une franchise de 90 jours et un revenu garanti de 36 000 €
  Quand elle déclare un arrêt commençant le 6 janvier
  Alors elle sait que l'indemnisation de l'assureur commence le 6 avril
  Et elle connaît le montant mensuel estimé de ses indemnités, en euros

Scénario: Arrêt plus court que la franchise
  Étant donné qu'Hélène déclare un arrêt de 10 jours avec une franchise de 30 jours
  Quand la déclaration est enregistrée
  Alors elle sait qu'aucune indemnité de l'assureur ne sera versée pour cet arrêt
  Et elle sait que l'arrêt est tout de même pris en compte en cas de rechute

Scénario: Estimation impossible faute de revenus connus
  Étant donné que les revenus d'Hélène pour l'année précédente ne sont pas encore connus de l'assureur
  Quand elle déclare son arrêt
  Alors elle sait quelle pièce permettra de calculer le montant
  Et la date de début d'indemnisation lui est quand même indiquée
```

## Notes
- **Contraintes** : montant indicatif tant que le dossier n'est pas complet.
- **Hors périmètre** : modification de la franchise (voir US-05.04).
- **Hypothèses** : les règles de rechute dépendent du contrat.

## User flows
- [UF-06.01 Déclarer un arrêt et savoir quand on sera indemnisé](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md)
