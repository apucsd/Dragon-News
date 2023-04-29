import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/categories/0";
  console.log("Login page:", location);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);?
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      <br />
      <Form
        onSubmit={handleLogin}
        className="w-25 mx-auto my-2
     bg-white p-4 rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className="w-full text-center ">
          <Button variant="dark" type="submit">
            Login
          </Button>
        </div>
        <div>
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
