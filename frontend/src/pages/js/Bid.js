import React from 'react'
import 'pages/css/Bid.css'
import { useState, useEffect } from 'react'
import SideHeader from 'components/js/SideHeader.js'
import SingleProduct from 'components/js/SingleProduct.js'
import Bids from 'components/js/Bids.js'
import { getSingleProduct  } from 'api/products.js'
import { getBids } from 'api/bids.js'
import moment from 'moment'
import { useLocation } from "react-router-dom";

function Bid() {
  const [ product, setProduct ] = useState({}); 
  const [ images, setImages ] = useState([]);
  const [ bids, setBids ] = useState([]);
  const location = useLocation();
 

  useEffect(() => {
      const fetchProduct = async () => {
          try{
              const id = location.state.detail;
              const resP = await getSingleProduct(id);
              const resB = await getBids(id);
            
              setProduct({
                  id: resP.data.id,
                  name: resP.data.name,
                  price: resP.data.price,
                  description: resP.data.description,
                  timeLeft: moment(resP.data.end_date).diff(moment(), 'days')
              });
              setImages(resP.data.images.map(imageUrl => ({ id: imageUrl.id, url: imageUrl.url })));
              setBids(resB.data.map(bid => ({id: bid.id, date: bid.date !== "" ? bid.date : "", price: bid.price !== null ? bid.price : null, name: bid.user.first_name + " " + bid.user.last_name, image: bid.user.image_url})));
                
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
  }, [location])

  return (
    <div>
      <div>
          <SideHeader dashboard="SINGLE PRODUCT" page="HOME"/>
      </div>
      <div>
        <SingleProduct product={product} images={images} bids={bids} />
      </div>
      <div>
        <Bids bids={bids}/>
      </div>
    </div>
  )
}

export default Bid