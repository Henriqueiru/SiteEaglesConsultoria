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

gsap.to(".b1", { duration: 2, text: "Seja bem-vindo à", ease: "none" });

gsap.to(".b2", {
  duration: 2,
  delay: 2,
  opacity: 1,
  text: "Eagles Consultoria",
  ease: Power3,
  scrollTrigger: {
    trigger: ".b2",
    start: "bottom bottom",
    end: "0",
    scrub: true,
  },
});

gsap.to(".intro-text", {
  scrollTrigger: {
    scrub: true,
    trigger: ".intro-text",
    // markers: true,
    start: "top center",
    end: "top 100px",
  },
  ease: "none",
  opacity: 1,
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
