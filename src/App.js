import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import PrivateOutlet from "./components/PrivateOutlet"
import PublicOutlet from "./components/PublicOutlet"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import ProductDeatils from "./pages/ProductDetails"
import Register from "./pages/Register"
import { authCheck } from "./redux/actionCreators/authActionCreator"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authCheck())
  }, [dispatch])
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDeatils />} />

        {/* Public Routes not for Authenticate User */}
        <Route path='/*' element={<PublicOutlet />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>

        {/* Private Routes only for Authenticate User */}
        <Route path='/logout' element={<Logout />} />
        <Route path='/*' element={<PrivateOutlet />}>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
