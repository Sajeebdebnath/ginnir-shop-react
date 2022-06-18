import { CgClose } from "react-icons/cg"
import FormButton from "./FormButton"
const CartItem = () => {
  return (
    <div className='single-cart-item'>
      <div className='cart-img'>
        <img
          src='https://api.shod.ai/v1/media/pictures/product/0002594_finlay-premium-tea-500-gm_510.png'
          alt=''
        />
      </div>
      <div className='cart-item-info'>
        <h5 className='price'>৳ 590</h5>
        <p className='title'>Finlay Premium Tea</p>
        <div className='cart-form'>
          <form action=''>
            <div>
              <button>-</button>
              <input type='text' pattern='[0-9]*' value='1' />
              <button>+</button>
            </div>
            <FormButton name='Update' />
          </form>
        </div>
        <h6 className='total-price'>
          Total ৳ <span>560</span>
        </h6>

        <div className='remove-cart-icon'>
          <button>
            <CgClose />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
