import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";

import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);  

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input
                onBlur={handleEmailBlur}
                type="text"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p className="mt-3">
          New to Heaven Dental Home?{" "}
          <Link className="text-decoration-none oranged" to="/register" >Create New Account</Link>
        </p>
        <SocialLogin></SocialLogin>        
      </div>
    </div>
  );
};

export default Login;
