import React, { useEffect } from "react";
import classes from "./CartScreen.module.css";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/getCart")
  //     .then((response) => {
  //       console.log("Axios", response);
  //       setCart(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  console.log(cart);
  const initialValue = 0;
  const cartTotal = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );

  const cartDisplay = cart.map((cartItem, index) => {
    console.log("Cart Item", cartItem, index);
    console.log("Cart Item Name", cartItem.name);
    return (
      <CartItem
        id={cartItem.id}
        key={cartItem.index}
        image_url={cartItem.image_url}
        name={cartItem.name}
        description={cartItem.description}
        price={cartItem.price}
        quantity={cartItem.quantity}
      />
    );
  });
  return (
    <div className={classes.container}>

      <h1>Cart</h1>
      <h2>Total: ${cartTotal.toFixed(2)}</h2>
      {cartDisplay}
      
      <button className={classes.cartbutton}>Checkout</button>
    </div>
  );
};

export default CartScreen;
