import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import UserContext from '../../context/UserContext'


function UserRoute({ role }) {
  const { auth } = useContext(UserContext)
  const location = useLocation();

  if (auth?.role === role) {
    return <Outlet />
  } else if (auth?._id) {
    return <Navigate to={"/unauthorized"} state={{ from: location }} replace/>
  }
  else {
    return <Navigate to={"/login"} state={{ from: location }} replace />
  }
}

export default UserRoute
