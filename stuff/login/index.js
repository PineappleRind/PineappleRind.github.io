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
},1000)

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
function dialog(html) {

  document.body.insertAdjacentHTML('beforeend',html)
  setTimeout(function(){
    let e = increment;
    $(`ok${e}`).onclick = () => {
      document.getElementById(`dialog${e}`).remove()
    }
    increment = increment + 1

      dragElement(document.getElementById(`dialog${e}`),true);
      headerNum++
  },10)
}

function openLaunchpad() {
  let r = $('launchpadOverlay')
  r.style.opacity = '1'
  r.style.pointerEvents = 'all'
  r.style.transform = 'scale(1)'
}

function closeLaunchpad() {
  let r = $('launchpadOverlay')
  r.style.opacity = '0'
  r.style.pointerEvents = 'none'
  r.style.transform = 'scale(1.1)'
}

$('finder').onclick = () => {dialog(`<div class="dialog" style="left: ${(increment * 20) + 200}px; top: ${((increment + 30)* (increment/2))+ 300}px" id="dialog${increment}"><h1 id="dialog-header-${increment}" class="header">App... not found.</h1><div class="dialog-main"><p>I didn't code Finder, maybe I will in the future?</p><div class="dialog-buttons"><button class="contained" id="ok${increment}">OK</button></div></div></div>`)}
$('launchpad').onclick = () => {
  openLaunchpad()
}
$('launchpadOverlay').onclick = () => {
  closeLaunchpad()
}
$('minesweeperLaunchpad').onclick = () => {

  if (minesweeperI > 0) {
    return;
  } else {
    dialog(`<div class="system-window" id="dialog${increment}" style="left: ${(increment * 20)}px; top: ${((increment + 30)* (increment/2)) + 30}px">
    <h1 id="dialog-header-${increment}">Minesweeper</h1>
    <div id="minesweeper-box">
        <h2>MINESWEEPER!</h2><hr><br><br>
        <div id="field"></div>
        <br>
        <div id="lost" style="display: none;">
        <h3>You got bombed!</h3>
        <button id="new-game-button" type="button" onclick="reload()">Start Again</button>
        </div>         
    </div>
    </div>`)
    document.getElementById('lost').style.display="none";
    startGame();
    minesweeperI++
  }
}
let minesweeperI = 0
$('minesweeper').onclick = () => {
  if (minesweeperI > 0) {
    return;
  } else {
    dialog(`<div class="system-window" id="dialog${increment}" style="left: ${(increment * 20)}px; top: ${((increment + 30)* (increment/2)) + 30}px">
    <h1 id="dialog-header-${increment}">Minesweeper</h1>
    <div id="minesweeper-box">
        <h2>MINESWEEPER!</h2><hr><br><br>
        <div id="field"></div>
        <br>
        <div id="lost" style="display: none;">
        <h3>You got bombed!</h3>
        <button id="new-game-button" type="button" onclick="reload()">Start Again</button>
        </div>         
    </div>
    </div>`)
    document.getElementById('lost').style.display="none";
    startGame();
    minesweeperI++
  }
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
  a.style.display = 'block'
  setTimeout(function(){o.style.opacity = '0'},1100)
  setTimeout(function(){o.style.display = 'none'},1600)
}

load()

for (let i = 0; i < document.getElementsByClassName("app-container").length; i++) {
  dragElement(document.getElementsByClassName("app-container")[i],false);
}

for (let i = 0; i < document.getElementsByClassName('dialog').length;i++) {

}
var headerNum = 0;
function dragElement(e,r) {
  var n = 0,
      t = 0,
      o = 0,
      u = 0;

  function l(e) {
      (e = e || window.event).preventDefault(), o = e.clientX, u = e.clientY;
       document.onmouseup = c, document.onmousemove = m
  }

  function m(l) {
      (l = l || window.event).preventDefault(), n = o - l.clientX;
      t = u - l.clientY, o = l.clientX, u = l.clientY;
       e.style.top = e.offsetTop - t + "px";
       e.style.left = e.offsetLeft - n + "px"
  }

  function c() {
      document.onmouseup = null, document.onmousemove = null
  }

  if (r === false) {
    e.onmousedown = l;
  } else {
    document.getElementsByClassName("header")[headerNum].onmousedown = l;
  }
  console.log(headerNum)
}


/****************
 Minesweeper Game by OpenGenus IQ
*****************/

