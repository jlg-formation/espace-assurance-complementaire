⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# EC27 — Accueil de l'espace adhérent (wireframe)

> Type : lieu · Parent : — · Zone : Espace adhérent · Version : MVP · Appareil principal : tablette (Sylvie), mobile (Manon)
> Wireframe : [EC27-accueil-de-l-espace-adherent.tsx](../../../web/src/wireframes/ecrans/02-espace-adherent/EC27-accueil-de-l-espace-adherent.tsx) · `bun run dev` puis `/#/wireframes/EC27` · Inventaire : [EC27](../../06-architecture-information/01-contenus.inventory.md#ec27) · Libellé : « Mon espace »
> Flows : [UF-03.01](../../05-user-flows/03-acceder-a-son-espace/01-acceder-a-son-espace.flow.md), [UF-04.01](../../05-user-flows/04-connaitre-son-reste-a-charge/01-estimer-son-reste-a-charge.flow.md), [UF-05.01](../../05-user-flows/05-suivre-ses-remboursements/01-retrouver-un-remboursement.flow.md), [UF-06.01](../../05-user-flows/06-declarer-un-arret-de-travail/01-declarer-un-arret.flow.md), [UF-07.01](../../05-user-flows/07-suivre-ses-indemnites/01-connaitre-le-prochain-versement.flow.md) · Personas : [Sylvie](../../02-persona/02-sylvie.persona.md), [Manon](../../02-persona/01-manon.persona.md), [Hélène](../../02-persona/03-helene.persona.md)

## Objectif
Voir d'un coup d'œil ce qui est en cours pour le foyer et lancer la démarche du moment.

## Hiérarchie du contenu

| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Démarches en cours : prochain versement d'indemnités (date, montant), devis en attente (délai), pièce attendue | Indemnité, Demande, Document | Moment de vérité de Sylvie : quand et combien | US-07.01, `[SIM-P07]` |
| 2 | Raccourcis : Ma carte de mutuelle, Estimer un soin, Envoyer un document | — | Tâches en un clic au comptoir ou en salle d'attente | navigation, UF-04.01, UF-05.02 |
| 3 | Reprendre ma souscription (si une souscription est en cours) | Questionnaire | Navigation contextuelle prévue | UF-02.02 |
| 4 | Derniers remboursements | Soin et remboursement | Vérification ponctuelle | UF-05.01 |
| 5 | Déclarer un arrêt | Dossier d'arrêt | Déclencheur rare mais critique | UF-06.01 |

**Replié, renvoyé ou supprimé** : informations de contrat → rubrique Mon contrat.

## Actions et liens sortants

| Action | Type | Cible | Flow et chemin |
|---|---|---|---|
| Démarches en cours | liens | EC48, EC46, EC36 | UF-07.01, UF-06.02, UF-04.02 |
| Ma carte de mutuelle, Estimer un soin, Envoyer un document | cartes (raccourcis) | EC40, EC31, EC33 | UF-05.02, UF-04.01, UF-04.02 |
| Déclarer un arrêt | lien | `vers="EC43"` | UF-06.01 `HP` |
| Voir mes remboursements | lien | `vers="EC38"` | UF-05.01 |
| Reprendre ma souscription | bouton | `vers="EC14" etat="reprise"` | navigation contextuelle |
| Rubriques, Aide et contact, Mon compte | navigation globale et utilitaire | EC38, EC36, EC46, EC11, EC54, EC28 | UF-08.01, UF-03.02 |

## États

| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | Démarches en cours du foyer de Sylvie | UF-03.01 `HP` |
| Vide (premier usage) | `vide` | Aucune démarche, aucun remboursement | US-03.01 « Première connexion » |
| Souscription en cours | `souscription` | Alerte et bouton « Reprendre ma souscription » | navigation contextuelle (UF-02.02) |

## Annotations

1. Ordre des démarches : celles qui attendent une action de l'adhérent d'abord, puis celles qui attendent l'assureur ; au plus 3, puis lien vers la rubrique.

## Couverture

| Contenu ou action de l'inventaire | Présent | Où |
|---|---|---|
| Démarches en cours du foyer | ✅ | bloc « En cours pour le foyer » |
| Raccourcis | ✅ | trois cartes |
| Lancer une démarche | ✅ | cartes, lien « Déclarer un arrêt » |
| Reprendre une souscription | ✅ | état `souscription` |

## Retours

Aucun.
