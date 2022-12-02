import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../context/AuthProvider";
import Alert from "react-bootstrap/Alert";
import { toast } from "react-hot-toast";

function Register() {
  const [message, setMessage] = useState("");
  const { createUser } = useContext(AuthContext);
  const [passwordErr, setPasswordErr] = useState();
  const [emailErr, setEmailErr] = useState();
  const [cpasswordErr, setCpasswordErr] = useState();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;

    if (!email) {
      setEmailErr("Email field is required");
      return;
    } else {
      setEmailErr("");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailErr("You have entered an invalid email address!");
    } else {
      setEmailErr("");
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      setPasswordErr("Password must have at least one Lowercase Character.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^\S*$/.test(password)) {
      setPasswordErr("Password must not contain Whitespaces.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      setPasswordErr("Password must have at least one Uppercase Character.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      setPasswordErr("Password must contain at least one Digit.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/^(?=.*[0-9]).*$/.test(password)) {
      setPasswordErr("Password must contain at least one Digit.");
      return;
    } else {
      setPasswordErr("");
    }
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      setPasswordErr("Password must contain at least one Special Symbol.");
      return;
    } else {
      setPasswordErr("");
    }

    if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters");
      return;
    } else {
      setPasswordErr("");
    }
    if (!(cpassword === password)) {
      setCpasswordErr("Confirm password must be equal to password");
      return;
    } else {
      setEmailErr("");
      setPasswordErr("");
      setCpasswordErr("");
      setMessage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          form.reset();
          setMessage("User created successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
        });
    }
  };
  return (
    <Container>
      <Form onSubmit={handleRegister} style={{ width: "500px" }}>
        {["warning"].map(
          (variant) =>
            message && (
              <Alert key={variant} variant={variant}>
                {message}
              </Alert>
            )
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
          {emailErr ? (
            <Form.Text className="text-muted">{emailErr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasiPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
          {passwordErr ? (
            <Form.Text className="text-muted">{passwordErr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="cpassword"
            placeholder="Confirm Password"
          />
          {cpasswordErr ? (
            <Form.Text className="text-muted">{cpasswordErr}</Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
