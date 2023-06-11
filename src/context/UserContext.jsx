import { createContext, useState } from "react";
import productDesign from "../data/productDesign";
import frontEnd from "../data/frontEnd";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState({
    web3: [],
    backend: [],
    frontend: frontEnd,
    productDesign: productDesign,
  });

  const [imageData, setImageData] = useState(null);

  return (
    <UserContext.Provider
      value={{ user, setUser, courses, setCourses, imageData, setImageData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