var components = {
  num_of_rows : 12,
  num_of_cols : 24,
  num_of_bombs : 55,
  bomb : '💣',
  alive : true,
  colors : {1: 'blue', 2: 'green', 3: 'red', 4: 'purple', 5: 'maroon', 6: 'turquoise', 7: 'black', 8: 'grey'}
}

function startGame() {
  components.bombs = placeBombs();
  document.getElementById('field').appendChild(createTable());
}

function placeBombs() {
  var i, rows = [];
  
  for (i=0; i<components.num_of_bombs; i++) {
      placeSingleBomb(rows);
  }
  return rows;
} 

function placeSingleBomb(bombs) {

  var nrow, ncol, row, col;
  nrow = Math.floor(Math.random() * components.num_of_rows);
  ncol = Math.floor(Math.random() * components.num_of_cols);
  row = bombs[nrow];
  
  if (!row) {
      row = [];
      bombs[nrow] = row;
  }
  
  col = row[ncol];
  
  if (!col) {
      row[ncol] = true;
      return
  } 
  else {
      placeSingleBomb(bombs);
  }
}

function cellID(i, j) {
  return 'cell-' + i + '-' + j;
}

function createTable() {
  var table, row, td, i, j;
  table = document.createElement('table');
  
  for (i=0; i<components.num_of_rows; i++) {
      row = document.createElement('tr');
      for (j=0; j<components.num_of_cols; j++) {
          td = document.createElement('td');
          td.id = cellID(i, j);
          row.appendChild(td);
          addCellListeners(td, i, j);
      }
      table.appendChild(row);
  }
  return table;
}

function addCellListeners(td, i, j) {
  td.addEventListener('mousedown', function(event) {
      if (!components.alive) {
          return;
      }
      components.mousewhiches += event.which;
      if (event.which === 3) {
          return;
      }
      if (this.flagged) {
          return;
      }
      this.style.backgroundColor = 'lightGrey';
  });

  td.addEventListener('mouseup', function(event) {
    
      if (!components.alive) {
          return;
      }

      if (this.clicked && components.mousewhiches == 4) {
          performMassClick(this, i, j);
      }

      components.mousewhiches = 0;
      
      if (event.which === 3) {
         
          if (this.clicked) {
              return;
          }
          if (this.flagged) {
              this.flagged = false;
              this.textContent = '';
          } else {
              this.flagged = true;
              this.textContent = components.flag;
          }

          event.preventDefault();
          event.stopPropagation();
        
          return false;
      } 
      else {
          handleCellClick(this, i, j);
      }
  });

  td.oncontextmenu = function() { 
      return false; 
  };
}

function handleCellClick(cell, i, j) {
  if (!components.alive) {
      return;
  }

  if (cell.flagged) {
      return;
  }

  cell.clicked = true;

  if (components.bombs[i][j]) {
      cell.style.color = 'red';
      cell.textContent = components.bomb;
      gameOver();
      
  }
  else {
      cell.style.backgroundColor = 'lightGrey';
      num_of_bombs = adjacentBombs(i, j);
      if (num_of_bombs) {
          cell.style.color = components.colors[num_of_bombs];
          cell.textContent = num_of_bombs;
      } 
      else {
          clickAdjacentBombs(i, j);
      }
  }
}

function adjacentBombs(row, col) {
  var i, j, num_of_bombs;
  num_of_bombs = 0;

  for (i=-1; i<2; i++) {
      for (j=-1; j<2; j++) {
          if (components.bombs[row + i] && components.bombs[row + i][col + j]) {
              num_of_bombs++;
          }
      }
  }
  return num_of_bombs;
}

function adjacentFlags(row, col) {
  var i, j, num_flags;
  num_flags = 0;

  for (i=-1; i<2; i++) {
      for (j=-1; j<2; j++) {
          cell = document.getElementById(cellID(row + i, col + j));
          if (!!cell && cell.flagged) {
              num_flags++;
          }
      }
  }
  return num_flags;
}

function clickAdjacentBombs(row, col) {
  var i, j, cell;
  
  for (i=-1; i<2; i++) {
      for (j=-1; j<2; j++) {
          if (i === 0 && j === 0) {
              continue;
          }
          cell = document.getElementById(cellID(row + i, col + j));
          if (!!cell && !cell.clicked && !cell.flagged) {
              handleCellClick(cell, row + i, col + j);
          }
      }
  }
}

function performMassClick(cell, row, col) {
  if (adjacentFlags(row, col) === adjacentBombs(row, col)) {
      clickAdjacentBombs(row, col);
  }
}

function gameOver() {
  components.alive = false;
  document.getElementById('lost').style.display="block";
}

function reload(){
  window.location.reload();
}