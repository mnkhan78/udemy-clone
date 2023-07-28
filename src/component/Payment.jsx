import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    alert("The Payment is Successfull");
    navigate("/");
  };
  return (
    <div className="form-box">
      <Form onSubmit={submitHandler}>
        <label htmlFor="text">Enter Your UPI pin</label>
        <input type="text" placeholder="upipin@upi" />
        <Button onClick={submitHandler}>Submit</Button>
      </Form>
    </div>
  );
};

export default Payment;
