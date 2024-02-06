import React from "react";
import "./HeroSection.css";
import rabdi1 from "../Assets/rabdi1.png"
import rabdi2 from "../Assets/rabdi2.png"
import rabdi3 from "../Assets/rabdi3.png"

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">A Delightful Journey Into The World of Indian Desserts</h1>
        <p className="hero-line">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          officiis vero fugit incidunt adipisci libero suscipit quas ullam harum
          assumenda nisi id beatae error.
        </p>

        <div className="hero-action-btn-container">
          <button className="btn">Book a Table</button>
          <span>
            <p>Or</p>
          </span>
          <button className="btn transparent">Check Out</button>
        </div>
      </div>

      <div className="hero-img-container">
        <div className="background-ele">
          <div className="ellipse"></div>
          <div className="ellipse"></div>
          <div className="ellipse"></div>
        </div>
        <div className="forground-elements">
          <img src={rabdi1} alt="" className="hero-img" />
          <img src={rabdi2} alt=""  className="hero-img"/>
          <img src={rabdi3} alt=""  className="hero-img"/>
          {/* <img src={icecream} alt=""  className="hero-img"/> */}
      
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
