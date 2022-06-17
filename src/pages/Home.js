import { BsCartPlus } from "react-icons/bs"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <div className='homepage-area'>
        <div className='container-fluid'>
          <div className='row g-0'>
            <div className='col-lg-2'>
              <div className='product-categories-area'>
                <h3>Categories</h3>
                <div className='category-list'>
                  <ul>
                    <li>Mlik</li>
                    <li>Fruits</li>
                    <li>Vegitable</li>
                    <li>Snackes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='product-items-area'>
                <h3 className='product-title'>All Products</h3>
                <div className='product-header'>
                  <div className='product-counter'>
                    <p>65 items</p>
                  </div>
                  <div className='product-filter'>
                    <p>sort by</p>
                    <form action=''>
                      <select name='name'>
                        <option value='default'>Name</option>
                        <option value='ascending'>ascending</option>
                        <option value='descending'>descending</option>
                      </select>
                      <select name='name'>
                        <option value='default'>Price</option>
                        <option value='high'>high - low</option>
                        <option value='low'>low - high</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className='all-product-area'>
                  <div className='row'>
                    <div className='col-lg-3'>
                      <div className='single-product-item'>
                        <div className='product-img'>
                          <img
                            src='https://images.nibelu.com/products/shop.beauty-heroes.com/ursa-major/3714/a2eaf0ae31012fa074bd85324555e5a3b3f0c5be.jpg'
                            alt=''
                          />
                          <Link to='/' className='btn product-view-button'>
                            View Product
                          </Link>
                        </div>
                        <div className='product-text'>
                          <div className='product-category-icon'>
                            <div className='category'>Fruits</div>
                            <div className='product-cart-icon'>
                              <span>
                                <BsCartPlus />
                              </span>
                            </div>
                          </div>
                          <div className='product-info'>
                            <h5 className='product-title'>Green Apple</h5>
                            <p className='price'>$30</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
