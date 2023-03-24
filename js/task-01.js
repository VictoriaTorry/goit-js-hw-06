const categoriesEl = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesEl.length);
categoriesEl.forEach((item) => {
  console.log("Category:", item.children[0].textContent);
  console.log("Elements:", item.children[1].children.length);
});
