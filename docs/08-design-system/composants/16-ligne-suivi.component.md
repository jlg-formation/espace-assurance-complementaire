⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 16 LigneSuivi

> Niveau : composant (nouveau) · Version : MVP · Composant : `LigneSuivi` · Classe : `ds-ligne-suivi` · Statut : terminé
> Code : [LigneSuivi.tsx](../../../web/src/design-system/composants/LigneSuivi.tsx) · [LigneSuivi.css](../../../web/src/design-system/composants/LigneSuivi.css) · [LigneSuivi.doc.tsx](../../../web/src/design-system/composants/LigneSuivi.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Ligne` + `Lien` ou `span` + `Etiquette` sur [EC27](../../07-wireframes/02-espace-adherent/EC27-accueil-de-l-espace-adherent.wireframe.md), [EC36](../../07-wireframes/02-espace-adherent/EC36-suivi-de-mes-demandes.wireframe.md), [EC38](../../07-wireframes/02-espace-adherent/EC38-remboursements-du-foyer.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md)

## Rôle
Dire où en est une démarche (devis, pièce, arrêt, soin en attente) sans l'ouvrir : objet, délai ou raison, et un statut parmi 7 libellés fixes — principe 2. Se place dans une `Liste`.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| statut | `'En cours' \| 'À fournir' \| 'Réponse disponible' \| 'Retardée' \| 'Acceptée' \| 'Refusée' \| 'Terminée'` | — (obligatoire) | Statut ; fixe aussi le ton de l'étiquette |
| vers | `EcranId` | — | Rend l'objet cliquable |
| etat | `string` | — | État de l'écran cible |
| detail | `ReactNode` | — | Délai, date ou raison |
| children | `ReactNode` | — (obligatoire) | Objet de la démarche |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Ligne | `li` | `ds-ligne-suivi` | oui |
| Objet | `Lien` ou `span` | `ds-ligne-suivi__objet` | oui |
| Détail | `span` en texte secondaire | `ds-ligne-suivi__detail` | non (oui pour Retardée, Refusée, En cours) |
| Statut | `Etiquette` | `ds-etiquette--{ton}` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Avec lien | `vers` | — | la démarche a un écran de détail |
| Sans lien | — | — | pièce acceptée, demande terminée |
| Avec détail | `detail` | — | délai annoncé, raison d'un retard ou d'un refus |

Statuts et tons : En cours → information · À fournir → avertissement · Réponse disponible → succès · Retardée → avertissement · Acceptée → succès · Refusée → erreur · Terminée → neutre.

## États
Ceux de `Lien` pour l'objet cliquable (repos, survol, focus, actif). Le statut n'est pas interactif.

## Tokens employés
`color.text.muted`, `font.size.s`, `space.1` ; tokens de `Lien` et `Etiquette`

## Accessibilité
- **HTML** : `li` dans `ul` ; `a` pour l'objet cliquable
- **Clavier** : Tab sur l'objet cliquable, Entrée
- **ARIA** : aucun
- **Lecteur d'écran** : « lien Devis d'orthodontie de Lucas, réponse au plus tard le 10 octobre, En cours »
- **Autres** : le statut est toujours écrit ; la couleur le double

## Rédaction
Objet : nature et bénéficiaire (« Devis d'orthodontie de Lucas »). Détail : une date ou une raison (« réponse au 17 oct. : avis de notre dentiste-conseil en cours »). Jamais « en cours de traitement » sans délai.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Les « À fournir » en premier | Un statut inventé (« En étude », « Attendue ») |
| Un délai pour chaque « En cours » | Le retard écrit en gras dans l'objet |

## Code

```tsx
<Liste>
  <LigneSuivi statut="À fournir" vers="EC46" detail="à envoyer avant le 11 juin 2026">Relevé du régime obligatoire</LigneSuivi>
  <LigneSuivi statut="En cours" vers="EC36" detail="réponse au plus tard le 10 octobre">Devis d'orthodontie de Lucas</LigneSuivi>
  <LigneSuivi statut="Refusée" detail="ne couvre que le mois de mai">Relevé du régime obligatoire — 2 juin</LigneSuivi>
</Liste>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `<Ligne><Lien>…</Lien><Etiquette ton>…</Etiquette></Ligne>` | `LigneSuivi` (`ds-ligne-suivi`) — fusion validée, 7 statuts |
