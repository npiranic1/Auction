import React from 'react'
import 'components/css/ProductDetail.css'

function ProductDetail({product}) {

  return (
    <div className="productDetail">
        <div className="cover">
            <img alt="cover" src={product.url} className="cover"/>
        </div>
        <div className="productDetails">
            <p className="productCategory">{product.name}</p> <br/>
            <p className="productPrice">Start from ${product.price}</p> 
        </div>
    </div>
  )
}

export default ProductDetail