⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Principes — Clarea Assurances

## Principes de design

### 1. Le chiffre en euros d'abord
- **Constat** : un tableau en pourcentages ne dit rien à Manon ; elle reporte le soin faute de savoir ce qui lui restera à payer — [Manon](../02-persona/01-manon.persona.md) `[SIM-P01][SIM-A01][SIM-S01]`. Hélène cherche le montant net qu'elle toucherait, introuvable — [Hélène](../02-persona/03-helene.persona.md) `[SIM-P06][SIM-P08]`.
- **Ce qu'on choisit, ce qu'on écarte** : un montant en euros, mis en avant, avant tout tableau ; on écarte les grilles de garanties en pourcentages en première lecture.
- **Décisions** :
  - Le montant qui répond à la question de l'écran est dans le titre ou dans la ligne `total` d'une `LigneValeur` (reste à charge, ce qui manque, prochain versement).
  - Une valeur est toujours alignée à droite et en gras, son libellé à gauche : même lecture partout (`LigneValeur`).
  - Aucun pourcentage sans son équivalent en euros sur le même écran (exigence T3).

### 2. Où en est mon dossier, sans appeler
- **Constat** : Sylvie reçoit les pièces réclamées une à une et n'obtient que « en cours de traitement » au téléphone ; elle appelle chaque mardi — [Sylvie](../02-persona/02-sylvie.persona.md) `[SIM-P07][SIM-A03][SIM-S02]`.
- **Ce qu'on choisit, ce qu'on écarte** : le statut et la prochaine étape avant le détail ; on écarte l'historique complet en première lecture et les statuts vagues.
- **Décisions** :
  - Chaque démarche affiche un statut parmi 7 libellés fixes, plus un délai ou une raison (`LigneSuivi`).
  - Un statut est toujours écrit ; la couleur de l'`Etiquette` le double, ne le remplace jamais.
  - Ce qui attend une action de l'adhérent (« À fournir ») vient avant ce qui attend l'assureur.

### 3. Une issue à chaque blocage
- **Constat** : Sylvie quitte l'espace en ligne au premier blocage (code, mot de passe) et repasse au téléphone — [Sylvie](../02-persona/02-sylvie.persona.md) `[SIM-P02][SIM-P07][SIM-A01]`.
- **Ce qu'on choisit, ce qu'on écarte** : une erreur dit quoi faire ensuite, et un humain reste joignable ; on écarte les messages d'erreur sans suite et le contact caché au fond d'une page.
- **Décisions** :
  - Une `Alerte` d'erreur ou d'avertissement contient toujours l'action suivante (lien, bouton ou consigne).
  - `RecoursHumain` (« Être rappelé ») figure sur chaque écran de blocage ou de décision difficile.
  - Cibles de 44 px au moins, texte courant de 16 px au moins, espacements aérés : Sylvie est sur tablette, avec une aisance moyenne.

### 4. Expliquer sur place, replier le détail
- **Constat** : Manon ne connaît pas le vocabulaire (« 100 % » compris comme « tout remboursé ») — [Manon](../02-persona/01-manon.persona.md) `[SIM-P01][SIM-A01]` ; Hélène trouve l'information clé enfouie dans un PDF de 40 pages et ne sait pas qui lit ses données de santé — [Hélène](../02-persona/03-helene.persona.md) `[SIM-P06][SIM-P08]`.
- **Ce qu'on choisit, ce qu'on écarte** : la définition là où le mot apparaît, le calcul détaillé replié juste dessous ; on écarte le renvoi vers un glossaire ou un PDF comme seule source.
- **Décisions** :
  - Un terme métier du glossaire est défini en une phrase à sa première apparition sur l'écran.
  - « Comment ce montant est calculé » et les consignes longues sont dans un `Repli`, fermé par défaut.
  - À chaque envoi de pièce ou de réponse de santé, une mention dit qui la lit (« lue uniquement par le médecin-conseil »).

## Voix et ton

**Voix** : Clarea parle comme un gestionnaire calme et précis qui connaît le dossier ; il vouvoie, fait des phrases courtes, donne le chiffre puis l'explication, et n'emploie que les mots du [glossaire](../06-architecture-information/04-libelles.glossary.md).

| Moment | Ton | Exemple |
|---|---|---|
| Réponse à un devis | direct, chiffré | « Il vous restera 381,25 € à payer pour cette couronne. » |
| Pièce reçue | rassurant, daté | « Relevé du régime obligatoire reçu le 3 octobre 2026. Nous le vérifions sous 2 jours. » |
| Pièce refusée | calme, orienté solution | « Relevé refusé : il ne couvre que le mois de mai. Envoyez un relevé du 12 mai au 30 juin. » |
| Versement retardé | transparent, sans excuse vague | « Versement retardé au 17 juillet : il manque le relevé du régime obligatoire. » |
| Expertise, invalidité | posé, explicatif | « Vos indemnités continuent pendant l'expertise. » |
| Erreur de connexion | simple, avec une issue | « Mot de passe incorrect. Il vous reste 4 essais. » puis « Vous n'y arrivez pas ? Être rappelé » |

**À faire** : le chiffre et la date d'abord ; une action par phrase ; les possessifs dans l'espace adhérent (« Mon contrat »). · **À éviter** : les sigles en navigation (BR, OPTAM, IJ, IPID), « en cours de traitement » sans délai, les majuscules de mise en avant, le point d'exclamation, le jargon « prestations », « décompte ».

## Formats

| Donnée | Format | Exemple |
|---|---|---|
| Montant | virgule décimale, espace insécable avant €, pas de décimales si le montant est rond | `381,25 €`, `1 840 €` |
| Montant périodique | montant + « par mois » ou « par an » | `1 840 € par mois` |
| Date dans un texte | jour mois année | `10 juillet 2026` |
| Date dans une liste ou un tableau | abrégée, année omise si c'est l'année en cours | `3 sept.`, `12 juin 2025` |
| Période | du … au … | `du 12 mai au 10 juin` |
| Durée | nombre + unité en toutes lettres | `30 jours`, `2 jours ouvrés` |
| Pourcentage | espace insécable avant %, toujours accompagné d'un montant | `40 %` (rente de 720 € par mois) |
| Téléphone | par paires ; masqué par des points dans l'espace | `09 70 00 00 00`, `06 •• •• •• 17` |
| Heure, plage horaire | `h`, tiret entre deux heures | `14 h 30`, `14 h - 16 h` |
| Numéro d'adhérent | groupes de 4 chiffres | `1234 5678` |
