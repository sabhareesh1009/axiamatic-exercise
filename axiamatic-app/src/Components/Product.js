import React from "react";
import ProductSearch from "./ProductSearch";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="header">Exit Setup</div>
      <div className="logo">axiamatic</div>
      <div className="container">
        <ProductSearch />
      </div>
    </div>
  );
}

export default Product;
