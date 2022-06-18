import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { authLogout } from "../redux/actionCreators/authActionCreator"

const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authLogout())
  }, [dispatch])

  return <Navigate to='/' />
}

export default Logout
