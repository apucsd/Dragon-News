import React from "react";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const NavbarPage = () => {
  const { user, logOut } = useContext(AuthContext);
  const getLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-center my-2">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-4  ">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/career">Career</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Profile</Nav.Link>
              <Link to="/login">
                {user ? (
                  <Button onClick={getLogOut} variant="dark">
                    Log out
                  </Button>
                ) : (
                  <Button variant="primary">Log In</Button>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPage;
