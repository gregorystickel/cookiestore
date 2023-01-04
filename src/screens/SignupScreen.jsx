import React, { useState } from "react";
import classes from "./SignupScreen.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const form = document.querySelector("#signupform");
    const formData = new FormData(form);
    const values = [...formData.entries()];
    //console.log(values);
    console.log(values);

    axios
      .post("//localhost:4000/adduser", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        //handle success
        console.log(response);
        if (response.data[1]) {
          setMessage("User Created!!!");
          navigate("/login");
        } else {
          setMessage("User All Ready Exists!!!");
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div className={classes.container}>
      <form className={classes.signupform} id="signupform">
        {message && <p> {message} </p>}
        <input type="text" name="user_name" defaultValue="UserName" />
        <input type="password" name="password" defaultValue="Password" />
        <input type="text" name="full_name" defaultValue="Full Name" />
        <input
          type="text"
          name="street_address"
          defaultValue="Street Address"
        />
        <input type="text" name="city" defaultValue="City" />
        <input type="text" name="state" defaultValue="State" />
        <input type="text" name="postal" defaultValue="Zip Code" />
        <input type="email" name="email" defaultValue="email" />
        <input type="text" name="phone" defaultValue="phone" />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};
export default SignupScreen;
