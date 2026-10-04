⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# 14 Mobile et Ordinateur

> Niveau : élément · Version : MVP · Composants : `Mobile`, `Ordinateur` · Classes : `ds-mobile`, `ds-ordinateur` · Statut : terminé
> Code : [Appareil.tsx](../../../web/src/design-system/composants/Appareil.tsx) · [Appareil.css](../../../web/src/design-system/composants/Appareil.css) · [Appareil.doc.tsx](../../../web/src/design-system/composants/Appareil.doc.tsx) · Documentation : `/#/design-system`
> Origine : `Mobile` et `Ordinateur` du kit, sans usage dans les wireframes ; requis par le contrat `ui.ts`

## Rôle
Montrer un contenu seulement sous 768 px (`Mobile`) ou seulement à partir de 768 px (`Ordinateur`), quand le contenu diffère vraiment selon l'appareil (« Présentez cet écran au comptoir »). La mise en page s'adapte déjà seule : à n'employer qu'en dernier recours.

## Props

| Prop | Type | Défaut | Rôle |
|---|---|---|---|
| children | `ReactNode` | — | Contenu propre à l'appareil |

## Anatomie

| Partie | Élément HTML | Classe | Obligatoire |
|---|---|---|---|
| Conteneur | `div` | `ds-mobile` ou `ds-ordinateur` | oui |

## Variantes

| Variante | Prop | Classe | Usage |
|---|---|---|---|
| Mobile | — | `ds-mobile` | visible sous 768 px |
| Ordinateur | — | `ds-ordinateur` | visible à partir de 768 px (`breakpoint.tablet`) |

## États
Aucun.

## Tokens employés
Aucun token CSS ; requête média `min-width: 768px` (`breakpoint.tablet`).

## Accessibilité
- **HTML** : `div` ; le contenu caché l'est par `display: none`, donc aussi pour les lecteurs d'écran
- **Clavier** : le contenu caché n'est pas atteignable
- **ARIA** : aucun
- **Lecteur d'écran** : ne lit que la version visible
- **Autres** : ne jamais réserver une fonction à un seul appareil (exigence T4)

## Rédaction
Les deux versions disent la même chose, adaptée au geste (« Présentez cet écran » / « Ouvrez cette page sur votre téléphone »).

## À faire / à éviter

| À faire | À éviter |
|---|---|
| Adapter une consigne au geste | Cacher une fonction sur mobile |

## Code

```tsx
<Mobile><p>Présentez cet écran au comptoir.</p></Mobile>
<Ordinateur><p>Ouvrez cette page sur votre téléphone pour la présenter au comptoir.</p></Ordinateur>
```

## Correspondance avec le kit
| Kit de wireframes | Design system |
|---|---|
| `Mobile` (`wf-mobile`), `Ordinateur` (`wf-ordinateur`) | `Mobile` (`ds-mobile`), `Ordinateur` (`ds-ordinateur`) |
