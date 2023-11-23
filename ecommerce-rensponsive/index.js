const menu_btn = document.querySelector(".button_ham");
const nav_menu = document.querySelector(".nav_menu");
const header = document.querySelector("header");
let className = menu_btn.classList;
menu_btn.addEventListener("click", () => {
  nav_menu.classList.toggle("show-menu");
  if (className.contains("ri-menu-line")) {
    menu_btn.classList.remove("ri-menu-line");
    menu_btn.classList.add("ri-close-line");
  } else {
    menu_btn.classList.remove("ri-close-line");
    menu_btn.classList.add("ri-menu-line");
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
