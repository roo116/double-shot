import React from "react";
import photo from "../img/gallery/0-pic.jpg";

const Gallery = (props) => {

  const currentCategory = {
    name: "Gallery",
    description: "photos of Double Shot",
  };

  return (
    <div>
      <section className="gallery-section d-flex flex-wrap justify-content-around">
        <h1 id="Gallery">{currentCategory.name}</h1>
        {/* <p>{currentCategory.name}</p> */}
        <img className ="img-thumbnail img-fluid mx-1" src={photo} alt="gallery" />
      </section>
    </div>
  );
};

export default Gallery;
