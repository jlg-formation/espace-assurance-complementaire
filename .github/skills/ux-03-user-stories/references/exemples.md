# Exemples commentés — ux-03-user-stories

> Projet fictif servant de fil rouge à tous les skills : l'**espace client** d'une organisation qui traite des demandes de ses clients. Personas : Sophie (veut tout régler sur mobile), Marc (préfère parler à quelqu'un). Ces exemples montrent le niveau de détail attendu. Ne jamais recopier leur contenu.

## 1. Inventaire des opportunités

| ID | Opportunité | Persona | Source dans la journey map | Confiance |
|---|---|---|---|---|
| O01 | Accuser réception d'une demande et annoncer son délai | Sophie | Attendre — friction « aucun signe de réception » `[P05]` | 🟢 |
| O02 | Envoyer une demande sans se reconnecter sur un appareil connu | Sophie | Envoyer — friction « doit se reconnecter » `[P01][P03]` | 🟡 |
| O03 | Pouvoir être rappelé plutôt qu'attendre au téléphone | Marc | Relancer — moment de vérité `[P06]` | 🟡 |

## 2. Nommer une épopée

✅ « Faire une demande » — une activité de l'utilisateur, avec un verbe.

❌ « Module demandes », « Écran de suivi », « Back-office » — un découpage technique ou d'interface.

## 3. Story complète (`01-faire-une-demande/01-envoyer-une-demande.story.md`)

````markdown
# US-01.01 — Envoyer une demande avec son justificatif

> Épopée : [01 Faire une demande](./00-faire-une-demande.epic.md) · Persona : [Sophie](../../02-persona/01-sophie.persona.md)
> MoSCoW : Must · Version : MVP · Confiance : 🟢 fondé

**En tant que** Sophie, cliente pressée,
**je veux** envoyer ma demande et son justificatif depuis mon téléphone,
**afin de** ne pas avoir à me déplacer ni à appeler.

## Origine
- Opportunité : O01, O02
- Sources : `[P01][P05][P07]`

## Critères d'acceptation
```gherkin
# language: fr
Scénario: Demande transmise avec succès
  Étant donné que Sophie a un justificatif de domicile à fournir
  Quand elle transmet sa demande de changement d'adresse avec ce justificatif
  Alors elle reçoit un accusé de réception
  Et elle connaît le délai de traitement prévu

Scénario: Justificatif illisible
  Étant donné que Sophie transmet une photo floue de son justificatif
  Quand la demande est vérifiée
  Alors elle est informée que le justificatif n'est pas exploitable
  Et elle peut en transmettre un nouveau sans ressaisir sa demande
```
````

## 4. Formuler une story

✅ « **Je veux** savoir à quelle étape en est ma demande **afin de** ne plus avoir à appeler pour le savoir. »

❌ « **Je veux** une barre de progression sur la page de suivi. »
— Décrit une solution d'interface, pas un besoin : la conception est faite trop tôt.

❌ « **Je veux** suivre ma demande **afin de** suivre ma demande. »
— Le « afin de » répète le « je veux » : le bénéfice manque.

## 5. Écrire un scénario Gherkin

✅ `Quand elle transmet sa demande avec ce justificatif` — déclaratif : le comportement attendu.

❌ `Quand elle clique sur « Parcourir », choisit le fichier puis clique sur « Envoyer »` — impératif : décrit des clics et figerait l'interface.

## 6. MoSCoW et version

| Story | MoSCoW | Version | Justification |
|---|---|---|---|
| US-01.01 Envoyer une demande | Must | MVP | Sans elle, le parcours n'existe pas |
| US-01.03 Être rappelé par le service client | Must | V2 | Moment de vérité pour Marc, mais dépend d'un outil de rappel non disponible au lancement : **Must hors MVP justifié** |
| US-02.04 Personnaliser son tableau de bord | Could | Plus tard | Confort, aucune friction observée |
