import React, { useState } from "react";
import "pages/css/Registration.css";
import SideHeader from "components/js/SideHeader";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registerUser } from "api/users";
import { setSession } from "utility/storageService.js";
import { useHistory } from "react-router-dom";

function Registration({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function handleRegister(e) {
    try {
      if (name !== "" && surname !== "" && email !== "" && password !== "") {
        const res = await registerUser(name, surname, email, password);
        setIsLoggedIn(true);
        setSession(res);
        history.push("/");
      } else {
        setMessage("You didn't input all values!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <SideHeader dashboard="REGISTER" page="" />
      </div>
      <div className="register-page-wrapper">
        <div className="register-form-wrapper">
          <div className="register-title-wrapper">
            <div className="register-title">REGISTER</div>
          </div>
          <div>
            <Form className="register-form">
              <Form.Group controlId="form.Name">
                <Form.Label className="register-form-label">
                  First name
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="register-form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Surname">
                <Form.Label className="register-form-label">
                  Last name
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="register-form-control"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Label className="register-form-label">
                  Enter Email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="register-form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form.Password">
                <Form.Label className="register-form-label">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  className="register-form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <p className="register-message">{message}</p>
              <Button
                className="register-form-register-button"
                style={{ backgroundColor: "#8367d8" }}
                onClick={(e) => handleRegister(e)}
              >
                REGISTER
              </Button>
              <div className="register-direct-to-login">
                <p className="register-direct-to-login-text">
                  Already have an account?
                  <Link className="register-direct-to-login-button" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
