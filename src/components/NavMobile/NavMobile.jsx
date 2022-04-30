import React from "react";
import "./NavMobile.styl";
import iconClose from "../../images/icon-close.svg";
import MenuItem from "../MenuItem/MenuItem";

function NavMobile({ onClick, showNavMobile=false }) {
  return (
    <nav
      className={showNavMobile ? "nav_mobile nav_mobile_active" : "nav_mobile"}
    >
      <section className="nav_mobile_wrapper">
        <button onClick={() => onClick()} className="nav_mobile_btn">
          <img src={iconClose} alt="Ocultar menú" />
        </button>

        <ul className="nav_mobile_menu">
          <MenuItem route="/" displayName="Collections" />
          <MenuItem route="/" displayName="Men" />
          <MenuItem route="/" displayName="Women" />
          <MenuItem route="/" displayName="About" />
          <MenuItem route="/" displayName="Contact" />
        </ul>
      </section>
    </nav>
  );
}

export default NavMobile;
