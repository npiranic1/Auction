import React from 'react'
import 'components/css/ProductContainer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import ProductDetail from './ProductDetail'


function ProductContainer({products}) {

  const history = useHistory();

  function routeChange(id){
    console.log(id);
    let path = `home/single-product`; 
    history.push({
      pathname: path,
      state: { detail: id}
    });
  }

  return (
    <Container className="container">
        <Row className="row">
          {products.map(product => (
            <Col key={product.id} lg={4} md={4} className="col" onClick={() => routeChange(product.id)}><ProductDetail product={product}/> </Col>
          ))}
        </Row>
    </Container>
  )
}

export default ProductContainer;