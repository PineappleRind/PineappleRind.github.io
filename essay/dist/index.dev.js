"use strict";

function $(id) {
  return document.getElementById(id);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

var input = $('dark');
var theBody = $('body');
var darkmodebool = false;

function darkmode() {
  if (input.checked === false) {
    document.body.classList.remove('dark');
    darkmodebool = false;
  } else {
    document.body.classList.add('dark');
    darkmodebool = true;
  }
}

input.onclick = function () {
  darkmode();
  setCookie('darkmodetrue', darkmodebool);
};

if (getCookie('darkmodetrue') === 'true') {
  document.body.classList.add('dark');
}