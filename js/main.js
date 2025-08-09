const toggleList = document.getElementById("toggle-list");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click",()=> {
    openMenu.setAttribute("data-toggle","close")
    closeMenu.setAttribute("data-toggle","open")
    toggleList.setAttribute("data-list", "list-show")
})
closeMenu.addEventListener("click",()=> {
    closeMenu.setAttribute("data-toggle","close")
    openMenu.setAttribute("data-toggle","open")
    toggleList.setAttribute("data-list", "list-hidden")
})
