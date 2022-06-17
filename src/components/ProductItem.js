import { BsCartPlus } from "react-icons/bs"
import { Link } from "react-router-dom"
import Default_Img from "../assets/img/Ginnir Shop Logo.png"
const ProductItem = ({ product }) => {
  const { id, name, category, image, price } = product
  return (
    <div className='single-product-item'>
      <div className='product-img'>
        <img src={image === "" ? Default_Img : image} alt={name} />
        <Link to='/' className='btn product-view-button'>
          View Product
        </Link>
      </div>
      <div className='product-text'>
        <div className='product-category-icon'>
          <div className='category'>{category}</div>
          <div className='product-cart-icon'>
            <span>
              <BsCartPlus />
            </span>
          </div>
        </div>
        <div className='product-info'>
          <h5 className='product-title'>{name}</h5>
          <p className='price'>${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
