import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import Logo from "../assets/img/Ginnir Shop Logo.png"
const Header = () => {
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
            <div className='search-bar'>
              <form action=''>
                <input
                  type='text'
                  className='form-control'
                  name='product_name'
                  placeholder='What are you looking for?'
                />
                <span>
                  <FaSearch />
                </span>
              </form>
            </div>
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
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
