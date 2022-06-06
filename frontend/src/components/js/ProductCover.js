import React from 'react'
import 'components/css/ProductCover.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getRandomProduct } from 'api/products.js'
import CustomButton from 'components/js/CustomButton'


function ProductCover() {

    const [ product, setProduct ] = useState({}); 

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const res = await getRandomProduct();
                setProduct({
                    id: res.data[0].id,
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

    const history = useHistory();

    function routeChange(id){
        let path = `home/single-product/` + id; 
        history.push({
            pathname: path
        });
    }

  return (
    <>
        <div className="productCover">
            <div className="details">
                <p className="name">{product.name}</p> 
                <p className="price">Start from - ${product.price}</p> 
                <p className="description">{product.description}</p>
                <CustomButton caption="BID NOW" onClick={() => routeChange(product.id)}/> 
            </div>
            <div className="coverPhoto">
                <img  alt="coverPhoto" src={product.url} className="coverPhoto"/>
            </div> 
        </div>
    </>
  )
}

export default ProductCover