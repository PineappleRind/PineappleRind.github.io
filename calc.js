var clear = document.getElementById("clearBtn"),
  backspace = document.getElementById("backspace"),
  one = document.getElementById("one"),
  two = document.getElementById("two"),
  three = document.getElementById("three"),
  four = document.getElementById("four"),
  five = document.getElementById("five"),
  six = document.getElementById("six"),
  seven = document.getElementById("seven"),
  eight = document.getElementById("eight"),
  nine = document.getElementById("nine"),
  zero = document.getElementById("zero"),
  equation = "",
  plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  divide = document.getElementById("divide"),
  times = document.getElementById("times"),
  pi = document.getElementById("pi"),
  squared = document.getElementById("squared"),
  decimal = document.getElementById("decimal"),
  equals = document.getElementById("equals"),
  output = document.querySelector("#calculatorOutput");

function removeLastDigit(e) {
  var t = e;
  return t.substring(0, t.length - 1)
}

function evaluateInts(u) {
  return eval(u)
}
clear.addEventListener("click", function () {
  output.style.animationName = "kern-out", setTimeout(function () {
    output.value = "", output.style.animationName = "", equation = output.value
  }, 200)
}), backspace.addEventListener("click", function () {
  output.value = removeLastDigit(output.value), equation = removeLastDigit(equation)
}), one.addEventListener("click", function () {
  equation += "1", output.value += "1"
}), two.addEventListener("click", function () {
  equation += "2", output.value += "2"
}), three.addEventListener("click", function () {
  equation += "3", output.value += "3"
}), four.addEventListener("click", function () {
  equation += "4", output.value += "4"
}), five.addEventListener("click", function () {
  equation += "5", output.value += "5"
}), six.addEventListener("click", function () {
  equation += "6", output.value += "6"
}), seven.addEventListener("click", function () {
  output.value += "7", equation += "7"
}), eight.addEventListener("click", function () {
  equation += "8", output.value += "8"
}), nine.addEventListener("click", function () {
  output.value += "9", equation += "9"
}), zero.addEventListener("click", function () {
  output.value += "0", equation += "0"
}), plus.addEventListener("click", function () {
  output.value += "+", equation += "+"
}), minus.addEventListener("click", function () {
  output.value += "-", equation += "-"
}), times.addEventListener("click", function () {
  output.value += "×", equation += "*"
}), divide.addEventListener("click", function () {
  output.value += "÷", equation += "/"
}), pi.addEventListener("click", function () {
  output.value += "π", equation += " 3.14159265358979323 "
}), squared.addEventListener("click", function () {
  output.value += "²";
  var e = Math.pow(output.length - 1, 20);
  equation += e
}), decimal.addEventListener("click", function () {
  output.value += ".", equation += "."
}), equals.addEventListener("click", function () {
  output.value = evaluateInts(equation), equation = output.value
}), window.onerror = function (e, t, n) {
  output.value = "Error code:" + e + ", " + n + ", " + t
};
var num = parseInt(output.value);

function settings() {
  open(document.getElementById("settingsModal"), 1e3);
  var e = document.getElementById("overlayBlack");
  e.style.display = "block", setTimeout(function () {
    e.style.opacity = "1"
  }, 100)
}

function settingsClose() {
  close(document.getElementById("settingsModal"), 500);
  var e = document.getElementById("overlayBlack");
  e.style.opacity = "0", setTimeout(function () {
    e.style.display = "none"
  }, 500)
}
num > 1e10 && (output.value = "Error code: 1"), num < -1e9 && (output.value = "Error code: 2");
var closeButton = document.querySelector(".modal-close");
closeButton.addEventListener("click", function () {
  settingsClose()
});
var settingsBtn = document.getElementById("settings");
settingsBtn.addEventListener("click", function () {
  settings()
});
var science = document.getElementById("scientific"),
  arith = document.getElementById("arithmetc"),
  thebuttons = document.getElementById("scientificWrap");

function checkForScience() {
  !0 === science.checked ? (thebuttons.style.display = "block", document.querySelector(".calculator").style.maxWidth = "500px", document.querySelector(".calculator-buttons").style.width = "50%") : !0 === arithmetic.checked && (thebuttons.style.display = "none", document.querySelector(".calculator").style.maxWidth = null, document.querySelector(".calculator-buttons").style.width = "100%")
}
oninput = (e => {
  checkForScience()
}), onclick = (e => {
  var t = equation;
  setTimeout(function () {
    "" === equation && (t = "No equation"), console.log("Current equation: " + t)
  }, 1), console.clear()
}), console.log("No equation"), window.addEventListener("keydown", function (e) {
  "a" === e.key && window.addEventListener("keydown", function (e) {
    "s" === e.key && window.addEventListener("keydown", function (e) {
      "d" === e.key && window.addEventListener("keydown", function (e) {
        "f" === e.key && (window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0")
      })
    })
  })
});
let pog = document.getElementById("poggers"),
  box = document.querySelector(".hidden-box");

function pogChamp() {
  open(pog), setTimeout(function () {
    close(pog, 1e3)
  }, 3e3)
}

function open(e) {
  e.style.display = "block", e.style.animationName = "bounce-in"
}

function close(e, t) {
  e.style.animationName = "float-out", setTimeout(function () {
    e.style.display = "none", e.style.animationName = ""
  }, t)
}
box.addEventListener("click", function () {
  box.addEventListener("click", function () {
    box.addEventListener("click", function () {
      pogChamp()
    })
  })
});

// Next i'm going to make the keypad work :)