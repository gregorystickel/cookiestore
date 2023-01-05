import React, { useEffect, useState } from "react";
import classes from "./ProfileScreen.module.css";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import OrderList from "../components/OrderList";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({});
  const currentUser = localStorage.getItem("user");
  const currentUserId = localStorage.getItem("userId");
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    axios
      .post("//localhost:4000/getUser", {
        user_name: currentUser,
      })
      .then(function (response) {
        const {
          id,
          fullname,
          street,
          city,
          state,
          postal,
          email,
          phone,
          username,
        } = response.data.user;

        setUserInfo({
          id: id,
          fullname: fullname,
          street: street,
          city: city,
          state: state,
          postal: postal,
          email: email,
          phone: phone,
          username: username,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`//localhost:4000/getOrders?userId=${currentUserId}`)
      .then(function (response) {
        console.log("Orders Response:", response);
        setOrdersList(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const ordersDisplay = ordersList.map((item) => {
    
    let newDate = new Date(item.createdAt);
    console.log("NewDate", newDate)
    let convertedDate = `${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear()}`;

    return (
      <OrderList
        order_items={item.order_items}
        date={convertedDate}
        id={item.id}
        key={item.id}
        salesTax={item.salesTax}
        subTotal={item.subTotal}
        total={item.total}
        paymentType={item.paymentType}
      />
    );
  });

  return (
    <div className={classes.container}>
      <h1>User Info:</h1>
      <ProfileCard userInfo={userInfo} />
      <h2>Previous Orders</h2>
      {ordersDisplay}
    </div>
  );
};
export default ProfileScreen;
