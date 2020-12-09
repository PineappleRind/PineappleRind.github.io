let clear = document.getElementById('clearBtn');
let backspace = document.getElementById('backspace');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');

let decimal = document.getElementById('decimal');
let equals = document.getElementById('equals');

let output = document.querySelector('#calculatorOutput');

let add = false;

function removeLastDigit(t) {
    let strng = t.value;
    return strng.substring(0,strng.length-1);
}

function evaluateInts(u) {
    return eval(u);
}

clear.addEventListener('click', function() {
    output.style.animationName = 'kern-out';
    setTimeout(function() {
        output.value = '';
        output.style.animationName = '';
    },200)
})

backspace.addEventListener('click', function() {
    output.value = removeLastDigit(output);
}) 

one.addEventListener('click', function() {
    output.value += '1';
})
two.addEventListener('click', function() {
    output.value += '2';
})
three.addEventListener('click', function() {
    output.value += '3';
})
four.addEventListener('click', function() {
    output.value += '4';
})
five.addEventListener('click', function() {
    output.value += '5';
})
six.addEventListener('click', function() {
    output.value += '6';
})
seven.addEventListener('click', function() {
    output.value += '7';
})
eight.addEventListener('click', function() {
    output.value += '8';
})
nine.addEventListener('click', function() {
    output.value += '9';
})

plus.addEventListener('click', function() {
    output.value += '+';
})

minus.addEventListener('click', function() {
    output.value += '-';
})

times.addEventListener('click', function() {
    output.value += '*';
})

divide.addEventListener('click', function() {
    output.value += '/';
})

decimal.addEventListener('click', function() {
    output.value += '.';
})

equals.addEventListener('click', function() {
    output.value = evaluateInts(output.value);
})

window.onerror=function(msg, url, linenumber){
    output.value = 'Error code: undefined';
}

let num = parseInt(output.value);

if (num > 10000000000) {
    output.value = 'Error code: 1';
}

if (num < -1000000000) {
    output.value = 'Error code: 3';
}