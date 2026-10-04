# Exemples commentés — ux-01-discovery

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients (attestations, changements de situation, réclamations). Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu dans un projet réel.

## 1. Restituer sa compréhension (étape 2)

> **Reformulation** : refaire l'espace client pour que les clients puissent envoyer une demande et en suivre le traitement sans appeler le service client.
> **Explicite** : cible = clients particuliers ; canal = web et mobile ; contrainte = accessibilité (RGAA).
> **Implicite (à valider)** : les appels au service client viennent surtout du suivi des demandes ; les clients ont un smartphone.
> **Absent** : volume de demandes, profils des clients qui appellent, moyens de recherche disponibles.

## 2. Poser un lot de questions (étape 3)

✅ Question avec options et recommandation, liée à un thème de la grille :
> **Pourquoi ce logiciel ?** Quel est le problème principal à résoudre ?
> - Trop d'appels au service client pour savoir où en est une demande *(recommandé : c'est ce que suggère le brief)*
> - Des demandes incomplètes qui doivent être renvoyées
> - Un espace client vieillissant, sans problème identifié
> - Autre (saisie libre)

❌ « Pouvez-vous m'en dire plus sur le projet ? » — trop ouverte, aucune option, ne fait pas avancer la grille.

## 3. Énoncé de vision

✅ « Permettre aux clients d'envoyer une demande et de savoir à tout moment où elle en est, sans avoir à appeler. »
— Dit pour qui, quel problème, quel changement.

❌ « Proposer une expérience digitale innovante et omnicanale. »
— Aucun utilisateur, aucun problème, impossible à vérifier.

## 4. Proto-persona (extrait)

```markdown
# Sophie, 38 ans — celle qui veut tout régler depuis son téléphone *(proto-persona)*

> **Statut : proto-persona.** [...]
> Segment : clients actifs · Priorité : haute

## Situation type
Sophie vient de déménager. Elle doit faire mettre à jour son adresse, avec un justificatif
de domicile. Il est 22 h, les enfants sont couchés, elle n'a que son téléphone.

## Hypothèses de comportement
| # | Hypothèse | Source | Risque si fausse | Comment la valider |
|---|---|---|---|---|
| H1 | Elle fait ses démarches le soir, sur mobile | exploration | fort | entretien Q4, enquête |
| H2 | Elle appelle le service client faute de savoir où en est sa demande | brief | fort | entretien Q7, avis |
```

## 5. Hypothèses

✅ « H2 — Les clients appellent le service client parce qu'ils ne savent pas où en est leur demande. »
— Testable : on peut demander aux participants pourquoi ils ont appelé la dernière fois.

❌ « Les clients veulent une meilleure expérience. »
— Toujours vraie, donc inutile : rien ne permet de l'invalider.

## 6. Questions du guide d'entretien

✅ « Racontez-moi la dernière fois que vous avez dû envoyer un document à un organisme. » *(H1)*
— Relances : « Où étiez-vous ? Sur quel appareil ? Qu'est-ce qui a été difficile ? »

❌ « Utiliseriez-vous une application pour suivre vos demandes ? »
— Question sur une intention : presque tout le monde répond oui, et cela ne prédit rien.

❌ « Trouvez-vous que le service client est trop lent ? »
— Question orientée : elle suggère la réponse.
