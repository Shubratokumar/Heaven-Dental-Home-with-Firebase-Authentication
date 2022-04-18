import React from "react";
import GoogleLogo from "../../Assets/Images/google.svg";
import FacebookLogo from "../../Assets/Images/Facebook.svg";
import GitHubLogo from "../../Assets/Images/Github.svg";
import auth from "./../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handlefacebookSignIn = () => {
    signInWithFacebook();
  };
  const handleGitHubSignIn = () => {
    signInWithGithub();
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
