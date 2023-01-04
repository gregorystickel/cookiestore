import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <address>
        Created by: <a href="mailto:gregory.stickel@live.com">Greg Stickel</a>
        126 Oliver Hardy Ct Harlem, GA 30814
      </address>
      <p>
        <a href="mailto:gregory.stickel@live.com">thecookiestore@gmail.com</a>
      </p>
    </footer>
  );
};
export default Footer;
