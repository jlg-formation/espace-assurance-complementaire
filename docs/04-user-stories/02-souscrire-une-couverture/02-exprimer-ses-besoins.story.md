⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-02.02 — Exprimer mes besoins pour recevoir une formule adaptée

> Épopée : [02 Souscrire une couverture](./00-souscrire-une-couverture.epic.md) · Persona : [Manon](../../02-persona/01-manon.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : ⚪ hypothèse

**En tant que** Manon, assurée pressée qui veut un chiffre, **je veux** indiquer en quelques réponses les soins qui comptent pour mon foyer **afin de** savoir quelle formule me convient sans avoir à tout comparer moi-même.

## Origine
- Opportunité : O30 — contrainte
- Parcours : [Souscrire sa première couverture](../../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) — étape Comprendre et choisir
- Sources : `contrainte` (devoir de conseil, directive sur la distribution d'assurances)

## Critères d'acceptation
Exigences transverses : T1, T3, T4, T7.

```gherkin
# language: fr
Scénario: Recommandation à partir des besoins
  Étant donné que Manon indique que son enfant porte des lunettes et qu'elle prévoit des soins dentaires
  Quand elle a répondu aux questions sur ses besoins
  Alors une formule lui est recommandée avec la raison de cette recommandation
  Et le reste à charge estimé pour les soins indiqués est donné en euros

Scénario: Choix d'une formule différente de la recommandation
  Étant donné qu'une formule a été recommandée à Manon
  Quand elle choisit une formule moins couvrante
  Alors elle est informée des soins indiqués qui seraient moins bien remboursés
  Et elle peut poursuivre avec la formule de son choix

Scénario: Trace du conseil
  Étant donné que Manon a souscrit
  Quand elle consulte ses documents
  Alors elle retrouve ses besoins exprimés et la recommandation qui lui a été faite
```

## Notes
- **Contraintes** : la trace du conseil fait partie des obligations réglementaires.
- **Hors périmètre** : conseil par un humain (voir US-08.01).
- **Hypothèses** : Manon accepte de répondre à quelques questions avant le choix (risque d'abandon à vérifier en test).

## User flows
- [UF-02.01 Obtenir un tarif et une formule adaptée sans laisser ses coordonnées](../../05-user-flows/02-souscrire-une-couverture/01-obtenir-un-tarif.flow.md)
