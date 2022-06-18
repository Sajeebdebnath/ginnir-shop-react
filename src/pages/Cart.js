import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
const Cart = () => {
  return (
    <div>
      <div className='cart-details-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='cart-details-information-wrapper'>
                <h5 className='cart-title'>My Bag</h5>
                <div className='cart-items-wrapper'>
                  <CartItem />
                  <CartItem />

                  <div className='sub-total-price'>
                    <h5>
                      Sub total <span>৳ 590</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='checkout-information-wrapper'>
                <h5 className='checkout-title'>Total</h5>
                <div className='checkout-information'>
                  <div className='item'>
                    <p>Sub-total</p> <span>৳ 590</span>
                  </div>
                  <div className='item'>
                    <p>Delivery Fee</p> <span>৳ 50</span>
                  </div>
                </div>
                <Link to='/' className='btn btn-main'>
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
