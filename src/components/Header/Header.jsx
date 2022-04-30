import React, { useState, useEffect } from "react";
import "./Header.styl";

import Logo from "../Logo/Logo";
import NavDesktop from "../NavDesktop/NavDesktop";
import NavMobile from "../NavMobile/NavMobile";
import ButtonMenuHamburger from "../ButtonMenuHamburger/ButtonMenuHamburger";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Avatar from "../Avatar/Avatar";

function Header() {
  const [screenMobile, setScreenMobile] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);

  useEffect(() => {
    getSizeScreen();

    window.addEventListener("load", getSizeScreen);
    window.addEventListener("resize", getSizeScreen);

    return function unsubscribe() {
      window.removeEventListener("load", getSizeScreen);
      window.removeEventListener("resize", getSizeScreen);
    };
  });

  function getSizeScreen() {
    if (window.innerWidth < 1024)
      setScreenMobile(true);
    else {
      setScreenMobile(false);
      setShowNavMobile(false);
    }
  }

  function showOrHideNavMobile() {
    setShowNavMobile(!showNavMobile);
  }

  return (
    <header className="header">
      <section className="header_wrapper">
        <div className="header_content content_left">
          <Logo />

          {/* Render: Menu Hamburger or Navigation desktop */}
          {screenMobile ? (
            <ButtonMenuHamburger onClick={showOrHideNavMobile} />
          ) : (
            <NavDesktop />
          )}

          {/* Render: Navigation mobile */}
          {showNavMobile && (
            <NavMobile
              onClick={showOrHideNavMobile}
              showNavMobile={showNavMobile}
            />
          )}
        </div>

        <div className="header_content content_right">
          <ShoppingCart />
          <Avatar />
        </div>
      </section>
    </header>
  );
}

export default Header;
