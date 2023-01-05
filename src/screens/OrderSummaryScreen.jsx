import React, { useEffect, useState } from "react";
import classes from "./OrderSummaryScreen.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const OrderSummaryScreen = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  const [orderNumber, setOrderNumber] = useState("");

  const newCart = cart.map(
    ({
      id: product_id,
      image_url: product_image_url,
      name: product_name,
      price: product_price,
      quantity: product_quantity,
      ...rest
    }) => ({
      product_id,
      product_image_url,
      product_name,
      product_price,
      product_quantity,
      ...rest,
    })
  );
  newCart.forEach((item) => {
    delete item.description;
  });
  console.log("newCart", newCart);

  console.log(cart);
  const data = {
    userId: order.userId,
    salesTax: order.salesTax,
    subTotal: order.subTotal,
    total: order.total,
    paymentType: order.paymentType,
    newCart: newCart,
  };

  useEffect(() => {
    axios
      .post("http://localhost:4000/addOrder", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        //handle success
        console.log(response);

        setMessage("Order Submitted");
        setOrderNumber(response.data.id);
        console.log("Axios Order", orderNumber);

        return;
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, []);
  const clearCart = () => {
    dispatch({
      type: "RESETCART",
    });
  };
  console.log("Message:", message);
  console.log("Order Number", orderNumber);
  return (
    <div className={classes.container}>
      <div className={classes.message}>{message}</div>

      <h1>Thanks for Ordering</h1>

      <h3>Order Number:{orderNumber}</h3>
      <ul>
        {newCart.map((item) => {
          return (
            <div className={classes.order_items} key={item.product_id}>
              <li>
                Item: {item.product_name} Quantity:{item.product_quantity}
              </li>
            </div>
          );
        })}
        <li>SubTotal: ${data.subTotal}</li>
        <li>salesTax: ${data.salesTax}</li>
        <li>Total: ${data.total}</li>
        <li>Payment Type:{data.paymentType}</li>
      </ul>
      <Link to={"/"}>
        <button onClick={clearCart}>Continue Shopping</button>
      </Link>
    </div>
  );
};
export default OrderSummaryScreen;
