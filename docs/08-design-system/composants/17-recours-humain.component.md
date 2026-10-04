⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 17 RecoursHumain

> Niveau : composant (nouveau) · Version : MVP · Composant : `RecoursHumain` · Classe : `ds-recours` · Statut : terminé
> Code : [RecoursHumain.tsx](../../../web/src/design-system/composants/RecoursHumain.tsx) · [RecoursHumain.css](../../../web/src/design-system/composants/RecoursHumain.css) · [RecoursHumain.doc.tsx](../../../web/src/design-system/composants/RecoursHumain.doc.tsx) · Documentation : `/#/design-system`
> Origine : `p` + question + `Lien vers="EC51"` sur 13 écrans, dont [EC23](../../07-wireframes/03-transverse/EC23-connexion.wireframe.md), [EC43](../../07-wireframes/02-espace-adherent/EC43-declaration-d-un-arret.wireframe.md), [EC46](../../07-wireframes/02-espace-adherent/EC46-dossier-d-arret.wireframe.md), [EC19](../../07-wireframes/01-site-public/EC19-signature-electronique.wireframe.md)

## Rôle
Laisser une issue humaine sur chaque écran de blocage ou de décision difficile (principe 3) : Sylvie repasse au téléphone au premier blocage. Mène toujours à EC51 « Être rappelé ».

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| question | `string` | `"Besoin d'aide ?"` | Question adaptée à l'écran |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `p` | `ds-recours` | oui |
| Question | texte secondaire | — | oui |
| Lien | `Lien vers="EC51"`, « Être rappelé », gras, 44 px | `ds-lien` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Par défaut | — | — | formulaires (EC33, EC43) |
| Question propre | `question` | — | « Vous n'y arrivez pas ? » (EC23), « Une question sur le dossier ? » (EC46) |

## États
Ceux de `Lien` (repos, survol, focus, actif).

## Tokens employés
`color.text.muted`, `size.target`, `space.2`, `font.weight.bold` ; tokens de `Lien`

## Accessibilité
- **HTML** : `p` + `a`
- **Clavier** : Tab, Entrée
- **ARIA** : aucun
- **Lecteur d'écran** : « Besoin d'aide ? lien Être rappelé » ; le lien seul reste compréhensible
- **Autres** : cible de 44 px de haut

## Rédaction
Question courte, liée à l'écran, au vouvoiement. Libellé du lien fixe : « Être rappelé » (glossaire). Pas de promesse de délai ici : EC51 l'annonce.

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Sous l'action principale, après le formulaire | Avant le bouton principal, en concurrence |
| « Être rappelé » | « Contactez-nous », « Être rappelé pour en parler » |

## Code

```tsx
<RecoursHumain question="Vous n'y arrivez pas ?" />
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `<p>Question ? <Lien vers="EC51">Être rappelé</Lien></p>` (6 formulations) | `RecoursHumain` (`ds-recours`) — fusion validée |
