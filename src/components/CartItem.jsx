import React from "react";
import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ id, key, image_url, name, price, quantity }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  
    
    const removeItem = () => {
      console.log("ID sent to remove Item",id)
      dispatch({
        type: "REMOVECARTITEM",
        payload: {id: id}
      })
           
      console.log("Remove Item");
      console.log("Cart Results",cart)
    };
 

  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <img src={image_url} alt="" />

        <div className={classes.item}>
          <h5>{name}</h5>
          <li>Price: {price.toFixed(2)}</li>
          <li>Quantity: {quantity}</li>
          <li>SubTotal: ${(quantity * price).toFixed(2)} </li>
        </div>
        
        
        <button onClick={removeItem}>Remove</button>
        
      </div>
    </div>
  );
};
export default CartItem;
