/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard"



function ProductList({data}) {
  return (
    <div>
        <ProductCard data={data}/>
     
    </div>
  )
}

export default ProductList