import Glide from "@glidejs/glide";

if (document.querySelector(".glide")) {
  new Glide(".glide", {
    type: "carousel",
    hoverpause: true,
    perView: 1,

    autoplay: true,
    autoplay: 4000,
    animationDuration: 1000,
  }).mount();
}
