"use strict";

var clear = document.getElementById('clearBtn');
var backspace = document.getElementById('backspace');
var output = document.querySelector('#calculatorOutput');

function removeLastDigit(t) {
  var strng = t.value;
  return strng.substring(0, strng.length - 1);
}

clear.addEventListener('click', function () {
  output.value = ' ';
});
backspace.addEventListener('click', function () {
  output.value = removeLastDigit(output);
});