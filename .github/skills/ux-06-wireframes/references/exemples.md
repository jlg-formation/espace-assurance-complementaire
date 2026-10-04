# Exemples commentés — ux-06-wireframes

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients. Les écrans d'exemple du socle (`assets/socle/src/wireframes/ecrans/02-espace-client/`) sont les wireframes complets de EC04 et EC05. Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu.

## 1. Fiche d'écran (`02-espace-client/EC04-suivi-des-demandes.wireframe.md`, extrait)

```markdown
# EC04 — Suivi des demandes (wireframe)

> Type : lieu · Parent : — · Zone : Espace client · Version : MVP · Appareil principal : mobile

## Objectif
Savoir où en sont ses demandes et en envoyer une nouvelle.

## Hiérarchie du contenu
| # | Élément | Objet / contenu | Pourquoi à ce rang | Source |
|---|---|---|---|---|
| 1 | Bouton principal « Envoyer une demande » | — | Tâche la plus fréquente de Sophie | UF-01.01 |
| 2 | Liste des dernières demandes | Demande : objet, date, statut, délai | Le suivi est le moment de vérité | US-01.02, `[P05]` |
| 3 | Bloc « Une question ? » | horaires du service client | Issue humaine pour Marc | UF-01.01 `V1` |

**Replié, renvoyé ou supprimé** : historique au-delà de 10 demandes → lien « Voir toutes mes demandes ».

## États
| État | Valeur de `etat` | Ce qui change | Chemin ou scénario |
|---|---|---|---|
| Nominal | `nominal` | — | UF-01.01 `HP` |
| Vide | `vide` | Message d'accueil à la place de la liste | US-01.02 « Aucune demande en cours » |

## Annotations
1. Le bouton reste visible en haut de l'écran sur mobile, même après défilement.
```

## 2. Déclarer un parcours (`src/projet/parcours.ts`)

```ts
{
  flow: 'UF-01.01',
  tache: 'Envoyer une demande et savoir quand elle sera traitée',
  entree: 'Courrier demandant un justificatif',
  happyPath: ['EC04', 'EC05', 'EC06'],
}
```
— `bun test` vérifie alors que EC04 contient un lien vers EC05, et EC05 un lien vers EC06.

## 3. Écrire un écran

✅ Navigation par identifiant, présentation laissée au kit :
```tsx
<Bouton variante="principal" vers="EC05">Envoyer une demande</Bouton>
<Champ id="justificatif" libelle="Justificatif" type="file" aide="Photo ou PDF, 10 Mo maximum" obligatoire />
```

❌ Style local et lien en dur :
```tsx
<a href="#/wireframes/EC05" className="gros-bouton" style={{ color: 'blue' }}>Envoyer</a>
```
— `className` et `style` sont interdits dans un écran ; un lien en dur échappe à la vérification des types et des parcours.

❌ Champ sans libellé :
```tsx
<input type="file" placeholder="Votre fichier" />
```
— Le texte indicatif disparaît à la saisie et n'est pas un libellé accessible. Utiliser `Champ`.

## 4. Contenus

✅ « Attestation annuelle — 3 sept. 2026 · Réponse sous 5 jours · En cours »

❌ « Lorem ipsum dolor — 01/01/2000 · Statut » — le faux texte cache les problèmes de longueur et de compréhension.

❌ « Élément 1, Élément 2, Élément 3 » — impossible de juger si la liste aide Sophie à repérer sa demande.

## 5. Représenter un état d'erreur

✅ Dans EC05, `etat === 'erreur'` affiche une `Alerte` (« Nous n'arrivons pas à lire ce document. ») **et** l'erreur du champ (« Le fichier est illisible. ») : le message global et la consigne locale.

❌ Bordure rouge autour du champ, sans texte — l'information repose sur la couleur seule.
