import React, { useRef } from "react";
import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ id, image_url, name, price, quantity }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const quantityRef = useRef(0);

  const removeItem = () => {
    console.log("ID sent to remove Item", id);
    dispatch({
      type: "REMOVECARTITEM",
      payload: { id: id },
    });

    console.log("Remove Item");
    console.log("Cart Results", cart);
  };

  const updateQuantityHandler = () => {
    console.log(id, quantityRef.current.value);
    dispatch({
      type: "UPDATEQUANTITY",
      payload: {
        id: id,
        quantity: parseInt(quantityRef.current.value),
      },
    });
    console.log("Update Quantity Executed", cart);
  };

  return (
    <div className={classes.card} key={id}>
      <div className={classes.container}>
        <img src={image_url} alt="" />

        <div className={classes.item}>
          <div className={classes.name_price}>
          <li >{name}</li>
          <li >Price: ${price.toFixed(2)}</li>
          {/* <li>Quantity: {quantity}</li> */}
          <li >SubTotal: ${(quantity * price).toFixed(2)} </li>
          </div>
          <div className={classes.quantity}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              defaultValue={quantity}
              min="1"
              max="1000"
              onChange={updateQuantityHandler}
              ref={quantityRef}
            />
          </div>
        </div>

        <button onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};
export default CartItem;
