import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [acceptTerms, setAcceptTerms] = useState(false);
  // console.log(user);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, photoURL, name);
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        }).then(console.log("name & url updated"));
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };
  return (
    <div className="bg-secondary">
      <br />

      <Form
        onSubmit={handleRegister}
        className="w-25 mx-auto 
       bg-white p-4 rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name </Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Photo URL</Form.Label>
          <Form.Control
            type="url"
            name="photoURL"
            placeholder="Enter PhotoURL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
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
        <br />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleTerms}
            type="checkbox"
            label={
              <p>
                {" "}
                Accept <Link to="/terms">terms & condition</Link>
              </p>
            }
          />
        </Form.Group>

        <div className="w-full text-center ">
          <Button disabled={!acceptTerms} variant="dark" type="submit">
            Register
          </Button>
        </div>
        <div>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </Form>
      <br />
    </div>
  );
};

export default Register;
