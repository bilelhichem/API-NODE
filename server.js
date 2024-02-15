import express from 'express';
import bodyParser from 'body-parser';
import  router  from './routers/user.router';

// La bibliothèque body-parser dans Node.js est utilisée pour analyser les corps des requêtes HTTP entrantes


const app =  express();
const port = 3000 ; 


app.use(express.json());

// pour transformer et analyser data en forme de json 

app.use(bodyParser.json());

app.use('/',router)


app.listen(port,() => {
    console.log(`go to http://localhost:${port}`)
});

module.exports = app ; 