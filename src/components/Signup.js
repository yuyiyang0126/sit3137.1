import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [lname, setLame] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password,name,lname);
      nav("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Dev@Deakin sign up</h2>
        {error && <Alert variant="dark">{error}</Alert>}
        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
            <Form.Control
              type="name" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="lname" placeholder="Enter your Last Name" onChange={(e) => setLame(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

      
          <Form.Group className="mb-3">
            <Form.Control
              type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="dark" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className=" mt-3 text-center">
        Already signed up? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
