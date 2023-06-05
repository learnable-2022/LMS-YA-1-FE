import { createContext, useState } from "react";
import productDesign from '../data/productDesign'
import frontEnd from "../data/frontEnd";

const UserContext = createContext({});

export const UserProvider = ({children}) =>{
  const [user, setUser] = useState({})
  const [courses, setCourses] = useState(
    {
      web3:[], 
      backend:[],
    }
      )

  courses['frontend'] = frontEnd
  courses['productDesign'] = productDesign


  return(
    <UserContext.Provider value = {{user,  setUser, courses, setCourses}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext