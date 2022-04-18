import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail
} from "react-firebase-hooks/auth";

import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin";
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);  

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // redirect 
  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });  
     
  }

  const handleSignIn = async(event) => {
    event.preventDefault();
     await signInWithEmailAndPassword(email, password); 
     if(email && password){
       await toast.success("Successfully Login !!!")
     }
     if(error){
      await toast.error("There is an error!!!")
     }  
  };

  const resetPassword = async() =>{
    if(email){
      await sendPasswordResetEmail(email);
      await toast.success("Email Sent!!!")
    }
    else{
      toast.error('Please enter your email !!!')
    }
    
  }

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
                type="email"
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
        <p>Forgot Password?<button onClick={resetPassword} className='link-btn btn btn-link text-decoration-none  oranged'>Reset Password</button></p>
        <SocialLogin></SocialLogin>        
      </div>
    </div>
  );
};

export default Login;
