import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../../context/UserContext'


function UserRoute({ role }) {
  const { auth } = useContext(UserContext)

  if (auth?.role === role || auth?.role === 'admin' ) {
    return <Outlet />
  } else if (auth?._id) {
    return <Navigate to={"/unauthorized"} />
  }
  else {
    return <Navigate to={"/login"} />
  }
}

export default UserRoute
