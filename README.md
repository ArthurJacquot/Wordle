# Wordle

L'objectif est de faire un clone du jeu [Wordle](https://www.nytimes.com/games/wordle/index.html).

Le frontend sera en React et le backend en Python avec FastApi.

L'ensemble tourne sous docker.

La liste des mots a été créée via la fusion de différents json du repository [vocabulaire-francais de akaAgar](https://github.com/akaAgar/vocabulaire-francais).

Le programme pour la fusion est le fichier fusion_json.py dans le dossier backend.

Les mots retenus sont ceux sans espace ni tiret et avec une longueur comprise entre 4 et 9 caractères.
