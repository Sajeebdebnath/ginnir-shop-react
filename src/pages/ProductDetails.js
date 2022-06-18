import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductDetailsInformation from "../components/ProductDetailsInformation"
import { productSingleFetch } from "../redux/actionCreators/productActionCreator"

const ProductDeatils = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const singleProductData = useSelector((state) => state.product.singleProduct)

  useEffect(() => {
    dispatch(productSingleFetch(id))
  }, [id, dispatch])

  console.log(singleProductData)
  return (
    <div>
      <div className='product-details-area'>
        {singleProductData === null && "Loading"}
        {singleProductData !== null && <ProductDetailsInformation singleProductData={singleProductData} />}
      </div>
    </div>
  )
}

export default ProductDeatils
