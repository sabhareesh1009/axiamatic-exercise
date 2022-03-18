import React from 'react';
import './ProductSearch.css';

function ProductSearch() {
  return (
    <div className="productSearch">
        <div className="productSearchLeft">
            uploaded products
        </div>
        <div className="productSearchRight">
            <input type="search" />
        </div>
    </div>
  )
}

export default ProductSearch