⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-06.03 — Savoir où en est chaque pièce du dossier

> Épopée : [06 Déclarer un arrêt de travail](./00-declarer-un-arret-de-travail.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** savoir à tout moment quelles pièces ont été reçues, acceptées ou sont encore attendues **afin de** ne plus apprendre par courrier, semaine après semaine, qu'il manque un document.

## Origine
- Opportunité : O15 — moment de vérité
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Envoyer les pièces
- Sources : `[SIM-P07][SIM-A03][SIM-S02]`

## Critères d'acceptation
Exigences transverses : T1, T2, T4, T7.

```gherkin
# language: fr
Scénario: État des pièces
  Étant donné que Sylvie a transmis l'arrêt de travail et la déclaration de revenus
  Quand elle consulte le dossier
  Alors elle sait que ces deux pièces sont reçues
  Et elle sait que le relevé du régime obligatoire est encore attendu

Scénario: Pièce refusée
  Étant donné que le relevé transmis par Sylvie ne couvre pas toute la période
  Quand la pièce est examinée
  Alors elle est prévenue que la pièce est refusée, avec la raison
  Et elle sait ce qu'elle doit transmettre à la place

Scénario: Pièce annoncée manquante alors qu'envoyée par courrier
  Étant donné que Sylvie a envoyé une pièce par courrier
  Quand la pièce est reçue et enregistrée
  Alors son état est mis à jour dans le dossier
  Et Sylvie n'a pas à appeler pour le vérifier

Scénario: Pièce illisible
  Étant donné que Sylvie transmet une photo floue d'une pièce
  Quand la pièce est vérifiée
  Alors elle est informée que la pièce n'est pas lisible
  Et elle peut en transmettre une nouvelle
```

## Notes
- **Contraintes** : T2, Sylvie voit l'état d'une pièce médicale, pas son contenu.
- **Hors périmètre** : aucun.
- **Hypothèses** : délai d'enregistrement des pièces reçues par courrier à préciser.

## User flows
- [UF-06.02 Compléter le dossier d'arrêt](../../05-user-flows/06-declarer-un-arret-de-travail/02-completer-le-dossier.flow.md)
