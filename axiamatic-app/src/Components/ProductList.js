import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./ProductList.css";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
function ProductList({ imgUrl, productName, removeProduct}) {
  const handleRemove = (event) => {
    event.preventDefault();
    removeProduct(event, productName);
  }
  return (
    <div className="productsList">
      <div className="add">
        {(imgUrl && productName && (
          <div className="selectedProduct">
            <img src={imgUrl} alt="" className="selectedlogo" />
            <p className="productName">{productName}</p>
          </div>
        )) || <AddIcon className="addIcon" />}
        {imgUrl && productName && <p className="remove" onClick={handleRemove}><RemoveCircleIcon className="removeCircle" /> Remove</p>}
      </div>
    </div>
  );
}

export default ProductList;
