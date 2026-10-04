⚠️ Livrable fondé sur des données simulées, sans valeur de recherche.

# Architecture de l'information — Clarea Assurances, site d'assurance complémentaire santé et prévoyance

<!-- Point d'entrée de la phase : décisions validées, statut des livrables, retours vers les flows et le backlog. -->

## Livrables

| Livrable | Contenu | Statut |
|---|---|---|
| [Inventaire des contenus](./01-contenus.inventory.md) | 19 objets métier ; 57 écrans classés lieu ou contextuel | terminé |
| [Arborescence](./02-arborescence.sitemap.md) | 3 zones, 11 rubriques de premier niveau, 28 lieux | terminé |
| [Navigation](./03-navigation.nav.md) | Systèmes de navigation, mobile, 15 liens profonds, vérification par flow (20 flows, 41 points d'entrée) | terminé |
| [Glossaire des libellés](./04-libelles.glossary.md) | 32 libellés, vocabulaire des personas, 11 termes métier définis | terminé |
| [Test d'arborescence](./05-test-arborescence.treetest.md) | Protocole, 16 questions | protocole prêt, test à mener avec de vrais participants |

## Décisions validées

| Sujet | Décision | Justification |
|---|---|---|
| Zones | Site public, Espace adhérent, Transverse | Vision : vitrine et souscription en public, espace adhérent connecté ; contact accessible client ou non |
| Schéma — Site public | par sujet (les offres) | Manon et Hélène arrivent par une offre (UF-01.01, UF-01.02) |
| Schéma — Espace adhérent | par objet, au possessif | Sylvie et Hélène suivent ce qu'elles possèdent : remboursements, demandes, arrêt, contrat `[SIM-P04][SIM-P07][SIM-P08]` |
| Schéma — Transverse | utilitaire | Connexion, aide et contact servent les deux zones |
| Rubriques de premier niveau — Site public | Mutuelle santé, Prévoyance, Obtenir un tarif | — |
| Rubriques de premier niveau — Espace adhérent | Ma santé, Mes demandes, Mon arrêt de travail, Mon contrat, Mon compte | 5 entrées : barre d'onglets mobile possible (Mon compte en utilitaire) |
| Libellé de la prévoyance | « Prévoyance » avec sous-titre « arrêt de travail, invalidité » | Terme connu des indépendants, défini sur place pour Manon `[SIM-P05]` |
| Libellés arbitrés | Ma carte de mutuelle, Estimer un soin, Mes indemnités, Mes demandes | Mots des personas plutôt que « tiers payant », « reste à charge », « prestations » |
| EC33 Envoyer un document | Lieu sous Mes demandes ; lien contextuel « Ajouter une pièce » depuis Mon dossier d'arrêt | Sert aux devis et aux pièces d'arrêt |
| EC04 Simuler une perte de revenus | Lieu du site public sous Prévoyance ; lien depuis Mon contrat | Un seul emplacement, utile avant et après souscription |
| EC51, EC53 | Lieux sous Aide et contact (transverse) | Issue humaine de 7 flows, client ou non |
| EC37, EC49, EC50 | Lieux | Cibles de liens profonds depuis des notifications |

## Écrans ajoutés par l'architecture

| ID | Écran | Type | Raison |
|---|---|---|---|
| [EC54](../05-user-flows/00-index.md#ec54) | Aide et contact | lieu | Aucun flow ne nomme d'accès au rappel ni à la question écrite hors renvois |
| [EC55](../05-user-flows/00-index.md#ec55) | Plan du site | lieu | Second système de navigation exigé par le RGAA (pas de recherche prévue) |
| [EC56](../05-user-flows/00-index.md#ec56) | Déclaration d'accessibilité | lieu | Obligation légale (RGAA) |
| [EC57](../05-user-flows/00-index.md#ec57) | Mentions légales et données personnelles | lieu | Obligation légale (RGPD, données de santé) |

## Bilan

| Zone | Lieux | Contextuels | Hors MVP | Ajoutés |
|---|---|---|---|---|
| Site public | 5 | 16 | 1 (EC16) | 0 |
| Espace adhérent | 15 | 8 | 4 (EC28, EC49, EC50, EC42) | 0 |
| Transverse | 8 | 5 | 2 (EC30, EC29) | 4 |
| **Total** | **28** | **29** | **7** | **4** |

## Retours

| Cible | Type | Élément | Proposition | Statut |
|---|---|---|---|---|
| flows | renvoi à revoir | [UF-02.02](../05-user-flows/02-souscrire-une-couverture/02-repondre-au-questionnaire-de-sante.flow.md) | R1 — Chemin `A2` : un futur client n'a pas d'espace adhérent ; reprise du questionnaire par un lien sécurisé envoyé par e-mail au lieu du renvoi vers la connexion | accepté, appliqué |

Aucun retour vers le backlog : les écrans ajoutés relèvent d'obligations transverses (T1 accessibilité, T2 données) ou de la navigation, sans action propre d'un persona.

## Questions ouvertes
- « Mes demandes » (⚪) regroupe devis et questions : libellé à vérifier par le test d'arborescence (Q8, Q9).
- La rubrique Mon arrêt de travail doit-elle rester visible, avec une invitation, pour un foyer sans prévoyance ?
- Une recherche sera-t-elle nécessaire quand les contenus pédagogiques s'étofferont ?
