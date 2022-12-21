import React, { useEffect, useState } from "react";
import classes from "./OrderSummaryScreen.module.css";
import { useSelector } from "react-redux";
import axios from 'axios';


const OrderSummaryScreen = () => {
  const [message, setMessage] = useState("");
  const order = useSelector((state) => state.order);
  const [orderNumber, setOrderNumber] = useState('');
  //const userid = localStorage.getItem("userId")
  
  const data = {
    userId: order.userId,
    salesTax: order.salesTax,
    subTotal: order.subTotal,
    total: order.total,
    paymentType: order.paymentType,

  }
  
  useEffect(() => {

  axios
      .post("//localhost:4000/addOrder", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
        
        setMessage("Order Submitted")
        setOrderNumber(response.data.id)
        console.log("Axios Order",orderNumber)
        
        return 
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    
  
  }, [])
  console.log("Message:",message)
  console.log("Order Number", orderNumber)
  return (
    <div className={classes.container}>
      
      <div className={classes.message}>{message}</div>
      
      <h3>Order Number:{orderNumber}</h3>
      <ul>       
      <li>SubTotal: ${data.subTotal}</li>  
      <li>salesTax: ${data.salesTax}</li>
      <li>Total: ${data.total}</li>
      <li>Payment Type:{data.paymentType}</li>
      </ul>
    </div>
  );
};
export default OrderSummaryScreen;
