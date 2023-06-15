import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../../context/UserContext'


function UserRoute({role}) {
  const { auth } = useContext(UserContext)

  // To activate the admin panel sign in with an account created with the backend witha role property of Admin
  // uncomment the code below and navigate to dashboard
  // auth.role = admin
  // auth.firstName = Tappi


  if (auth?.role === role){
    return <Outlet />
  }else if(auth?.firstName) {
    return <Navigate to= {"/unauthorized"} />
  }
  else{
    return <Navigate to= {"/login"} />
  }
}

export default UserRoute
