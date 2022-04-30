import React from "react";
import "./ButtonMenuHamburger.styl";
import iconMenu from "../../images/icon-menu.svg";

function ButtonMenuHamburger({ onClick }) {
  return (
    <button className="menu_hamburger" onClick={() => onClick()}>
      <img loading="lazy" className="menu_hamburger_image" src={iconMenu} alt="Menú mobile" />
    </button>
  );
}

export default ButtonMenuHamburger;
