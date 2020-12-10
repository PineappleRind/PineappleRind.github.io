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
var zero = document.getElementById('zero');

var equation = '';

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var times = document.getElementById('times');

var pi = document.getElementById('pi');
var squared = document.getElementById('squared');

var decimal = document.getElementById('decimal');
var equals = document.getElementById('equals');

var output = document.querySelector('#calculatorOutput');

function removeLastDigit(t) {
    var strng = t;
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
        equation = output.value;
    },200)
})

backspace.addEventListener('click', function() {
    output.value = removeLastDigit(output.value);
    equation = removeLastDigit(equation);
}) 

one.addEventListener('click', function() {
    equation += '1';
    output.value += '1';
})
two.addEventListener('click', function() {
    equation += '2';
    output.value += '2';
})
three.addEventListener('click', function() {
    equation += '3';
    output.value += '3';
})
four.addEventListener('click', function() {
    equation += '4';
    output.value += '4';
})
five.addEventListener('click', function() {
    equation += '5';
    output.value += '5';
})
six.addEventListener('click', function() {
    equation += '6';
    output.value += '6';
})
seven.addEventListener('click', function() {
    output.value += '7';
    equation += '7';
})
eight.addEventListener('click', function() {
    equation += '8';
    output.value += '8';
})
nine.addEventListener('click', function() {
    output.value += '9';
    equation += '9';
})
zero.addEventListener('click', function() {
    output.value += '0';
    equation += '0';
})



plus.addEventListener('click', function() {
    output.value += '+';
    equation += '+';
})
minus.addEventListener('click', function() {
    output.value += '-';
    equation += '-';
})
times.addEventListener('click', function() {
    output.value += '×';
    equation += '*';
})
divide.addEventListener('click', function() {
    output.value += '÷';
    equation += '/'
})



pi.addEventListener('click', function() {
    output.value += 'π';
    equation += ' 3.14159265358979323 ';
})
squared.addEventListener('click', function() {
    output.value += '²';
    var answer = Math.pow((output.length-1), 20)
    equation += answer;
})


decimal.addEventListener('click', function() {
    output.value += '.';
    equation += '.';
})
equals.addEventListener('click', function() {
    output.value = evaluateInts(equation);
    equation = output.value;
})

window.onerror=function(msg, url, linenumber){
    output.value = 'Error code:' + msg + ', ' + linenumber + ', ' + url;
}

var num = parseInt(output.value);
if (num > 10000000000) {
    output.value = 'Error code: 1';
}

if (num < -1000000000) {
    output.value = 'Error code: 2';
}

// Now for settings modal.

function settings() {
    var modal = document.getElementById('settingsModal');
    modal.style.display = 'block';
    modal.style.animationName = 'bounce-in';

    setTimeout(function(){
        modal.style.animationName = '';
    }, 1000)

    var overlay = document.getElementById('overlayBlack');
    overlay.style.display = 'block';
    setTimeout(function(){
        overlay.style.opacity = '1';
    }, 100)
}

function settingsClose() {
    var modal = document.getElementById('settingsModal');
    modal.style.animationName = 'float-out';

    setTimeout(function(){
        modal.style.display = 'none';
        modal.style.animationName = '';
    }, 500)

    var overlay = document.getElementById('overlayBlack');
    overlay.style.opacity = '0';

    setTimeout(function(){
        overlay.style.display = 'none';
    }, 500)
}

var closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', function() {
    settingsClose();
})

var settingsBtn = document.getElementById('settings');
settingsBtn.addEventListener('click', function() {
    settings();
})


var science = document.getElementById('scientific');
var arith = document.getElementById('arithmetc');
var thebuttons = document.getElementById('scientificWrap');

function checkForScience() {
    if (science.checked === true) {
        thebuttons.style.display = 'block';
        document.querySelector('.calculator').style.maxWidth = '500px';
        document.querySelector('.calculator-buttons').style.width = '50%';
    } else if (arithmetic.checked === true) {
        thebuttons.style.display = 'none';
        document.querySelector('.calculator').style.maxWidth = null;
        document.querySelector('.calculator-buttons').style.width = '100%';
    }
}

oninput = e => {
    checkForScience();
}

onclick = e => {
    var t = equation;
    setTimeout(function() {
        if (equation === '') {
            t = 'No equation'
        }
        console.log('Current equation: ' + t);
    }, 1)
    console.clear();
}

console.log('No equation');

window.addEventListener("keydown", function(e) {
    if (e.key === 'a') {
        window.addEventListener("keydown", function(e) {
            if (e.key === 's') {
                window.addEventListener("keydown", function(e) {
                    if (e.key === 'd') {
                        window.addEventListener("keydown", function(e) {
                            if (e.key === 'f') {
                                window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
                            }
                        })
                    }
                })
            }
        })
    }
})