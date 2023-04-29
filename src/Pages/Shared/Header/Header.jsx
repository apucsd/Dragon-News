import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
import Navbar from "./Navbar";
import NavbarPage from "./Navbar";

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
        <NavbarPage></NavbarPage>
      </Container>
    </div>
  );
};

export default Header;
