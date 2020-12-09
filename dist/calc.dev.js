"use strict";

var clear = document.getElementById('clearBtn');
var backspace = document.getElementById('backspace');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');
var output = document.querySelector('#calculatorOutput');
var add = false;

function removeLastDigit(t) {
  var strng = t.value;
  return strng.substring(0, strng.length - 1);
}

function evaluateInts(u) {
  return eval(u);
}

clear.addEventListener('click', function () {
  output.style.animationName = 'kern-out';
  setTimeout(function () {
    output.value = '';
    output.style.animationName = '';
  }, 200);
});
backspace.addEventListener('click', function () {
  output.value = removeLastDigit(output);
});
one.addEventListener('click', function () {
  output.value += '1';
});
two.addEventListener('click', function () {
  output.value += '2';
});
three.addEventListener('click', function () {
  output.value += '3';
});
four.addEventListener('click', function () {
  output.value += '4';
});
five.addEventListener('click', function () {
  output.value += '5';
});
six.addEventListener('click', function () {
  output.value += '6';
});
seven.addEventListener('click', function () {
  output.value += '7';
});
eight.addEventListener('click', function () {
  output.value += '8';
});
nine.addEventListener('click', function () {
  output.value += '9';
});
plus.addEventListener('click', function () {
  output.value += '+';
});
minus.addEventListener('click', function () {
  output.value += '-';
});
times.addEventListener('click', function () {
  output.value += '*';
});
divide.addEventListener('click', function () {
  output.value += '/';
});
decimal.addEventListener('click', function () {
  output.value += '.';
});
equals.addEventListener('click', function () {
  output.value = evaluateInts(output.value);
});

window.onerror = function (msg, url, linenumber) {
  output.value = 'Error code: undefined';
};

var num = parseInt(output.value);

if (num > 10000000000) {
  output.value = 'Error code: 1';
}

if (num < -1000000000) {
  output.value = 'Error code: 3';
}