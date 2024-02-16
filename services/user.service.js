const  user = require("../models/presitence/user");


class userservice{
   addUser = (details)=>{
    return user.insert(details) ; 
   }
   
   
   
    getUser = (UserId)=>{
     return  user.get(UserId) ; 
       }
   
   
   
    DeleteUser = (UserId)=>{
      return user.remove(UserId) ; 
       }
   
   
        UpdateUser = (UserId)=>{
          return user.update(UserId) ; 
           }
   
}



module.exports= userservice ; 