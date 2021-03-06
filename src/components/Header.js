import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Logo from "../assets/img/Ginnir Shop Logo.png"
import SearchBar from "./SearchBar"

const Header = () => {
  const productList = useSelector((state) => state.product.allProducts)
  const token = useSelector((state) => state.auth.token)
  const userEmail = useSelector((state) => state.auth.userEmail)
  return (
    <div>
      <header>
        <div className='header-area'>
          <div className='header-area-wrapper'>
            <div className='logo'>
              <Link to='/'>
                <img src={Logo} alt='Ginnir Shop' />
              </Link>
            </div>
            <SearchBar suggestions={productList} />
            <div className='header-links'>
              <div className='product-cart-icon'>
                <Link to='/cart'>
                  <span>
                    <FaShoppingCart />
                  </span>
                  <span className='cart-item'>0</span>
                </Link>
              </div>
              <div className='account-link'>
                {token === null ? (
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
                ) : (
                  <>
                    <Link to='#'>{userEmail}</Link>
                    <Link to='/logout'>Logout</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
