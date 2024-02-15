![gith](https://github.com/bilelhichem/API-NODE/assets/101928436/9dfa5d73-98bb-4c7d-a24c-d6229f0f4741)

# API NODE JS

Ce projet est un exemple simple montrant comment utiliser Express avec Babel et Body-Parser.

## Installation

Pour installer les dépendances, exécutez les commandes suivantes :

npm install express

ce qui signifie qu'il permet de convertir le code écrit dans une version récente de JavaScript (ES6+ par exemple) en une version plus ancienne
npm install --save-dev @babel/core 
Créez un fichier babel.config.json à la racine de votre projet et ajoutez le contenu suivant :
{
    "presets": ["@babel/preset-env"]
}

npm install body-parser

AVA est un framework de test pour JavaScript, utilisé principalement pour les tests unitaires dans les projets Node.js
npm install ava 

npm install @babel/core @babel/node @babel/preset-env --save-dev
 
  "main": "server.js",

  "scripts": {
    "start": "nodemon --exec babel-node server.js",
    "test": "ava"
  },


// libary de http install : npm install http-status-codes --save


// La bibliothèque body-parser dans Node.js est utilisée pour analyser les corps des requêtes HTTP entrantes