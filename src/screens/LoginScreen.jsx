import React, { useRef } from 'react';
import classes from "./LoginScreen.module.css"

const LoginScreen = () => {
const userNameRef = useRef();
const passwordRef = useRef();

function handleSubmit(e) {
    e.preventDefault()
    console.log(userNameRef.current.value, passwordRef.current.value);
    
  }

return (
<div className={classes.container}>

<form className={classes.loginform}>
    <input type="text" ref={userNameRef}/>
    <input type="password" ref={passwordRef}/>
    <button onClick={handleSubmit}>Log In</button>
</form>
</div>
)
};
export default LoginScreen;