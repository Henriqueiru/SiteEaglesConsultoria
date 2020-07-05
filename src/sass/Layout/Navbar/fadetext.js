const eagles = document.querySelector(".eagles");
const strText = eagles.textContent;
const splitText = strText.split("");
eagles.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  eagles.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let time = setInterval(onTick, 80);
function onTick() {
  const span = eagles.querySelectorAll("span")[char];
  const spa = eagles.querySelectorAll("span");

  colors = [
    "#31b6e9",
    "#31b6e9",
    "#31b6e9",
    "#31b6e9",
    "#31b6e9",
    "#31b6e9",

    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",

    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
    "#e52f8b",
  ];

  span.classList.add("fade");
  setTimeout(() => {
    spa.forEach((element, i) => {
      element.style.color = colors[i];
    });
  }, 50);
  char++;
  if (char === splitText.length) {
    Fully();
    return;
  }
}
function Fully() {
  clearInterval(time);
  time = null;
}
console.log(splitText);
