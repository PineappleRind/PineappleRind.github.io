function setCookie(cname,cvalue) {
    var expires = "expires=" + 864000;
    document.cookie = cname + "=" + cvalue + "," + expires + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

let btn = document.getElementById('close');
let modal = document.querySelector('.modal-bg');
btn.addEventListener('click', function() {
    setCookie('tutorial','true');
    closeModal(modal)
})

if (getCookie('tutorial') === 'true,expires=864000') {
    modal.style.display = 'none';
}

window.onload = function() {
    let rippleElements = document.getElementsByClassName("ripple-button");
    for(var i = 0; i < rippleElements.length; i++) {
        rippleElements[i].onclick = function(e) {
          let X = e.pageX - this.offsetLeft;
          let Y = e.pageY - this.offsetTop;
          let rippleDiv = document.createElement("div");
          rippleDiv.classList.add('ripple');
          rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
          let customColor = this.getAttribute('ripple-color');
          if(customColor) rippleDiv.style.background = customColor;
          this.appendChild(rippleDiv);
          setTimeout(function(){
            rippleDiv.parentElement.removeChild(rippleDiv);
          }, 900);
    }
}
}

let settingsOpen = document.getElementById('settings');
let settingsModal = document.querySelector('.settings-modal-bg');
let settingsClose = document.getElementById('closeSettings');

function closeModal(modal) {
    modal.style.opacity = '0';
    setTimeout(function(){
        modal.style.display = 'none';
    },500)
}

function openModal(modal) {
    modal.style.display = 'flex';
    setTimeout(function(){
        modal.style.opacity = '1';
    },10)
}

settingsOpen.addEventListener('click', function(){
    openModal(settingsModal);
})

settingsClose.addEventListener('click', function(){
    closeModal(settingsModal);
})

let button = document.querySelector('.ripple-button');
let i = 0;
let counter = document.getElementById('counter');
let j = 0;
let counterCPU = document.getElementById('counterCPU');

button.addEventListener('click', () => {
    updateCounters();
    checkForWinner();
    goalFunction();
})
function updateCounters() {
    if (probabillity() === 'major') {
        i = i + getRandomInt(20);
        counter.innerHTML = i;
        j = j + getRandomInt(10);
        counterCPU.innerHTML = j;
    } else if (probabillity() === 'regular') {
        i = i + getRandomInt(15);
        counter.innerHTML = i;
        j = j + getRandomInt(10);
        counterCPU.innerHTML = j;
    } else {
        i = i + getRandomInt(10);
        counter.innerHTML = i;
        j = j + getRandomInt(10);
        counterCPU.innerHTML = j;
    }
}

let yourScore = document.getElementById('yourScore');
let cpuScore = document.getElementById('cpuScore');

let winnerText = document.getElementById('winnertext');
winnerText.style.display = 'none';
let goal = 500;

function checkForWinner() {
    if (i >= j) {
        cpuScore.style.color = 'red'
        yourScore.style.transform = 'scale(1.1)'
        cpuScore.style.transform = 'scale(1)'
        yourScore.style.color = 'green'

        winnerText.innerHTML = 'You win!'
    } else if (j > i) {
        cpuScore.style.color = 'green'
        yourScore.style.color = 'red'
        cpuScore.style.transform = 'scale(1.1)'
        yourScore.style.transform = 'scale(1)'

        winnerText.innerHTML = 'Cpu wins!'
    }

    if (i > goal || j > goal) {
        button.style.pointerEvents = 'none';
        winnerText.style.display = 'block';
        winnerText.style.animationName = 'bounce';
        return false;
    }
}

function goalFunction() {
    let goalSpan = document.getElementById('goal');
    goal = parseInt(goalSpan.value);
    setTimeout(function(){document.getElementById('number').innerHTML = goal;},10)
}

/*function autoInit() {
    let functionInterval = setInterval(function() {
        updateCounters();
        checkForWinner();
        autoStop();
    },100);
    function autoStop() {
        if (i > 500 || j > 500) {
            clearInterval(functionInterval);
        }
    }
}*/
let autoBox = document.getElementById('auto');
oninput = () => {
    goalFunction();
    /*if (autoBox.checked === true) {
        let autoButton = document.getElementById('autoInit');
        autoButton.style.display = 'block';
        autoButton.addEventListener('click', function() {
            autoInit();
            autoButton.style.display = 'none';
        })
        document.getElementById('sliderContainer').style.display = 'inline';
    } else if (autoBox.checked === false) {
        document.getElementById('sliderContainer').style.display = 'none';
        autoButton.style.display = 'none';
    }*/
    probabillity();

}


function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

function probabillity() {
    let slight = document.getElementById('slightProb');
    let major = document.getElementById('majorProb');

    if (major.checked === true) {
        return 'major';
    } else if (slight.checked === true) {
        return 'slight';
    } else {
        return 'regular';
    }
}