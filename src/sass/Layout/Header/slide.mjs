export default function ShowSlides() {
  const Slide = document.querySelectorAll(".col-img");
  let index = 0;
  let time = 6000;

  Slide[index].classList.add("active");

  setInterval(() => {
    Slide[index].classList.remove("active");
    index++;
    if (index === Slide.length) index = 0;
    Slide[index].classList.add("active");
  }, time);
}
