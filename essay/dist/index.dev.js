"use strict";

function $(id) {
  return document.getElementById(id);
}

var input = $('dark');
var theBody = $('body');

function darkmode() {
  if (input.checked === false) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
}

input.onclick = function () {
  darkmode();
};