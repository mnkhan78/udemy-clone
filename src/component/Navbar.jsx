import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cart from "../img/cart.png";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="logo-img"
            />{" "}
            Home Page
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <div className="course-row" style={{ width: "350px" }}>
            <div>
              <Link to="/teaching">
                <span>Teach On Udemy</span>
              </Link>
            </div>
            <div className="cart-img">
              <img src={cart} alt="cart-img" />
            </div>
            <div>
              <Link to="/login">
                <Button variant="outline-secondary">LogIn</Button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
