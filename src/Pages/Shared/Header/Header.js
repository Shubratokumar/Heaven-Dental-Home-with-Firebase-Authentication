import React from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLInk/CustomLink";
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import toast from "react-hot-toast";

const Header = () => {
    const [ user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        toast.success("Successfully Logout!!!", {
            duration: 3000,
            style: {
              background: "black",
              color: "white",
            },
          });
      };

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-4 bg-body rounded-3 sticky-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Heaven <span className="oranged">Dental</span> Home</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <CustomLink className="nav-link" to="/">Home</CustomLink>
                    </li>
                    <li className="nav-item">
                    <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                    </li>
                    <li className="nav-item">
                    <CustomLink className="nav-link" to="/about">About</CustomLink>
                    </li>
                </ul>
                <div className="d-flex">
                    {
                        user?.uid ? 
                        <>
                        <img className="login-img" src=
                            {
                                user?.photoURL ? user?.photoURL : ""
                            } 
                        alt="" />
                        <CustomLink className="nav-link"  to='user'>{user?.displayName ? user?.displayName : ""}</CustomLink>
                        {/* <Link className="" to=''>{user?.displayName ? user?.displayName : ""}</Link> */}
                         <CustomLink  onClick={logout} className="nav-link" to="/login">Signout</CustomLink> 
                        </>
                        :
                        <CustomLink className="nav-link" to="/login">Login</CustomLink>
                    }
                </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Header;
