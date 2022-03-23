import React from "react";
import ProductSearch from "./ProductSearch";
import "./Product.css";
import { Toaster } from "react-hot-toast";

function Product() {
  return (
    <div className="product">
      <div><Toaster position="top-right"/></div>
      <div className="header">Exit Setup</div>
      <div className="logo">axiamatic</div>
      <div className="container">
        <ProductSearch />
      </div>
    </div>
  );
}

export default Product;
