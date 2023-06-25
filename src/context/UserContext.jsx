import { createContext, useState, useEffect } from "react";
import productDesign from "../data/productDesign";
import frontEnd from "../data/frontEnd";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const getInitialState = () => {
    const authString = sessionStorage.getItem("userAuth")
    const authDetails = JSON.parse(authString)
    return authDetails
    }

  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(getInitialState);
  const [title, setTitle] = useState({})
  

  useEffect(() => {
    sessionStorage.setItem('userAuth', JSON.stringify(auth))
    }, [auth])

  

  const [courses, setCourses] = useState({
    web3: [],
    backend: [],
    frontend: frontEnd,
    productDesign: productDesign,
  });

  const [imageData, setImageData] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, courses, setCourses, imageData, setImageData, auth, setAuth, title, setTitle }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
