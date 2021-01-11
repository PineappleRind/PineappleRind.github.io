"use strict";

var btn, cntr, cntrt, counter, firstOption, secondOption, openstore, overlay, closeOverlay, integer, firstPrice;
btn = document.getElementById('clicker');
cntr = document.querySelector('.counter');
cntrt = document.querySelector('.counter-store');
counter = 0;
twotimes = 0;
firstOption = document.getElementById('first');
secondOption = document.getElementById('second');
btn.addEventListener('click', function () {
  main();
  counter++;
});

function main() {
  increase();
  addThingyIForgot();
}

function increase() {
  cntr.innerHTML = counter;
  cntrt.innerHTML = counter;
}

integer = 50;

function addThingyIForgot() {
  if (counter >= integer) {
    firstOption.style.opacity = '1';
    firstOption.style.pointerEvents = 'all';
  } else if (counter >= 200) {
    firstOption.style.opacity = '0.4';
    firstOption.style.pointerEvents = 'none';
  }
}

firstPrice = document.getElementById('firstPrice');
firstOption.addEventListener('click', function () {
  counter = counter - integer;
  setTimeout(function () {
    integer = integer + 50;
    setTimeout(function () {
      firstPrice.innerHTML = integer + 'ω';
    }, 10);
  }, 10);
  main();
  btn.addEventListener('click', function () {
    counter++;
  });
});
secondOption.addEventListener('click', function () {
  counter = counter - 200;
});
openstore = document.querySelector('.open-store');
overlay = document.querySelector('.store-overlay');
closeOverlay = document.getElementById('closeOverlay');
openstore.addEventListener('click', function () {
  overlay.style.display = 'flex';
  setTimeout(function () {
    overlay.classList.add('showing');
  }, 100);
});
closeOverlay.addEventListener('click', function () {
  overlay.classList.remove('showing');
  setTimeout(function () {
    overlay.style.display = 'none';
  }, 1000);
});