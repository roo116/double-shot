import React from "react";

const Gallery = () => {
  const photos = [
    { name: '"./img/gallery/0-pic.jpg"' },
    { name: '"./img/gallery/1-pic.jpg"' },
    { name: '"./img/gallery/2-pic.jpg"' },
  ];

  photos.forEach
  return (
    <div className="gallery-section d-flex flex-wrap justify-content-around">
      <div>
        <h1 id="Gallery">Gallery</h1>
      </div>
      <ul className="photo-list">
        {photos.forEach((photo, i) => (
          <li keyName={photo[i].name}>
            <img src={photo[i].name} alt="band" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
