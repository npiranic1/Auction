import React from 'react'
import 'pages/css/Registration.css'
import SideHeader from 'components/js/SideHeader'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
        <div>
            <SideHeader dashboard="REGISTER" page=""/>
            </div>
        <div className="register-page-wrapper">
            <div className="register-form-wrapper">
                <div className="register-title-wrapper">
                    <div className="register-title">
                        REGISTER
                    </div>
                </div>
                <div>
                    <Form className="register-form">
                        <Form.Group controlId="form.Name">
                            <Form.Label className="register-form-label">First name</Form.Label>
                            <Form.Control type="email" placeholder="" className="register-form-control" />
                        </Form.Group>
                        <Form.Group controlId="form.Surname">
                            <Form.Label className="register-form-label">Last name</Form.Label>
                            <Form.Control type="email" placeholder="" className="register-form-control" />
                        </Form.Group>
                        <Form.Group controlId="form.Email">
                            <Form.Label className="register-form-label">Enter Email</Form.Label>
                            <Form.Control type="email" placeholder="" className="register-form-control" />
                        </Form.Group>
                        <Form.Group controlId="form.Password">
                            <Form.Label className="register-form-label">Password</Form.Label>
                            <Form.Control type="password" placeholder="" className="register-form-control"/>
                        </Form.Group>
                        <Button className="register-form-register-button">REGISTER</Button>
                        <div className="register-direct-to-login">
                          <p className="register-direct-to-login-text">Already have an account? </p>
                          <Link className="register-direct-to-login-button" to="/login">Login</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Registration