import React from 'react'
import './ProductContainer.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProductDetail from './ProductDetail'


function ProductContainer({products}) {
  return (
    <Container className="container">
        <Row className="row">
          {products.map(product => (
            <Col key={product.id} lg={4}  className="col"><ProductDetail product={product}/> </Col>
          ))}
        </Row>
    </Container>
  )
}

export default ProductContainer