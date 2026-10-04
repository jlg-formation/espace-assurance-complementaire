# Navigation — {nom du projet}

<!-- Libellés = glossaire. Les transitions internes aux flows ne sont pas de la navigation. -->

## Systèmes de navigation

### {Zone}

| Système | Entrées | Présent sur | Règle |
|---|---|---|---|
| Globale | {Mes démarches, Mes contrats, Mes documents} | {tous les lieux de la zone} | {...} |
| Locale | {Rubrique : sous-rubriques} | {lieux de la rubrique} | {...} |
| Utilitaire | {Mon compte, Aide, Contact, Déconnexion} | {partout} | {...} |
| Pied de page | {Mentions légales, Accessibilité, Plan du site} | {partout} | {...} |
| Fil d'Ariane | — | {à partir du niveau 2} | {...} |
| Recherche | {périmètre, ou « non prévue » : aucune story} | {...} | {...} |

### Navigation contextuelle

| Depuis | Vers | Libellé du lien | Raison |
|---|---|---|---|
| EC07 {libellé} | EC12 {libellé} | {Voir le contrat concerné} | {relation Demande → Contrat} |

## Mobile

<!-- D'après l'appareil principal des personas. Barre d'onglets : 5 entrées au plus. -->

| Système | Ordinateur | Mobile |
|---|---|---|
| Globale | {menu horizontal} | {barre d'onglets : ...} |

## Liens profonds

| Point d'entrée | Canal | Écran cible | Connexion requise | Après connexion |
|---|---|---|---|---|
| {Notification « demande traitée »} | {notification} | EC07 | {oui} | {retour sur EC07} |

## Vérification par flow

<!-- Un chemin par point d'entrée du flow (index des flows). Bloquant : aucun flow sans chemin. -->

| Flow | Point d'entrée | Premier écran | Chemin | Clics | Verdict |
|---|---|---|---|---|---|
| [UF-01.01](../05-user-flows/01-{epopee}/01-{tache}.flow.md) | {...} | EC05 | {EC10 → nav. globale « Mes démarches » → EC04 → « Envoyer une demande » → EC05} | {2} | {✅ / ⚠️ justification / ❌ inatteignable} |
