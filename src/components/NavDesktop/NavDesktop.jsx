import React from "react";
import "./NavDesktop.styl";
import MenuItem from "../MenuItem/MenuItem";

function NavDesktop() {
  return (
    <nav className="nav_desktop">
      <ul className="menu_desktop">
        <MenuItem route="/" displayName="Collections" />
        <MenuItem route="/" displayName="Men" />
        <MenuItem route="/" displayName="Women" />
        <MenuItem route="/" displayName="About" />
        <MenuItem route="/" displayName="Contact" />
      </ul>
    </nav>
  );
}

export default NavDesktop;
