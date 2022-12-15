import classes from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={classes.hero} >
       <h1>Cookie Monster Cookies</h1>
       <button>Order Now</button>      
    </section>
  );
};

export default HeroSection;
