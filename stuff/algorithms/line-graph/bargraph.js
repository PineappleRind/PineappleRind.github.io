let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    t = 0,
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    radius = parseInt(document.getElementById("radius").value),
    x = 1 + t,
    y = canvas.height + t;

function draw(t, e) {
    setTimeout(function(){let a = new Path2D;
a.arc(t, e, parseInt(document.getElementById("radius").value), 0, 3 * Math.PI, !1), ctx.fillStyle = "white", ctx.fill(a), ctx.strokeStyle = "white", ctx.stroke(a);},0.1)
}

function restart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height), x = 0, y = 0, t = 0
}

function open(t) {
    t.style.opacity = 1, t.style.transform = "translatey(0px)"
}
canvas.width = 1408, canvas.height = 739 * 1.1, setInterval(function() {
    y = canvas.height / 2 - 200 * Math.cos(Math.PI * t + 1);
    x = canvas.width / 2 - 200 * Math.cos(Math.PI + 1 * t + 2);
      t += .01;
       draw(x, y)
}, 1)

onkeypress = (() => {
    radius = parseInt(document.getElementById("radius").value), restart()
}), document.getElementById("open").onclick = (() => {
    open(document.querySelector(".controls"))
});