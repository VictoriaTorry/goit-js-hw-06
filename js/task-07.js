const inputFontSizeControl = document.querySelector("input#font-size-control");
const outpText = document.querySelector("span#text");

inputFontSizeControl.addEventListener("input", () => {
  outpText.style.fontSize = inputFontSizeControl.value + "px";
});
