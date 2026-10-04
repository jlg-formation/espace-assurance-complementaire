⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-05.03 — Obtenir une attestation

> Épopée : [05 Suivre ses remboursements et ses documents](./00-suivre-ses-remboursements.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Should · Version : MVP · Confiance : ⚪ hypothèse

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** obtenir moi-même une attestation (d'adhésion, de droits, de cotisations) **afin de** la fournir à un organisme sans appeler l'assureur ni attendre un courrier.

## Origine
- Opportunité : O34 — vision
- Parcours : aucune journey map (décision de validation)
- Sources : `vision` (espace adhérent : attestations)

## Critères d'acceptation
Exigences transverses : T1, T4, T7.

```gherkin
# language: fr
Scénario: Attestation obtenue
  Étant donné que Sylvie a besoin d'une attestation de cotisations de l'année 2025 pour la déclaration de revenus du foyer
  Quand elle la demande
  Alors elle l'obtient immédiatement dans un format imprimable et transmissible

Scénario: Attestation non disponible en ligne
  Étant donné que l'attestation demandée ne peut pas être produite automatiquement
  Quand Sylvie la demande
  Alors elle sait sous quel délai elle la recevra et par quel moyen
```

## Notes
- **Contraintes** : document authentifiable par l'organisme destinataire.
- **Hors périmètre** : attestations destinées à l'employeur pour les contrats collectifs (hors cible).
- **Hypothèses** : besoin issu de la vision, aucun récit de participant.

## User flows
- [UF-05.03 Obtenir une attestation](../../05-user-flows/05-suivre-ses-remboursements/03-obtenir-une-attestation.flow.md)
