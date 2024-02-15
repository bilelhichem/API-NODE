const router = require("express").Router();
import {OK, StatusCodes} from 'http-status-codes';
import userservice from '../services/user.service';


const Status ={
    status: 'OK ' , 
    failure : 'No'
};



router.get('/',(req,res)=>{
    res.status(StatusCodes.ACCEPTED);
});


router.post('/add',(req,res)=>{
   const {body  : user} = req ; 
   const addUserService = userservice.addUser(req);
   if (!body.name) {
     return res.status({
        status : Status.failure , 
        message: "Name is require" 
     })

   }
   data.push(req.body);
   return res.status({
    status : Status.success , 
    message: data 
 })
    
   
});


export default router ; 