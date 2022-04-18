import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword,  error] =
    useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification: true});
    const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    if(email && password && confirmPassword === password){
        await createUserWithEmailAndPassword(email, password);
        await toast.success("Successfully Registered !!!")
        navigate("/"); 
    }
    if(confirmPassword !== password){
        toast.error("Password doesn't match!!!")
    }
    if(error){
        await toast.error("There is an error!!!")
    }

  };
  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
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
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirmPassword"
                id="confirm-password"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        <p className="mt-3">
          Already have an account?{" "}
          <Link className="text-decoration-none oranged" to="/login" >Login</Link>
        </p>
        <SocialLogin></SocialLogin>  
      </div>
    </div>
  );
};

export default Register;
