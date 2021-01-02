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
    modal.style.opacity = 0;
    setCookie('tutorial','true');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500)
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

function openModal() {
    settingsModal.style.display = 'flex';
    setTimeout(function(){
        settingsModal.style.opacity = '1';
    },10);
}

function closeSettingsModal() {
    settingsModal.style.opacity = '0';
    setTimeout(function(){
        settingsModal.style.display = 'none';
    },500)
}

settingsOpen.addEventListener('click', function(){
    openModal();
})

settingsClose.addEventListener('click', function(){
    closeSettingsModal();
})
let button = document.querySelector('.ripple-button');
let i = 0;
let counter = document.getElementById('counter');
let j = 0;
let counterCPU = document.getElementById('counterCPU');


button.addEventListener('click', function() {
    updateCounters();
    checkForWinner();
})

function updateCounters() {
    i = i + getRandomInt(10);
    counter.innerHTML = i;
    j = j + getRandomInt(10);
    counterCPU.innerHTML = j;
}

let yourScore = document.getElementById('yourScore');
let cpuScore = document.getElementById('cpuScore');

function checkForWinner() {
    if (i >= j) {
        cpuScore.style.color = 'red'
        yourScore.style.color = 'green'
    } else if (j > i) {
        cpuScore.style.color = 'green'
        yourScore.style.color = 'red'
    }
}

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}
