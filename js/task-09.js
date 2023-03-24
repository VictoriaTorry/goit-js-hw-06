function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  let color = getRandomHexColor();

  body.style.backgroundColor = color;
  outputColor.textContent = color;
});
