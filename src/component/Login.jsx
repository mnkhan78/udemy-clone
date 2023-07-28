import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    navigate("/");
    // e.preventDefault();
    console.log(email, password);
    dispatch(signIn(email, password));
  };

  return (
    <div className="form-box">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => submitHandler()}>Login</Button>
        <p>
          Don't have account <Link to="/signup"> sign up </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
