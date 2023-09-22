import React, { useState } from "react";
import "components/css/SingleProduct.css";
import CustomButton from "components/js/CustomButton.js";
import { Row, Col } from "react-bootstrap";
import { placeBid } from "api/bids.js";
import { getToken, getUser } from "../../utility/storageService";

function SingleProduct({ product, images, bids, fetchProduct }) {
  const user = getUser();
  const token = getToken();
  const [bid, setBid] = useState("");
  const [message, setMessage] = useState("");

  async function handlePlaceBid(e) {
    try {
      if (user !== undefined && token !== undefined) {
        const res = await placeBid(product.id, bid);
        fetchProduct();
        setMessage(res);
        setBid("");
      } else setMessage("You need to be logged in!");
    } catch (err) {
      setMessage("You need to be logged in!");
    }
  }

  return (
    <div className="singleProduct">
      <div className="images">
        <div className="main">
          <img
            className="photo"
            alt="Main"
            src={images.length > 0 ? images[0].url : ""}
          />
        </div>
        <div className="side">
          <Row className="pRow">
            {images.slice(1).map((image) => (
              <Col key={image.id} md={4} className="pCol">
                <div>
                  <img
                    alt={"Image: " + image.id}
                    className="side"
                    src={image.url}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="pDescription">
        <p className="pName">{product.name}</p>
        <p className="pPrice">Star from - ${product.price}</p>
        <div className="bid">
          <input
            type="number"
            className="pPlaceholder"
            id="ph"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
          <CustomButton
            disabled={false}
            caption="PLACE BID"
            id="pb"
            onClick={(e) => handlePlaceBid(e)}
          />
        </div>
        <p className="message" id="message">
          {message}
        </p>
        <p className="des">
          Enter ${bids.length > 0 ? bids[0].price : product.price} or more
        </p>
        <p className="bidInformation">
          Highest bid: ${bids.length > 0 ? bids[0].price : "0"}
        </p>
        <p className="bidInformation">No bids: {bids.length}</p>
        <p className="bidInformation">
          Time left: {product.timeLeft > 0 ? product.timeLeft : 0} days
        </p>
        {/*<Button className="buttonWatchlist">Watchlist <FavoriteIcon className="iconWatchlist"/></Button>*/}
        <p className="pDetails">Details</p>
        <hr className="hLine" />
        <p className="pDescription">{product.description}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
