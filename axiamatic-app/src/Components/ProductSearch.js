import React, { useEffect, useState } from "react";
import "./ProductSearch.css";
import ProductList from "./ProductList";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { productDetails } from "../data";
import toast, { Toaster } from "react-hot-toast";

function ProductSearch() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect((e) => {
    if (sessionStorage.getItem("selectedProductes")) {
      const selectedProductDetails = JSON.parse(
        sessionStorage.getItem("selectedProductes")
      ).length
        ? JSON.parse(sessionStorage.getItem("selectedProductes"))
        : [];
        setSelectedData(selectedProductDetails);
    }
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    const newFilterData = productDetails.filter((value) =>
      value.productName.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (searchWord) {
      setFilteredData(newFilterData);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelectedProduct = (event) => {
    event.preventDefault();
    const selProdName = event.target.innerText;
    if (selProdName) {
      const selectedProduct = productDetails.filter(
        (value) => value.productName.toLowerCase() === selProdName.toLowerCase()
      );
      const indx = selectedData.findIndex(
        (prod) => prod?.productName.toLowerCase() === selProdName.toLowerCase()
      );
      if (indx > -1) {
        toast.error(`${selProdName} product is already added`);
      } else {
        if (selectedProduct.length) {
          if (selectedData && selectedData.length === 4) {
            return toast.error(
              `You'll be able to add as many as you need later but for now allowing to add max four`
            );
          }
          selectedProduct[0]["isSelected"] = selectedProduct[0]["isSelected"]
            ? false
            : true;
          const selctedProductDetails = [...selectedData];
          selctedProductDetails.push(selectedProduct[0]);
          setSelectedData(selctedProductDetails);
        }
      }
    }
  };

  const handleRemoveProduct = (event, productName) => {
    event.preventDefault();
    const selctedProductDetails = [...selectedData];
    const indx = selctedProductDetails.findIndex(
      (prod) => prod?.productName.toLowerCase() === productName.toLowerCase()
    );
    if (indx > -1) {
      selctedProductDetails.splice(indx, 1);
      setSelectedData(selctedProductDetails);
    }
  };

  const submitSelectedProduct = (event) => {
    event.preventDefault();
    if (selectedData.length) {
      sessionStorage.setItem("selectedProductes", JSON.stringify(selectedData));
      toast.success('Successfully Added!😃')
    } else {
      toast.error("Add atleast one product");
    }
  };

  return (
    <div className="productSearch">
      <div className="productsContainer">
        <div className="productList">
          <ProductList
            imgUrl={selectedData[0]?.imgUrl}
            productName={selectedData[0]?.productName}
            removeProduct={handleRemoveProduct}
          />
          <ProductList
            imgUrl={selectedData[1]?.imgUrl}
            productName={selectedData[1]?.productName}
            removeProduct={handleRemoveProduct}
          />
        </div>
        <div className="productList">
          <ProductList
            imgUrl={selectedData[2]?.imgUrl}
            productName={selectedData[2]?.productName}
            removeProduct={handleRemoveProduct}
          />
          <ProductList
            imgUrl={selectedData[3]?.imgUrl}
            productName={selectedData[3]?.productName}
            removeProduct={handleRemoveProduct}
          />
        </div>
        <div className="productCount">
          <p>{selectedData.length} Products added</p>
        </div>
      </div>
      <div className="productSelect">
        <Button className="indexBotton">1 of 3</Button>
        <h2 className="searchHeader">Let's add your internal tools</h2>
        <p className="searchDesc">
          Search to quickly add products your team users today. You'll be able
          to add as many as you need later but for now let's add four.
        </p>
        <div>
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for any sofware..."
            className="searchInput"
            onChange={handleFilter}
          />
        </div>
        {filteredData.length !== 0 && (
          <div className="dropdownList">
            <ul>
              {productDetails &&
                filteredData.map(({ productId, imgUrl, productName }) => (
                  <li
                    key={productId}
                    className="productInfo"
                    onClick={handleSelectedProduct}
                  >
                    <img src={imgUrl} alt="" className="productlogo" />
                    {productName}
                  </li>
                ))}
            </ul>
          </div>
        )}
        <div>
          <Button className={selectedData.length ? 'nextButton' : 'nextButton nextDisabled'} onClick={submitSelectedProduct}>
            <small>Next</small>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
