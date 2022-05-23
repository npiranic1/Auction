import React from 'react'
import './ProductCover.css'
import { useState, useEffect } from 'react';
import api from 'api/products.js'

function ProductCover() {

    const [ randomProduct, setRandomProduct ] = useState('');
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ url, setUrl ] = useState('');

    

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const res = await api.get('/products/random');
                 
                setRandomProduct(JSON.stringify(res.data));
                //console.log(randomProduct);
                //console.log(JSON.parse(randomProduct));
                //console.log(JSON.parse(randomProduct)[0].images[0].url);
                
                setName((JSON.parse(randomProduct)[0].name).toString());
                //console.log(name);
                
                setPrice((JSON.parse(randomProduct)[0].price).toString());
                //console.log(price);
                setDescription((JSON.parse(randomProduct)[0].description).toString());
                //console.log(description);
                setUrl((JSON.parse(randomProduct)[0].images[0].url).toString());
                //console.log(url);
                
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
                <p className="name">{name}</p> 
                <p className="price">Start from - ${price}</p> 
                <p className="description">{description}</p>
                {/* Button je zakomentarisan jer nema funkcionalnosti */}
                { /* <CustomButton/> */}
            </div>
            <div className="coverPhoto">
                <img src={url} className="coverPhoto"/>
            </div> 
        </div>
    </>
  )
}

export default ProductCover