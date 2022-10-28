// create a gallery
// create the html page
// create js file
// function to get the HTML created to cycle though an array to pull the gallery files from the image directory

const photos = ["./src/img/gallery/0-pic.jpg", "./src/img/gallery/1-pic.jpg", "./src/img/gallery/2-pic.jpg"];



for(let i=0; i<photos.length; i++) {
  let html = `
  <img src="${photos[i]}" alt="band" class="img-thumbnail mx1" /> 
  `;
  console.log(html)
}

