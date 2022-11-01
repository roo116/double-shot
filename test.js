// create a gallery
// create the html page
// create js file
// function to get the HTML created to cycle though an array to pull the gallery files from the image directory

// const createDiv = document.createElement('div').className("photo")
const photos = [
  { name: "./src/img/gallery/0-pic.jpg" },
  { name: "./src/img/gallery/1-pic.jpg" },
  { name: "./src/img/gallery/2-pic.jpg" },
];

// for(let i=0; i<photos.length; i++) {
//   let html = `
//   <img src="${photos[i]}" alt="band" class="img-thumbnail mx1" />
//   `;
//   console.log(html)
// }

photos.map((photo) => {
  let html = `<li src=${photo.name} alt="band" class="img-thumbnail mx1"></li>`;
  console.log(html);
});
