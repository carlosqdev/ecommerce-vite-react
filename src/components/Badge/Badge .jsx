import React from "react";
import "./Badge .styl";

function Badge({ articles }) {
  return (
    <span className="badge" title="Tienes articulos en tu carrito de compra">
      {articles}
    </span>
  );
}

export default Badge;
