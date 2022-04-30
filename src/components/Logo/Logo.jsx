import React from "react";
import "./Logo.styl";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <Link to="/">
      <img loading="lazy" className="header_logo" src={logo} alt="Logo Sneakers" />
    </Link>
  );
}

export default Logo;
