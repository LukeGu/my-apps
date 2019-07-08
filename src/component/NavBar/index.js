import React from "react";
import "./index.css";
import Button from "../Button/index";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu-dash.svg";
import Profile from "../../assets/profile.svg";

const navBar = props => {
  let myMenu =
    window.innerWidth <= 540 ? (
      <i className="fas fa-bars" />
    ) : (
      <form className="my-menu-group">
        <Button
          className="my-btn-hover"
          src={MenuIcon}
          width="20"
          height="20"
          alt="menu"
        />
        <Button
          className="my-btn-hover"
          src={Profile}
          width="28"
          height="28"
          alt="profile"
        />
      </form>
    );
  return (
    <div>
      <nav className="my-navbar my-navbar-bg">
        <a className="logo" href="home">
          <img src={Logo} width="38" height="38" alt="logo" />
        </a>
        {myMenu}
      </nav>
      <nav className="my-header-bg my-navbar">
        <div className="my-header-title">
          <p className="my-title my-dash">Dashboard >> My apps</p>
          <h3 className="my-title">My Apps</h3>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
