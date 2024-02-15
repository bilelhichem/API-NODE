import user from "../models/presitence/user";

const addUser = (details)=>{
 return user.insert(details) ; 
}



const getUser = (UserId)=>{
  return  user.get(UserId) ; 
    }



const DeleteUser = (UserId)=>{
   return user.remove(UserId) ; 
    }


    const UpdateUser = (UserId)=>{
       return user.update(UserId) ; 
        }



export {
    addUser , 
    getUser,
    DeleteUser,
    UpdateUser
}