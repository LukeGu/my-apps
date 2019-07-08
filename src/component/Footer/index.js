import React from "react";
import "./index.css";

const footer = props => {
  return (
    <nav className="my-navbar fixed-bottom my-flex justify-content-center my-footer-bg">
      <div className="my-footer-group">
        <p className="my-year my-font">2019 © NETFRONT</p>
        <div className="my-others">
          <a className="my-font" href="privacy">
            Privacy
          </a>
          <span className="my-line">|</span>
          <a className="my-font" href="terms">
            Terms & Conditions
          </a>
          <span className="my-line">|</span>
          <a className="my-font" href="contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default footer;
