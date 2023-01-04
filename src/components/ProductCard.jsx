import React, { useRef, useState } from "react";
import classes from "./ProductCard.module.css";
import { useSelector, useDispatch } from "react-redux";

const ProductCard = ({ id, image_url, name, description, price }) => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const quantityRef = useRef(0);

  const addCartHandler = () => {
    dispatch({
      type: "ADDCART",
      payload: {
        id: id,
        image_url: image_url,
        name: name,
        description: description,
        price: price,
        quantity: parseInt(quantityRef.current.value),
      },
    });
    console.log("Cart Results", cart);

    setMessage("Added!!!");
  };

  return (
    <div className={classes.card} key={id}>
      <div className={classes.container}>
        <img src={image_url} alt="" />
        <h2>{name}</h2>
        <h3>{message}</h3>
        <li key="{id}">{description}</li>
        <li key="{name}">${price.toFixed(2)}</li>
        <input
          type="number"
          id={id}
          name="quantity"
          ref={quantityRef}
          defaultValue="1"
          //min="1"
          //max="500"
        />

        <button onClick={addCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
