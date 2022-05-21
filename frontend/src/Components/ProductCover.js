import React from 'react'
import './ProductCover.css'
import CustomButton from './CustomButton'

function ProductCover() {
    const product = {
        name: "Running Shoes", // ili je ovo kategorija
        price: "Star from -$240.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut consequat nulla. Duis nec fermentum erat, et varius augue. Vivamus sed tempor libero. ",
        url: "https://www.freepngimg.com/thumb/adidas/58287-sneakers-superstar-shoe-adidas-originals-hq-image-free-png.png"
    };


  return (

    <div className="productCover">
        <div className="details">
            <text className="name">{product.name}</text> 
            <text className="price">{product.price}</text> 
            <text className="description">{product.description}</text>
            {/* Button je zakomentarisan jer nema funkcionalnosti */}
            { /* <CustomButton/> */}
        </div>
        <div className="coverPhoto">
            <img src={product.url} className="coverPhoto"/>
        </div>
    </div>
  )
}

export default ProductCover