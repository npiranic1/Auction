import React from 'react'
import './ProductContainer.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProductDetail from './ProductDetail'

function ProductContainer() {
  return (
    <Container className="container">
        <Row className="row">
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
        </Row>
        <Row className="row">
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
            <Col className="col"><ProductDetail/> </Col>
        </Row>
    </Container>
  )
}

export default ProductContainer