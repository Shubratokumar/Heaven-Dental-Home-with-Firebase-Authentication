import React from "react";
import GoogleLogo from "../../../Assets/Images/google.svg";
import FacebookLogo from "../../../Assets/Images/Facebook.svg";
import GitHubLogo from "../../../Assets/Images/Github.svg";
import auth from "./../../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {

  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, error1] = useSignInWithFacebook(auth);
  const [signInWithGithub, user2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect 
  let from = location.state?.from?.pathname || "/";

  if(user || user1 || user2){
    navigate(from, { replace: true });    
  }  

  const handleGoogleSignIn = async() => {
    await signInWithGoogle();
    if(!error){
        toast.success("Successfully Login with Google!!!") 
    }
  };
  const handlefacebookSignIn = async() => {
    await signInWithFacebook();
    if(!error1){
        await toast.success("Successfully Login  with Facebook!!!")
    }
  };
  const handleGitHubSignIn = async() => {
    await signInWithGithub();
    await toast.success("Successfully Login  with GitHub!!!")
    if(error2){
        await toast.error('An error happend!!!');
    }
  };
  return (
    <div>
      <div className="horizontal-divider justify-content-center">
        <div className="line-left" />
        <p>or</p>
        <div className="line-right" />
      </div>
      <div className="social-container">
        <div className="input-wrapper mb-2">
          <button onClick={handleGoogleSignIn} className="social-auth">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
        <div className="input-wrapper mb-2">
          <button onClick={handlefacebookSignIn} className="social-auth">
            <img src={FacebookLogo} alt="" />
            <p> Continue with Facebook </p>
          </button>
        </div>
        <div className="input-wrapper mb-2">
          <button onClick={handleGitHubSignIn} className="social-auth">
            <img src={GitHubLogo} alt="" />
            <p> Continue with GitHub </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
