import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PublicOutlet = () => {
  const token = useSelector((state) => state.auth.token)
  return token === null ? <Outlet /> : <Navigate to='/' />
}

export default PublicOutlet
