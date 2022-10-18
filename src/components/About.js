import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import scott from "../img/band/scott.jpg";
import tim from "../img/band/tim.jpg";
import mark from "../img/band/mark.jpg";
import chip from "../img/band/chip.jpg";

const About = () => {
  const members = [
    {
      name: "Scott Sublett",
      img: scott,
      caption: "Lead Vocals, Drums",
    },
    { name: "Tim Blinsmon", img: tim, caption: "Vocals, Bass" },
    { name: "Mark Allman", img: mark, caption: "Vocals, Guitar" },
    { name: "Chip Hill", img: chip, caption: "Vocals, Guitar" },
  ];
  return (
    <div className="about-container bg-black d-flex flex-wrap flex-column flex-sm-row">
      <div className="about-text bg-white mb-5">
        <h2 className="ds-font">DOUBLE SHOT</h2>
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

      <div className="about-photo d-flex flex-wrap justify-content-around mx-auto">
      {members.map((member) => (
                <div className="card border-0 mx-2" key={member.name}>
                <img src={member.img} className="card-img rounded-0" alt={member.name} />
                <div className="card-body bg-black text-light">
                  <p>{member.name}: {member.caption}</p>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
};

export default About;
