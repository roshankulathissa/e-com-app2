import { Navigate, Outlet } from "react-router-dom"

function UserProtected() {
    const user= true;
  return user? <Outlet/>: <Navigate to="/login"/>
}

export default UserProtected
