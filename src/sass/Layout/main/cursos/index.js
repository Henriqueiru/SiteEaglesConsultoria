import Images from "./data";

let title = document.querySelector(".cursos-titles");
const itemimages = document.querySelectorAll(".item > img");
itemimages.forEach((element, i) => {
  element.src = Images[i];
});
// mobile
Images.map((element) => {
  const content = document.createElement("li");
  content.setAttribute("class", "splide__slide");
  content.innerHTML = `<img src=${element} alt="images carrousel"/>`;

  document.querySelector(".splide__list").appendChild(content);
});
