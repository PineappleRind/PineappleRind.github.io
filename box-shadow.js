function $(e) {
    return document.getElementById(e)
}

function a() {
    let e = $("yCoords"),
        o = $("xCoords"),
        l = $("blur"),
        t = $("color"),
        n = $("div"),
        c = "px ",
        i = e.value - 50 + c,
        u = o.value - 50 + c,
        a = l.value / 1.5 + c,
        d = t.value;
    n.style.boxShadow = u + i + a + d
}

function b() {
    let e = $("overlay");
    e.style.display = "flex", e.style.opacity = "1", e.style.width = "100%"
}

function c() {
    let e = $("overlay");
    e.style.opacity = "0", e.style.width = "0%"
}

function d() {
    let e = $("yCoords"),
        o = $("xCoords"),
        l = $("blur"),
        t = $("color"),
        n = $("ycode"),
        c = $("xcode"),
        i = $("blurcode"),
        u = $("colorcode"),
        a = "px ";
    n.innerHTML = Math.ceil(e.value - 50) + a, c.innerHTML = Math.ceil(o.value - 50) + a, i.innerHTML = Math.ceil(l.value / 1.5) + a, u.innerHTML = t.value
}

function e() {
    a(), d()
}
oninput = (o => {
    e()
});
let f = $("showCode");
f.addEventListener("click", function() {
    b()
}), e();
