// page home global stylesheet

// navbar components
import "./sass/Layout/Navbar/index";

// component curso js
import "./sass/Layout/main/cursos";
import "./sass/Layout/main/cursos/index";

// slideshow computer on the header
// text effect scrooll
import "./sass/Layout/Header/textEffect";
import "./sass/Layout/Header/slide";

import { gsap } from "gsap";
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
  ease: "none",
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
