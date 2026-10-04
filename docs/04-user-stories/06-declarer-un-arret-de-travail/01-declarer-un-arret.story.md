⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-06.01 — Déclarer un arrêt en connaissant le délai et toutes les pièces à fournir

> Épopée : [06 Déclarer un arrêt de travail](./00-declarer-un-arret-de-travail.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** savoir dès le début dans quel délai déclarer l'arrêt de mon conjoint et la liste complète des pièces à fournir **afin d'**envoyer un dossier complet en une fois et d'être payés plus vite.

## Origine
- Opportunités : O14 — friction ; O15 — moment de vérité
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étapes Déclarer, Envoyer les pièces
- Sources : `[SIM-P07][SIM-A03][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: Déclaration d'un arrêt avec la liste des pièces
  Étant donné que le conjoint de Sylvie, artisan, est arrêté depuis le 12 mai après une opération
  Quand elle déclare l'arrêt
  Alors elle connaît la date limite de déclaration
  Et elle connaît la liste complète des pièces à fournir pour cette situation, y compris celles à demander au régime obligatoire

Scénario: Déclaration hors délai
  Étant donné que l'arrêt a commencé il y a plus longtemps que le délai de déclaration prévu au contrat
  Quand Sylvie le déclare
  Alors la déclaration est enregistrée
  Et elle est informée des conséquences possibles du retard et des justificatifs qui peuvent l'expliquer

Scénario: Pièce envoyée plus tard
  Étant donné que Sylvie n'a pas encore le relevé du régime obligatoire
  Quand elle déclare l'arrêt avec les autres pièces
  Alors la déclaration est enregistrée
  Et elle sait que cette pièce reste attendue et comment l'ajouter ensuite

Scénario: Pièces médicales protégées
  Étant donné que Sylvie transmet le compte rendu opératoire
  Quand la pièce est enregistrée
  Alors elle sait que seul le service médical y a accès
```

## Notes
- **Contraintes** : T2 ; au MVP, Sylvie agit avec l'accès du titulaire ou par téléphone (accès délégué en V2, US-03.02).
- **Hors périmètre** : déclaration d'invalidité (voir US-07.02).
- **Hypothèses** : aucune.

## User flows
- [UF-06.01 Déclarer un arrêt et savoir quand on sera indemnisé](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md)
