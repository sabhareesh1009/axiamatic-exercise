import React from "react";
import "./ProductSearch.css";
import ProductList from "./ProductList";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function ProductSearch() {
  return (
    <div className="productSearch">
      <div className="productsContainer">
        <div className="productList">
          <ProductList />
          <ProductList />
        </div>
        <div className="productList">
          <ProductList />
          <ProductList />
        </div>
        <div className="productCount">
          <p>0 Products added</p>
        </div>
      </div>
      <div className="productSelect">
        <Button className="indexBotton">1 of 3</Button>
        <h2 className="searchHeader">Let's add your internal tools</h2>
        <p className="searchDesc">
          Search to quickly add products your team users today. You'll be able
          to add as many as you need later but for now let's add four.
        </p>
        <input
          type="text"
          placeholder="Search for any sofware..."
          className="searchInput"
        />
        <Button className="nextButton">Next</Button>
      </div>
    </div>
  );
}

export default ProductSearch;
