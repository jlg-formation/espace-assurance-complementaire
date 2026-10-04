# Exemples commentés — ux-02-research-synthesis

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients. Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu.

## 1. Fichier d'observations (`P03.obs.md`, extrait)

```markdown
**Profil** : clients actifs, 44 ans, artisan, zone rurale · Aisance numérique : moyenne ·
Contact humain : fréquent · Anticipation : subit

- [Comportement] Photographie ses justificatifs sur le lieu de travail et les envoie par e-mail `[P03]`
- [Verbatim] « Ensuite rien. Pendant dix jours. Alors j'ai appelé. » `[P03]`
- [Frustration] A dû refaire sa demande : l'e-mail n'était pas un canal accepté `[P03]`
- [Objectif] Avoir une preuve que sa demande est bien arrivée `[P03]`
- (interprétation) L'e-mail sert de preuve d'envoi, faute d'accusé de réception sur le site
```

## 2. Thèmes émergents

✅ « Sans accusé de réception, les clients fabriquent leurs propres preuves d'envoi » `[P01][P03][P05]`
— Un constat, porté par plusieurs sources.

❌ « Preuves » — un mot-clé, qui ne dit pas ce qu'on a appris.

## 3. Variables comportementales (extrait)

| Participant | Aisance numérique | Besoin de contact humain | Moment des démarches |
|---|---|---|---|
| P01 | forte | aucun | soir, mobile |
| P03 | moyenne | fréquent | midi, ordinateur |
| P05 | forte | aucun | soir, mobile |
| P06 | faible | indispensable | journée, téléphone |

— P01 et P05 se retrouvent sur plusieurs variables : un schéma, donc un persona (Sophie). P06 seul : une piste, pas un persona.

## 4. Confrontation aux hypothèses

| Hypothèse | Verdict | Sources | Ce que ça change |
|---|---|---|---|
| H1 — démarches le soir, sur mobile | **nuancée** : vrai pour 4 participants sur 6, faux pour les indépendants | P01, P02, P05, P07 / P03, P04 | Le parcours doit aussi marcher sur ordinateur |
| H2 — appels faute de suivi | **validée** | P01, P03, P05, A02, SIM-S01 | Le suivi devient un moment de vérité |

## 5. Persona (extrait)

```markdown
# Sophie, 38 ans — celle qui veut tout régler sans parler à personne

> Clients actifs · Fondé sur : P01, P05, P07 · Proto-persona d'origine : [Sophie](./proto/01-sophie.proto-persona.md) *(confirmé)*

**En bref** : mère de deux enfants, cadre, gère les démarches du foyer depuis son téléphone.

## Sa situation
Sophie a envoyé son justificatif de domicile il y a une semaine. Aucune nouvelle. Elle hésite
à appeler : la dernière fois, elle a attendu 25 minutes.

> « Je veux juste savoir si c'est arrivé et quand ce sera fait. » `[P05]`

## Ce qui le bloque 🟢
- Aucun accusé de réception ni délai annoncé après l'envoi `[P01][P05][A02]`
```

## 6. Journey map (extrait de la vue d'ensemble)

| | Envoyer | Attendre | Relancer |
|---|---|---|---|
| **Actions** | Photographie le justificatif, l'envoie depuis le site `[P01]` | Vérifie ses e-mails plusieurs fois par jour `[P05]` | Appelle le service client `[P01][P05]` |
| **Émotions** | 😐 | 😟 | 😟 |
| **Points de friction** | Doit se reconnecter avant d'envoyer `[P01][P03]` | Aucun signe de réception `[P05]` | 25 min d'attente `[A02]` |
| **Opportunités** | Envoi sans reconnexion sur un appareil connu | Accusé de réception + délai annoncé | Suivi en ligne qui rend l'appel inutile |

## 7. Affirmations

✅ « Sophie fait ses démarches le soir, sur mobile » `[P01][P05][P07]` 🟢

❌ « Sophie est connectée et aime les applications modernes. »
— Aucune source, cliché de concepteur. À supprimer, ou à marquer ⚪ *hypothèse* si c'est utile.
