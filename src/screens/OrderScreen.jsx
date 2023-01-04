import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./OrderScreen.module.css";
import { useNavigate } from "react-router-dom";

const OrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const paymentRef = useRef();
  const cardNumberRef = useRef();
  const expDateRef = useRef();
  console.log(cart);

  const changeSelectPaymentHandler = (e) => {
    setSelected(e.target.value);
    console.log("Selected:", selected);
  };

  const initialValue = 0;
  const cartTotal = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );
  const salesTax = cartTotal * 0.07;

  const orderDisplay = cart.map((cartItem, index) => {
    console.log("Cart Item", cartItem, index);
    console.log("Cart Item Name", cartItem.name);

    console.log(order);

    return (
      
      <tr key={cartItem.id}>
        <td>{cartItem.name}</td>
        <td>${cartItem.quantity}</td>
        <td>${cartItem.price.toFixed(2)}</td>
        <td>${(cartItem.quantity * cartItem.price).toFixed(2)}</td>
      </tr>
            
    );
  });

  const createOrder = () => {
    dispatch({
      type: "ADDORDER",
      payload: {
        userId: localStorage.getItem("userId"),
        salesTax: salesTax.toFixed(2),
        subTotal: cartTotal.toFixed(2),
        total: (salesTax + cartTotal).toFixed(2),
        paymentType: paymentRef.current.value,
        // cardNumer: cardNumberRef.current.value,
      },
    });
    navigate("/ordersummary");
    console.log("Order State", order);
  };

  return (
    <div className={classes.container}>
      <h1>Current Order</h1>
      <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Item Price</th>
          <th>Item Total</th>
        </tr>
        {orderDisplay}
        <tr className={classes.fullrow}><td colSpan="4">SubTotal: ${cartTotal.toFixed(2)}</td></tr>
        <tr className={classes.fullrow}>
          <td colSpan="4">
          Sales Tax: ${(cartTotal * 0.07).toFixed(2)}
          </td>
        </tr>
      </tbody>  
      </table>
      <form>
        <h2>Payment Information</h2>
        <select
          id="payment-type"
          name="payment-type"
          onChange={changeSelectPaymentHandler}
          ref={paymentRef}
        >
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Check">Check</option>
        </select>
        <div className={classes.cardinfo}>
          {selected === "Credit Card" && (
            <label for="card-number">Card Number</label>
          )}
          {selected === "Credit Card" && (
            <input
              type="text"
              id="card-number"
              name="card-number"
              ref={cardNumberRef}
            />
          )}
          {selected === "Credit Card" && <label for="exp-date">Exp Date</label>}
          {selected === "Credit Card" && (
            <input type="text" id="exp-date" name="exp-date" ref={expDateRef} />
          )}
          {selected === "Credit Card" && <label for="">Security Code</label>}
          {selected === "Credit Card" && (
            <input type="text" name="security-code" id="security-code" />
          )}
        </div>
      </form>

      <h2>Total: ${(salesTax + cartTotal).toFixed(2)}</h2>
      <button onClick={createOrder}>Place Order</button>
    </div>
  );
};
export default OrderScreen;
