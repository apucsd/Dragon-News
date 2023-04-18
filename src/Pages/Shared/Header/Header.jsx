import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Container>
        <div className="text-center my-2">
          <img src={logo} alt="" />
          <p>
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>
            <small>{moment().format("dddd, MMMM D, YYYY")}</small>
          </p>
        </div>
        <div className="bg-light p-2 d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee
            speed={100}
            className="text-danger"
            gradientColor={(0, 0, 0)}
          >
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
        <div className="text-center my-2">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Profile</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <Button variant="dark">Log In</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default Header;
