import { BsArrowRightShort } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-router-dom"
import Logo from "../assets/img/Ginnir Shop Logo.png"
const Footer = () => {
  return (
    <footer>
      <div className='footer-area'>
        <div className='footer-top-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='footer-items'>
                  <div className='footer-logo'>
                    <Link to='/'>
                      <img src={Logo} alt='Ginnir Shop' />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='footer-items'>
                  <p className='footer-title'>Ginni's Shop</p>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <Link to='#'>Our Promise</Link>
                      </li>
                      <li>
                        <Link to='#'>Contact</Link>
                      </li>
                      <li>
                        <Link to='#'>Help & FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='footer-items'>
                  <p className='footer-title'>Categories</p>
                  <div className='footer-menu'>
                    <ul>
                      <li>
                        <Link to='#'>Fruits</Link>
                      </li>
                      <li>
                        <Link to='#'>Mlik</Link>
                      </li>
                      <li>
                        <Link to='#'>Meat</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='footer-items newsletter'>
                  <h3>Subscribe</h3>
                  <p>Subscribe to gain access to the latest deals on all clean favorites.</p>
                  <div className='newsletter-form'>
                    <form action=''>
                      <input type='email' placeholder='Your email' />
                      <button type='submit' className='newsletter-btn'>
                        <BsArrowRightShort />
                      </button>
                      <span className='icon'>
                        <HiOutlineMail />
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='copy-right-text'>
                  <p>© 2022 Ginni's Shop. All rights reserved</p>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='footer-bottom-right-wrapper'>
                  <div className='terms'>
                    <ul>
                      <li>
                        <Link to='/'>Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to='/'>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to='/'>Cookie Policy</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='footer-social'>
                    <span>
                      <Link to='#' target='_blank'>
                        <FaFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link to='#' target='_blank'>
                        <FaInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link to='#' target='_blank'>
                        <FaLinkedin />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
