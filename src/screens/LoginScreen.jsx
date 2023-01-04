import React, { useRef, useState } from 'react';
import classes from "./LoginScreen.module.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const LoginScreen = () => {
const navigate = useNavigate();  
const [message, setMessage] = useState("");  
const userNameRef = useRef();
const passwordRef = useRef();
const dispatch = useDispatch();
//const isAuthenticated = useSelector((state) => state.isAuthenticated);


function handleSubmit(e) {
    e.preventDefault()
    
    axios
      .post("//localhost:4000/login", {
        user_name: userNameRef.current.value,
        password: passwordRef.current.value
      })
      .then(function (response) {
        //handle success
        if (response.data.success) {
          setMessage("Login Successful!!!");
          localStorage.setItem("user", userNameRef.current.value)
          dispatch({
            type: "LOGIN",
            payload: {
              isAuthenticated: true,
            },
          })
          localStorage.setItem("isAuthenticated", true)
          localStorage.setItem("userId", response.data.user.id)
          navigate("/");
          
          
        } else {
          setMessage("Login Failed!!!");
          
        }
      })
      .catch(function (res) {
        //handle error
        console.log(res.response.data.message);
        setMessage(res.response.data.message);
      });
  }

return (
<div className={classes.container}>

<form className={classes.loginform}>
    <input type="text" ref={userNameRef}/>
    <input type="password" ref={passwordRef}/>
    <button onClick={handleSubmit}>Log In</button>
    {message && <p className={classes.error}> {message} </p>}
</form>
</div>
)
};
export default LoginScreen;