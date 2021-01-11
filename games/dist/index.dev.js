"use strict";

function setCookie(cname, cvalue) {
  var expires = "expires=" + 864000;
  document.cookie = cname + "=" + cvalue + "," + expires + ";";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

var btn = document.getElementById('close');
var modal = document.querySelector('.modal-bg');
btn.addEventListener('click', function () {
  setCookie('tutorial', 'true');
  closeModal(modal);
});

if (getCookie('tutorial') === 'true,expires=864000') {
  modal.style.display = 'none';
}

window.onload = function () {
  var rippleElements = document.getElementsByClassName("ripple-button");

  for (var i = 0; i < rippleElements.length; i++) {
    rippleElements[i].onclick = function (e) {
      var X = e.pageX - this.offsetLeft;
      var Y = e.pageY - this.offsetTop;
      var rippleDiv = document.createElement("div");
      rippleDiv.classList.add('ripple');
      rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
      var customColor = this.getAttribute('ripple-color');
      if (customColor) rippleDiv.style.background = customColor;
      this.appendChild(rippleDiv);
      setTimeout(function () {
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 900);
    };
  }
};

var settingsOpen = document.getElementById('settings');
var settingsModal = document.querySelector('.settings-modal-bg');
var settingsClose = document.getElementById('closeSettings');

function closeModal(modal) {
  modal.style.opacity = '0';
  setTimeout(function () {
    modal.style.display = 'none';
  }, 500);
}

function openModal(modal) {
  modal.style.display = 'flex';
  setTimeout(function () {
    modal.style.opacity = '1';
  }, 10);
}

settingsOpen.addEventListener('click', function () {
  openModal(settingsModal);
});
settingsClose.addEventListener('click', function () {
  closeModal(settingsModal);
});
var button = document.querySelector('.ripple-button');
var i = 0;
var counter = document.getElementById('counter');
var j = 0;
var counterCPU = document.getElementById('counterCPU');
/*let functionInterval = setInterval(function() {
    updateCounters();
    checkForWinner();
},100)*/

button.addEventListener('click', function () {
  updateCounters();
  checkForWinner();
  goalFunction();
});

function updateCounters() {
  i = i + getRandomInt(10);
  counter.innerHTML = i;
  j = j + getRandomInt(10);
  counterCPU.innerHTML = j; //if (i > 500 || j > 500) {
  //clearInterval(functionInterval);
  //}
}

var yourScore = document.getElementById('yourScore');
var cpuScore = document.getElementById('cpuScore');
var winnerText = document.getElementById('winnertext');
winnerText.style.display = 'none';
var goal = 500;

function checkForWinner() {
  if (i >= j) {
    cpuScore.style.color = 'red';
    yourScore.style.transform = 'scale(1.1)';
    cpuScore.style.transform = 'scale(1)';
    yourScore.style.color = 'green';
    winnerText.innerHTML = 'You win!';
  } else if (j > i) {
    cpuScore.style.color = 'green';
    yourScore.style.color = 'red';
    cpuScore.style.transform = 'scale(1.1)';
    yourScore.style.transform = 'scale(1)';
    winnerText.innerHTML = 'Cpu wins!';
  }

  if (i > goal || j > goal) {
    button.style.pointerEvents = 'none';
    winnerText.style.display = 'block';
    winnerText.style.animationName = 'bounce';
    return false;
  }
}

function goalFunction() {
  var goalSpan = document.getElementById('goal');
  goal = parseInt(goalSpan.value);
  setTimeout(function () {
    document.getElementById('number').innerHTML = goal;
  }, 10);
}

function autoInit() {
  var functionInterval = setInterval(function () {
    updateCounters();
    checkForWinner();
    autoStop();
  }, 100);

  function autoStop() {
    if (i > 500 || j > 500) {
      clearInterval(functionInterval);
    }
  }
}

var autoBox = document.getElementById('auto');

oninput = function oninput() {
  goalFunction();

  if (autoBox.checked === true) {
    var autoButton = document.getElementById('autoInit');
    autoButton.style.display = 'block';
    autoButton.addEventListener('click', function () {
      autoInit();
      this.style.display = 'none';
    });
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}