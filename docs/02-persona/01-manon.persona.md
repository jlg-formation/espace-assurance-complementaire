⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Manon, 30 ans — celle qui agit au dernier moment et veut un chiffre, pas un tableau

> Segments : première mutuelle, famille, TNS · Fondé sur : SIM-P01, SIM-P03, SIM-P05 · Proto-personas d'origine : [Léa](./proto/01-lea.proto-persona.md) *(fusionné)*, [Karim](./proto/02-karim.proto-persona.md) et [Stéphane](./proto/03-stephane.proto-persona.md) *(scindés)*
> Confiance : 🟢 fondé · 🟡 partiel · ⚪ hypothèse

**En bref** : en couple, un enfant de 4 ans, photographe à son compte depuis un an. Elle a souscrit sa mutuelle sur son téléphone, en une soirée, au tarif le plus bas.

## Sa situation
Le dentiste vient de lui remettre un devis pour une couronne. Dans la salle d'attente, elle ouvre l'appli de sa mutuelle pour savoir ce qui lui restera à payer. Elle ne trouve qu'un tableau en pourcentages. Elle range le devis et reporte le soin.

> « Que ça me dise juste combien je vais payer, moi, en euros, pour un truc. » `[SIM-P01]`

## Comment elle utilise l'application 🟢
- **Aujourd'hui** : se fie à ce qu'on lui affiche ou lui dit (prix, praticien, courtier) plutôt qu'au contrat, qu'elle n'ouvre jamais `[SIM-P01][SIM-P03][SIM-P05]`
- **Quand et sur quoi** : au moment de l'incident, sur smartphone, d'une traite (souscription en une soirée, devis à la pause) `[SIM-P01][SIM-P05][SIM-S01]`
- **Aisance** : forte en numérique, faible en vocabulaire de l'assurance (« 100 % » compris comme « tout remboursé ») `[SIM-P01][SIM-A01][SIM-S01]`

## Ce qu'elle veut 🟢
- Voir un prix sans laisser son numéro `[SIM-P01][SIM-A01]`
- Connaître en euros ce qui restera à sa charge pour un soin précis `[SIM-P01][SIM-P03][SIM-A02]`
- Envoyer un devis en le prenant en photo, et savoir qu'il est bien arrivé `[SIM-P03][SIM-A02]` 🟡

## Ce qui la bloque 🟢
- Coordonnées exigées avant le prix, puis démarchage téléphonique `[SIM-P01][SIM-A01]`
- Tableau de garanties en % illisible sur mobile `[SIM-P01][SIM-A01][SIM-S01]`
- Questionnaire de santé rempli trop vite : antécédent omis sans s'en rendre compte `[SIM-P05]` 🟡

## Implications pour la conception
- Tarif affiché dès l'âge et le code postal, coordonnées demandées seulement pour souscrire — fuite et démarchage observés
- Garanties exprimées en exemples en euros, et estimation du reste à charge à partir d'un devis photographié — seule forme comprise
- Parcours complet sur mobile, avec des questions de santé illustrées (« même guéri, même ancien ») — elle fait tout d'une traite, sans relire

---
**Parcours** : [Souscrire sa première couverture](../03-customer-journey-map/01-manon.cjm.md#souscrire-sa-première-couverture) · [Savoir ce qui restera à payer avant un soin](../03-customer-journey-map/01-manon.cjm.md#savoir-ce-qui-restera-à-payer-avant-un-soin) · **À vérifier** : envoi d'un devis en photo (1 entretien), omission dans le questionnaire de santé (1 entretien)
