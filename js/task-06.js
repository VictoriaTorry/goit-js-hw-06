const getInput = document.querySelector("input");

getInput.addEventListener("blur", () => {
  if (getInput.value.length === Number(getInput.dataset.length)) {
    getInput.classList.remove("invalid");
    getInput.classList.add("valid");
  } else {
    getInput.classList.remove("valid");
    getInput.classList.add("invalid");
  }
});
