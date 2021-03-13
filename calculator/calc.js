let clear = document.getElementById("clearBtn"),
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
clear.addEventListener("click", function() {
    output.style.animationName = "kern-out", setTimeout(function() {
        output.value = "", output.style.animationName = "", equation = output.value
    }, 200)
}), backspace.addEventListener("click", function() {
    output.value = removeLastDigit(output.value), equation = removeLastDigit(equation)
}), one.addEventListener("click", function() {
    equation += "1", output.value += "1"
}), two.addEventListener("click", function() {
    equation += "2", output.value += "2"
}), three.addEventListener("click", function() {
    equation += "3", output.value += "3"
}), four.addEventListener("click", function() {
    equation += "4", output.value += "4"
}), five.addEventListener("click", function() {
    equation += "5", output.value += "5"
}), six.addEventListener("click", function() {
    equation += "6", output.value += "6"
}), seven.addEventListener("click", function() {
    output.value += "7", equation += "7"
}), eight.addEventListener("click", function() {
    equation += "8", output.value += "8"
}), nine.addEventListener("click", function() {
    output.value += "9", equation += "9"
}), zero.addEventListener("click", function() {
    output.value += "0", equation += "0"
}), plus.addEventListener("click", function() {
    output.value += "+", equation += "+"
}), minus.addEventListener("click", function() {
    output.value += "-", equation += "-"
}), times.addEventListener("click", function() {
    output.value += "×", equation += "*"
}), divide.addEventListener("click", function() {
    output.value += "÷", equation += "/"
}), pi.addEventListener("click", function() {
    output.value += "π", equation += " 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818 "
}), decimal.addEventListener("click", function() {
    output.value += ".", equation += "."
}), equals.addEventListener("click", function() {
    output.value = evaluateInts(equation), equation = output.value
}), window.onerror = function(e, t, n) {
    output.value = "Error code: -1"
};
var num = parseInt(output.value);

function settings() {
    open(document.getElementById("settingsModal"), 1e3);
    var e = document.getElementById("overlayBlack");
    e.style.display = "block", setTimeout(function() {
        e.style.opacity = "1"
    }, 100)
}

function settingsClose() {
    close(document.getElementById("settingsModal"), 500);
    var e = document.getElementById("overlayBlack");
    e.style.opacity = "0", setTimeout(function() {
        e.style.display = "none"
    }, 500)
}
num > 1e10 && (output.value = "Error code: 1"), num < -1e9 && (output.value = "Error code: 2");
var closeButton = document.querySelector(".modal-close");
closeButton.addEventListener("click", function() {
    settingsClose()
});
var settingsBtn = document.getElementById("settings");
settingsBtn.addEventListener("click", function() {
    settings()
});
let calc = document.querySelector(".calculator"),
    color = document.getElementById("bgColor");
oninput = (e => {
    calc.style.backgroundColor = color.value
}), onclick = (e => {
    var t = equation;
    setTimeout(function() {
        "" === equation && (t = "No equation"), console.log("Current equation: " + t)
    }, 1), console.clear()
}), console.log("No equation"), window.addEventListener("keydown", function(e) {
    "a" === e.key && window.addEventListener("keydown", function(e) {
        "s" === e.key && window.addEventListener("keydown", function(e) {
            "d" === e.key && window.addEventListener("keydown", function(e) {
                "f" === e.key && (window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0")
            })
        })
    })
});
let pog = document.getElementById("poggers"),
    box = document.querySelector(".hidden-box");

function pogChamp() {
    open(pog), setTimeout(function() {
        close(pog, 1e3)
    }, 3e3)
}

function open(e) {
    e.style.display = "block", e.style.animationName = "bounce-in"
}

function close(e, t) {
    e.style.animationName = "float-out", setTimeout(function() {
        e.style.display = "none", e.style.animationName = ""
    }, t)
}
box.addEventListener("click", function() {
    box.addEventListener("click", function() {
        box.addEventListener("click", function() {
            pogChamp()
        })
    })
}), document.onkeypress = function(e) {
    var t = (e = e || window.event).keyCode || e.which,
        n = String.fromCharCode(t);
    "1" == n || "2" == n || "3" == n || "4" == n || "5" == n || "6" == n || "7" == n || "8" == n || "9" == n || "+" == n || "-" == n ? (output.value += n, equation += n) : "13" == t || "=" == n ? (output.value = evaluateInts(equation), equation = output.value) : "*" == n ? (equation += "*", output.value += "×") : "/" == n ? (equation += "/", output.value += "÷") : "Backspace" == n && (removeLastDigit(equation), removeLastDigit(output.value))
};