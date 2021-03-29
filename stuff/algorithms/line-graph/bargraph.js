let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    t = 0,
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    radius = parseInt(document.getElementById("radius").value),
    x = 1 + t,
    y = canvas.height + t,
    speed = parseInt(document.getElementById('speed').value),
    equationY = document.getElementById('equationY').value;

function draw(t, e) {
    setTimeout(function(){let a = new Path2D;
a.arc(t, e, parseInt(document.getElementById("radius").value), 0, 3 * Math.PI, !1), ctx.fillStyle = "white", ctx.fill(a), ctx.strokeStyle = "white", ctx.stroke(a);},0.1)
}

function restart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height), x = 0, y = 0, t = 0;
    for(i=0; i<10000; i++)
{
    window.clearInterval(i);
}
setTimeout(function(){
    setInterval(function(){increment()}, speed);
},100)
function increment() {
    y = canvas.height / 2 - 200 * eval(equationY);
    x = canvas.width / 2 - 300 * Math.sin(t);
     t += .01;
    draw(x, y)
}
function open(t) {
    t.style.opacity = 1, t.style.transform = "translatey(0px)"
}
function close(t) {
    t.style.opacity = 0, t.style.transform = "translatey(300px) scale(0.5,0.5)"
}
canvas.width = 1408, canvas.height = 739 * 1.1
setInterval(function(){increment()}, speed)

oninput = (() => {
    radius = parseInt(document.getElementById("radius").value);
    speed = parseInt(document.getElementById('speed').value);
    equationY = document.getElementById('equationY').value
     restart()
})

document.getElementById("open").onclick = (() => {
    open(document.querySelector(".controls"))
})

document.getElementById("close").onclick = (() => {
    close(document.querySelector(".controls"))
})