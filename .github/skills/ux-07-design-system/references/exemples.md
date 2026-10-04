# Exemples commentés — ux-07-design-system

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients. Le composant `Bouton` du socle (`assets/socle/src/design-system/composants/`) est un exemple complet (code, CSS, documentation). Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu.

## 1. Principe de design

✅
```markdown
### 1. Où en suis-je, avant tout
- **Constat** : les personas ne savent pas où en est leur demande et appellent pour le savoir — [Sophie](../02-persona/01-sophie.persona.md) `[P01][P05]`
- **Ce qu'on choisit, ce qu'on écarte** : le statut avant le détail ; on écarte l'historique complet en première lecture.
- **Décisions** :
  - Le statut et le délai d'une demande sont visibles sans ouvrir la demande.
  - Chaque statut a un libellé et une couleur ; jamais la couleur seule.
```

❌ « Simplicité » ou « Mettre l'utilisateur au centre » — aucun constat, aucun arbitrage, rien à vérifier dans un composant.

## 2. Piste d'identité

```markdown
### Piste A — Clairval : sobre et rassurante
- **Principes servis** : 1, 3
- **Pourquoi** : Marc a besoin d'être rassuré ; Sophie veut aller vite sans fioritures.
- **Palette** : primaire bleu (700 = #1d4f91), neutres froids, retours erreur #b3261e, succès #1e6b3a, avertissement #8a4b00, information #0f2c55
- **Typographie** : "Segoe UI", system-ui, sans-serif ; échelle 1,2
- **Rayon** : 4 px · **Densité** : aérée
- **Logo** : « Clairval » en graisse 700, couleur `color.action.primary`
```
— « Clairval » est inventé ; vérifier qu'il n'existe pas de marque de ce nom dans le secteur du projet.

## 3. Tokens

✅ Un composant n'emploie que des tokens sémantiques :
```css
.ds-etiquette--succes {
  color: var(--ds-color-feedback-success-text);
  background: var(--ds-color-feedback-success-background);
}
```

❌ Primitif ou valeur en dur dans un composant :
```css
.ds-etiquette--succes { color: var(--ds-color-green-700); background: #ebf7ef; }
```
— Changer de marque obligerait à reprendre chaque composant ; `bun test` refuse la valeur hexadécimale.

## 4. Mobile d'abord

✅
```css
.ds-colonnes { display: grid; gap: var(--ds-space-4); }
/* breakpoint.desktop */
@media (min-width: 1024px) {
  .ds-colonnes { grid-template-columns: 2fr 1fr; }
}
```

❌
```css
.ds-colonnes { display: grid; grid-template-columns: 2fr 1fr; }
@media (max-width: 1023px) { .ds-colonnes { grid-template-columns: 1fr; } }
```
— Part de l'ordinateur et corrige pour le mobile ; `bun test` refuse `max-width`.

## 5. Inventaire et incohérences

| # | Composant | Niveau | Origine dans le kit | Écrans | Variantes | États |
|---|---|---|---|---|---|---|
| 04 | Etiquette | élément | `Etiquette` | EC04, EC07, EC11 | neutre, succès, information, erreur | — |
| 12 | LigneDemande | composant | `Ligne` + `Lien` + `Etiquette` | EC04, EC10 | compacte, détaillée | en cours, traitée, refusée |

| Motif | Écrans | Proposition | Décision |
|---|---|---|---|
| Statut d'une demande affiché en texte sur EC10, en étiquette sur EC04 | EC04, EC10 | Fusionner en `LigneDemande` | validée |

## 6. Fiche de composant (extrait : `04-etiquette.component.md`)

```markdown
## Rôle
Afficher un statut court (« En cours », « Traitée »). Pour un message qui demande une action, utiliser Alerte.

## Accessibilité
- **HTML** : `span`, texte toujours présent
- **ARIA** : aucun : élément natif
- **Autres** : la couleur double le texte, ne le remplace jamais

## À faire / à éviter
| À faire | À éviter |
|---|---|
| « Traitée » | « OK », « ✔ » seul |
| 1 à 2 mots | Une phrase |
```
