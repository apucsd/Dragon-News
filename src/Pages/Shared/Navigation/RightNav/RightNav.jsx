import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import QKidsZone from "../../QZone/QKidsZone";
import bg from "../../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h5 className="fw-bold">Login With</h5>
      <br />
      <div className="m">
        <Button className="w-100" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100 mt-2" variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </div>

      <div>
        <h5 className="fw-bold my-4">Find Us On</h5>

        <div>
          <ListGroup className="">
            <a className="text-decoration-none" href=" http://www.facebook.com">
              {" "}
              <ListGroup.Item>
                <span className="text-primary fs-5">
                  <FaFacebook />
                </span>{" "}
                Facebook
              </ListGroup.Item>
            </a>
            <a className="text-decoration-none" href="http://www.twitter.com">
              {" "}
              <ListGroup.Item>
                <span className="text-primary fs-5">
                  <span className="text-primary fs-5">
                    <FaTwitter />
                  </span>
                </span>{" "}
                Twitter
              </ListGroup.Item>
            </a>
            <a
              className="text-decoration-none"
              href=" http://www.instagram.com"
            >
              <ListGroup.Item>
                <span className="text-danger fs-5">
                  <FaInstagram />
                </span>{" "}
                Instagram
              </ListGroup.Item>
            </a>
          </ListGroup>
        </div>
      </div>
      <QKidsZone></QKidsZone>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="text-center position-absolute position-absolute top-50 start-50 translate-middle text-white">
          <h3>Create an Amazing Newspaper</h3>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="p-3" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
