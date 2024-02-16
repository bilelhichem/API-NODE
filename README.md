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
 
 npm i helmet

// Ce module est utilisé principalement dans des applications web Node.js pour renforcer la sécurité en configurant divers en-têtes HTTP

npm i express-rate-limit

// Le package npm "express-rate-limit" est un middleware pour Express.js qui permet de limiter le nombre de requêtes par adresse IP ou d'autres critères. Cela est particulièrement utile pour protéger votre serveur contre les attaques par déni de service . 

exemple utilisation :

const rateLimit = require('express-rate-limit');

const app = express();

// Limiter le nombre de requêtes à 100 par heure (3600 * 1000 millisecondes)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 100 // Limite de 100 requêtes par IP
});

// Appliquer le middleware rate limiter à toutes les requêtes
app.use(limiter);