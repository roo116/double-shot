import React from "react";
// import PhotoList from "./PhotoList";

const Gallery = () => {
  const photos = ["../img/gallery/0-pic.jpg"];

  return (
    <section className="gallery-section d-flex flex-wrap justify-content-around">
         <div>
         <h1 id="Gallery">Gallery</h1>
         </div>
         <div>
       {photos.map((photo, i) => (
         <img
           src={photo[i].name}
           alt={photo[i].name}
           className="img-thumbnail mx-1"
           key={photo[i].name}
         />
       ))}
 </div>
       </section>

  )

//       


//   );
};

export default Gallery;
