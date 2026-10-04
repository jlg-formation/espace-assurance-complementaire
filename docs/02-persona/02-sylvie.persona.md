⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Sylvie, 55 ans — celle qui gère les papiers de toute la famille sans être titulaire du contrat

> Segments : famille, première mutuelle, arrêt / invalidité · Fondé sur : SIM-P02, SIM-P04, SIM-P07 (+ SIM-P03 pour le rôle du proche non titulaire) · Proto-personas d'origine : [Karim](./proto/02-karim.proto-persona.md) et [Isabelle](./proto/04-isabelle.proto-persona.md) *(scindés)* · *nouveau persona*
> Confiance : 🟢 fondé · 🟡 partiel · ⚪ hypothèse

**En bref** : mariée à un artisan titulaire d'un contrat santé famille et d'une prévoyance. C'est elle qui tient le classeur des courriers, prend les rendez-vous et appelle l'assureur, depuis une tablette ou le téléphone fixe.

## Sa situation
Son mari est en arrêt depuis six semaines après une opération. Un courrier vient de réclamer une nouvelle pièce, la troisième, et aucune indemnité n'est arrivée. Elle a essayé l'espace en ligne : bloqué au changement de mot de passe. Alors elle appelle, comme chaque mardi.

> « Si on m'avait donné la liste au début, j'aurais tout envoyé d'un coup. » `[SIM-P07]`

## Comment elle utilise l'application 🟢
- **Aujourd'hui** : téléphone, courrier recommandé et agence ; elle classe tous les courriers par date `[SIM-P02][SIM-P04][SIM-P07]`
- **Quand et sur quoi** : à tête reposée, le soir ou le dimanche, sur ordinateur fixe ou tablette ; le téléphone sert à appeler `[SIM-P02][SIM-P04][SIM-P07]`
- **Aisance** : moyenne à faible ; elle quitte l'espace en ligne au premier blocage (code SMS, mot de passe) `[SIM-P02][SIM-P07][SIM-A01]`

## Ce qu'elle veut 🟢
- Une liste complète des pièces dès le début, puis une date de paiement `[SIM-P07][SIM-A03][SIM-S02]`
- Une réponse rapide, en euros, à un devis coûteux (orthodontie, prothèse) `[SIM-P04][SIM-A02][SIM-S01]`
- Agir en son nom propre pour le foyer, sans les codes du titulaire `[SIM-P02][SIM-P03][SIM-P04]`

## Ce qui la bloque 🟢
- Tout est au nom du titulaire : pas d'accès propre, mot de passe partagé ou perdu `[SIM-P03][SIM-P04][SIM-S01]`
- Pièces réclamées une à une ; « en cours de traitement » au téléphone `[SIM-P07][SIM-A03][SIM-S02]`
- Ne sait pas qu'un devis peut se déposer en ligne : poste, puis 3 semaines d'attente `[SIM-P04][SIM-A02]`

## Implications pour la conception
- Accès proche ou bénéficiaire avec ses propres identifiants et des droits délégués par le titulaire — le gestionnaire réel n'est pas le titulaire
- Dossier d'arrêt avec liste complète des pièces, état de chaque pièce et date prévisionnelle de versement — principal motif d'appel
- Rappel par un conseiller qui voit le dossier, et un dépôt de document sans parcours de connexion complexe — repli vers le téléphone dès le moindre blocage

---
**Parcours** : [Faire estimer un devis coûteux](../03-customer-journey-map/02-sylvie.cjm.md#faire-estimer-un-devis-coûteux) · [Déclarer l'arrêt de son conjoint et suivre les versements](../03-customer-journey-map/02-sylvie.cjm.md#déclarer-larrêt-de-son-conjoint-et-suivre-les-versements) · **À vérifier** : comportement du proche gestionnaire observé directement dans 2 entretiens seulement (SIM-P03, SIM-P07) ; passage vers l'invalidité 🟡
