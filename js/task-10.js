function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const quantityInput = document.querySelector("#controls>input");
const outputBoxes = document.querySelector("#boxes");

createEl.addEventListener("click", () => createBoxes(quantityInput.value));
destroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  console.log(outputBoxes);
  let arrOfItems = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    let color = getRandomHexColor();
    arrOfItems.push(
      `<div style="background-color: ${color}; width: ${width}px; height: ${height}px;"></div>`
    );
    width += 10;
    height += 10;
  }

  outputBoxes.insertAdjacentHTML("beforeend", arrOfItems.join(""));
}

function destroyBoxes() {
  outputBoxes.textContent = "";
}
