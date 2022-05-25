import React from 'react'
import './ProductDetail.css'
import PropTypes from 'prop-types'

function ProductDetail({product}) {
    
    ProductDetail.propTypes = {
        product: PropTypes.object
    }

  return (
    <div className="productDetail">
        <div className="cover">
            <img src={product.url} className="cover"/>
        </div>
        <div className="productDetails">
           
            <p className="productCategory">{product.name}</p> <br/>
            <p className="productPrice">Start from ${product.price}</p> 
        </div>
    </div>
  )
}

export default ProductDetail