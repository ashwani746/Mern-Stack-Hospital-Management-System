import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | DivMedicare Medical Institute"}
        imageUrl={"/about.png" }
      />
      <Biography imageUrl={"/whoweare.png"}  style={{ borderRadius: "10px" }} />
    </>
  );
};

export default AboutUs;