"use strict";

var n = document.querySelector("main");
var s = document.querySelector("nav");
var r, t, c, g;
t = document.querySelector(".nav-toggle");
r = {
  d: document.querySelector(".nav-toggle"),
  l: function l(e) {
    e.preventDefault(), this.d.classList.toggle("expanded");
  }
};
g = document.getElementById('donateBtn');
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

var h, j, k;
h = document.getElementById('modalDonate');
j = document.getElementById('overlay');
k = document.getElementById('modalClose');

function donateModal() {
  h.style.display = 'block';
  h.style.animationName = 'modal';
  j.style.display = 'block';
  setTimeout(function () {
    j.style.opacity = '1';
  }, 1);
}

function closeDonateModal() {
  h.style.animationName = 'modal-close';
  setTimeout(function () {
    h.style.display = 'none';
  }, 1000);
  j.style.opacity = '0';
  setTimeout(function () {
    j.style.display = 'none';
  }, 1000);
}

g.addEventListener('click', function () {
  donateModal();
});
k.addEventListener('click', function () {
  closeDonateModal();
});
setTimeout(function () {
  showFooter();
}, 800);
t.addEventListener("click", function (e) {
  r.l(e);
  nav();
});