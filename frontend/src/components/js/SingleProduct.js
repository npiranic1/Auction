import React, { useState, useEffect } from 'react'
import 'components/css/SingleProduct.css'
import CustomButton from 'components/js/CustomButton.js'
import { Row, Col } from 'react-bootstrap'
import { placeBid } from 'api/bids.js'
import { getRandomUser } from 'api/users.js'


function SingleProduct({product, images, bids}) {

    const [ bid, setBid ] = useState('');
    const [ user, setUser] = useState({});
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        const fetchUser= async () => {
            try{
                const res = await getRandomUser(); 
                setUser({
                    id: res.data[0].id
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
        fetchUser();
    }, [])


   async function handlePlaceBid(e){
       try{
            const res = await placeBid(user.id, product.id, bid);
            setMessage(res);
            setBid('');
       }catch(err){
            console.log(err);
       }
    }; 

  return (
    <div className="singleProduct">
        <div className="images">
            <div className="main">
                <img  className="photo" alt="Main" src={images.length > 0 ? images[0].url : ""}/>
            </div>
            <div className="side">
                <Row className="pRow" > 
                    {images.slice(1).map(image => (
                        <Col key={image.id} md={4} className="pCol"> 
                            <div><img  alt={"Image: " + image.id} className="side" src={image.url}/></div>
                        </Col> 
                    ))}  
                </Row> 
            </div>   
        </div>
        <div className="pDescription">
            <p className="pName">{product.name}</p>
            <p className="pPrice">Star from - ${product.price}</p>
            <div className="bid">
                <input type='number' className="pPlaceholder" id="ph" value={bid} onChange={(e) => setBid(e.target.value)}/>
                <CustomButton disabled={false} caption="PLACE BID" id="pb" onClick={(e) => handlePlaceBid(e)}/>
            </div>
            <p className="message" id="message">{message}</p>
            <p className="des">Enter ${bids.length > 0 ? bids[0].price : product.price} or more</p>
            <p className="bidInformation">Highest bid: ${bids.length > 0 ? bids[0].price : "0"}</p>
            <p className="bidInformation">No bids: {bids.length}</p>
            <p className="bidInformation">Time left: {product.timeLeft > 0 ? product.timeLeft : 0} days</p>
            {/*<Button className="buttonWatchlist">Watchlist <FavoriteIcon className="iconWatchlist"/></Button>*/}
            <p className="pDetails">Details</p>
            <hr className="hLine"/>
            <p className="pDescription">{product.description}</p>
        </div>   
    </div>
  )
}

export default SingleProduct