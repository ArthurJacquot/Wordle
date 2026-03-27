# Wordle

L'objectif est de faire un clone du jeu [Wordle](https://www.nytimes.com/games/wordle/index.html).

## Description technique

Le frontend est en React et le backend en Python avec FastApi.

C'est une application React qui tourne dans un serveur Vite.

Le tout est coordonnée par Nginx en reverse-proxy.

L'ensemble tourne sous docker.

## Règles métiers

La liste des mots a été créée via la fusion de différents json du repository [vocabulaire-francais de akaAgar](https://github.com/akaAgar/vocabulaire-francais).

Le programme pour la fusion est le fichier fusion_json.py dans le dossier backend.

Les mots retenus sont ceux sans espace ni tiret et avec une longueur comprise entre 4 et 9 caractères.

## Objectifs du projet

- J'ajoute dès le début du projet une analyse Sonar et des tests unitaires pour pouvoir ajouter par la suite du CI (via Jenkins sûrement).

- Je pourrais ajouter des tests d'interfaces automatisés dans le futur.

- Je souhaite développer au maximum l'ensemble des composants moi-même.

- Surtout je dois comprends **l'intégralité** de ce que je fais. Si je trouve une solution par IA ou sur Internet, je cherche pourquoi elle fonctionne.
