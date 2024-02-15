const router = require("express").Router();
import {StatusCodes} from 'http-status-codes';


router.get('/',(req,res)=>{
    res.status(StatusCodes.ACCEPTED);
    res.send("hello world");
});


router.post('/ikram',(req,res)=>{
   const  data =  [];
    data.push(req.body);
    res.status(StatusCodes.ACCEPTED).send(data);
});


module.exports = router ; 