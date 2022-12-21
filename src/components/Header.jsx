import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);


  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");

    dispatch({
      type: "LOGOUT",
      payload: {
        isAuthenticated: false,
      },
    });
    console.log(isAuthenticated)
    
  };

  return (
    <header className={classes.header}>
      <h1>The Cookie Store</h1>
      <nav>
        <ul>
          {!isAuthenticated && (
            <button
              className={classes.active}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          )}
          {!isAuthenticated && (
            <button
              className={classes.active}
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          )}
          <button className={classes.active} onClick={() => navigate("/cart")}>
            Cart
          </button>
          <button className={classes.active} onClick={() => navigate("/")}>
            Home{" "}
          </button>
          {isAuthenticated && (
            <button
              className={classes.active}
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
          )}
          {isAuthenticated && (
            <button className={classes.active} onClick={logout}>
              Logout
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
