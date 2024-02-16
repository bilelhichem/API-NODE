import express from 'express';
import bodyParser from 'body-parser';
import  router  from './routers/user.router';
import helmet from 'helmet'; 
// La bibliothèque body-parser dans Node.js est utilisée pour analyser les corps des requêtes HTTP entrantes
const rateLimit = require('express-rate-limit');

// Limiter le nombre de requêtes à 100 par heure (3600 * 1000 millisecondes)
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 100 // Limite de 100 requêtes par IP
});

// Appliquer le middleware rate limiter à toutes les requêtes


const app =  express();
const port = 3000 ; 

app.use(limiter);
app.use(express.json());
app.use(helmet());
// pour transformer et analyser data en forme de json 

app.use(bodyParser.json());

app.use('/',router)


app.listen(port,() => {
    console.log(`go to http://localhost:${port}`)
});

module.exports = app ; 