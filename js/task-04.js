let counterValue = 0;

const counterEl = document.querySelector("#value");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

decrementEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
