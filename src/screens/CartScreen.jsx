import React from "react";
import classes from "./CartScreen.module.css";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const CartScreen = () => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

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
        key={cartItem.id}
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

      <button className={classes.cartbutton} onClick={() => navigate("/order")}>
        Checkout
      </button>
    </div>
  );
};

export default CartScreen;
