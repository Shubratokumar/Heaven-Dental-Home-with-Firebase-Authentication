import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLInk/CustomLink";
import './Header.module.css'
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-4 bg-body rounded-3">
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
                    <CustomLink className="nav-link" to="/login">Login</CustomLink>
                </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Header;
