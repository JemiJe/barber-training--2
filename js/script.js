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

/* SLIDER */


var slider = document.querySelectorAll(".slider");

slider.forEach(function(i) {
  i.classList.remove('slider--nojs');
});



/*
var features = document.querySelector(".features");
var slider_item = Array.from(features.querySelectorAll(".slider__item"));
var slider_toggleS = features.querySelector(".slider__toggles");
var slider_toggle = Array.from(features.querySelectorAll(".slider__toggle"));

console.dir(slider_item);


slider_toggleS.addEventListener("click", function(e) {
  console.log(slider_toggle.indexOf(e.target));
});
*/