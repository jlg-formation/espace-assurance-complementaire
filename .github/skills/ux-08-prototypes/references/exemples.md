# Exemples commentés — ux-08-prototypes

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients. Le modèle `assets/modeles/EC04-suivi-des-demandes.tsx` est un prototype complet. Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu.

## 1. Du wireframe au prototype

Wireframe (`src/wireframes/ecrans/02-espace-client/EC04-suivi-des-demandes.tsx`) :
```tsx
import { Bouton, Etiquette, Gabarit, Lien, Ligne, Liste, Note } from '../../kit/kit';
// ...
<Bouton variante="principal" vers="EC05">Envoyer une demande</Bouton>
<Note n={1} />
<Ligne>
  <Lien vers="EC07">Attestation annuelle — 3 sept. 2026</Lien>
  <span>Réponse sous 5 jours <Etiquette ton="information">En cours</Etiquette></span>
</Ligne>
```

Prototype (`src/prototypes/ecrans/02-espace-client/EC04-suivi-des-demandes.tsx`) :
```tsx
import { Bouton, Etiquette, Gabarit, Lien, Ligne, Liste } from '../../../design-system/composants';
import { demandes } from '../../donnees/donnees';
import { dateCourte } from '../../donnees/formats';
// ...
<Bouton variante="principal" vers="EC05">Envoyer une demande</Bouton>
{demandes.map((d) => (
  <Ligne key={d.id}>
    <Lien vers="EC07">{d.objet} — {dateCourte(d.envoyeeLe)}</Lien>
    <span>Réponse sous {d.delaiJours} jours <Etiquette ton="information">En cours</Etiquette></span>
  </Ligne>
))}
```
— Seuls changent : l'import, la `Note` retirée, les valeurs lues dans le jeu de données. La structure est identique.

❌ Profiter du prototype pour ajouter un bandeau promotionnel ou déplacer la liste au-dessus du bouton : c'est un changement de structure, à faire d'abord dans le wireframe.

## 2. Jeu de données

✅ Cohérent d'un écran à l'autre :
```ts
{ id: 'D2', objet: 'Attestation annuelle', envoyeeLe: '2026-09-03', statut: 'en-cours', reponseLe: null, delaiJours: 5 }
```
— EC04 affiche « Attestation annuelle — 3 sept. 2026 · Réponse sous 5 jours », EC07 affiche la même demande avec le même délai.

❌ EC04 écrit « Réponse sous 5 jours » en dur, EC07 « Réponse sous 3 jours » : le participant au test remarque l'incohérence et ne fait plus confiance au prototype.

❌ `{ prenom: 'Jean', nom: 'Dupont', secu: '1 84 12 75 ...' }` — un identifiant officiel, même inventé, n'a rien à faire dans un prototype.

## 3. Tâche du test d'utilisabilité

✅
| # | Scénario lu au participant | Départ | Réussite si |
|---|---|---|---|
| T1 | « Vous venez de déménager. Un courrier vous demande un justificatif de domicile. Faites le nécessaire. » | `/#/test/EC10` | La demande est envoyée et le participant dit quand elle sera traitée |

❌ « Cliquez sur **Mes démarches**, puis sur **Envoyer une demande**. » — reprend les libellés de l'interface et dicte le chemin : on teste la lecture, pas l'utilisabilité.

## 4. Contrôle d'accessibilité

| Écran | Contrôle | Constat | Gravité | Suite |
|---|---|---|---|---|
| EC05 | clavier | Après l'erreur, le focus reste sur le bouton « Envoyer » : l'utilisateur au clavier ne sait pas que le champ est en erreur | majeur | retour DS : `Alerte` doit recevoir le focus à son apparition |
| EC04 | zoom 200 % | La barre d'onglets masque le bouton principal en bas d'écran | bloquant | retour DS : marge basse du `Gabarit` |

## 5. Ligne de l'index

| ID | Écran | Zone | Version | États | Écarts au wireframe | Statut |
|---|---|---|---|---|---|---|
| EC04 | Suivi des demandes | Espace client | MVP | nominal, vide | fusion `LigneDemande` | terminé |
