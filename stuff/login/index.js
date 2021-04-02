var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

setInterval(function(){
    let currentDate = new Date();
    let secs;
    let mins;
    if (currentDate.getSeconds() === 0 || currentDate.getSeconds() === 1 || currentDate.getSeconds() === 2 || currentDate.getSeconds() === 3 || currentDate.getSeconds() === 4 || currentDate.getSeconds() === 5 || currentDate.getSeconds() === 6 || currentDate.getSeconds() === 7 || currentDate.getSeconds() === 8 || currentDate.getSeconds() === 9) {
        secs = `0${currentDate.getSeconds()}`
    } else {
        secs = currentDate.getSeconds()
    }
    if (currentDate.getMinutes() === 0 || currentDate.getMinutes() === 1 || currentDate.getMinutes() === 2 || currentDate.getMinutes() === 3 || currentDate.getMinutes() === 4 || currentDate.getMinutes() === 5 || currentDate.getMinutes() === 6 || currentDate.getMinutes() === 7 || currentDate.getMinutes() === 8 || currentDate.getMinutes() === 9) {
        mins = `0${currentDate.getMinutes()}`
    } else {
        mins = currentDate.getMinutes()
    }
let time = currentDate.getHours() + ":" + mins + ":" + secs
document.getElementById('time').innerHTML = `${toRegularTime(time)}`
let cDay = currentDate.getDate()
var weekdayFinal = weekdays[currentDate.getDay()];
var theMonth = month[currentDate.getMonth()];
document.getElementById('date').innerHTML = `${weekdayFinal} ${theMonth} ${cDay}`

document.getElementById('dateMenu').innerHTML = `${weekdayFinal} ${theMonth} ${cDay}`
document.getElementById('timeMenu').innerHTML = `${toRegularTime(time)}`
},100)

function $(t) {return document.getElementById(t)}


$('input').onkeydown = e => {
    var key = keyPressed(e);
  if ($('input').value === 'mamaobama111') {
    if (key == 'Enter') {
      $('inputContainer').style.opacity = 0.9
      $('inputContainer').style.pointerEvents = 'none'
      $('input').setAttribute('disabled','')
      setTimeout(function(){
        $('inputContainer').style.display = 'none'
        $('loading').style.display = 'block'
        setTimeout(function(){
          macOpen()
        },1200)
      },500)
  }}
   else {
      if (key == 'Enter') {
        $('inputContainer').style.opacity = 0.9
          $('inputContainer').style.pointerEvents = 'none'
          $('input').setAttribute('disabled','')
          setTimeout(function(){
            $('inputContainer').style.animationName = 'bounce'
            $('inputContainer').style.opacity = 1
          $('inputContainer').style.pointerEvents = 'all'
          $('input').removeAttribute('disabled')
            setTimeout(function(){
              $('inputContainer').style.animationName = ''
            },500)
          },500)
        }
    }
  

  handleNext()
}

oninput = () => {
  handleNext()
}

function handleNext() {
  if ($('input').value == '') {
    $('next').style.visibility = 'hidden'
  } else {
    $('next').style.visibility = 'visible'
  }
}

function keyPressed(e) {
    var key;
    if (window.event) {
      key = e.code;
    } else if (e.which) {
      key = e.which;
    }
    return key;
  }

toRegularTime = (militaryTime) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    return `${(hours > 12) ? hours - 12 : hours}:${minutes}${seconds ? `:${seconds}` : ''} ${(hours >= 12) ? 'PM' : 'AM'}`;
}

handleNext()


$('cancel').onclick = () => {
  $('black').style.display = 'block'
  $('black').style.opacity = '1'
  $('loading-apple').style.display = 'none'
}

function macOpen() {
  document.querySelector('.login').style.display = 'none'
  document.querySelector('.home').style.display = 'flex'
}

var currentPos = 900;

setTimeout(function(){
  setInterval(function(){
  if (currentPos > (0.1)) { 
  currentPos = ((currentPos+currentPos))/2.5
  document.querySelector('.notif').style.transform = `translateX(${currentPos}px)`
  }
},30)
},2000)


/*for (let i = 0; i < document.getElementsByClassName('dropdown-trig').length; i++) {
  let t = document.getElementsByClassName('dropdown-trig')[i]
  t.onclick = () => {
    document.getElementsByClassName('dropdown-content')[i].style.display = 'block'
  }
  document.body.onclick = () => {
    document.getElementsByClassName('dropdown-content')[i].style.display = 'none'
  }
}*/
let increment = 1
function dialog() {
  let html = `
  <div class="dialog" style="left: ${(increment * 20) + 200}px; top: ${((increment + 30)* (increment/2))+ 300}px" id="dialog${increment}">
    <h1 class="header">App... not found.</h1>
    <div class="dialog-main">
      <p>I didn't code Finder, maybe I will in the future?</p>
      <div class="dialog-buttons">
        <button class="contained" id="ok${increment}">OK</button>
      </div>
    </div>
  </div>
  `

  document.body.insertAdjacentHTML('beforeend',html)
  setTimeout(function(){
    let e = increment;
    $(`ok${e}`).onclick = () => {
      document.getElementById(`dialog${e}`).remove()
    }
    increment = increment + 1
  },10)
}

$('finder').onclick = () => {dialog()}
function wait(e,r){
  setTimeout(function(){
    e;
  },r)
}
$('launchpad').onclick = () => {
  openLaunchpad
}
document.querySelector('.close-notif').onclick = () => {
  let u = document.querySelector('.close-notif').parentElement
  u.style.opacity = '0'
  setTimeout(function(){
    u.remove()
  },200)
}
function load() {
  let o = $('black')
  o.style.display = 'flex'
  o.style.opacity = '1'
  let a = $('loading-apple');
  wait(a.style.display = 'block',1000)
  setTimeout(function(){o.style.opacity = '0'},1100)
  setTimeout(function(){o.style.display = 'none'},1600)
}

load()