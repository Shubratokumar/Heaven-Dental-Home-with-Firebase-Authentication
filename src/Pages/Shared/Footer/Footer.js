import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="shadow p-3 m-3 bg-dark text-white rounded-3">
      <div className="container ">
        <div className="row text-center">
          <div className="col-sm-12 col-lg-6">
            <p className="footer">
            <span className="text-uppercase">
              &copy; <span>{new Date().getFullYear()}</span>{" "} 
              Heaven <span className="oranged">Dental</span> home | </span>
              Privacy Policy
            </p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <p className="footer">
                Dental Web Design and Developed by
              <span className="developer text-uppercase"> shubrato kumar</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
