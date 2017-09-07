var menu = document.querySelector(".page-header__menu");
var menu_item = document.querySelector(".page-header__item a");
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

function jsHere(slider, noJsClass) {
  slider.forEach(function(i) {
    i.classList.remove(noJsClass);
  });
}


var slider = document.querySelectorAll(".slider");
jsHere(slider, 'slider--nojs');


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

/* SLIDER CAROUSEL */

var slider_carousel = document.querySelectorAll(".slider-carousel");
jsHere(slider_carousel, 'slider--nojs');

/* MODAL POP-UPs */

var btn_menu = document.querySelector(".page-header__item--user-block");
var modal = document.querySelector(".modal");
var btn_close_modal = modal.querySelector(".modal__close");
var btn_close_login = modal.querySelector(".btn--clear-bg");

btn_menu.addEventListener("click", function() {

  menu.classList.remove("page-header__menu--opened");
  menu.classList.add("page-header__menu--closed");

  modal.classList.add("modal--show");
});

modal.addEventListener("click", function(e) {

  if(e.target == btn_close_modal || e.target == btn_close_login) {
    modal.classList.remove("modal--show");
  }
});

window.addEventListener("click", function() {
  if (event.target == modal) {
    modal.classList.remove("modal--show");
  }
});





