import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={classes.header}>
            <h1>The Cookie Store</h1>
            <nav>
            <ul>
            <button className={classes.active} onClick={()=>navigate("/signup")} >Sign Up</button>
            <button className={classes.active} onClick={()=>navigate("/login")}>Sign In</button>
            <button className={classes.active} onClick={()=>navigate("/cart")}>Cart</button>
            <button className={classes.active} onClick={()=>navigate("/")}>Home </button>
            </ul>
             </nav>
        </header>  
    )
};

export default Header;