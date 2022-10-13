import React from "react";
import logo from "../img/ds-logo.jpg";
import hero from "../img/hero.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <div className="hero">
          <img src={hero} alt="band"></img>
        </div>
        <div className="ds-logo">
          <img src={logo} alt="logo" />
        </div>
      </main>
    </div>
  );
};

export default Home;
