import React from "react";
import "pages/css/Home.css";
import ProductCover from "components/js/ProductCover";
import ProductContainer from "components/js/ProductContainer";
import { useState, useEffect } from "react";
import { getNewArrivals, getLastChance } from "api/products.js";
import { Nav, Navbar } from "react-bootstrap";

function Home() {
  const [newProducts, setNewProducts] = useState([]);
  const [lastProducts, setLastProducts] = useState([]);
  const [isNewArrivalsActive, setIsNewArrivalsActive] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getNewArrivals();
        const lastChance = await getLastChance();

        setNewProducts(
          res.data.map((product) => ({
            id: product.id,
            url: product.images.length > 0 ? product.images[0].url : "",
            name: product.name,
            price: product.price,
          }))
        );
        setLastProducts(
          lastChance.data.map((product) => ({
            id: product.id,
            url: product.images.length > 0 ? product.images[0].url : "",
            name: product.name,
            price: product.price,
          }))
        );
      } catch (err) {
        if (err.res) {
          console.log(err.res.data);
          console.log(err.res.status);
          console.log(err.res.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product">
        <ProductCover />
      </div>
      <div>
        <Navbar className="navBar">
          <Nav variant="tabs" className="navBarSelect">
            <Nav.Link
              className="title"
              onClick={() => setIsNewArrivalsActive(true)}
              style={
                isNewArrivalsActive
                  ? { borderBottom: "3px solid #8367D8" }
                  : null
              }
            >
              New Arrivals
            </Nav.Link>
            <Nav.Link
              className="title"
              onClick={() => setIsNewArrivalsActive(false)}
              style={
                !isNewArrivalsActive
                  ? { borderBottom: "3px solid #8367D8" }
                  : null
              }
            >
              Last Chance
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div>
        <ProductContainer
          products={isNewArrivalsActive ? newProducts : lastProducts}
        />
      </div>
    </>
  );
}

export default Home;
