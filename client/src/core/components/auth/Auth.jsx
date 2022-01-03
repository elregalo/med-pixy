import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import signinImage from "../../assets/images/signin.jpg";

const initialState = {
  fullName: "",
  username: "",
  email: "",
  mobileNumber: "",
  avatarUR: "",
  password: "",
  confirmPassowrd: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   
  };
   const handleSubmit = (e) => {
        e.preventDefault();

   };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <Form onSubmit={handleSubmit}>
            {isSignup && (
              <Form.Group className="auth__form-container_fields-content_input">
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="fullName"
                  placeholder="Enter Fullname...."
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            <Form.Group className="auth__form-container_fields-content_input">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                name="username"
                placeholder="Enter Username...."
                onChange={handleChange}
              />
            </Form.Group>
            {isSignup && (
              <Form.Group className="auth__form-container_fields-content_input">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="mobileNumber"
                  placeholder="Enter Mobile Number...."
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            {isSignup && (
              <Form.Group className="auth__form-container_fields-content_input">
                <Form.Label>Avatar Url</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="avatarURL"
                  placeholder="Enter Avatar URL...."
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            <Form.Group className="auth__form-container_fields-content_input">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter Password...."
                onChange={handleChange}
              />
            </Form.Group>
            {isSignup && (
              <Form.Group className="auth__form-container_fields-content_input">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password...."
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            <div className="auth__form-container_fields-content_button">
                <Button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            </div>
          </Form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? " Sign In" : " Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Auth;
