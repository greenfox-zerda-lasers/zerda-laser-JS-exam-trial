'use strict'

var submit = document.getElementById("submit");
submit.addEventListener("click", loading);

function loading(){
  document.getElementById("placeholder").innerHTML = "loading";
}
