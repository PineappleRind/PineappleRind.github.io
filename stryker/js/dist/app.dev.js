"use strict";

var n = document.querySelector("main");
var s = document.querySelector("nav");
var r, t, c;
t = document.querySelector(".nav-toggle");
r = {
  d: document.querySelector(".nav-toggle"),
  l: function l(e) {
    e.preventDefault(), this.d.classList.toggle("expanded");
  }
};
c = document.querySelector(".nav-mobile");
var f = document.querySelector(".footer");

function showFooter() {
  f.style.display = 'block';
}

function nav() {
  if (c.style.width !== '100%') {
    c.style.width = '100%';
  } else {
    c.style.width = '0%';
  }
}

var i;

for (i = 0; i < 70; i++) {
  var snow = document.createElement('snow');
  document.body.appendChild(snow);
}

setTimeout(function () {
  showFooter();
}, 800);
t.addEventListener("click", function (e) {
  r.l(e);
  nav();
});