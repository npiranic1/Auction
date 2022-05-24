import React from 'react'
import './ProductCover.css'
import { useState, useEffect } from 'react';
import api, { getRandomProduct } from 'api/products.js'

function ProductCover() {

    const [ product, setProduct ] = useState({}); 

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const res = await getRandomProduct();
                setProduct({
                    name: res.data[0].name,
                    price: res.data[0].price,
                    description: res.data[0].description,
                    url: res.data[0].images[0].url
                });
                console.log(res);
            } catch(err){
                if(err.res){
                    console.log(err.res.data);
                    console.log(err.res.status);
                    console.log(err.res.headers);
                } else{
                    console.log(`Error: ${err.message}`);
                }   
            } 
        }
        fetchProduct();
    }, [])

    //console.log(randomProduct);

    /* const product = {
        name: "Running Shoes", 
        price: "Star from -$240.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut consequat nulla. Duis nec fermentum erat, et varius augue. Vivamus sed tempor libero. ",
        url: "https://www.freepngimg.com/thumb/adidas/58287-sneakers-superstar-shoe-adidas-originals-hq-image-free-png.png"
    }; */


  return (
    <>
        <div className="productCover">
            <div className="details">
                <p className="name">{product.name}</p> 
                <p className="price">Start from - ${product.price}</p> 
                <p className="description">{product.description}</p>
                {/* Button je zakomentarisan jer nema funkcionalnosti */}
                { /* <CustomButton/> */}
            </div>
            <div className="coverPhoto">
                <img src={product.url} className="coverPhoto"/>
            </div> 
        </div>
    </>
  )
}

export default ProductCover