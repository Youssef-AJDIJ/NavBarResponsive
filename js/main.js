const toggleList = document.getElementById("toggle-list");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const toggleMenu = document.querySelector(".toggle-menu");

document.addEventListener("click", (event) => {

  if (
    !toggleList.contains(event.target) &&
    !openMenu.contains(event.target) &&
    !closeMenu.contains(event.target) &&
    !toggleMenu.contains(event.target)
  ) {
    closeMenu.setAttribute("data-toggle", "close");
    openMenu.setAttribute("data-toggle", "open");
    toggleList.setAttribute("data-list", "list-hidden");
  }
});

openMenu.addEventListener("click", () => {
  openMenu.setAttribute("data-toggle", "close");
  closeMenu.setAttribute("data-toggle", "open");
  toggleList.setAttribute("data-list", "list-show");
});
closeMenu.addEventListener("click", () => {
  closeMenu.setAttribute("data-toggle", "close");
  openMenu.setAttribute("data-toggle", "open");
  toggleList.setAttribute("data-list", "list-hidden");
});
