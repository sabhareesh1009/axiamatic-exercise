import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./ProductList.css";
import { IconButton } from "@mui/material";
function ProductList() {
  return (
    <div className="productsList">
      <div className="add">
        <div className="addIcon">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
