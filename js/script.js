var menu = document.querySelector(".page-header__menu");
var btnMenu = document.querySelector(".page-header__btnMenu");

menu.classList.remove('page-header__menu--nojs');

if(menu.classList.contains("page-header__menu--opened")) {
  menu.classList.remove("page-header__menu--opened");
  menu.classList.add("page-header__menu--closed");
}

btnMenu.addEventListener("click", function() {
  if(menu.classList.contains("page-header__menu--closed")) {
    menu.classList.remove("page-header__menu--closed");
    menu.classList.add("page-header__menu--opened");
  } else {
    menu.classList.remove("page-header__menu--opened");
    menu.classList.add("page-header__menu--closed");
  }
});



