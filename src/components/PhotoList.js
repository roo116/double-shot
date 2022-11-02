import React from "react";
// import photo from "../img/band/0-pic.jpg";

const PhotoList = () => {
  const photos = [
    {
      name: "./img/gallery/0-pic.jpg",
      key:"0-pic.jpg"
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  console.log(photos[0].name)

  return (
    <div>
      {photos.map((photos, i) => (
        <img
          src={photos[i].name}
          alt={photos[i].name}
          className="img-thumbnail mx-1"
          key={photos[i].name}
        />
      ))}
    </div>
  );
};

export default PhotoList;
