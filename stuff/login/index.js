var weekdays = new Array(7);
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tue";
        weekdays[3] = "Wed";
        weekdays[4] = "Thu";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";
var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

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
