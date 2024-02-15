import users from "../data/user.model";



const insert = (details)=>{
    const newUser = {...details , id: users.length +1};
    users.push(newUser);
    return newUser ; 
};


const get = (UserId)=>{
       const findUser = users.find((user)=>{
        if (UserId == user.id) {
            return user;
        }
        return null ; 
       })
};



const update = (details)=>{
 
    
};



const remove = (UserId)=>{
   const finduser = (users ,index)=>{
    if (UserId== users.id) {
        // splice 
        users.splice(index,1);
        return true ; 
    }
    return false ; 
   };
      return doesUserExist = users.find(finduser); 

};





export{
    insert , 
    get,
    remove,
    update

}