import React from 'react'
import './ProductCover.css'
import { useState, useEffect } from 'react';
import { getRandomProduct } from 'api/products.js'
import CustomButton from './CustomButton'

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

  return (
    <>
        <div className="productCover">
            <div className="details">
                <p className="name">{product.name}</p> 
                <p className="price">Start from - ${product.price}</p> 
                <p className="description">{product.description}</p>
                {/* Button je zakomentarisan jer nema funkcionalnosti */}
                {/* <CustomButton/> */}
            </div>
            <div className="coverPhoto">
                <img src={product.url} className="coverPhoto"/>
            </div> 
        </div>
    </>
  )
}

export default ProductCover