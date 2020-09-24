// page home global stylesheet

// navbar components
import "./sass/Layout/Navbar/index";
import Splide from "@splidejs/splide";
// component curso js
import "./sass/Layout/main/cursos";
import "./sass/Layout/main/cursos/index";

// slideshow computer on the header
// text effect scrooll
import "./sass/Layout/Header/textEffect";
import "./sass/Layout/Header/slide";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollToPlugin);

gsap.to(".b1", { duration: 2, text: "Seja bem-vindo a", ease: "none" });

gsap.to(".b2", {
  duration: 2,
  delay: 2,
  opacity: 1,
  text: "Eagles Consultoria",
  ease: Power3,
});

// SLIDE CARROUSEL

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#secondary-slider", {
    fixedWidth: 300,
    width: "100%",

    focus: false,
    cover: true,
    height: "600px",
    flickPower: 100,

    rewind: true,
    breakpoints: {
      768: {
        fixedWidth: 200,
        focus: "center",
        height: 400,
      },
    },

    gap: 10,
    pagination: false,
  }).mount();
});
gsap.registerPlugin(ScrollTrigger);

// component #1 animations
let c1 = ScrollTrigger.matchMedia({
  "(min-width: 900px)": () => {
    let c1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated",
        scrub: 0.2,
        start: "top top",
        end: "100%",
      },
    });
    c1.fromTo(
      ".animated .row",

      { opacity: 1, y: 0, autoAlpha: 1 },
      { opacity: 0, y: 50, autoAlpha: 0, duration: 1 }
    );

    let c2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        scrub: 0.2,
        start: "-50%",
        end: "10%",
      },
    });
    c2.fromTo(
      ".content .sobre",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );

    let c3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".splide__list",
        scrub: 0.2,
        start: "-100%",
        end: "5%",
      },
    });
    c3.fromTo(
      ".splide__list li",
      { opacity: 0, y: 10, duration: 1 },
      { opacity: 1, y: 0, duration: 1 }
    );
  },
});
