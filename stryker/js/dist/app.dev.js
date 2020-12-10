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
g = document.getElementById('contactBtn');
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

var scroll = window.scrollY;
if (window.scrollY) setTimeout(function () {
  showFooter();
}, 2000);
t.addEventListener("click", function (e) {
  r.l(e);
  nav();
});

function urlhash(link) {
  window.location.hash = link;
}

setInterval(function () {
  if (window.location.hash == '#merch') {
    document.querySelector('#merchlink').classList.add('active');
  } else if (window.location.hash !== '#merch') {
    document.querySelector('#merchlink').classList.remove('active');
  }

  if (window.location.hash == '#about') {
    document.getElementById('aboutlink').classList.add('active');
  } else if (window.location.hash !== '#about') {
    document.querySelector('#aboutlink').classList.remove('active');
  }

  if (window.location.hash == '#podcast') {
    document.getElementById('podcastlink').classList.add('active');
  } else if (window.location.hash !== '#podcast') {
    document.querySelector('#podcastlink').classList.remove('active');
  }

  if (window.location.hash == '#home') {
    document.getElementById('homelink').classList.add('active');
  } else if (window.location.hash !== '#home') {
    document.querySelector('#homelink').classList.remove('active');
  }

  if (window.location.hash == '') {
    document.getElementById('aboutlink').classList.remove('active');
    document.querySelector('#merchlink').classList.remove('active');
  }
}, 100);