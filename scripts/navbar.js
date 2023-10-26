var Nav = document.querySelector("nav");
var Button = document.querySelector(".nav_button");

Button.addEventListener("click", ToggleNav);

function ToggleNav() {



if (Nav.classList.contains("nav_hidden")) {
    Nav.classList.remove("nav_hidden");
    Nav.classList.add("nav_visible");
  } else {
    Nav.classList.remove("nav_visible");
    Nav.classList.add("nav_hidden");
  }
}