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
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "power3" });
gsap.set(".introduction", { y: 0 });

ScrollTrigger.batch(".presentation", {
  trigger: ".introduction",
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 100,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  // onUpdate: (e) => console.log(e),
  markers: true,
});
