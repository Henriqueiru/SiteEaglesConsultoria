import Glide, {
  Swipe,
  Autoplay,
  Images,
} from "@glidejs/glide/dist/glide.modular.esm";

new Glide(".glide").mount({ Swipe, startAt: 0 });
