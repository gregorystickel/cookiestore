import classes from "./HeroSection.module.css";
import Marquee from "react-fast-marquee";
import SmallCookie from "../images/smallcookie.png";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <Marquee  direction="right" pauseOnHover  gradientColor={[72, 202, 228]}  gradientWidth={200} className={classes.marquee}><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /><h2>New Cookies Added Daily</h2><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /><img className={classes.smallcookieimg} src={SmallCookie} alt="Small Cookie Icon" /></Marquee>
      <h1>Cookie Monster Cookies</h1>
      
    </section>
  );
};

export default HeroSection;
