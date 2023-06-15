import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useContext } from 'react';

function StudentsDash() {
  const { auth } = useContext(UserContext)
  
  return (
    <div>
      <h1> Students Page</h1>

      <p>{auth?.firstName} You are signed in as a student</p>
      <Link to='/dashboard' >Admin</Link>
    </div>
  )
}

export default StudentsDash
