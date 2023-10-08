console.log('Hello World!');
const checkbox = document.querySelector("input[type=checkbox]");
const menu = document.querySelector(".menu");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});