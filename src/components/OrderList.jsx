import React from "react";
import classes from "./OrderList.module.css";

const OrderList = ({
  id,
  salesTax,
  subTotal,
  total,
  paymentType,
  date,
  order_items,
}) => {
  console.log("order_items", order_items);
  console.log("Date", date)
  const dispalyOrderItems = order_items.map((item) => {
    console.log("Running displayOrderItems");
    console.log("displayOrderItems", item);

    return (
      <div className={classes.order_item_card} key={item.product_id}>
        <img src={item.product_image_url} alt="Product" />
        <p>{item.product_name}</p>
        <p>price: ${item.product_price.toFixed(2)}</p>
        <p>quantity: {item.product_quantity}</p>
      </div>
    );
  });
  return (
    <div className={classes.card}>
      <div>
        <table>
          <tbody>
          <tr>
            <th>Date</th>
            <th>Order#</th>
            <th>Tax</th>
            <th>SubTotal</th>
            <th>Total</th>
            <th>Payment Type</th>
          </tr>
          <tr>
            <td>{date}</td>
            <td>{id}</td>
            <td>${salesTax.toFixed(2)}</td>
            <td>${subTotal.toFixed(2)}</td>
            <td>${total.toFixed(2)}</td>
            <td>{paymentType}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.order_items}>{dispalyOrderItems}</div>
    </div>
  );
};

export default OrderList;
