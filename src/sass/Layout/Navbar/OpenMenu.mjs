const ToggleLi = document.querySelector("[icon-menu] ");
const Li = document.querySelectorAll("[icon-menu] > li");
const ShowMenu = document.querySelector(".desktop");

let show = true;

function addTogglClass() {
  Li.forEach((element) => {
    element.classList.toggle("toggleClass");
    document.body.style.overflow = show ? "hidden" : "initial";
    ShowMenu.classList.toggle("on", show);
    show = !show;
  });
}

ToggleLi.addEventListener("click", addTogglClass);
