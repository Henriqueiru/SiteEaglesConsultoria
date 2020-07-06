// page home global stylesheet
import "./sass/index.scss";

// navbar components
import "./sass/Layout/Navbar/index";

// component curso js
import "./sass/Layout/main/cursos";
import "./sass/Layout/main/cursos/index";

// slideshow computer on the header
import "./sass/Layout/Header/slide";

import Glide, {
  Controls,
  Breakpoints,
} from "@glidejs/glide/dist/glide.modular.esm";

new Glide(".glide").mount({ Controls, Breakpoints });
