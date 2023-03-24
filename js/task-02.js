const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

let arrayOfListItems = ingredients.map((item) => {
  const liElement = document.createElement("LI");
  liElement.classList.add("item");
  liElement.textContent = item;
  return liElement;
});

ingredientsEl.append(...arrayOfListItems);
