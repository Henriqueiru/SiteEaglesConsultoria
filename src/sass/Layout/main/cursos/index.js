import Images from "./data";
const itemimages = document.querySelectorAll(".item > img");
itemimages.forEach((element, i) => {
  element.src = Images[i];
});

Images.map((element) => {
  const content = document.createElement("div");
  content.setAttribute("class", "crl");
  content.innerHTML = `<img src=${element} alt="images carrousel"/>`;

  document.querySelector(".mb").appendChild(content);
});

// Images.map((element) => {
//   const content = document.createElement("div");
//   content.setAttribute("class", "crl");
//   content.innerHTML = `<img src=${element} alt="images carrousel"/>`;

//   document.querySelector(".mb").appendChild(content);
// });