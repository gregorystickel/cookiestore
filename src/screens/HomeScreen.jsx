import React from "react";
import HeroSection from "../components/HeroSection";
import ProductContainer from "../components/ProductContainer";
import classes from './HomeScreen.module.css'

const HomeScreen = () => {
  return (
    <div className={classes.container}>
      <HeroSection />  
      <ProductContainer />

    </div>
  );
};

export default HomeScreen;
