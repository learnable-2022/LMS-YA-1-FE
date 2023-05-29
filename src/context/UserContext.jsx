import { createContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({children}) =>{
  const [user, setUser] = useState({})
  const userDetails = {}

   const setNewDetails = (name, value) => {
    return userDetails[name] = value
   }

  return(
    <UserContext.Provider value = {{user,  setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext