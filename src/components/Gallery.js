import React from "react";


const Gallery = () => {

const photos = [
  '0-pic.jpg', '1-pic.jpg','2-pic.jpg','3-pic.jpg','4-pic.jpg','5-pic.jpg','6-pic.jpg','7-pic.jpg','8-pic.jpg','9-pic.jpg','10-pic.jpg','11-pic.jpg','12-pic.jpg','13-pic.jpg','14-pic.jpg'
]
  
return (
    <div>
      <section className="gallery-section d-flex flex-wrap justify-content-around">
        <h1 id="Gallery">Gallery</h1>
        {/* <p>{currentCategory.name}</p> */}
        {photos.map((photo) => (
        <img
        src={`../img/gallery/${photo}`}
        alt='band'
        className="img-thumbnail mx-1"
        key={photo.name}
      />
    ))}
    </section>
    </div>

  );
};

export default Gallery;
