import Product_Image from "../assets/img/Ginnir Shop Logo.png"
import FormButton from "./FormButton"

const ProductDetailsInformation = ({ singleProductData }) => {
  const { id, name, price, image, category, description } = singleProductData
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='product-image'>
            <img src={image === "" ? Product_Image : image} alt='' />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='product-details-information'>
            <p className='category'>{category}</p>
            <h4 className='title'>{name}</h4>
            <h5 className='price'>৳ {price}</h5>

            <div className='cart-form'>
              <form action=''>
                <button>-</button>
                <input type='number' min='0' />
                <button>+</button>
                <FormButton name='Add to Cart' />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='product-description'>
            <h4>Description</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsInformation
