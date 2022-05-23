import React from 'react'
import './Home.css'
import ProductCover from 'components/ProductCover'
import ProductNavbar from 'components/ProductNavbar'
import ProductContainer from 'components/ProductContainer'

function Home() {
  return (
    <>
      <div className="product">
        <ProductCover />
      </div>
      <div>
        <ProductNavbar/>
      </div>
      <div>
        <ProductContainer/> 
      </div>
    </>
  );
}

export default Home