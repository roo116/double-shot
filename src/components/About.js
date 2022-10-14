import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import scott from "../img/band/scott.jpg";
import tim from "../img/band/tim.jpg";
import mark from "../img/band/mark.jpg";
import chip from "../img/band/chip.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <h2>Double Shot</h2>
        <p>
          Durham’s own Double Shot Band - known for playing all the favorite
          classic rock covers from the Allman Brothers to ZZ Top. We play hits
          from the 70's, 80's and 90's. Scott Sublett pounds the drums and belts
          out the vocals. Mark Allman and Chip Hill play those favorite guitar
          licks you love to hear. And last but not least, Tim Blinsmon on the
          bass covers those bottom grooves. Put it all together and the
          experience is one that is not to be missed!! Scott hails from the
          great state of Georgia, but he has called Durham home for many years.
          Chip lives in Carrboro and Mark and Tim are good ol' local boys born
          and raised in Durham.
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-around">
        <img src={scott} alt="scott"></img>
        <img src={tim} alt="tim"></img>
        <img src={mark} alt="mark"></img>
        <img src={chip} alt="chip"></img>
      </div>
    </div>
  );
};

export default About;
