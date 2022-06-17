import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { productAllFetch } from "../redux/actionCreators/productActionCreator"
const Home = () => {
  const dispatch = useDispatch()
  const allProductList = useSelector((state) => state.product.allProducts)
  const categories = [...new Set(allProductList?.map((category) => category.category))]
  const [selectCategory, setSelectCategory] = useState("")

  useEffect(() => {
    dispatch(productAllFetch())
  }, [dispatch])

  const allProducts = allProductList
    ?.filter((product) => {
      if (selectCategory === "") {
        return product
      } else if (product.category === selectCategory) {
        return product
      }
    })
    .map((product) => {
      return (
        <div className='col-lg-3' key={product.id}>
          <ProductItem product={product} />
        </div>
      )
    })
  const productSkeletons = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
    return (
      <div className='col-lg-3 mb-5' key={index}>
        <p>Loading</p>
      </div>
    )
  })

  const setCategory = (name) => {
    setSelectCategory(name)
  }

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
                    <li onClick={() => setSelectCategory("")}>All Category</li>
                    {categories.map((name, index) => {
                      return (
                        <li
                          className={name === selectCategory ? "active" : ""}
                          key={index}
                          onClick={() => setCategory(name)}
                        >
                          - {name}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-10'>
              <div className='product-items-area'>
                <h3 className='product-title'>All Products</h3>
                <div className='product-header'>
                  <div className='product-counter'>
                    <p>{allProductList !== null ? allProducts.length : "0"} items</p>
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
                    {allProductList === null && productSkeletons}
                    {allProductList !== null && allProductList.length === 0
                      ? "No Product Posted Yet "
                      : allProducts}
                    {allProducts?.length === 0 && "No Product Available"}
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
