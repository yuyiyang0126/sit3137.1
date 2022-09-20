import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";


const Login = () => {
  const [email, sEmail] = useState("");
  const [password, sPassword] = useState("");
  const [error, sError] = useState("");
  const { logIn, } = useUserAuth();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sError("");
    try {
      await logIn(email, password);
      nav("/home");
    } catch (err) {
      sError(err.message);
    }
  };



  return (
    <>
      <div className="p-3 box">
        <h2>Dev@Deakin</h2>
        <p>Log in to acess full content</p>
        {error && <Alert variant="dark">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Control
              type="email"
              placeholder="Please enter your Email"
              onChange={(e) => sEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Please enter your Password"
              onChange={(e) => sPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid ">
            <Button variant="dark" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="mt-3 text-center">
        Click to  <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
