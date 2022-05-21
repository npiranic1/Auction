import React from 'react'
import './ProductNavbar.css'
import { Nav, Navbar } from 'react-bootstrap';

function ProductNavbar() {
  return (
    <Navbar className="navBar">
        <Nav variant="tabs" className="navBarSelect">
            <Nav.Link className="title">New Arrivals</Nav.Link>
            <Nav.Link className="title">Last Chance</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default ProductNavbar