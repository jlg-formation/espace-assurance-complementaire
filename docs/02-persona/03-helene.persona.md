⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Hélène, 46 ans — celle qui compare tout et cherche le chiffre net

> Segments : TNS, arrêt / invalidité · Fondé sur : SIM-P06, SIM-P08 · Proto-personas d'origine : [Stéphane](./proto/03-stephane.proto-persona.md) et [Isabelle](./proto/04-isabelle.proto-persona.md) *(scindés)*
> Confiance : 🟢 fondé · 🟡 partiel · ⚪ hypothèse

**En bref** : séparée, une fille adolescente, architecte d'intérieur en libéral depuis huit ans. Elle a souscrit seule, en ligne, une prévoyance comparée dans un tableur.

## Sa situation
Après cinq mois d'arrêt, elle reprend à mi-temps sur prescription. Le formulaire de l'espace client ne propose que « en arrêt » ou « reprise du travail ». Elle hésite : si elle coche « reprise », les versements risquent de s'arrêter. Elle ouvre le tableur où elle suit chaque indemnité.

> « Un simulateur honnête : vous gagnez tant, vous êtes arrêtée tant de jours, vous touchez tant de la Sécu, tant de nous, voilà le trou. » `[SIM-P06]`

## Comment elle utilise l'application 🟡
- **Aujourd'hui** : décide seule, refuse l'intermédiaire, lit les conditions générales et tient ses propres tableurs `[SIM-P06][SIM-P08]`
- **Quand et sur quoi** : sur ordinateur, le soir, pendant plusieurs semaines pour choisir ; déclaration en ligne dès le premier jour `[SIM-P06][SIM-P08]`
- **Aisance** : forte, vocabulaire maîtrisé (franchise, barème), mais sans le montant net qu'elle toucherait `[SIM-P06][SIM-P08][SIM-S02]` 🟢

## Ce qu'elle veut 🟡
- Simuler sa perte de revenus : régime obligatoire, assureur, ce qui manque `[SIM-P06][SIM-P08][SIM-S02]`
- Voir exclusions et barème d'invalidité avant le questionnaire de santé `[SIM-P06][SIM-A01]`
- Déclarer un changement de situation (reprise à temps partiel) sans interrompre les versements `[SIM-P08][SIM-A03]`

## Ce qui la bloque 🟢
- Information clé enfouie dans un PDF de 40 pages `[SIM-P06][SIM-P08]` 🟡
- Franchise oubliée, découverte au sinistre `[SIM-P08][SIM-A03][SIM-S02]`
- Aucune indication sur qui lit ses données de santé `[SIM-P06][SIM-P08]` 🟡

## Implications pour la conception
- Simulateur de revenus en cas d'arrêt ou d'invalidité, avec le montant net et la franchise, avant et après souscription — personne n'a ce chiffre
- Déclaration d'arrêt couvrant les changements de situation (prolongation, temps partiel thérapeutique, passage en invalidité) — les cas non standard cassent le parcours
- Mention visible « pièces médicales lues uniquement par le médecin-conseil », et rappel annuel des paramètres du contrat — confiance et paramètres oubliés

---
**Parcours** : [Choisir et souscrire une prévoyance](../03-customer-journey-map/03-helene.cjm.md#choisir-et-souscrire-une-prévoyance) · [Déclarer un arrêt et suivre les indemnités jusqu'à la reprise](../03-customer-journey-map/03-helene.cjm.md#déclarer-un-arrêt-et-suivre-les-indemnités-jusquà-la-reprise) · **À vérifier** : schéma porté par 2 entretiens seulement ; part réelle des TNS autonomes (21 % d'après SIM-S02)
