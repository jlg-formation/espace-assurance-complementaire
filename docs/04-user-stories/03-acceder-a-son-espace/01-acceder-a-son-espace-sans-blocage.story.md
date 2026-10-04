⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# US-03.01 — Accéder à mon espace sans rester bloquée

> Épopée : [03 Accéder à son espace](./00-acceder-a-son-espace.epic.md) · Persona : [Sylvie](../../02-persona/02-sylvie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sylvie, proche qui gère les démarches du foyer, **je veux** entrer dans mon espace et retrouver mon accès seule si je l'ai perdu **afin de** suivre mes démarches en ligne au lieu d'appeler chaque semaine.

## Origine
- Opportunité : O19 — implication
- Parcours : [Déclarer l'arrêt de son conjoint et suivre les versements](../../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) — étape Attendre et relancer
- Sources : `[SIM-P02][SIM-P03][SIM-P07][SIM-A01]`

## Critères d'acceptation
Exigences transverses : T1, T4, T7.

```gherkin
# language: fr
Scénario: Première connexion
  Étant donné que Sylvie dispose d'un identifiant pour l'espace du foyer
  Quand elle se connecte pour la première fois depuis sa tablette
  Alors elle accède à son espace après avoir choisi son mot de passe
  Et elle n'a plus à fournir de code à chaque connexion sur cet appareil

Scénario: Mot de passe oublié ou bloqué
  Étant donné que Sylvie a oublié son mot de passe
  Quand elle demande à le réinitialiser
  Alors elle retrouve l'accès à son espace sans appeler
  Et, si la réinitialisation échoue, elle sait comment obtenir de l'aide et dans quel délai

Scénario: Code de vérification non reçu
  Étant donné qu'un code de vérification est envoyé à Sylvie et n'arrive pas dans les 5 minutes
  Quand elle en demande un autre
  Alors elle peut le recevoir par un autre moyen

Scénario: Connexion depuis un nouvel appareil
  Étant donné que Sylvie se connecte depuis un appareil qu'elle n'a jamais utilisé
  Quand ses identifiants sont corrects
  Alors un code de vérification lui est demandé une seule fois
  Et l'appareil est mémorisé si elle le souhaite
```

## Notes
- **Contraintes** : sécurité de l'authentification proportionnée à la sensibilité des données de santé ; T1 (pas de test visuel sans alternative accessible).
- **Hors périmètre** : accès d'un proche (voir US-03.02).
- **Hypothèses** : la mémorisation de l'appareil est compatible avec les exigences de sécurité (à valider avec la sécurité).

## User flows
- [UF-03.01 Accéder à son espace](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md)
