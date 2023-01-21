import React, { useState } from "react";
// import PhotoList from "./PhotoList";

const Gallery = () => {
  const [photos] = useState([
    {
      name: "3 Amigos",
    },
    {
      name: "Millineum Falcon",
    },
    {
      name: "Scott",
    },
    {
      name: "Double Shot Practice",
    },
    {
      name: "Mark & Tim",
    },
    {
      name: "Load-out",
    },
    {
      name: "drum set",
    },
    {
      name: "Tim Devines",
    },
    {
      name: "set up",
    },
    {
      name: "Tim practice",
    },
    {
      name: "Scott Tim practice",
    },
    {
      name: "Double Shot Tobacco",
    },
    {
      name: "Double Shot License",
    },
    {
      name: "Double Shot Lunch",
    },
    {
      name: "Double Shot Alley",
    },
  ]);

  return (
    <div>
      <div>
        <h1 id="Gallery">Gallery</h1>
      </div>
      <div className="gallery-section">
        {photos.map((image, i) => (
          <img
            src={require(`../img/gallery/${i}-pic.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1 photo"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );  

  //

  //   );
};

export default Gallery;
