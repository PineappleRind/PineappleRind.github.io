function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}
function easeInOutCubic(x) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}
if (localStorage.getItem('bezierBannerState')) document.querySelector('.banner').remove()
var firstPoint = [150, 490];
var secondPoint = [325, 500];
var thirdPoint = [450, 60];
var fourthPoint = [50, 60];

let canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d"),
  canv2 = document.getElementById("canvas2"),
  ctx2 = canv2.getContext("2d"),
  background = "#000020",
  t = 0;

(canv.height = window.innerHeight), (canv.width = window.innerWidth);
(canv2.height = window.innerHeight), (canv2.width = window.innerWidth);
class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    point(x, y, radius);
  }
}

function point(x, y, rad, col) {
  if (col) ctx.fillStyle = col
  else ctx.fillStyle = "#ffffff";
  ctx.beginPath();

  ctx.arc(x, y, rad, 0, 2 * Math.PI, true);
  ctx.closePath();
  ctx.fill();
}
function line(startx, starty, finishx, finishy) {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(startx, starty, 0);
  ctx.lineTo(finishx, finishy);
  ctx.stroke(); // Bottom side line
}
function advance() {

  clearCanvas();
  if (t >= 1) clearInterval(inter);
  t = t + 0.0015;
  easedT = easeInOutCubic(t);

  new Point(firstPoint[0], firstPoint[1], 10, 'coral'); // Anchor dot
  new Point(secondPoint[0], secondPoint[1], 10, 'magenta'); // Right side anchor dot
  new Point(thirdPoint[0], thirdPoint[1], 10, 'dodgerblue'); // bottom side anchor dot
  new Point(fourthPoint[0], fourthPoint[1], 10, 'mint'); // bottom right side anchor dot

  line(thirdPoint[0], thirdPoint[1], fourthPoint[0], fourthPoint[1]);
  line(firstPoint[0], firstPoint[1], thirdPoint[0], thirdPoint[1]);
  line(secondPoint[0], secondPoint[1], fourthPoint[0], fourthPoint[1]);

  let topMiddlePointX = lerp(
    firstPoint[0], thirdPoint[0], easedT
  )
  let topMiddlePointY = lerp(
    firstPoint[1], thirdPoint[1], easedT
  )
  new Point(topMiddlePointX, topMiddlePointY, 5)

  let middleBottomPointX = lerp(
    thirdPoint[0], fourthPoint[0], easedT
  )
  let middleBottomPointY = lerp(
    thirdPoint[1], fourthPoint[1], easedT
  )
  new Point(middleBottomPointX, middleBottomPointY, 5)

  let bottomRightPointX = lerp(
    fourthPoint[0], secondPoint[0], easedT
  )
  let bottomRightPointY = lerp(
    fourthPoint[1], secondPoint[1], easedT
  )
  new Point(bottomRightPointX, bottomRightPointY, 5)

  line(
    topMiddlePointX, topMiddlePointY,
    middleBottomPointX, middleBottomPointY
  )
  line(
    middleBottomPointX, middleBottomPointY,
    bottomRightPointX, bottomRightPointY
  )

  let midpoint1X = lerp(
    topMiddlePointX, middleBottomPointX, easedT
  )
  let midpoint1Y = lerp(
    topMiddlePointY, middleBottomPointY, easedT
  )
  new Point(midpoint1X, midpoint1Y, 5)

  let midpoint2X = lerp(
    middleBottomPointX, bottomRightPointX, easedT
  )
  let midpoint2Y = lerp(
    middleBottomPointY, bottomRightPointY, easedT
  )
  new Point(midpoint2X, midpoint2Y, 5)
  line(
    midpoint1X, midpoint1Y,
    midpoint2X, midpoint2Y
  )
  let finalMidPointX = lerp(
    midpoint1X,
    midpoint2X,
    easedT
  )
  let finalMidPointY = lerp(
    midpoint1Y,
    midpoint2Y,
    easedT
  )
  new Point(finalMidPointX, finalMidPointY, 10)
  /*
  Trail
  */
  ctx2.beginPath();
  ctx2.fillStyle = "#ffffff";
  ctx2.arc(finalMidPointX, finalMidPointY, 10, 0, 2 * Math.PI, true);
  ctx2.closePath();
  ctx2.fill();
}

function clearCanvas() {
  ctx.fillStyle = "#000020";
  ctx.fillRect(0, 0, canv.width, canv.height);
}
let inter = setInterval(function () {
  advance();
}, 10);
