import React from 'react'
import './ProductDetail.css'

function ProductDetail() {
    const product = {
        category: "Shoes Collection", 
        price: "Star from -$240.00",
        url: "https://cdn.shopify.com/s/files/1/0324/6781/2487/products/adidas-superstar-foundation-by3715-1_600x.png?v=1595615141"
    };
    
  return (
    <div className="productDetail">
        <div className="cover">
            <img src={product.url} className="cover"/>
        </div>
        <div className="productDetails">
           
            <p className="productCategory">{product.category}</p> <br/>
            <p className="productPrice">{product.price}</p> 
        </div>
    </div>
  )
}

export default ProductDetail