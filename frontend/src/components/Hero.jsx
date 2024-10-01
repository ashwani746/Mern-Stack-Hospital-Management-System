import React from "react";
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Divcare Medical Institute is a modern facility focused on delivering
            top-quality healthcare with care and professionalism. Our expert
            team is dedicated to providing personalized treatments designed to
            meet the unique needs of every patient. At Divcare, your health is
            our priority, ensuring a smooth path to wellness and well-being.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
