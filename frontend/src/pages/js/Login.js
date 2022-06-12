import React from 'react'
import 'pages/css/Login.css'
import { Form, Button } from 'react-bootstrap'
import SideHeader from 'components/js/SideHeader'

function Login() {
  return (
    <>
        <div>
            <SideHeader dashboard="LOGIN" page=""/>
            </div>
        <div className="login-page-wrapper">
            <div className="login-form-wrapper">
                <div className="login-title-wrapper">
                    <div className="login-title">
                        LOGIN
                    </div>
                </div>
                <div>
                    <Form className="login-form">
                        <Form.Group controlId="form.Name">
                            <Form.Label className="login-form-label">Enter Email</Form.Label>
                            <Form.Control type="email" placeholder="" className="login-form-control" />
                        </Form.Group>
                        <Form.Group controlId="form.Email">
                            <Form.Label className="login-form-label">Password</Form.Label>
                            <Form.Control type="password" placeholder="" className="login-form-control"/>
                        </Form.Group>
                        <Form.Check className="login-form-check" label='Remember me'/>
                        <Button className="login-form-login-button">LOGIN</Button>
                    </Form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login