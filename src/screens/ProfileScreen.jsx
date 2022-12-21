import React, { useEffect, useState } from "react";
import classes from "./ProfileScreen.module.css";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({});
  const currentUser = localStorage.getItem("user");
  const currentUserId = localStorage.getItem("userId")
  const [ordersList, setOrdersList] = useState({});
  

  useEffect(() => {
    console.log("Display Info Current User", currentUser);

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

  useEffect (() => {
  console.log("userInfo.id",userInfo.id)  
  const list = axios
  .get(`//localhost:4000/getOrders?userId=${currentUserId}`)
  .then(function (response) {
    console.log("Orders Response:",response) 
    setOrdersList(response.data)   
         
  })
  .catch(function (err) {
    console.log(err);
  });  
}, []);
const displayOrders = ordersList.map((item) => {
    return (
  <div>
  <tr>  
  <td>{item.id}</td>
  <td>{item.salesTax}</td>
  <td>{item.subTotal}</td>
  <td>{item.total}</td>
  <td>{item.paymentType}</td>
  </tr>
  </div>
    )
  })


  console.log("ordersList State", ordersList)
  return (
    <div className={classes.container}>
      <h1>User Info:</h1>
      <ProfileCard userInfo={userInfo} />
      {ordersList.length === 0 && {displayOrders}}
      {/* {ordersList.map((item) => {
        return (
          <table>
      <tr>  
      <td>{item.id}</td>
      <td>{item.salesTax}</td>
      <td>{item.subTotal}</td>
      <td>{item.total}</td>
      <td>{item.paymentType}</td>
      </tr>
      </table>
        )
      })} */}
      
      
    </div>
  );
};
export default ProfileScreen;
