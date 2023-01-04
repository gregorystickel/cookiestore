import React, { useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import classes from "./ProductContainer.module.css";
import axios from "axios";

const ProductContainer = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/allProducts")
      .then((response) => {
        console.log("Axios", response);
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("ProductList", productList);
  const productDisplay = productList.map((product, index) => {
    console.log("Product", product, index);
    console.log("Product.name", product.name);
    return (
      <ProductCard
        id={product.id}
        key={product.id}
        image_url={product.image_url}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    );
  });

  return <div className={classes.container}>{productDisplay}</div>;
};
export default ProductContainer;
