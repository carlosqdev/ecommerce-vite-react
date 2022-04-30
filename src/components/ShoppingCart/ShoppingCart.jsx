import React from "react";
import "./ShoppingCart.styl";
import iconCart from "../../images/icon-cart.svg";
import Badge from "../Badge/Badge ";

function ShoppingCart() {
  return (
    <button className="shoppingCart">
      {/* Render: Yes the user has articles pending shopping */}
      <Badge articles="3" />

      <img className="shoppingCart_icon" src={iconCart} alt="Shopping Cart" />
    </button>
  );
}

export default ShoppingCart;
