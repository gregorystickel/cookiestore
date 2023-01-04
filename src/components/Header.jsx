import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import logo from "../images/cookielogo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        isAuthenticated: false,
      },
    });
    console.log(isAuthenticated);

    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
    window.location.reload(false);
  };

  return (
    <header className={classes.header}>
      <img src={logo} alt="Cookie Logo" />
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
