# Identité visuelle — {marque fictive}

> Marque **fictive**, créée pour illustrer la démarche. Elle n'imite aucun assureur, aucune mutuelle ni aucune banque existants. Polices système uniquement.

Comparer les pistes : `cd web; bun run dev`, puis `/#/design-system/pistes` ([Pistes.tsx](../../web/src/design-system/Pistes.tsx)).

## Pistes proposées

<!-- 2 ou 3. Chacune sert un ou plusieurs principes et passe les contrastes AA avant d'être présentée. -->

### Piste A — {nom de la marque} : {intention en quelques mots}
- **Principes servis** : {1, 3}
- **Pourquoi** : {lien avec les personas et la vision}
- **Palette** : primaire {teinte, 700 = #......}, neutres {froids / chauds}, retours {erreur #......, succès #......, avertissement #......, information #......}
- **Typographie** : {pile système}, échelle {1,2 / 1,25}
- **Rayon** : {0 / 4 px / 12 px} · **Densité** : {serrée / aérée}
- **Logo** : {nom en {police}, {graisse}, couleur {token}}

### Piste B — {...}

## Piste retenue
**{Piste}**, {date} — {raison du choix, ajustements demandés}.

## Contrastes

<!-- Bloquant : AA partout. Paires réellement employées par les tokens sémantiques. Calcul par script si possible. -->

| Premier plan | Arrière-plan | Usage | Rapport | Seuil | Verdict |
|---|---|---|---|---|---|
| `color.text.default` #...... | `color.background.default` #...... | Texte courant | {15,32:1} | 4,5:1 | ✅ |
| `color.action.primary-text` | `color.action.primary` | Texte du bouton principal | {...} | 4,5:1 | ✅ |
| `color.border.strong` | `color.background.default` | Bordure de champ | {...} | 3:1 | ✅ |
| `color.border.focus` | `color.background.default` | Indicateur de focus | {...} | 3:1 | ✅ |
| `color.feedback.error.text` | `color.feedback.error.background` | Message d'erreur | {...} | 4,5:1 | ✅ |
