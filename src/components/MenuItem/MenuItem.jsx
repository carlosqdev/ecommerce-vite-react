import React from "react";
import "./MenuItem.styl";
import { Link } from "react-router-dom";

function MenuItem({ route, displayName }) {
  return (
    <li className="menuItem">
      <Link className="navLink" to={route}>
        {displayName}
      </Link>
    </li>
  );
}

export default MenuItem;
