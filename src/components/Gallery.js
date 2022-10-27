import React from "react";
// import PhotoList from "./PhotoList";

const Gallery = () => {
  const photos = [
    {
      name: "/img/gallery/0-pic.jpg",
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

  photos.map((photo, i) => {console.log(photo[i].name)}


//   return (
//     <div>
//       <section className="gallery-section d-flex flex-wrap justify-content-around">
//         <h1 id="Gallery">Gallery</h1>
//         <div>
//       {photos.map((photo, i) => (
//         <img
//           src={photo[i].name}
//           alt={photo[i].name}
//           className="img-thumbnail mx-1"
//           key={photo[i].name}
//         />
//       ))}
//           </div>
//       </section>



//   );
// };

// export default Gallery;
