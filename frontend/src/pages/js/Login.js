import React, { useState } from "react";
import "pages/css/Login.css";
import { Form, Button } from "react-bootstrap";
import SideHeader from "components/js/SideHeader";
import { loginUser } from "api/users";
import { setSession } from "utility/storageService.js";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function handleLogin() {
    try {
      if (email !== "" && password !== "") {
        const res = await loginUser(email, password);
        if (res === null) setMessage("Invalid password");
        if (res) {
          setIsLoggedIn(true);
          setSession(res);
          history.push("/");
        } else setMessage("Invalid credentials");
      } else setMessage("You didn't input all values!");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <SideHeader dashboard="LOGIN" page="" />
      </div>
      <div className="login-page-wrapper">
        <div className="login-form-wrapper">
          <div className="login-title-wrapper">
            <div className="login-title">LOGIN</div>
          </div>
          <div>
            <Form className="login-form">
              <Form.Group controlId="form.Name">
                <Form.Label className="login-form-label">
                  Enter Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="login-form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label className="login-form-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  className="login-form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <p className="login-message">{message}</p>
              <Button
                className="login-form-login-button"
                onClick={() => handleLogin()}
                style={{ backgroundColor: "#8367d8" }}
              >
                LOGIN
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
